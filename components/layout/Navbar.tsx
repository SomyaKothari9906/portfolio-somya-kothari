"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Profiles", href: "#coding-profiles" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

interface NavbarProps {
  resumeAvailable: boolean;
}

export default function Navbar({ resumeAvailable }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16",
        "transition-shadow duration-300",
        scrolled ? "shadow-[0_1px_20px_rgba(0,0,0,0.4)]" : ""
      )}
      style={{
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
      }}
    >
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl h-full flex items-center justify-between"
      >
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex-shrink-0 font-bold text-white text-base font-space-grotesk px-2.5 py-1.5 rounded-lg"
          style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          aria-label="Somya Kothari — home"
        >
          SK
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200",
                    "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none",
                    isActive
                      ? "text-blue-400 font-medium"
                      : "text-slate-400 hover:text-slate-100"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                      style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {resumeAvailable ? (
            <a
              href="/resume/resume.pdf"
              download="Somya_Kothari_Resume.pdf"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm border border-slate-600 hover:border-blue-500/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          ) : (
            <button
              disabled
              title="Resume coming soon"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm border border-slate-700/50 text-slate-600 rounded-lg cursor-not-allowed"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </button>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: "rgba(2, 6, 23, 0.97)", backdropFilter: "blur(16px)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close */}
            <div className="flex items-center justify-between px-6 py-5">
              <span
                className="font-bold text-white text-base font-space-grotesk px-2.5 py-1.5 rounded-lg"
                style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
              >
                SK
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col items-center justify-center flex-1 gap-2" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block px-8 py-3 text-2xl font-medium text-slate-300 hover:text-white transition-colors min-h-[48px] flex items-center"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="mt-4"
              >
                {resumeAvailable ? (
                  <a
                    href="/resume/resume.pdf"
                    download="Somya_Kothari_Resume.pdf"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-600 cursor-not-allowed">
                    <Download className="w-4 h-4" />
                    Resume Coming Soon
                  </span>
                )}
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
