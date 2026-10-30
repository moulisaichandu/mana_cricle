export const serviceOptions = [
  ["logo-branding", "Logo & brand identity"],
  ["qr-digital-menus", "QR menus for restaurants & cafés"],
  ["telugu-content-voiceovers", "Telugu content & voiceovers"],
  ["website-design", "Website design & development"],
  ["website-improvement", "Website improvement"],
  ["android-app-development", "Android app development"],
  ["digital-marketing", "Digital marketing"],
  ["meta-ads", "Meta Ads"],
  ["instagram-content", "Instagram posts & reels"],
  ["content-writing", "Video scripts & content"],
  ["not-sure", "Help me decide"],
] as const;

export type Brief = {
  name: string; business: string; service: string; contactMethod: "email" | "whatsapp";
  contact: string; website: string; description: string; timing: string; budget: string;
  consent: boolean; honeypot: string;
};
export type Errors = Partial<Record<keyof Brief, string>>;
export const emptyBrief: Brief = { name: "", business: "", service: "not-sure", contactMethod: "email", contact: "", website: "", description: "", timing: "", budget: "", consent: false, honeypot: "" };
export function validateBrief(input: unknown, requireConsent = false): { data: Brief; errors: Errors } {
  const raw = input && typeof input === "object" ? input as Record<string, unknown> : {};
  const str = (key: string) => typeof raw[key] === "string" ? raw[key].trim() : "";
  const data: Brief = { name: str("name"), business: str("business"), service: str("service"), contactMethod: raw.contactMethod as Brief["contactMethod"], contact: str("contact"), website: str("website"), description: str("description"), timing: str("timing"), budget: str("budget"), consent: raw.consent === true, honeypot: str("honeypot") };
  const errors: Errors = {};
  if (data.name.length < 2 || data.name.length > 100) errors.name = "Enter your name (2–100 characters).";
  if (data.business.length > 160) errors.business = "Keep the business name under 160 characters.";
  if (!serviceOptions.some(([value]) => value === data.service)) errors.service = "Choose a service or Help me decide.";
  if (!["email", "whatsapp"].includes(data.contactMethod)) errors.contactMethod = "Choose email or WhatsApp.";
  if (data.contactMethod === "email" && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact) || data.contact.length > 254)) errors.contact = "Enter a valid email address.";
  if (data.contactMethod === "whatsapp" && !/^\+?[1-9][\d\s()-]{6,24}$/.test(data.contact)) errors.contact = "Enter a WhatsApp number including the country code.";
  if (data.contactMethod === "whatsapp" && (data.contact.replace(/\D/g, "").length < 8 || data.contact.replace(/\D/g, "").length > 15)) errors.contact = "Enter a WhatsApp number with 8–15 digits including the country code.";
  if (data.website) {
    try { const u = new URL(data.website); if (!["http:", "https:"].includes(u.protocol) || u.username || u.password || data.website.length > 500) errors.website = "Use a complete http:// or https:// website address."; }
    catch { errors.website = "Use a complete website address, such as https://example.com."; }
  }
  if (data.description.length < 20 || data.description.length > 2000) errors.description = "Tell us a little more (20–2,000 characters).";
  if (data.timing.length > 150) errors.timing = "Keep the timing under 150 characters.";
  if (data.budget.length > 150) errors.budget = "Keep the budget under 150 characters.";
  if (requireConsent && !data.consent) errors.consent = "Please agree to being contacted about this enquiry.";
  if (data.honeypot) errors.honeypot = "We couldn’t process this form. Please try again.";
  return { data, errors };
}

export function formatBrief(data: Brief) {
  const service = serviceOptions.find(([id]) => id === data.service)?.[1] || data.service;
  return `MANACIRCLE — PROJECT BRIEF\n\nName: ${data.name}\nBusiness: ${data.business || "To discuss"}\nService: ${service}\nPreferred contact: ${data.contactMethod}\nContact: ${data.contact}\nWebsite: ${data.website || "Not provided"}\nTiming: ${data.timing || "To discuss"}\nBudget: ${data.budget || "To discuss"}\n\nABOUT THE PROJECT\n${data.description}\n\nPrepared locally. This file has not been sent to ManaCircle.\n`;
}

export type QuickEnquiry = { kind: "quick"; name: string; phone: string; email: string; service: string; consent: boolean; honeypot: string };
export type QuickErrors = Partial<Record<keyof QuickEnquiry, string>>;
export const emptyQuickEnquiry: QuickEnquiry = { kind: "quick", name: "", phone: "", email: "", service: "not-sure", consent: false, honeypot: "" };
// The site-wide contact modal sends this lighter shape; `kind` tells the server which validator applies. Briefs carry no `kind`.
export function isQuickEnquiryPayload(raw: unknown): raw is Record<string, unknown> & { kind: "quick" } {
  return !!raw && typeof raw === "object" && (raw as Record<string, unknown>).kind === "quick";
}
export function validateQuickEnquiry(input: unknown, requireConsent = false): { data: QuickEnquiry; errors: QuickErrors } {
  const raw = input && typeof input === "object" ? input as Record<string, unknown> : {};
  const str = (key: string) => typeof raw[key] === "string" ? raw[key].trim() : "";
  const data: QuickEnquiry = { kind: "quick", name: str("name"), phone: str("phone"), email: str("email"), service: str("service"), consent: raw.consent === true, honeypot: str("honeypot") };
  const errors: QuickErrors = {};
  const digits = data.phone.replace(/\D/g, "");
  if (data.name.length < 2 || data.name.length > 100) errors.name = "Enter your full name (2–100 characters).";
  if (!/^\+?[\d\s()-]+$/.test(data.phone) || digits.length < 8 || digits.length > 15) errors.phone = "Enter a phone number with country code, 8–15 digits.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) errors.email = "Enter a valid email address.";
  if (!serviceOptions.some(([value]) => value === data.service)) errors.service = "Choose a service or Help me decide.";
  if (requireConsent && !data.consent) errors.consent = "Please agree to being contacted about this enquiry.";
  if (data.honeypot) errors.honeypot = "We couldn’t process this form. Please try again.";
  return { data, errors };
}

export function formatQuickEnquiry(data: QuickEnquiry): string {
  const service = serviceOptions.find(([id]) => id === data.service)?.[1] || data.service;
  return `MANACIRCLE — CALL-BACK REQUEST\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${service}\n\nPrepared locally. This file has not been sent to ManaCircle.\n`;
}
