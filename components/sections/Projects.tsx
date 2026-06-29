"use client";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProjectCard from "@/components/cards/ProjectCard";
import type { Project } from "@/types/content";

interface ProjectsProps {
  projects: Project[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects({ projects }: ProjectsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="projects" label="03 — PROJECTS" headline="What I've Built" gradientWord="Built">
      <p className="text-slate-500 text-base -mt-8 mb-12">Real projects. Real impact. Deployed and live.</p>

      {projects.length === 0 ? (
        // Skeleton empty state
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700/30 rounded-2xl overflow-hidden animate-pulse">
              <div className="aspect-video bg-slate-700/40" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-slate-700/40 rounded w-2/3" />
                <div className="h-3 bg-slate-700/30 rounded w-full" />
                <div className="h-3 bg-slate-700/30 rounded w-4/5" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={shouldReduceMotion ? {} : cardVariants}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                live={project.live}
                image={project.image}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </SectionWrapper>
  );
}
