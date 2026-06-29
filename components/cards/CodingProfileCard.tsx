import { Github, Linkedin, ExternalLink } from "lucide-react";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";
import HackerRankIcon from "@/components/icons/HackerRankIcon";
import GeeksForGeeksIcon from "@/components/icons/GeeksForGeeksIcon";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-7 h-7" />,
  linkedin: <Linkedin className="w-7 h-7" />,
  leetcode: <LeetCodeIcon className="w-7 h-7" />,
  hackerrank: <HackerRankIcon className="w-7 h-7" />,
  geeksforgeeks: <GeeksForGeeksIcon className="w-7 h-7" />,
};

interface CodingProfileCardProps {
  platform: string;
  username: string;
  url: string;
  icon: string;
  stats?: string;
  color: string;
}

export default function CodingProfileCard({
  platform,
  username,
  url,
  icon,
  stats,
  color,
}: CodingProfileCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${platform} profile (opens in new tab)`}
      className="group block bg-slate-800/50 border border-slate-700/40 rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1"
      style={{
        // CSS custom property for hover border color — done via inline style on hover via JS
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}66`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${color}15`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      >
        {iconMap[icon] ?? <ExternalLink className="w-7 h-7" />}
      </div>

      <div>
        <p className="text-base font-semibold text-slate-100 font-space-grotesk">{platform}</p>
        <p className="text-sm text-slate-500 font-mono">@{username}</p>
        {stats && <p className="text-xs text-slate-600 mt-0.5">{stats}</p>}
      </div>
    </a>
  );
}
