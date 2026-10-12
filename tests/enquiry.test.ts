import test from "node:test";
import assert from "node:assert/strict";
import { emptyBrief, formatBrief, validateBrief } from "../src/lib/enquiry.ts";
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
