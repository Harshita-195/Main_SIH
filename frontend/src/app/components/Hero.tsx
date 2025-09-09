"use client";

import { motion } from "framer-motion";
import { Target, Map, Search, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../../../public/Hero.png";

type HeroProps = {
  onPrimary?: () => void;
  onSecondary?: () => void;
};

const featurePills = [
  { icon: Target, label: "Aptitude Quiz" },
  { icon: Map, label: "Career Explorer" },
  { icon: Search, label: "Govt. College Directory" },
  { icon: Calendar, label: "Timeline Tracker" },
  { icon: BookOpen, label: "Free Resources" },
];

export default function Hero({ onPrimary, onSecondary }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1020] text-white">
      {/* Subtle nebula gradient/background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(41,135,215,0.25), transparent 60%), radial-gradient(900px 500px at 10% 10%, rgba(168,85,247,0.18), transparent 60%)",
          maskImage:
            "radial-gradient(80% 80% at 50% 30%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"
      />

      <div className="relative mx-auto md:ml-20 min-w-8xl px-4 py-24 sm:px-6 md:py-32 md:mt-20 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text Content) */}
        <div>
          <motion.div
            className="inline-flex max-md:hidden items-center max-md:text-center max-md:items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#4ADE80]" />
            Smart India Hackathon – Theme: Smart Education · Team “Coursely”
          </motion.div>

          <motion.h1
            className="mt-5 text-4xl font-extrabold tracking-tight max-md:text-center max-md:items-center md:text-6xl leading-[1.05]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            One-Stop{" "}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] bg-clip-text text-transparent">
              Personalized Career & Education
            </span>{" "}
            Advisor
          </motion.h1>

          <motion.p
            className="mt-4 md:min-w-2xl max-md:text-center  max-md:items-center text-sm text-slate-300 md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            AI-driven recommendations + verified government data + visual career
            maps in a single, lightweight web app. Reduce confusion, prevent
            dropouts, and promote access to affordable education—anywhere, on
            any device.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              href="/quiz"
              className="group inline-flex items-center justify-center rounded-lg bg-[#2987D7] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:translate-y-[-1px] hover:bg-[#2276BD] active:translate-y-0"
            >
              Try Personality Quiz
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <button
              onClick={onSecondary}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore Careers
            </button>

            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/30"
            >
              View Key Features
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {featurePills.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.25 + i * 0.05 },
                  },
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
              >
                <Icon className="h-4 w-4 text-slate-300" />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side (Image) */}
        <div className="relative hidden md:block w-full h-[300px] md:h-[480px]">
          <Image
            src={HeroImage} // leave blank for now
            alt="Hero Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
