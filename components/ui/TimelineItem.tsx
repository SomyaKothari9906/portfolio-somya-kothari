import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  location: string;
  grade: string;
  description: string;
  current?: boolean;
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  title,
  institution,
  location,
  grade,
  description,
  current,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      {/* Vertical line */}
      {!isLast && (
        <div
          className="absolute left-[19px] top-10 bottom-0 w-[2px]"
          style={{
            background: "linear-gradient(to bottom, #3b82f6, #7c3aed)",
          }}
        />
      )}

      {/* Dot */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <div
          className={cn(
            "w-3 h-3 rounded-full border-2",
            current
              ? "border-blue-400 bg-gradient-to-br from-blue-500 to-purple-600"
              : "border-blue-500/60 bg-slate-950"
          )}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex-1 bg-slate-800/50 border rounded-xl p-5 mb-2",
          current ? "border-blue-500/30" : "border-slate-700/40"
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-base font-semibold text-slate-100 font-space-grotesk">
              {title}
            </h3>
            <p className="text-sm text-slate-400 mt-0.5">{institution}</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-cyan-400">{year}</span>
            <p className="text-xs text-slate-500 mt-0.5">{grade}</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 mb-1">{location}</p>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        {current && (
          <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-medium">
            Currently Enrolled
          </span>
        )}
      </div>
    </div>
  );
}
