import { Trophy, Zap, Rocket, Code2, GitMerge } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-5 h-5 text-white" />,
  Zap: <Zap className="w-5 h-5 text-white" />,
  Rocket: <Rocket className="w-5 h-5 text-white" />,
  Code2: <Code2 className="w-5 h-5 text-white" />,
  GitMerge: <GitMerge className="w-5 h-5 text-white" />,
};

interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
  date?: string;
  highlight?: boolean;
}

export default function AchievementCard({
  title,
  description,
  icon,
  date,
  highlight,
}: AchievementCardProps) {
  return (
    <div
      className={cn(
        "bg-slate-800/50 border rounded-xl p-5 transition-all duration-300",
        highlight
          ? "border-purple-500/40 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10"
          : "border-slate-700/40 hover:border-slate-600/60"
      )}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          }}
        >
          {iconMap[icon] ?? <Trophy className="w-5 h-5 text-white" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-slate-100 font-space-grotesk">{title}</h3>
            {date && (
              <span className="text-xs font-mono text-slate-500 flex-shrink-0">{date}</span>
            )}
          </div>
          <p className="text-sm text-slate-400 mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
