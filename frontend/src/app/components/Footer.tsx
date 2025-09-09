"use client";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1020] text-white">
      {/* Background gradients */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 90%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(900px 500px at 90% 70%, rgba(168,85,247,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          {/* Column 1: Logo + About */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] bg-clip-text text-transparent">
                Coursely
              </span>
            </h2>
            <p className="mt-4 text-sm text-slate-300 max-w-sm">
              Your one-stop, AI-powered career & education advisor. Helping
              students discover paths, explore colleges, and plan with clarity.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <Link href="/quiz" className="text-slate-300 hover:text-white">
              Aptitude Quiz
            </Link>
            <Link href="/careers" className="text-slate-300 hover:text-white">
              Career Explorer
            </Link>
            <Link href="/colleges" className="text-slate-300 hover:text-white">
              College Directory
            </Link>
            <Link href="/timeline" className="text-slate-300 hover:text-white">
              Timeline Tracker
            </Link>
            <Link href="/resources" className="text-slate-300 hover:text-white">
              Free Resources
            </Link>
          </div>

          {/* Column 3: Social + Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex gap-4 mt-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Contact us:{" "}
              <a href="mailto:hello@coursely.com" className="hover:underline">
                hello@coursely.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Coursely. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
