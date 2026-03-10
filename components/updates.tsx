"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay: 0.12 + i * 0.08,
    },
  }),
};

type ProjectCardProps = {
  title: string;
  tag: string;
  description: string;
  meta: string;
  accent: "blue" | "amber" | "plum";
  href?: string;
  github?: string;
  index: number;
};

export function Updates() {
  const cards: ProjectCardProps[] = [
    {
      title: "Lab Support Systems",
      tag: "Real-world operations",
      description:
        "Patterns and small tools from my work as a Computer Lab Assistant, focused on keeping labs available for 20k+ students.",
      meta: "Triage flows · lightweight documentation · small automations",
      accent: "blue",
      index: 0,
    },
    {
      title: "Changemakers Prototypes",
      tag: "Team product work",
      description:
        "A collaborative website + mobile concept built for a social-impact challenge, from problem framing to live pitch.",
      meta: "Figma flows · story arc for pitch · interactive prototype",
      accent: "plum",
      index: 1,
    },
    {
      title: "Personal Experiments",
      tag: "In progress",
      description:
        "Smaller projects that explore scheduling tools, student workflows, and how to explain complex systems more clearly.",
      meta: "Next.js · React · basic data modeling",
      accent: "amber",
      index: 2,
    },
  ];

  return (
    <section id="updates" className="relative px-4 pb-24 pt-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--muted-2)]">
            Latest updates
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.03em] text-[color:var(--foreground)] sm:text-3xl">
            Things I’m actively learning and building.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--muted)]">
            These are not just “projects” in a list. They are places where I had to make
            decisions, coordinate with others, and turn ideas into something people can
            actually use.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">
          {cards.map((card, i) => (
            <ProjectCard key={card.title} {...card} index={i} />
          ))}

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
            custom={3}
            className="col-span-12 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)]/80 p-5 text-sm text-[color:var(--muted)] shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-md dark:bg-white/5 md:col-span-5"
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-xs text-[color:var(--foreground)] dark:bg-white/10">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <p>
                  I’m looking for environments where I can keep learning from real users
                  and experienced product leaders.
                </p>
                <p>
                  If you think my experience is a fit for your team, I’d be happy to talk
                  and share more detail.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--foreground)]"
                >
                  Go to contact
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard(props: ProjectCardProps) {
  const { title, tag, description, meta, accent, href, github, index } = props;

  const accentClass =
    accent === "blue"
      ? "from-[#55A5FF] to-[#0067B8]"
      : accent === "plum"
        ? "from-[#B667FF] to-[#6E49A8]"
        : "from-[#FFA462] to-[#B7791F]";

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "col-span-12 rounded-3xl border border-[color:var(--border)]",
        "bg-[color:var(--surface)]/80 p-6 backdrop-blur-md",
        "shadow-[0_18px_60px_rgba(0,0,0,0.10)] dark:bg-white/5",
        index === 0 && "md:col-span-7",
        index === 1 && "md:col-span-5",
        index === 2 && "md:col-span-7"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--muted-2)] dark:bg-white/10">
            {tag}
          </p>
          <h3 className="mt-2 text-base font-semibold tracking-tight text-[color:var(--foreground)] sm:text-lg">
            {title}
          </h3>
        </div>
        <div
          aria-hidden
          className={cn(
            "hidden h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-xs font-semibold text-white shadow-md md:inline-flex",
            accentClass
          )}
        >
          {index + 1}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{description}</p>
      <p className="mt-2 text-xs text-[color:var(--muted-2)]">{meta}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-[color:var(--muted-2)]">
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-black/5 px-3 py-1.5 text-[11px] text-[color:var(--foreground)] transition hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15"
          >
            <Globe className="h-3.5 w-3.5" />
            View live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] px-3 py-1.5 text-[11px] transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}

