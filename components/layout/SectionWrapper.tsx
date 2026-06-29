import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  label: string;
  headline: string;
  gradientWord?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  label,
  headline,
  gradientWord,
  children,
  className,
}: SectionWrapperProps) {
  const headlineId = `${id}-heading`;

  const renderHeadline = () => {
    if (!gradientWord) {
      return <h2 id={headlineId} className="text-4xl md:text-5xl font-bold text-slate-50 mb-12 font-space-grotesk leading-tight">{headline}</h2>;
    }

    const parts = headline.split(new RegExp(`(${gradientWord})`, "i"));
    return (
      <h2 id={headlineId} className="text-4xl md:text-5xl font-bold text-slate-50 mb-12 font-space-grotesk leading-tight">
        {parts.map((part, i) =>
          part.toLowerCase() === gradientWord.toLowerCase() ? (
            <span key={i} className="gradient-text">{part}</span>
          ) : (
            part
          )
        )}
      </h2>
    );
  };

  return (
    <section
      id={id}
      aria-labelledby={headlineId}
      className={cn("py-24 md:py-32", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl">
        <p className="section-label">{"//"} {label}</p>
        {renderHeadline()}
        {children}
      </div>
    </section>
  );
}
