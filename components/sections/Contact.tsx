"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setTimeout(() => {
      const mailto = `mailto:somyakothari454@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailto;
      setStatus("success");
      setTimeout(() => {
        setForm({ name: "", email: "", subject: "", message: "" });
        setStatus("idle");
      }, 3000);
    }, 600);
  };

  const inputClass = (field: keyof FormErrors) =>
    cn(
      "w-full bg-slate-800/60 border rounded-xl px-4 py-3 text-slate-100 text-sm",
      "placeholder:text-slate-600 transition-all duration-200",
      "focus:outline-none focus:ring-1 focus:ring-blue-500/40 focus:border-blue-500/60",
      errors[field] ? "border-red-500/60" : "border-slate-700/40"
    );

  return (
    <SectionWrapper
      id="contact"
      label="08 — CONTACT"
      headline="Get In Touch"
      gradientWord="Touch"
      className="bg-slate-900/30"
    >
      <p className="text-slate-500 text-base -mt-8 mb-12">
        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form — 60% */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="text-sm text-slate-400 mb-2 block">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={inputClass("name")}
                autoComplete="name"
              />
              {errors.name && (
                <p role="alert" aria-live="assertive" className="text-xs text-red-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="text-sm text-slate-400 mb-2 block">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className={inputClass("email")}
                autoComplete="email"
              />
              {errors.email && (
                <p role="alert" aria-live="assertive" className="text-xs text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="text-sm text-slate-400 mb-2 block">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className={inputClass("subject")}
              />
              {errors.subject && (
                <p role="alert" aria-live="assertive" className="text-xs text-red-400 mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="text-sm text-slate-400 mb-2 block">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or idea..."
                className={cn(inputClass("message"), "resize-none")}
              />
              {errors.message && (
                <p role="alert" aria-live="assertive" className="text-xs text-red-400 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status !== "idle"}
              className={cn(
                "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 active:scale-[0.98]",
                status === "success"
                  ? "bg-green-600/80 text-white cursor-default"
                  : status === "loading"
                  ? "opacity-70 cursor-not-allowed text-white"
                  : "text-white hover:shadow-lg hover:shadow-blue-500/25"
              )}
              style={
                status !== "success"
                  ? { background: "linear-gradient(135deg, #2563eb, #7c3aed)" }
                  : undefined
              }
            >
              {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === "success" && <CheckCircle2 className="w-4 h-4" />}
              {status === "idle" && <Send className="w-4 h-4" />}
              {status === "idle" && "Send Message"}
              {status === "loading" && "Sending..."}
              {status === "success" && "Message Ready to Send!"}
            </button>
          </form>
        </motion.div>

        {/* Contact info — 40% */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <div className="bg-slate-800/40 border border-slate-700/30 rounded-2xl p-8 h-full">
            <h3 className="text-base font-semibold text-slate-100 mb-6 font-space-grotesk">
              Contact Info
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:somyakothari454@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                somyakothari454@gmail.com
              </a>
              <a
                href="tel:9294543968"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                9294543968
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                Indore, Madhya Pradesh
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/40">
              <p className="text-xs text-slate-500 mb-4">Find me on</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/SomyaKothari9906"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in new tab)"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/somya-kothari-aiml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in new tab)"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
