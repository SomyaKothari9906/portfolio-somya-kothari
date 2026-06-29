"use client";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  link?: string;
  isEmpty?: boolean;
}

export default function CertificateCard({
  title,
  issuer,
  date,
  image,
  link,
  isEmpty,
}: CertificateCardProps) {
  const [imgError, setImgError] = useState(false);

  if (isEmpty) {
    // Ghost/skeleton placeholder
    return (
      <div className="rounded-xl overflow-hidden border border-dashed border-slate-700/60 bg-slate-800/20">
        <div className="aspect-[4/3] w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/40 to-slate-900/40">
          <Award className="w-8 h-8 text-slate-600 mb-2" />
          <span className="text-xs text-slate-600">Coming Soon</span>
        </div>
        <div className="p-3">
          <div className="h-3 bg-slate-700/40 rounded w-3/4 mb-2" />
          <div className="h-2.5 bg-slate-700/30 rounded w-1/2" />
        </div>
      </div>
    );
  }

  const content = (
    <div
      className={cn(
        "group rounded-xl overflow-hidden border border-slate-700/40 bg-slate-800/50",
        "hover:border-blue-500/30 transition-all duration-300",
        link ? "cursor-pointer" : ""
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {image && !imgError ? (
          <>
            <Image
              src={image}
              alt={`${title} certificate`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-sm font-medium text-white flex items-center gap-1.5">
                <ExternalLink className="w-4 h-4" /> View
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30">
            <Award className="w-10 h-10 text-slate-500 mb-2" />
            <span className="text-xs text-slate-500">Certificate</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-slate-200 truncate">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5">
          {issuer}
          {date && ` · ${date}`}
        </p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${title} certificate (opens in new tab)`}>
        {content}
      </a>
    );
  }

  return content;
}
