"use client";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const { scaleX } = useScrollProgress();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
        transformOrigin: "left",
      }}
    />
  );
}
