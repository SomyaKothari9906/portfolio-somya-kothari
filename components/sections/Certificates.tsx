"use client";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CertificateCard from "@/components/cards/CertificateCard";
import type { Certificate } from "@/types/content";

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  const shouldReduceMotion = useReducedMotion();
  const isEmpty = certificates.length === 0;

  // Show 6 ghost slots when empty
  const ghostSlots = [1, 2, 3, 4, 5, 6];

  return (
    <SectionWrapper
      id="certificates"
      label="05 — CERTIFICATES"
      headline="Certifications & Courses"
      gradientWord="Certifications"
    >
      {isEmpty ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {ghostSlots.map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i - 1) * 0.07 }}
              >
                <CertificateCard title="" issuer="" isEmpty />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-2">
            Certificates being added soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title + i}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <CertificateCard
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                image={cert.image}
                link={cert.link}
              />
            </motion.div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
