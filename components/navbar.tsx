"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  ChevronDown,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/cn";

const navReveal = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  },
};

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <motion.header
      variants={navReveal}
      initial="initial"
      animate="animate"
      className="pointer-events-none sticky top-0 z-50 pt-4"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div
          className={cn(
            "pointer-events-auto flex h-14 items-center justify-between rounded-2xl border",
            "border-[color:var(--border)] bg-[color:var(--surface)]/90 backdrop-blur-md",
            "shadow-[0_16px_60px_rgba(0,0,0,0.10)] dark:shadow-[0_22px_80px_rgba(0,0,0,0.40)]"
          )}
        >
          <div className="flex items-center gap-3 pl-4">
            <Link href="/" className="group flex items-center gap-3">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-[3px] bg-gradient-to-br from-[#55A5FF] via-[#B667FF] to-[#FFA462] shadow-[0_14px_28px_rgba(85,165,255,0.22)]"
              />
              <span className="text-sm font-semibold tracking-tight text-[color:var(--foreground)]">
                Ibrahiim Muhamud
              </span>
            </Link>
            <span className="hidden text-xs text-[color:var(--muted-2)] md:inline">
              Product-minded. Systems-curious.
            </span>
          </div>

          <nav className="hidden items-center gap-1 pr-2 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#updates">
              Updates <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
            </NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <div className="mx-2 h-6 w-px bg-[color:var(--border)]" />

            <a
              href="https://www.linkedin.com/in/ibrahiimmuhamud/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4 text-[color:var(--linkedin)]" />
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ibrahiimmuhamud"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Github className="h-4 w-4 text-[color:var(--github)]" />
              <span className="hidden lg:inline">GitHub</span>
            </a>

            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="ml-1 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/40 px-3 py-2 text-sm text-[color:var(--foreground)] shadow-sm transition hover:bg-white/60 dark:bg-white/10 dark:hover:bg-white/15"
              aria-label="Toggle theme"
            >
              {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="hidden lg:inline">{isDark ? "Dark" : "Light"}</span>
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition hover:bg-black/5 hover:text-[color:var(--foreground)] dark:hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export function ContactPills() {
  const pills = [
    { icon: MapPin, label: "Redmond, WA" },
    { icon: GraduationCap, label: "Running Start · Bellevue College" },
    { icon: FileText, label: "UW iSchool · Informatics (incoming)" },
    { icon: Mail, label: "ibrahiimmmedinaacademy@gmail.com" },
    { icon: Phone, label: "+1 (425) 500-6832" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {pills.map((p) => (
        <div
          key={p.label}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/50 px-3 py-2 text-xs text-[color:var(--muted)] backdrop-blur-md dark:bg-white/5"
        >
          <p.icon className="h-3.5 w-3.5 opacity-80" />
          <span className="whitespace-nowrap">{p.label}</span>
        </div>
      ))}
    </div>
  );
}

