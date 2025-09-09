"use client";

import { motion } from "framer-motion";
import { Target, Map, Search, Calendar, BookOpen, Sparkles } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "AI-Powered Aptitude",
    desc: "Adaptive assessments that map your strengths to streams, exams, and roles.",
  },
  {
    icon: Map,
    title: "Career Explorer",
    desc: "Visual roadmaps from school subjects to degrees, exams, and job families.",
  },
  {
    icon: Search,
    title: "Govt. College Directory",
    desc: "Verified information on nearby government colleges, courses, and cut-offs.",
  },
  {
    icon: Calendar,
    title: "Timeline Tracker",
    desc: "Unified calendar for exams, admissions, and scholarships with smart nudges.",
  },
  {
    icon: BookOpen,
    title: "Free Resources",
    desc: "Curated portals, e-books, videos, and practice materials for every path.",
  },
  {
    icon: Sparkles,
    title: "AI Career Mentor",
    desc: "Instant, AI-powered guidance for doubts, tips, and next steps anytime.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0B1020] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] bg-clip-text text-transparent">
              plan your future
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 text-slate-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            A single, lightweight app that reduces confusion and drives confident decisions.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              {/* Glow border on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(147,197,253,0.25), 0 10px 40px rgba(147,197,253,0.12)",
                }}
              />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                </div>
              </div>
              {/* subtle bottom gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
