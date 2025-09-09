"use client";

import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

export default function LoginPrompt() {
  return (
    <section className="relative bg-[#0B1020] text-white">
      {/* background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 10%, rgba(168,85,247,0.08), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(59,130,246,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Unlock Your{" "}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] bg-clip-text text-transparent">
              Personalized Journey
            </span>
          </h2>
          <p className="mt-4 text-slate-300">
            Log in to access your aptitude results, save your roadmap, and get
            tailored recommendations—anytime, anywhere.
          </p>
        </motion.div>

        {/* Login Box */}
        <motion.div
          className="mt-10 mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-8 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <LogIn className="mx-auto h-12 w-12 text-slate-200 mb-4" />

          <h3 className="text-xl font-semibold">Sign in to Continue</h3>
          <p className="mt-2 text-sm text-slate-400">
            Use your email or social account to log in securely.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full rounded-lg bg-[#2987D7] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.02] hover:bg-[#2276BD]">
              Continue with Email
            </button>
            <button className="w-full rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Continue with Google
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
