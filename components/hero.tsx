"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-[#000000]">

      {/* ── Fixed background: real image + blur overlay + noise ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[60px]" />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            opacity: 0.1,
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">

        {/* Kicker — stagger index 0 */}
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0 }}
          className="mb-8 block text-[12px] font-medium uppercase tracking-[0.25em] text-white/40 md:text-[13px]"
        >
          Product Manager &middot; UW Informatics
        </motion.span>

        {/* Headline — split-text stagger: line 1 at 0.1s, line 2 at 0.2s */}
        <h1 className="flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="block text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em] text-white"
          >
            Ibrahiim
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="block text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white"
          >
            Muhamud.
          </motion.span>
        </h1>

        {/* Subtitle — stagger at 0.4s */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed tracking-tight text-[#A0A0A0] md:text-2xl"
        >
          Building intuitive experiences with real teams and real users.
        </motion.p>

        {/* Buttons — stagger at 0.6s */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="mt-12 flex items-center gap-5"
        >
          <a href="#projects" className="btn-primary group">
            <span>View my work</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a href="/resume.pdf" className="btn-ghost">
            Resume
          </a>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
