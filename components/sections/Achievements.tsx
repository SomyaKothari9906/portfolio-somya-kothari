"use client";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import AchievementCard from "@/components/cards/AchievementCard";
import type { Achievement } from "@/types/content";

interface AchievementsProps {
  achievements: Achievement[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Achievements({ achievements }: AchievementsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="achievements"
      label="04 — ACHIEVEMENTS"
      headline="Recognition & Milestones"
      gradientWord="Milestones"
      className="bg-slate-900/30"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={shouldReduceMotion ? {} : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {achievements.map((item) => (
          <motion.div key={item.title} variants={shouldReduceMotion ? {} : cardVariants}>
            <AchievementCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              date={item.date}
              highlight={item.highlight}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
