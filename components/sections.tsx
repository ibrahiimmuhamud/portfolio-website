"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 1.2, ease, delay },
});

/* ═══════════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════════ */

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1100px] px-6 pt-[180px] pb-[100px] text-center">
      <motion.p
        {...reveal()}
        className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/30"
      >
        About
      </motion.p>

      <motion.h2
        {...reveal(0.08)}
        className="mx-auto mt-5 max-w-[780px] text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-white"
      >
        A student early in his career, already building real
        products with real teams.
      </motion.h2>

      <motion.p
        {...reveal(0.16)}
        className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-[#A0A0A0]"
      >
        I&apos;m completing both a high school diploma and an Associate of Arts
        at Bellevue College through Running Start. Next fall I join the
        University of Washington iSchool as an Informatics direct admit.
        I&apos;m drawn to product management because it sits at the intersection
        of users, business, and engineering.
      </motion.p>

      <div className="mt-16 grid grid-cols-12 gap-4">
        <motion.div
          {...reveal(0.12)}
          className="col-span-12 overflow-hidden rounded-[10px] md:col-span-5"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px]">
            <Image
              src="/portrait.png"
              alt="Portrait of Ibrahiim Muhamud"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <p className="text-[14px] font-medium text-white">
                Ibrahiim Muhamud
              </p>
              <p className="mt-0.5 text-[12px] text-white/50">
                Redmond, WA
              </p>
            </div>
          </div>
        </motion.div>

        <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-7">
          {[
            { icon: MapPin, label: "Based", value: "Redmond, WA" },
            { icon: GraduationCap, label: "Currently", value: "Running Start, Bellevue College" },
            { icon: Briefcase, label: "Next", value: "UW iSchool, Informatics" },
            { icon: Users, label: "Focus", value: "Product Management" },
          ].map((f, i) => (
            <motion.div
              key={f.label}
              {...reveal(0.14 + i * 0.06)}
              className="rounded-[10px] border border-white/[0.05] bg-white/[0.03] p-6 text-left backdrop-blur-sm"
            >
              <f.icon className="mb-3 h-5 w-5 text-white/30" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
                {f.label}
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-white/90">
                {f.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROJECTS — block-news bento grid replica
   Exact aspect-[1052/1117], staggered col-start/span,
   glassmorphic cards with hover:scale-[1.02]
   ═══════════════════════════════════════════════════════ */

type ProjectItem = {
  title: string;
  description: string;
  tag: string;
  meta: string;
  colStart: string;
  colSpan: string;
};

const projects: ProjectItem[] = [
  {
    title: "Lab Support Systems",
    description:
      "Patterns and small tools from work as a Computer Lab Assistant, keeping labs available for 20k+ students.",
    tag: "operations",
    meta: "Triage flows, documentation",
    colStart: "md:col-start-2",
    colSpan: "md:col-span-5",
  },
  {
    title: "Changemakers Prototypes",
    description:
      "A collaborative website and mobile concept built for a social-impact challenge, from problem framing to live pitch.",
    tag: "product",
    meta: "Figma, story arc, prototype",
    colStart: "md:col-start-8",
    colSpan: "md:col-span-3",
  },
  {
    title: "Personal Experiments",
    description:
      "Smaller projects exploring scheduling tools, student workflows, and how to explain complex systems clearly.",
    tag: "engineering",
    meta: "Next.js, React, data modeling",
    colStart: "md:col-start-3",
    colSpan: "md:col-span-3",
  },
  {
    title: "This Portfolio",
    description:
      "Built in Next.js with Framer Motion. Every animation, layout decision, and color token was deliberately chosen.",
    tag: "design system",
    meta: "Tailwind, Framer Motion",
    colStart: "md:col-start-7",
    colSpan: "md:col-span-5",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-[1100px] px-6 pt-[180px]">
      <div className="text-center">
        <motion.h2
          {...reveal()}
          className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white"
        >
          Latest work
          <br />
          <em className="font-light not-italic text-white/40">
            Projects. Systems. Prototypes.
          </em>
        </motion.h2>
      </div>

      <div className="mt-20 grid grid-cols-12 items-start gap-[26px]">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            {...reveal(0.08 + i * 0.1)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
              "col-span-12",
              p.colStart,
              p.colSpan,
              i > 0 && "mt-[90px] md:mt-0"
            )}
          >
            <div
              className="relative w-full overflow-hidden rounded-[10px] border border-white/[0.05] bg-black/40 backdrop-blur-md"
              style={{ aspectRatio: "1052 / 1117" }}
            >
              <div className="flex h-full w-full items-center justify-center p-10">
                <p className="max-w-[280px] text-center text-[15px] leading-[1.7] text-white/50">
                  {p.description}
                </p>
              </div>
            </div>

            <h3 className="my-[1em] text-[clamp(1.1rem,2vw,1.4rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-white">
              {p.title}
            </h3>

            <div className="flex items-end justify-between">
              <span className="tag">{p.tag}</span>
              <p className="text-[12px] text-white/30">{p.meta}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div {...reveal(0.1)} className="mt-20 text-center">
        <a
          href="https://github.com/ibrahiimmuhamud"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          <span>All projects</span>
          <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   EXPERIENCE
   ═══════════════════════════════════════════════════════ */

type ExpItem = {
  title: string;
  org: string;
  date: string;
  bullets: string[];
  tag: string;
};

const experience: ExpItem[] = [
  {
    title: "Computer Lab Assistant",
    org: "Bellevue College",
    date: "Sep 2025 – Present",
    tag: "operations",
    bullets: [
      "Weekly audits of equipment, reducing lab downtime by 30% for 20k+ students.",
      "Front-line support for ~150 students per week, 85%+ first-contact resolution.",
    ],
  },
  {
    title: "Changemakers in Computing",
    org: "University of Washington",
    date: "Jul – Aug 2025",
    tag: "product",
    bullets: [
      "6-person team prototyping a web + mobile concept for a social-impact challenge.",
      "Delivered a pitch to a Microsoft judge panel.",
    ],
  },
  {
    title: "Pre-Apprenticeship in Software Dev",
    org: "Computing For All",
    date: "Jan – Jun 2025",
    tag: "engineering",
    bullets: [
      "3+ projects: product specs, Figma designs, and implementation in a 5-person peer group.",
      "100+ hours of coursework in Python, JavaScript, HTML/CSS, Figma.",
    ],
  },
  {
    title: "CE&S Summer Camp",
    org: "Microsoft",
    date: "Aug 2025",
    tag: "career",
    bullets: [
      "Networked with 50+ professionals across CE&S, Xbox, Azure, and AI/Copilot.",
    ],
  },
  {
    title: "Lead Social Media Manager",
    org: "Tamkeen Youth",
    date: "May 2022 – Present",
    tag: "leadership",
    bullets: [
      "Managed design, editing, and event promotion, increasing attendance by 45%.",
      "Led weekly meetings and mentored team members across multiple initiatives.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-[1100px] px-6 py-[180px] text-center">
      <motion.h2
        {...reveal()}
        className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white"
      >
        Experience
      </motion.h2>
      <motion.p
        {...reveal(0.08)}
        className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.7] text-[#A0A0A0]"
      >
        Programs and roles where I practiced product thinking,
        teamwork, and execution.
      </motion.p>

      <div className="mx-auto mt-16 grid max-w-[900px] gap-4 text-left">
        {experience.map((e, i) => (
          <motion.div
            key={e.title}
            {...reveal(0.06 + i * 0.06)}
            className="rounded-[10px] border border-white/[0.05] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.05]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-white">
                  {e.title}
                </h3>
                <p className="mt-0.5 text-[13px] text-white/40">{e.org}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="tag">{e.tag}</span>
                <span className="text-[12px] text-white/25">{e.date}</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {e.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[14px] leading-[1.65] text-white/60"
                >
                  <span className="mt-[7px] block h-[4px] w-[4px] shrink-0 rounded-full bg-white/20" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   RESUME
   ═══════════════════════════════════════════════════════ */

export function Resume() {
  return (
    <section id="resume" className="relative mx-auto max-w-[1100px] px-6 pb-[100px]">
      <motion.div
        {...reveal()}
        className="rounded-[10px] border border-white/[0.05] bg-white/[0.03] p-8 backdrop-blur-sm"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/30">
              Resume
            </p>
            <p className="mt-2 text-[17px] font-semibold text-white">
              Education, experience, and skills at a glance.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>Open PDF</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/resume.pdf" download className="btn-ghost">
              Download
              <FileText className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-[8px] border border-white/[0.05]">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="block h-[min(72vh,820px)] w-full"
            aria-label="Resume PDF"
          >
            <p className="p-6 text-[14px] text-white/50">
              Your browser cannot display the PDF.{" "}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-white underline">
                Open it here
              </a>
              .
            </p>
          </object>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════════════ */

export function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: "ibrahiimmmedinaacademy@gmail.com", href: "mailto:ibrahiimmmedinaacademy@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 (425) 500-6832", href: "tel:+14255006832" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/ibrahiimmuhamud", href: "https://www.linkedin.com/in/ibrahiimmuhamud/" },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-[1100px] px-6 pb-[100px] text-center">
      <motion.p
        {...reveal()}
        className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/30"
      >
        Contact
      </motion.p>
      <motion.h2
        {...reveal(0.08)}
        className="mx-auto mt-4 max-w-[640px] text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-white"
      >
        For opportunities, collaborations, or just to say hi.
      </motion.h2>

      <div className="mt-12 grid grid-cols-12 gap-4 text-left">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.label === "LinkedIn" ? "_blank" : undefined}
            rel={l.label === "LinkedIn" ? "noreferrer" : undefined}
            {...reveal(0.08 + i * 0.06)}
            className="group col-span-12 rounded-[10px] border border-white/[0.05] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.06] md:col-span-4"
          >
            <l.icon className="mb-4 h-5 w-5 text-white/20 transition-colors duration-300 group-hover:text-white/60" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
              {l.label}
            </p>
            <p className="mt-1.5 text-[14px] font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
              {l.value}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1100px] border-t border-white/[0.05] px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-[12px] text-white/25">
          &copy; {new Date().getFullYear()} Ibrahiim Muhamud
        </p>
        <p className="text-[12px] text-white/15">
          Built in Redmond, WA
        </p>
      </div>
    </footer>
  );
}
