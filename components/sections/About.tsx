"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import type { Profile } from "@/types/content";

interface AboutProps {
  profile: Profile;
}

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "7+", label: "Hackathons" },
  { value: "7.47", label: "Academic Score" },
  { value: "2nd", label: "Year of Study" },
];

function ProfileAvatar() {
  const [imgError, setImgError] = useState(false);
  if (!imgError) {
    return (
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(37,99,235,0.3)" }}>
        <Image
          src="/profile/profile.jpg"
          alt="Somya Kothari"
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }
  return (
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white font-space-grotesk flex-shrink-0"
      style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", border: "2px solid rgba(37,99,235,0.3)" }}
      aria-label="Somya Kothari initials avatar"
    >
      SK
    </div>
  );
}


export default function About({ profile }: AboutProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <SectionWrapper id="about" label="01 — ABOUT" headline="Who I Am" gradientWord="I">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left — Text (60%) */}
        <motion.div
          className="lg:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Avatar */}
          <div className="flex items-center gap-5 mb-8">
            <ProfileAvatar />

            <div>
              <p className="text-slate-100 font-semibold font-space-grotesk text-lg">{profile.name}</p>
              <p className="text-sm text-slate-500">{profile.branch}</p>
              <p className="text-sm text-cyan-400 font-mono">{profile.college}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 mb-8">
            {profile.bio.map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base">{para}</p>
            ))}
          </div>

          {/* Personal details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-400 py-1">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href={`mailto:${profile.email}`} className="hover:text-blue-400 transition-colors">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400 py-1">
              <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href={`tel:${profile.phone}`} className="hover:text-blue-400 transition-colors">
                {profile.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400 py-1">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400 py-1">
              <GraduationCap className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>CGPA: {profile.cgpa}</span>
            </div>
          </div>
        </motion.div>

        {/* Right — Stats (40%) */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-slate-800/60 border border-slate-700/40 rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold font-space-grotesk gradient-text">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
