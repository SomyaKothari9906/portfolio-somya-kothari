"use client";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import type { SkillsData } from "@/types/content";

interface SkillsProps {
  data: SkillsData;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Skills({ data }: SkillsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="skills"
      label="02 — SKILLS"
      headline="Technical Stack"
      gradientWord="Stack"
      className="bg-slate-900/30"
    >
      <div className="space-y-10">
        {data.categories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1, ease: "easeOut" }}
          >
            <p className="text-sm font-mono text-cyan-400 mb-4 tracking-wider uppercase">
              {category.name}
            </p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={shouldReduceMotion ? {} : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={shouldReduceMotion ? {} : badgeVariants}>
                  <SkillBadge name={skill.name} emoji={skill.emoji} category={category.name} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
