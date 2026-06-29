"use client";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import type { EducationItem } from "@/types/content";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="education"
      label="06 — EDUCATION"
      headline="Academic Journey"
      gradientWord="Journey"
      className="bg-slate-900/30"
    >
      <div className="max-w-3xl">
        {education.map((item, i) => (
          <motion.div
            key={item.year + item.title}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <TimelineItem
              year={item.year}
              title={item.title}
              institution={item.institution}
              location={item.location}
              grade={item.grade}
              description={item.description}
              current={item.current}
              isLast={i === education.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
