"use client";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CodingProfileCard from "@/components/cards/CodingProfileCard";
import type { SocialProfile } from "@/types/content";

interface CodingProfilesProps {
  profiles: SocialProfile[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CodingProfiles({ profiles }: CodingProfilesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="coding-profiles"
      label="07 — PROFILES"
      headline="Find Me Online"
      gradientWord="Online"
    >
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        variants={shouldReduceMotion ? {} : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {profiles.map((profile) => (
          <motion.div key={profile.platform} variants={shouldReduceMotion ? {} : cardVariants}>
            <CodingProfileCard
              platform={profile.platform}
              username={profile.username}
              url={profile.url}
              icon={profile.icon}
              stats={profile.stats}
              color={profile.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
