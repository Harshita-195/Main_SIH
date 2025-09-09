"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  QUESTIONS,
  TRAIT_TO_STREAMS,
  STREAM_COLLEGES,
  TRAIT_LABELS,
  type TraitKey,
} from "../data/personality";

type Phase = "quiz" | "review" | "result";

export default function PersonalityQuiz() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(QUESTIONS.length).fill(-1)
  );

  const current = QUESTIONS[idx];

  const canNext = answers[idx] !== -1;
  const progressPct = Math.round(((idx + 1) / QUESTIONS.length) * 100);

  const handlePick = (optIndex: number) => {
    const next = [...answers];
    next[idx] = optIndex;
    setAnswers(next);
  };

  const nextQ = () => {
    if (!canNext) return;
    if (idx < QUESTIONS.length - 1) setIdx((i) => i + 1);
    else setPhase("review");
  };
  const prevQ = () => setIdx((i) => Math.max(0, i - 1));
  const restart = () => {
    setAnswers(Array(QUESTIONS.length).fill(-1));
    setIdx(0);
    setPhase("quiz");
  };

  // scoring
  const { topTrait, scores } = useMemo(() => {
    const s: Record<TraitKey, number> = {
      analytical: 0,
      creative: 0,
      people: 0,
      practical: 0,
    };
    answers.forEach((optIdx, qIdx) => {
      if (optIdx === -1) return;
      const chosen = QUESTIONS[qIdx].options[optIdx];
      Object.entries(chosen.weights).forEach(([k, v]) => {
        s[k as TraitKey] += v ?? 0;
      });
    });
    const top = (Object.keys(s) as TraitKey[]).reduce((a, b) =>
      s[a] >= s[b] ? a : b
    );
    return { topTrait: top, scores: s };
  }, [answers]);

  const streams = TRAIT_TO_STREAMS[topTrait];
  const primary = streams[0];
  const secondary = streams[1];

  return (
    <section className="relative bg-[#0B1020] text-white">
      {/* subtle glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 10%, rgba(168,85,247,0.08), transparent 60%), radial-gradient(900px 500px at 90% 30%, rgba(59,130,246,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl md:mt-18 mt-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Personality <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] bg-clip-text text-transparent">Quiz</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Find your top trait and explore matching streams & colleges.
          </p>
        </div>

        {/* Progress */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] transition-all"
              style={{ width: `${phase === "quiz" ? progressPct : 100}%` }}
            />
          </div>
          <div className="mt-2 text-right text-xs text-slate-300">
            {phase === "quiz" ? `${progressPct}%` : "100%"}
          </div>
        </div>

        {/* PHASES */}
        {phase === "quiz" && current && (
          <div className="mx-auto mt-10 max-w-2xl">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <h3 className="text-lg md:text-xl font-semibold">{current.prompt}</h3>

              <div className="mt-5 grid gap-3">
                {current.options.map((opt, i) => {
                  const active = answers[idx] === i;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handlePick(i)}
                      className={[
                        "w-full rounded-xl border p-4 text-left transition",
                        "bg-white/[0.02] hover:bg-white/[0.05] border-white/10",
                        active ? "ring-2 ring-[#93C5FD]" : "",
                      ].join(" ")}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={prevQ}
                  disabled={idx === 0}
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  onClick={nextQ}
                  disabled={!canNext}
                  className="rounded-lg bg-[#2987D7] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#2276BD] disabled:opacity-40"
                >
                  {idx === QUESTIONS.length - 1 ? "Review" : "Next"}
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {phase === "review" && (
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Review your answers</h3>
              <div className="mt-4 space-y-4">
                {QUESTIONS.map((q, qIdx) => (
                  <div key={q.id} className="rounded-xl border border-white/10 p-4">
                    <p className="font-medium">{q.prompt}</p>
                    <p className="mt-1 text-sm text-slate-300">
                      {answers[qIdx] !== -1 ? q.options[answers[qIdx]].label : "— Not answered —"}
                    </p>
                    <div className="mt-3">
                      <button
                        onClick={() => {
                          setIdx(qIdx);
                          setPhase("quiz");
                        }}
                        className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/90 hover:bg-white/10"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={restart}
                  className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  Restart
                </button>
                <button
                  onClick={() => setPhase("result")}
                  className="rounded-md bg-[#2987D7] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#2276BD]"
                >
                  See Results
                </button>
              </div>
            </div>
          </div>
        )}

        {phase === "result" && (
          <div className="mx-auto mt-10 max-w-5xl">
            {/* Trait summary */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">
                Your Top Trait:{" "}
                <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#A78BFA] bg-clip-text text-transparent">
                  {TRAIT_LABELS[topTrait]}
                </span>
              </h3>
              <p className="mt-2 text-slate-300">
                Scores — Analytical: {scores.analytical} · Creative: {scores.creative} ·
                People: {scores.people} · Practical: {scores.practical}
              </p>
            </div>

            {/* Streams & colleges */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[primary, secondary].map((stream) => (
                <div
                  key={stream}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
                >
                  <h4 className="text-lg font-semibold capitalize">
                    Recommended Stream: {stream}
                  </h4>
                  <p className="mt-1 text-sm text-slate-300">
                    Top colleges to consider:
                  </p>

                  <div className="mt-4 space-y-3">
                    {STREAM_COLLEGES[stream].map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4"
                      >
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <p className="text-xs text-slate-300">
                            {c.city} • {c.tag}
                          </p>
                        </div>
                        <a
                          href={c.url ?? "#"}
                          className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/90 hover:bg-white/10"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Details
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <button
                onClick={restart}
                className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                Take Again
              </button>
              <a
                href="/colleges"
                className="rounded-md bg-[#2987D7] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#2276BD]"
              >
                Explore All Colleges
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
