"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Target,
  ClipboardCheck,
  Search,
  Map,
  Calendar,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const steps: Step[] = [
  { icon: Target,          title: "Start the Aptitude Quiz",  desc: "Answer a short, adaptive quiz so we can map your strengths and interests." },
  { icon: ClipboardCheck,  title: "Get Your Profile",         desc: "View a skills snapshot with stream fit, role affinity, and improvement tips." },
  { icon: Search,          title: "Explore Colleges & Programs", desc: "Browse verified government colleges, courses, cut-offs and admissions info." },
  { icon: Map,             title: "See Your Roadmap",         desc: "Follow visual paths from subjects to exams, degrees, and job families." },
  { icon: Calendar,        title: "Track Deadlines",          desc: "Stay on top of exams, applications, and scholarships with smart nudges." },
  { icon: BookOpen,        title: "Use Free Resources",       desc: "Jump into curated portals, e-books, and practice material to level up." },
];

export default function HowItWorksTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // progress fill for spine
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 40%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="relative bg-[#0B1020] text-white">
      {/* subtle background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 10%, rgba(168,85,247,0.10), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(59,130,246,0.10), transparent 60%)",
        }}
      />
      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            How{" "}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] bg-clip-text text-transparent">
              it works
            </span>
          </h2>
          <p className="mt-4 text-slate-300">
            A simple, guided flow—from discovering your strengths to applying with confidence.
          </p>
        </motion.div>

        {/* spine (behind rows) */}
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 rounded-full bg-white/10 md:block" />
          <motion.div
            className="absolute left-1/2 top-0 hidden w-[2px] -translate-x-1/2 rounded-full md:block bg-gradient-to-b from-[#60A5FA] via-[#93C5FD] to-[#A78BFA]"
            style={{ height: fillHeight }}
          />

          {/* rows */}
          <div className="space-y-10">
            {steps.map((s, i) => (
              <StepRow key={s.title} index={i + 1} step={s} left={i % 2 === 0} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <a
            href="/quiz"
            className="group inline-flex items-center justify-center rounded-lg bg-[#2987D7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:translate-y-[-1px] hover:bg-[#2276BD] active:translate-y-0"
          >
            Get Started
            <CheckCircle2 className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StepRow({
  index,
  step,
  left,
}: {
  index: number;
  step: Step;
  left: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const Card = (
    <div
      ref={ref}
      className="w-full max-w-[560px] rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
      style={{
        boxShadow: inView
          ? "0 0 0 1px rgba(147,197,253,0.22), 0 18px 60px rgba(147,197,253,0.10)"
          : "0 0 0 1px rgba(147,197,253,0.18), 0 18px 60px rgba(147,197,253,0.08)",
        transition: "box-shadow 300ms ease",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
          <step.icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{step.desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    // two columns (left / right); the badge is absolutely centered over the spine
    <div className="relative grid grid-cols-1 items-center gap-y-4 md:grid-cols-2">
      {/* left cell */}
      <div className="hidden md:block justify-self-end">{left ? Card : null}</div>

      {/* right cell */}
      <div className="hidden md:block justify-self-start">{!left ? Card : null}</div>

      {/* mobile: single full-width card */}
      <div className="md:hidden">{Card}</div>

      {/* centered number badge over the global spine */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block z-10">
<div className="h-4 w-4 rounded-full bg-[#2987D7]/70 backdrop-blur-sm shadow-[0_0_12px_rgba(41,135,215,0.6)]"></div>

      </div>
    </div>
  );
}
