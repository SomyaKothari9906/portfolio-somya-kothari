"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const typingStrings = [
  "AI & ML Engineering Student",
  "Software Developer",
  "Building Intelligent Solutions",
  "Open Source Contributor",
];

interface HeroProps {
  resumeAvailable: boolean;
}

export default function Hero({ resumeAvailable }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const { displayText, cursorVisible } = useTypingEffect({ strings: typingStrings });

  const dur = (d: number) => (shouldReduceMotion ? 0 : d);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-slate-950" />
      <div
        className="absolute inset-0 dot-pattern"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Floating blobs — desktop only */}
      <div
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full hidden lg:block pointer-events-none"
        style={{
          background: "rgba(37,99,235,0.06)",
          filter: "blur(80px)",
          animation: shouldReduceMotion ? "none" : "float 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[320px] h-[320px] rounded-full hidden lg:block pointer-events-none"
        style={{
          background: "rgba(124,58,237,0.06)",
          filter: "blur(80px)",
          animation: shouldReduceMotion ? "none" : "float 8s ease-in-out 3s infinite reverse",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: dur(0.5), ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8"
        >
          <span>✨</span>
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.5), ease: "easeOut", delay: dur(0.2) }}
          className="text-[2.625rem] md:text-[4.5rem] font-bold leading-[1.1] font-space-grotesk mb-4"
        >
          Somya{" "}
          <span className="gradient-text">Kothari</span>
        </motion.h1>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur(0.5), delay: dur(0.5) }}
          className="text-xl md:text-3xl text-slate-400 font-medium min-h-[2.5rem] mb-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {displayText}
          <span
            className="text-blue-400 ml-0.5"
            style={{ opacity: cursorVisible ? 1 : 0 }}
            aria-hidden="true"
          >
            |
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur(0.5), delay: dur(0.7) }}
          className="text-base md:text-lg text-slate-500 max-w-xl text-center leading-relaxed mt-2"
        >
          2nd year B.Tech (AI &amp; ML) student at Acropolis Institute of Technology and Research,
          Indore. Passionate about building systems that learn from data and solve real-world
          problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.5), delay: dur(0.9) }}
          className="flex flex-col sm:flex-row gap-3 mt-8 justify-center"
        >
          {/* View Projects */}
          <button
            onClick={() => handleScrollTo("projects")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Download Resume */}
          {resumeAvailable ? (
            <a
              href="/resume/resume.pdf"
              download="Somya_Kothari_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-blue-500/50 text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 font-medium text-sm transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          ) : (
            <button
              disabled
              title="Resume coming soon"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-700/50 text-slate-600 cursor-not-allowed font-medium text-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          )}

          {/* Contact */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="text-slate-400 hover:text-blue-400 underline underline-offset-4 text-sm transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: dur(1.4), duration: dur(0.5) }}
        className="absolute bottom-8 hidden md:block"
        aria-hidden="true"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
