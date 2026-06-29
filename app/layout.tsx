/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somya Kothari — AI & ML Engineer Portfolio",
  description:
    "Portfolio of Somya Kothari, 2nd year B.Tech AI & ML student at Acropolis Institute, Indore. Building intelligent systems with Python, TensorFlow, and React.",
  keywords: [
    "AI Engineer", "ML Portfolio", "Somya Kothari",
    "Acropolis Institute", "Machine Learning Student", "Python Developer", "Indore",
  ],
  authors: [{ name: "Somya Kothari", url: "https://somyakothari.dev" }],
  creator: "Somya Kothari",
  metadataBase: new URL("https://somyakothari.dev"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://somyakothari.dev",
    title: "Somya Kothari — AI & ML Engineer Portfolio",
    description: "Portfolio of Somya Kothari — building intelligent solutions with AI & ML.",
    siteName: "Somya Kothari Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Somya Kothari Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somya Kothari — AI & ML Engineer",
    description: "Portfolio — building intelligent solutions.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Somya Kothari",
  email: "somyakothari454@gmail.com",
  url: "https://somyakothari.dev",
  jobTitle: "AI & ML Engineering Student",
  sameAs: [
    "https://github.com/SomyaKothari9906",
    "https://www.linkedin.com/in/somya-kothari-aiml/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://somyakothari.dev/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
