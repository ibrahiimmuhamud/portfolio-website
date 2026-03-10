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
        className="pointer-events-auto mx-auto flex h-14 max-w-[1100px] items-center justify-between rounded-full px-6"
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
          className="flex min-h-[48px] items-center text-base font-semibold tracking-[-0.01em] text-white"
        >
          IM
        </Link>

        {/* 48px touch target on each link via min-h + padding */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex min-h-[48px] items-center rounded-full px-4 text-base text-[#A1A1AA] transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons — 48px touch target via p-3 */}
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/ibrahiimmuhamud/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-[#A1A1AA] transition-colors duration-300 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/ibrahiimmuhamud"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-[#A1A1AA] transition-colors duration-300 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
