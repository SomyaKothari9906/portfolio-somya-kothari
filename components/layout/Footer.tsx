import { Github, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand + copyright */}
          <div className="flex items-center gap-3">
            <span
              className="font-bold text-white text-sm font-space-grotesk px-2 py-1 rounded-md"
              style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
            >
              SK
            </span>
            <span className="text-sm text-slate-600">
              © 2025 Somya Kothari. All rights reserved.
            </span>
          </div>

          {/* Nav links */}
          <ul className="flex items-center gap-4" role="list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SomyaKothari9906"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="text-slate-600 hover:text-slate-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/somya-kothari-aiml/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="text-slate-600 hover:text-slate-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-slate-700 mt-6">
          Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
