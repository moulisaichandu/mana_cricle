import { validateBrief } from "./enquiry.ts";

export type ReceiverConfig = { url?: string; token?: string; publicOrigin?: string };
export function validReceiver(config: ReceiverConfig) {
  if (!config.url) return false;
  try { const url = new URL(config.url); return url.protocol === "https:" && !url.username && !url.password && !url.hash; }
  catch { return false; }
}
const response = (status: number, message: string, extra = {}) => Response.json({ message, ...extra }, { status, headers: { "Cache-Control": "no-store" } });
const limit = 16_384;

// The receiver must persist before acknowledging, deduplicate request IDs and enforce rate limits.
export async function handleEnquiry(request: Request, config: ReceiverConfig, send: typeof fetch = fetch) {
  // NextRequest can normalize loopback hostnames and proxy requests can use an internal URL.
  // Check the configured public origin instead of trusting forwarded headers.
  let expectedOrigin: string;
  try { expectedOrigin = new URL(config.publicOrigin || request.url).origin; }
  catch { return response(503, "The enquiry service is not configured yet."); }
  if (request.headers.get("origin") !== expectedOrigin) return response(403, "Please send your enquiry from this website.");
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return response(415, "The enquiry must use JSON.");
  if (Number(request.headers.get("content-length") || 0) > limit) return response(413, "Your enquiry is too long.");
  let raw: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return response(400, "The enquiry is empty.");
    const chunks: Uint8Array[] = []; let length = 0;
    while (true) {
      const chunk = await reader.read(); if (chunk.done) break;
      length += chunk.value.byteLength;
      if (length > limit) { await reader.cancel(); return response(413, "Your enquiry is too long."); }
      chunks.push(chunk.value);
    }
    const bytes = new Uint8Array(length); let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    raw = JSON.parse(new TextDecoder().decode(bytes));
  } catch { return response(400, "We couldn’t read the enquiry. Please try again."); }
  const { data, errors } = validateBrief(raw, true);
  if (Object.keys(errors).length) return response(422, "Please check the highlighted fields.", { errors });
  if (!validReceiver(config)) return response(503, "Online enquiries are not connected yet. You can download your project brief instead.");
  const requestId = request.headers.get("idempotency-key") || "";
  if (!/^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/i.test(requestId)) return response(400, "Please refresh the page and try again.");
  const { honeypot: _honeypot, ...enquiry } = data;
  try {
    const result = await send(config.url!, {
      method: "POST", redirect: "error", signal: AbortSignal.timeout(8_000),
      headers: { "Content-Type": "application/json", "Idempotency-Key": requestId, ...(config.token ? { Authorization: `Bearer ${config.token}` } : {}) },
      body: JSON.stringify({ requestId, source: "manacircle-website", enquiry }),
    });
    const receipt: unknown = result.ok ? await result.json() : null;
    if (!result.ok || !receipt || typeof receipt !== "object" || !("accepted" in receipt) || receipt.accepted !== true || !("id" in receipt) || typeof receipt.id !== "string" || !/^[\w-]{1,100}$/.test(receipt.id)) return response(502, "We couldn’t confirm receipt. Your details are still here; please retry or download your brief.");
    return response(201, "Your enquiry was received. We’ll use your preferred contact to discuss the scope.", { id: receipt.id });
  } catch {
    return response(502, "We couldn’t confirm receipt. Your details are still here; please retry or download your brief.");
  }
}
