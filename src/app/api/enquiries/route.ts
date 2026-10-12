import { handleEnquiry } from "@/lib/enquiry-server";
import { site } from "@/lib/site";
export const runtime = "nodejs";
export async function POST(request: Request) {
  return handleEnquiry(request, { url: process.env.ENQUIRY_WEBHOOK_URL, token: process.env.ENQUIRY_WEBHOOK_TOKEN, publicOrigin: site.url });
}
