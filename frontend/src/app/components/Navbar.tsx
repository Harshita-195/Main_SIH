"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "/quiz", label: "Aptitude Quiz" },
  { href: "/careers", label: "Career Explorer" },
  { href: "/colleges", label: "Colleges" },
  { href: "/timeline", label: "Timeline" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  // Scroll progress (top thin bar)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setElevated(window.scrollY > 8); // add subtle shadow after slight scroll
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Progress bar */}
      <motion.div
        className="h-[3px] origin-left bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA]"
        style={{ scaleX }}
      />

      {/* Nav container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-colors">
        <nav
          className={[
            "mt-2 flex h-14 items-center justify-between rounded-xl px-3",
            "backdrop-blur-md bg-black/20",
            elevated
              ? "shadow-lg shadow-black/20 ring-1 ring-white/10"
              : "ring-1 ring-white/5",
          ].join(" ")}
        >
          {/* Brand */}
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
          >
            Coursely
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}

            {/* Sign Up / Log In button */}
            <Link
              href="/auth"
              className="ml-3 rounded-lg bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition"
            >
              Sign Up / Log In
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden mt-2 rounded-xl bg-black/40 backdrop-blur-md ring-1 ring-white/10">
            <div className="flex flex-col p-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              ))}

              {/* Mobile Sign Up / Log In button */}
              <Link
                href="/auth"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] px-4 py-2 text-center text-sm font-semibold text-white shadow hover:opacity-90 transition"
              >
                Sign Up / Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
