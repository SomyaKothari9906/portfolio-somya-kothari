"use client";
import Image from "next/image";
import { useState } from "react";
import { Code2 } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-purple-900/40">
        <Code2 className="w-16 h-16 text-slate-600" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className ?? "object-cover"}
      onError={() => setError(true)}
    />
  );
}
