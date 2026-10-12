"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { emptyBrief, formatBrief, serviceOptions, validateBrief, type Brief, type Errors } from "@/lib/enquiry";
import { Icon } from "./icon";

export function ContactForm({ initialService, canSend }: { initialService: string; canSend: boolean }) {
  const [form, setForm] = useState<Brief>({ ...emptyBrief, service: initialService });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "pending" | "sent" | "downloaded" | "error">("idle");
  const [message, setMessage] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);
  const optionalRef = useRef<HTMLDetailsElement>(null);
  const requestId = useRef<string | null>(null);
  const update = <K extends keyof Brief>(key: K, value: Brief[K]) => {
    setForm(current => ({ ...current, [key]: value, ...(key === "contactMethod" ? { contact: "" } : {}) }));
    setErrors(current => ({ ...current, [key]: undefined, ...(key === "contactMethod" ? { contact: undefined } : {}) }));
    requestId.current = null; setStatus("idle"); setMessage("");
  };
  const showErrors = (next: Errors, text = "Please check the highlighted fields.") => {
    setErrors(next); setMessage(text); setStatus("error");
    if ((next.website || next.timing || next.budget) && optionalRef.current) optionalRef.current.open = true;
    requestAnimationFrame(() => summaryRef.current?.focus());
  };
  const download = (data: Brief) => {
    const blob = new Blob([formatBrief(data)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob); const anchor = document.createElement("a");
    anchor.href = url; anchor.download = "ManaCircle-project-brief.txt"; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    setStatus("downloaded"); setMessage("Your brief is ready in your downloads. Nothing has been sent to ManaCircle.");
  };
  const submit = async (send: boolean) => {
    const checked = validateBrief(form, send);
    if (Object.keys(checked.errors).length) return showErrors(checked.errors);
    setErrors({});
    if (!send) return download(checked.data);
    setStatus("pending"); setMessage(""); requestId.current ??= crypto.randomUUID();
    try {
      const result = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": requestId.current }, body: JSON.stringify(checked.data), signal: AbortSignal.timeout(15_000) });
      const receipt = await result.json();
      if (!result.ok || !receipt.id) return showErrors(receipt.errors || {}, receipt.message || "We couldn’t confirm receipt. Please retry or download your brief.");
      setStatus("sent"); setMessage("Your enquiry was received. We’ll use your preferred contact to discuss your project and a custom quotation.");
    } catch { showErrors({}, "We couldn’t confirm receipt. Your details are still here; please retry or download your brief."); }
  };
  const fieldProps = (key: keyof Brief) => ({ id: key, name: key, "aria-invalid": Boolean(errors[key]), "aria-describedby": errors[key] ? `${key}-error` : undefined });
  const error = (key: keyof Brief) => errors[key] ? <p className="field-error" id={`${key}-error`}>{errors[key]}</p> : null;
  return <form className="contact-form" noValidate onSubmit={event => { event.preventDefault(); void submit(canSend); }}>
    <h2>A little about your project.</h2><p className="form-footer-copy">Fields marked * are required.</p>
    {!canSend && <div className="form-notice"><strong>We’re setting up our contact channels.</strong><p>You can prepare and download your project brief now. It stays on your device and won’t be sent to us.</p></div>}
    {status === "error" && <div className="form-error-summary" ref={summaryRef} tabIndex={-1} role="alert"><strong>{message}</strong>{Object.entries(errors).filter(([, value]) => value).map(([key, value]) => <a href={`#${key}`} key={key}>{value}</a>)}</div>}
    <fieldset disabled={status === "pending" || status === "sent"}>
      <div className="form-row"><div className="form-field"><label htmlFor="name">Your name *</label><input {...fieldProps("name")} value={form.name} onChange={e => update("name", e.target.value)} autoComplete="name" maxLength={100} required />{error("name")}</div><div className="form-field"><label htmlFor="business">Business name <span>(optional)</span></label><input {...fieldProps("business")} value={form.business} onChange={e => update("business", e.target.value)} autoComplete="organization" maxLength={160} />{error("business")}</div></div>
      <div className="form-field"><label htmlFor="service">What can we help with? *</label><select {...fieldProps("service")} value={form.service} onChange={e => update("service", e.target.value)} required>{serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>{error("service")}</div>
      <div className="form-row"><div className="form-field"><label htmlFor="contactMethod">Preferred contact *</label><select {...fieldProps("contactMethod")} value={form.contactMethod} onChange={e => update("contactMethod", e.target.value as Brief["contactMethod"])}><option value="email">Email</option><option value="whatsapp">WhatsApp</option></select>{error("contactMethod")}</div><div className="form-field"><label htmlFor="contact">{form.contactMethod === "email" ? "Email address" : "WhatsApp number"} *</label><input {...fieldProps("contact")} value={form.contact} onChange={e => update("contact", e.target.value)} type={form.contactMethod === "email" ? "email" : "tel"} autoComplete={form.contactMethod === "email" ? "email" : "tel"} placeholder={form.contactMethod === "whatsapp" ? "+91 …" : "you@yourbusiness.com"} maxLength={254} required />{error("contact")}</div></div>
      <div className="form-field"><label htmlFor="description">Tell us what you have in mind *</label><textarea {...fieldProps("description")} value={form.description} onChange={e => update("description", e.target.value)} placeholder="A little about your business, what you need and what you’d like to achieve…" rows={5} minLength={20} maxLength={2000} required /><p className="field-help">20–2,000 characters. Please leave out passwords or sensitive information.</p>{error("description")}</div>
      <details className="form-optional" ref={optionalRef}><summary>Add a little more detail <span>(optional)</span><Icon name="plus" size={17} /></summary>
      <div className="form-field"><label htmlFor="website">Existing website <span>(optional)</span></label><input {...fieldProps("website")} value={form.website} onChange={e => update("website", e.target.value)} type="url" placeholder="https://" maxLength={500} />{error("website")}</div>
      <div className="form-row"><div className="form-field"><label htmlFor="timing">Ideal timing <span>(optional)</span></label><input {...fieldProps("timing")} value={form.timing} onChange={e => update("timing", e.target.value)} placeholder="A date, or still exploring" maxLength={150} />{error("timing")}</div><div className="form-field"><label htmlFor="budget">Budget range <span>(optional)</span></label><input {...fieldProps("budget")} value={form.budget} onChange={e => update("budget", e.target.value)} placeholder="A range, or let’s discuss" maxLength={150} />{error("budget")}</div></div>
      </details>
      <div className="honeypot" aria-hidden="true"><label htmlFor="honeypot">Leave this empty</label><input {...fieldProps("honeypot")} value={form.honeypot} onChange={e => update("honeypot", e.target.value)} tabIndex={-1} autoComplete="off" /></div>
      {canSend && <div className="form-field"><label className="checkbox-label" htmlFor="consent"><input {...fieldProps("consent")} checked={form.consent} onChange={e => update("consent", e.target.checked)} type="checkbox" required /><span>I agree to ManaCircle using these details to contact me about this project. *</span></label>{error("consent")}</div>}
      <div className="form-action-row"><button className="button" type="submit">{status === "pending" ? "Sending…" : canSend ? "Send project enquiry" : "Download project brief"}<Icon name={canSend ? "diagonal" : "download"} size={18} /></button>{canSend && <button className="text-link" type="button" onClick={() => void submit(false)}>Download instead</button>}</div>
    </fieldset>
    {(status === "sent" || status === "downloaded") && <div className="form-success" role="status"><Icon name="check" size={20} /><p>{message}</p></div>}
    {status === "sent" && <button className="text-link" type="button" onClick={() => { setForm({ ...emptyBrief, service: initialService }); setStatus("idle"); requestId.current = null; }}>Prepare another enquiry</button>}
    <p className="form-footer-copy">{canSend ? "We use your details to respond to your enquiry." : "Your brief contains the details you enter. Keep the downloaded file somewhere safe."} <Link href="/privacy">Privacy policy</Link>.</p>
  </form>;
}
