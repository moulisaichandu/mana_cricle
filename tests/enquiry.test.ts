import test from "node:test";
import assert from "node:assert/strict";
import { emptyBrief, emptyQuickEnquiry, formatBrief, formatQuickEnquiry, isQuickEnquiryPayload, validateBrief, validateQuickEnquiry } from "../src/lib/enquiry.ts";
import { handleEnquiry, validReceiver } from "../src/lib/enquiry-server.ts";

const sample = { ...emptyBrief, name: "Test Person", service: "website-design", contact: "test@example.com", description: "A responsive website for a sample local business.", consent: true };
const key = "7d75b1cc-8216-4b53-99a2-6096b94219ac";
const request = (body: unknown = sample, headers: Record<string, string> = {}) => new Request("http://localhost:3000/api/enquiries", { method: "POST", headers: { Origin: "http://localhost:3000", "Content-Type": "application/json", "Idempotency-Key": key, ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) });
const config = { url: "https://receiver.example.com/enquiries", token: "test-only-token" };
const noSend: typeof fetch = async () => { assert.fail("A rejected request must never reach the receiver"); };

test("valid enquiry is normalized and unknown fields are excluded", () => {
  const result = validateBrief({ ...sample, name: "  Test Person  ", admin: true }, true);
  assert.deepEqual(result.errors, {}); assert.equal(result.data.name, "Test Person"); assert.equal("admin" in result.data, false);
});
test("required fields and invalid choices are rejected", () => {
  const result = validateBrief({ ...emptyBrief, service: "unknown", contactMethod: "sms" }, true);
  for (const key of ["name", "service", "contactMethod", "description", "consent"]) assert.ok(result.errors[key as keyof typeof result.errors]);
});
test("email, phone length, script URLs and oversize values are rejected", () => {
  assert.ok(validateBrief({ ...sample, contact: "not-an-email" }).errors.contact);
  assert.ok(validateBrief({ ...sample, contactMethod: "whatsapp", contact: "+91 123" }).errors.contact);
  assert.ok(validateBrief({ ...sample, website: "javascript:alert(1)" }).errors.website);
  assert.ok(validateBrief({ ...sample, description: "x".repeat(2001) }).errors.description);
  assert.deepEqual(validateBrief({ ...sample, contactMethod: "whatsapp", contact: "+91 98765 43210" }).errors, {});
});
test("download does not require contact consent and clearly says it was not sent", () => {
  assert.deepEqual(validateBrief({ ...sample, consent: false }).errors, {});
  assert.match(formatBrief(sample), /has not been sent to ManaCircle/);
  assert.match(formatBrief(sample), /Website design & development/);
});
test("receiver accepts only credential-free HTTPS URLs", () => {
  for (const url of ["", "bad-url", "http://receiver.example.com", "https://user:pass@receiver.example.com", "https://receiver.example.com/#fragment"]) assert.equal(validReceiver({ url }), false);
  assert.equal(validReceiver(config), true);
});
test("missing receiver cannot report success", async () => {
  assert.equal((await handleEnquiry(request(), {}, noSend)).status, 503);
});
test("cross-origin and missing-origin requests cannot reach receiver", async () => {
  assert.equal((await handleEnquiry(request(sample, { Origin: "https://unrelated.example.com" }), config, noSend)).status, 403);
  const req = request(); req.headers.delete("Origin"); assert.equal((await handleEnquiry(req, config, noSend)).status, 403);
});
test("malformed JSON and wrong content type fail before delivery", async () => {
  assert.equal((await handleEnquiry(request("{"), config, noSend)).status, 400);
  assert.equal((await handleEnquiry(request(sample, { "Content-Type": "text/plain" }), config, noSend)).status, 415);
});
test("configured public origin handles normalized internal URLs without trusting forwarded headers", async () => {
  const internalRequest = request(sample, { Origin: "http://127.0.0.1:3000" });
  assert.equal((await handleEnquiry(internalRequest, { publicOrigin: "http://127.0.0.1:3000" }, noSend)).status, 503);
  const forged = request(sample, { Origin: "https://unrelated.example.com", "X-Forwarded-Host": "unrelated.example.com" });
  assert.equal((await handleEnquiry(forged, { ...config, publicOrigin: "https://manacircle.example.com" }, noSend)).status, 403);
});
test("oversize body is limited even without content-length", async () => {
  assert.equal((await handleEnquiry(request("x".repeat(17000)), config, noSend)).status, 413);
  assert.equal((await handleEnquiry(request(sample, { "Content-Length": "18000" }), config, noSend)).status, 413);
});
test("invalid input, missing consent and honeypot cannot reach receiver", async () => {
  for (const data of [{ ...sample, consent: false }, { ...sample, honeypot: "spam" }, { ...sample, contact: "invalid" }]) assert.equal((await handleEnquiry(request(data), config, noSend)).status, 422);
});
test("missing request ID fails before receiver call", async () => {
  assert.equal((await handleEnquiry(request(sample, { "Idempotency-Key": "" }), config, noSend)).status, 400);
});
test("2xx without an explicit durable receipt is not success", async () => {
  for (const receipt of [{}, { accepted: true }, { accepted: false, id: "lead-123" }, { accepted: true, id: "<script>" }]) {
    assert.equal((await handleEnquiry(request(), config, async () => Response.json(receipt))).status, 502);
  }
});
test("receiver failure, bad JSON and timeout preserve uncertainty", async () => {
  const failures: typeof fetch[] = [async () => new Response("failed", { status: 500 }), async () => new Response("not json"), async () => { throw new DOMException("Timed out", "TimeoutError"); }];
  for (const send of failures) { const result = await handleEnquiry(request(), config, send); assert.equal(result.status, 502); assert.match((await result.json()).message, /couldn’t confirm receipt/); }
});
test("explicit receipt forwards only allowed data and a stable idempotency key", async () => {
  let calls = 0;
  const send: typeof fetch = async (url, init) => {
    calls++; assert.equal(url, config.url); assert.equal(init?.redirect, "error");
    const headers = new Headers(init?.headers); assert.equal(headers.get("Authorization"), "Bearer test-only-token"); assert.equal(headers.get("Idempotency-Key"), key);
    const payload = JSON.parse(init?.body as string); assert.equal(payload.requestId, key); assert.equal("honeypot" in payload.enquiry, false); assert.equal("admin" in payload.enquiry, false);
    return Response.json({ accepted: true, id: "lead-123" });
  };
  for (let i = 0; i < 2; i++) { const result = await handleEnquiry(request({ ...sample, admin: true }), config, send); assert.equal(result.status, 201); assert.equal((await result.json()).id, "lead-123"); }
  assert.equal(calls, 2); // Deduplication is the durable receiver's responsibility.
});

const quick = { ...emptyQuickEnquiry, name: "Test Person", phone: "+91 98765 43210", email: "test@example.com", service: "qr-digital-menus", consent: true };

test("quick enquiry is normalized, forces its kind and accepts formatted phone numbers", () => {
  const result = validateQuickEnquiry({ ...quick, kind: "brief", name: "  Test Person  ", admin: true }, true);
  assert.deepEqual(result.errors, {}); assert.equal(result.data.kind, "quick"); assert.equal(result.data.name, "Test Person"); assert.equal("admin" in result.data, false);
  for (const phone of ["+1 (415) 555-0123", "919876543210", "+44 20-7946-0958"]) assert.deepEqual(validateQuickEnquiry({ ...quick, phone }).errors, {});
  assert.deepEqual(validateQuickEnquiry({ ...quick, consent: false }).errors, {}); // Download does not require contact consent.
});
test("quick enquiry rejects bad phone, email, service, missing consent and honeypot before the receiver", async () => {
  const cases: [string, Record<string, unknown>][] = [["phone", { ...quick, phone: "" }], ["phone", { ...quick, phone: "+91 123" }], ["phone", { ...quick, phone: "call me 98765 43210" }], ["phone", { ...quick, phone: "1".repeat(16) }], ["email", { ...quick, email: "not-an-email" }], ["service", { ...quick, service: "unknown" }], ["consent", { ...quick, consent: false }], ["honeypot", { ...quick, honeypot: "spam" }]];
  for (const [field, data] of cases) {
    const result = await handleEnquiry(request(data), config, noSend); assert.equal(result.status, 422);
    const { errors } = await result.json(); assert.ok(errors[field], `${field} should be flagged`); assert.deepEqual(Object.keys(errors), [field]);
  }
});
test("missing receiver, missing request ID and unconfirmed receipt cannot report success for quick enquiries", async () => {
  assert.equal((await handleEnquiry(request(quick), {}, noSend)).status, 503);
  assert.equal((await handleEnquiry(request(quick, { "Idempotency-Key": "" }), config, noSend)).status, 400);
  assert.equal((await handleEnquiry(request(quick), config, async () => Response.json({}))).status, 502);
});
test("quick enquiry forwards only its own fields with the request ID and gets the call-back message", async () => {
  const send: typeof fetch = async (url, init) => {
    assert.equal(url, config.url); const headers = new Headers(init?.headers); assert.equal(headers.get("Idempotency-Key"), key); assert.equal(headers.get("Authorization"), "Bearer test-only-token");
    assert.deepEqual(JSON.parse(init?.body as string), { requestId: key, source: "manacircle-website", enquiry: { kind: "quick", name: "Test Person", phone: "+91 98765 43210", email: "test@example.com", service: "qr-digital-menus", consent: true } });
    return Response.json({ accepted: true, id: "lead-123" });
  };
  const result = await handleEnquiry(request({ ...quick, name: "  Test Person  ", admin: true }), config, send);
  assert.equal(result.status, 201); const body = await result.json(); assert.equal(body.id, "lead-123"); assert.match(body.message, /call or email you/);
});
test("quick enquiry download names the service and says it was not sent", () => {
  const text = formatQuickEnquiry(quick);
  assert.match(text, /CALL-BACK REQUEST/); assert.match(text, /QR menus for restaurants & cafés/); assert.match(text, /\+91 98765 43210/); assert.match(text, /has not been sent to ManaCircle/);
});
test("payload kind selects the validator and briefs without kind keep the existing path", async () => {
  assert.equal(isQuickEnquiryPayload(quick), true);
  for (const raw of [sample, null, "quick", { kind: "brief" }]) assert.equal(isQuickEnquiryPayload(raw), false);
  const quickErrors = (await (await handleEnquiry(request({ ...sample, kind: "quick" }), config, noSend)).json()).errors;
  assert.ok(quickErrors.phone && quickErrors.email); assert.equal("description" in quickErrors, false);
  const brief = await handleEnquiry(request(sample), config, async (_url, init) => { const payload = JSON.parse(init?.body as string); assert.equal("kind" in payload.enquiry, false); assert.equal(payload.enquiry.description, sample.description); return Response.json({ accepted: true, id: "lead-123" }); });
  assert.equal(brief.status, 201); assert.match((await brief.json()).message, /preferred contact/);
});
