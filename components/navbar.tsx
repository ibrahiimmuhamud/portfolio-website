"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease }}
      className="pointer-events-none fixed top-0 left-0 z-50 w-full px-4 pt-4"
    >
      <nav
        className="pointer-events-auto mx-auto flex h-[52px] max-w-[1100px] items-center justify-between rounded-full px-7"
        style={{
          background: "rgba(17, 17, 17, 0.6)",
          backdropFilter: "blur(20px) saturate(1.6)",
          WebkitBackdropFilter: "blur(20px) saturate(1.6)",
          boxShadow: "0 4px 80px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Link
          href="/"
          className="text-[13px] font-semibold tracking-[-0.01em] text-white"
        >
          IM
        </Link>

        <ul className="hidden items-center gap-[1.8em] md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13px] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/ibrahiimmuhamud/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-white/40 transition-colors duration-300 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/ibrahiimmuhamud"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-white/40 transition-colors duration-300 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
