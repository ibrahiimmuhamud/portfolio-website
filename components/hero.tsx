"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FileDown, Linkedin } from "lucide-react";
import { cn } from "@/lib/cn";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay: 0.12 * i },
  }),
};

export function Hero() {
  // very subtle parallax based on pointer position
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.8 });
  const blobX = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const blobY = useTransform(sy, [-0.5, 0.5], [-18, 18]);

  return (
    <section
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden px-4 pt-10"
      onPointerMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mx.set(x);
        my.set(y);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        aria-hidden
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(85,165,255,0.50),transparent_60%)] blur-2xl" />
        <div className="absolute right-[-12%] top-[6%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(182,103,255,0.36),transparent_62%)] blur-2xl" />
        <div className="absolute bottom-[-25%] left-[12%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,164,98,0.34),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-22%] right-[8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(92,255,205,0.22),transparent_60%)] blur-2xl" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            initial="initial"
            animate="animate"
            className={cn(
              "text-balance text-[clamp(44px,5.8vw,86px)] font-semibold leading-[0.95] tracking-[-0.04em]",
              "text-[color:var(--foreground)]"
            )}
          >
            <motion.span custom={0} variants={fadeUp} className="block italic">
              Approachable
            </motion.span>
            <motion.span custom={1} variants={fadeUp} className="block">
              Intelligence
            </motion.span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted)]"
          >
            I’m Ibrahiim Muhamud, a Running Start student based in Redmond. I’m
            focused on product management and I like building things that make
            complex ideas easier to use.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#updates"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 text-sm font-medium text-[color:var(--background)] shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:scale-[1.02]"
            >
              Latest updates
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/50 px-5 text-sm font-medium text-[color:var(--foreground)] backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10"
            >
              Resume
              <FileDown className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahiimmuhamud/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/50 px-5 text-sm font-medium text-[color:var(--foreground)] backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4 text-[color:var(--linkedin)]" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut, delay: 0.5 } }}
          className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-12 gap-4"
        >
          <BentoCard className="col-span-12 md:col-span-7">
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted-2)]">
                  Latest
                </div>
                <div className="text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
                  Resume and key experience
                </div>
                <p className="max-w-md text-sm leading-6 text-[color:var(--muted)]">
                  A quick snapshot of what I’ve been doing and what I’m learning.
                </p>
              </div>
              <a
                href="/resume.pdf"
                className="hidden items-center gap-2 rounded-full bg-black/5 px-3 py-2 text-xs font-medium text-[color:var(--muted)] transition hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 md:inline-flex"
              >
                Open
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </BentoCard>

          <BentoCard className="col-span-12 overflow-hidden md:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white/40 dark:bg-white/5">
              <Image
                src="/portrait.png"
                alt="Portrait of Ibrahiim Muhamud"
                fill
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.6),transparent_55%)]" />
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-6 backdrop-blur-md",
        "shadow-[0_18px_60px_rgba(0,0,0,0.10)] dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

