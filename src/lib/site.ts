export const site = {
  name: "ManaCircle",
  description: "ManaCircle creates brand identities, websites, Android apps and content for businesses worldwide, with Telugu-first digital marketing and an eight-person team.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:3000").replace(/\/+$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, ""),
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
};

export function whatsappLink(service = "a project") {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ManaCircle, I'd like to discuss ${service} for my business.`)}` : null;
}

export const indexable = process.env.SITE_INDEXABLE === "true" && site.url.startsWith("https://");
