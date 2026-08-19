import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { submitContact } from "../api";
import { profile } from "../data/portfolioData";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get("service");
  const serviceTitle = service ? service.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ") : "";
  const [form, setForm] = useState({ name: "", email: "", subject: serviceTitle ? `Project inquiry — ${serviceTitle}` : "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (serviceTitle) setForm((current) => ({ ...current, subject: `Project inquiry — ${serviceTitle}` }));
  }, [serviceTitle]);

  const handleChange = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });
    try {
      await submitContact(form);
      setStatus({ state: "success", message: "Message received. I will get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again or email me directly." });
    }
  };

  return (
    <div>
      <section className="min-h-[40vh] flex flex-col justify-end px-6 pt-32 pb-16"><span className="font-mono-label text-xs uppercase mb-6">Get In Touch</span><h1 className="font-display text-ink text-[13vw] md:text-[10vw] leading-[0.85]">Contact</h1></section>
      <section className="bg-ink px-6 md:px-10 py-16 md:py-24"><div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"><div className="border-t-2 border-white/20 pt-8"><h2 className="font-display text-paper text-3xl md:text-4xl mb-6">Let's Talk</h2><p className="font-body text-paper/70 mb-10 max-w-sm">Have an AI, web development, or digital product idea? Send the details and I will get back to you.</p><dl className="space-y-6"><div><dt className="font-mono-label text-cyan text-xs uppercase mb-1">Email</dt><dd><a className="font-body text-paper hover:text-cyan" href={`mailto:${profile.email}`}>{profile.email}</a></dd></div><div><dt className="font-mono-label text-cyan text-xs uppercase mb-1">Phone</dt><dd className="font-body text-paper">{profile.phone}</dd></div><div><dt className="font-mono-label text-cyan text-xs uppercase mb-1">Location</dt><dd className="font-body text-paper">{profile.location}</dd></div></dl></div>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>{["name", "email", "subject"].map((field) => <div key={field}><label htmlFor={field} className="font-mono-label text-paper text-xs uppercase block mb-2">{field}</label><input id={field} name={field} type={field === "email" ? "email" : "text"} required={field !== "subject"} value={form[field]} onChange={handleChange} className="w-full bg-transparent border-2 border-white/30 focus:border-cyan text-paper font-body px-4 py-3 outline-none transition-colors" placeholder={field === "email" ? "you@example.com" : `Your ${field}`} /></div>)}<div><label htmlFor="message" className="font-mono-label text-paper text-xs uppercase block mb-2">Message</label><textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} className="w-full bg-transparent border-2 border-white/30 focus:border-cyan text-paper font-body px-4 py-3 outline-none transition-colors resize-none" placeholder="Tell me about your project..." /></div><button type="submit" disabled={status.state === "loading"} className="group inline-flex items-center gap-2 bg-cyan text-ink font-mono-label uppercase text-sm rounded-full px-8 py-4 transition-transform duration-300 hover:scale-110 disabled:opacity-60">{status.state === "loading" ? "Sending..." : "Send Message"}<ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" /></button>{status.message && <p className={`font-mono-label text-sm ${status.state === "error" ? "text-red-300" : "text-cyan"}`} role={status.state === "error" ? "alert" : "status"}>{status.message}</p>}</form>
      </div></section>
    </div>
  );
};

export default Contact;