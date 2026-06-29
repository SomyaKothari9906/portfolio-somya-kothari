"use client";
import { ExternalLink, Github, Code2, Star } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
  featured,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-slate-800/60 border rounded-2xl overflow-hidden",
        "backdrop-blur-sm transition-all duration-300 will-change-transform",
        "hover:-translate-y-1 hover:shadow-xl",
        featured
          ? "border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/10"
          : "border-slate-700/50 hover:border-blue-500/40 hover:shadow-blue-500/10"
      )}
    >
      {/* Image / Placeholder */}
      <div className="relative aspect-video w-full overflow-hidden">
        {image ? (
          <ImageWithFallback src={image} alt={`${title} — screenshot`} className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-purple-900/40">
            <Code2 className="w-16 h-16 text-slate-600" />
          </div>
        )}

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-yellow-500/30 text-yellow-400 text-xs font-medium backdrop-blur-sm">
            <Star className="w-3 h-3 fill-yellow-400" />
            Featured Project
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-50 mb-2 font-space-grotesk">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-slate-700/50 text-cyan-400 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository (opens in new tab)`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-600/60 text-slate-300 text-xs font-medium hover:border-slate-400/60 hover:text-white transition-all duration-200 active:scale-95"
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo (opens in new tab)`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-medium transition-all duration-200 shadow-sm shadow-blue-500/25 active:scale-95"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
