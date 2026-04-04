"use client";

import { useEffect } from "react";

export default function SiteScripts() {
  useEffect(() => {
    /* ── Scroll progress bar ─────────────────────────────── */
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress";
    document.body.prepend(progressBar);

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = `${(scrolled / total) * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── Custom cursor ───────────────────────────────────── */
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot, ring);

    let mx = -100, my = -100, rx = -100, ry = -100;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 3.5}px, ${my - 3.5}px)`;
    };
    document.addEventListener("mousemove", onMouseMove);

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document
      .querySelectorAll("a, button, .polaroid, .timeline-card, .bento-card")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"));
      });

    /* ── Neural network canvas (hero) ────────────────────── */
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;

      const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      resize();
      window.addEventListener("resize", resize, { passive: true });

      const NODE_COUNT = 65;
      const MAX_DIST = 130;
      const nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 0.8,
        pulse: Math.random() * Math.PI * 2,
      }));

      let heroMX = -999, heroMY = -999;
      canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        heroMX = e.clientX - rect.left;
        heroMY = e.clientY - rect.top;
      });
      canvas.addEventListener("mouseleave", () => { heroMX = -999; heroMY = -999; });

      const drawCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const d = Math.hypot(dx, dy);
            if (d < MAX_DIST) {
              const alpha = (1 - d / MAX_DIST) * 0.25;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              // Warm apricot-amber edges
              ctx.strokeStyle = `rgba(193,127,94,${alpha})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }

        nodes.forEach((n) => {
          n.pulse += 0.025;
          const glow = 0.4 + 0.3 * Math.sin(n.pulse);

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(193,127,94,${glow * 0.22})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(230,185,155,${glow})`;
          ctx.fill();

          const mdx = n.x - heroMX;
          const mdy = n.y - heroMY;
          const md = Math.hypot(mdx, mdy);
          if (md < 90 && md > 0) {
            const force = ((90 - md) / 90) * 0.8;
            n.vx += (mdx / md) * force;
            n.vy += (mdy / md) * force;
          }

          const speed = Math.hypot(n.vx, n.vy);
          if (speed > 1.4) {
            n.vx = (n.vx / speed) * 1.4;
            n.vy = (n.vy / speed) * 1.4;
          }

          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
          if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        });

        requestAnimationFrame(drawCanvas);
      };
      requestAnimationFrame(drawCanvas);
    }

    /* ── Typewriter ──────────────────────────────────────── */
    const phrases = [
      "Product Manager & UW Informatics.",
      "building things users actually need.",
      "Redmond, WA.",
      "open to PM internships.",
    ];
    let phraseIndex = 0, charIndex = 0, deleting = false;
    const typer = document.getElementById("typewriter");

    const typeWriter = () => {
      if (!typer) return;
      const current = phrases[phraseIndex];
      if (deleting) {
        typer.textContent = current.slice(0, charIndex--);
        if (charIndex < 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeWriter, 500);
          return;
        }
        setTimeout(typeWriter, 40);
      } else {
        typer.textContent = current.slice(0, charIndex++);
        if (charIndex > current.length) {
          deleting = true;
          setTimeout(typeWriter, 2000);
          return;
        }
        setTimeout(typeWriter, 75);
      }
    };
    setTimeout(typeWriter, 1200);

    /* ── Scroll reveal ───────────────────────────────────── */
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    /* ── Active nav highlight ────────────────────────────── */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".tape-strip a");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("nav-active");
              if (link.getAttribute("href") === `#${entry.target.id}`) {
                link.classList.add("nav-active");
              }
            });
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    /* ── Stats counter ───────────────────────────────────── */
    const runCounter = (el: Element, target: number, suffix: string) => {
      const start = performance.now();
      const dur = 1600;
      const step = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 4);
        el.textContent = Math.floor(ease * target) + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          statsObserver.unobserve(entry.target);
          entry.target
            .querySelectorAll<HTMLElement>(".stat-num[data-target]")
            .forEach((n) =>
              runCounter(n, Number(n.dataset.target), n.dataset.suffix ?? "")
            );
        });
      },
      { threshold: 0.5 }
    );
    const statsStrip = document.querySelector(".stats-strip");
    if (statsStrip) statsObserver.observe(statsStrip);

    /* ── 3D polaroid tilt ────────────────────────────────── */
    document.querySelectorAll<HTMLElement>(".pol-container").forEach((container) => {
      const card = container.querySelector<HTMLElement>(".polaroid");
      if (!card) return;
      const rot = parseFloat(getComputedStyle(container).getPropertyValue("--rot").trim()) || 0;

      container.addEventListener("mousemove", (e: Event) => {
        const me = e as MouseEvent;
        const r = container.getBoundingClientRect();
        const x = ((me.clientX - r.left) / r.width - 0.5) * 28;
        const y = ((me.clientY - r.top) / r.height - 0.5) * 28;
        card.style.transition = "transform 0.07s linear";
        card.style.transform = `rotateZ(${rot}deg) rotateY(${x}deg) rotateX(${-y}deg)`;
        card.style.boxShadow = `${-x * 0.5}px ${y * 0.5 + 14}px 40px rgba(44,42,40,0.18)`;
      });
      container.addEventListener("mouseleave", () => {
        card.style.transition = "transform 0.7s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s";
        card.style.transform = `rotateZ(${rot}deg) rotateY(0deg) rotateX(0deg)`;
        card.style.boxShadow = "";
      });
    });

    /* ── Timeline card ripple ────────────────────────────── */
    document.querySelectorAll<HTMLElement>(".timeline-card").forEach((card) => {
      card.addEventListener("click", (e: Event) => {
        const me = e as MouseEvent;
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        const rect = card.getBoundingClientRect();
        ripple.style.left = `${me.clientX - rect.left}px`;
        ripple.style.top = `${me.clientY - rect.top}px`;
        card.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());
      });
    });

    /* ── Confetti on MS intern hover (canvas-based) ─────── */
    const announceSection = document.querySelector<HTMLElement>(".ms-announce-section");
    if (announceSection) {
      const COLORS = [
        "#FF6B6B", "#FF8E53", "#FFC300", "#4ECDC4",
        "#45B7D1", "#54A0FF", "#5F27CD", "#BB8FCE",
        "#FF9FF3", "#82E0AA", "#FF6348", "#F8C471",
        "#2ECC71", "#E74C3C", "#3498DB", "#9B59B6",
      ];
      let cooldown = false;

      announceSection.addEventListener("mouseenter", () => {
        if (cooldown) return;
        cooldown = true;
        setTimeout(() => { cooldown = false; }, 2200);

        const canvas = document.createElement("canvas");
        canvas.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9996";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d")!;

        const rect = announceSection.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height * 0.3;

        type Piece = {
          x: number; y: number;
          vx: number; vy: number;
          rot: number; rotV: number;
          w: number; h: number;
          color: string;
          shape: "rect" | "circle" | "ribbon";
          opacity: number;
        };

        const pieces: Piece[] = [];
        for (let i = 0; i < 160; i++) {
          const angle = (Math.random() - 0.5) * Math.PI * 1.8 - Math.PI / 2;
          const speed = Math.random() * 16 + 5;
          const w = Math.random() * 10 + 4;
          const shapeRoll = Math.random();
          pieces.push({
            x: originX + (Math.random() - 0.5) * rect.width * 0.5,
            y: originY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            rot: Math.random() * Math.PI * 2,
            rotV: (Math.random() - 0.5) * 0.35,
            w,
            h: shapeRoll > 0.65 ? w * (Math.random() * 0.4 + 0.25) : w,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            shape: shapeRoll > 0.65 ? "rect" : shapeRoll > 0.3 ? "circle" : "ribbon",
            opacity: 1,
          });
        }

        let frame = 0;
        const render = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          frame++;
          let alive = false;

          for (const p of pieces) {
            p.vy += 0.38;
            p.vx *= 0.992;
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.rotV;
            if (frame > 110) p.opacity -= 0.008;
            if (p.opacity <= 0 || p.y > canvas.height + 40) continue;
            alive = true;

            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;

            if (p.shape === "circle") {
              ctx.beginPath();
              ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
              ctx.fill();
            } else if (p.shape === "ribbon") {
              ctx.fillRect(-p.w * 0.15, -p.w, p.w * 0.3, p.w * 2);
            } else {
              ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            }
            ctx.restore();
          }

          if (alive) requestAnimationFrame(render);
          else canvas.remove();
        };
        requestAnimationFrame(render);
      });
    }

    /* ── Parallax deco rings ─────────────────────────────── */
    const rings = document.querySelectorAll<HTMLElement>(".deco-ring");
    const onScrollParallax = () => {
      const y = window.scrollY;
      if (rings[0]) rings[0].style.transform = `translateY(${y * 0.18}px)`;
      if (rings[1]) rings[1].style.transform = `translateY(${y * 0.09}px)`;
    };
    window.addEventListener("scroll", onScrollParallax, { passive: true });

    /* ── Dot-grid background canvas ──────────────────────── */
    (() => {
      const bg = document.createElement("canvas");
      bg.id = "dot-bg";
      document.body.prepend(bg);
      const ctx = bg.getContext("2d")!;

      const GAP = 34, DOT_R = 1.6, MOUSE_R = 100;
      const STRENGTH = 52, RETURN = 0.07;
      const PULSE_CHANCE = 0.0007, PARALLAX_RATE = 0.3;

      let W: number, H: number;
      let dots: Array<{
        ox: number; oy: number; x: number; y: number;
        vx: number; vy: number; bright: number; pulse: number; ps: number;
      }> = [];
      let bgMx = -9999, bgMy = -9999;

      const buildGrid = () => {
        const dpr = devicePixelRatio;
        const g = GAP * dpr;
        const pageH = Math.round(document.body.scrollHeight * dpr);
        const totalH = H + pageH * PARALLAX_RATE;
        const cols = Math.floor(W / g);
        const rows = Math.floor(totalH / g);
        const ox = (W - cols * g) / 2;
        dots = [];
        for (let r = 0; r <= rows; r++) {
          for (let c = 0; c <= cols; c++) {
            const x = ox + c * g, y = r * g;
            dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0,
              bright: 0.18 + Math.random() * 0.12,
              pulse: 0, ps: 0.03 + Math.random() * 0.025 });
          }
        }
      };

      const resize = () => {
        const dpr = devicePixelRatio;
        W = bg.width = Math.round(window.innerWidth * dpr);
        H = bg.height = Math.round(window.innerHeight * dpr);
        buildGrid();
      };

      document.addEventListener("mousemove", (e) => {
        const dpr = devicePixelRatio;
        bgMx = e.clientX * dpr;
        bgMy = e.clientY * dpr;
      }, { passive: true });

      const tick = () => {
        const dpr = devicePixelRatio;
        const mr = MOUSE_R * dpr;
        const shift = window.scrollY * PARALLAX_RATE * dpr;
        const gridMy = bgMy + shift;

        // Warm cream background
        ctx.fillStyle = "#FDFBF7";
        ctx.fillRect(0, 0, W, H);
        ctx.save();
        ctx.translate(0, -shift);

        for (const d of dots) {
          if (d.y < shift - mr || d.y > shift + H + mr) continue;
          const dx = d.x - bgMx;
          const dy = d.y - gridMy;
          const dist = Math.hypot(dx, dy);
          if (dist < mr && dist > 0) {
            const f = (mr - dist) / mr;
            d.vx += (dx / dist) * f * STRENGTH * 0.15;
            d.vy += (dy / dist) * f * STRENGTH * 0.15;
          }
          d.vx += (d.ox - d.x) * RETURN;
          d.vy += (d.oy - d.y) * RETURN;
          d.vx *= 0.75; d.vy *= 0.75;
          d.x += d.vx; d.y += d.vy;

          if (Math.random() < PULSE_CHANCE) d.pulse = 1;
          if (d.pulse > 0) d.pulse = Math.max(0, d.pulse - d.ps);

          const b = d.bright + d.pulse * 0.65;
          const mf = dist < mr ? 0.4 * (1 - dist / mr) : 0;
          const fb = Math.min(1, b + mf);

          // Warm apricot dots: from warm grey to apricot at peak
          const rr = Math.round(180 + fb * 13);
          const gg = Math.round(165 - fb * 38);
          const bb = Math.round(155 - fb * 61);
          const aa = 0.10 + fb * 0.55;

          ctx.beginPath();
          ctx.arc(d.x, d.y, (DOT_R + d.pulse * 0.6) * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rr},${gg},${bb},${aa})`;
          ctx.fill();
        }

        ctx.restore();
        requestAnimationFrame(tick);
      };

      resize();
      window.addEventListener("resize", resize, { passive: true });
      requestAnimationFrame(tick);
    })();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollParallax);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return null;
}
