import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  emoji?: string;
  category: string;
}

export default function SkillBadge({ name, emoji }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-lg",
        "bg-slate-800/80 border border-slate-700/40 text-slate-300 text-sm font-medium",
        "hover:border-blue-500/40 hover:bg-slate-700/60 hover:text-white",
        "transition-all duration-200 cursor-default select-none hover:scale-[1.02]"
      )}
    >
      {emoji && <span aria-hidden="true">{emoji}</span>}
      {name}
    </span>
  );
}
