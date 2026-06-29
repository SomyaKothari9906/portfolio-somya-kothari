import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "purple" | "cyan" | "green";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-slate-700/60 text-slate-300 border-slate-600/40",
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    green: "bg-green-500/10 text-green-300 border-green-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
