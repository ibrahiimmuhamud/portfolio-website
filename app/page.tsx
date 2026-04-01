import Image from "next/image";
import SiteScripts from "@/components/SiteScripts";

export default function Home() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain" />

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="tape-nav">
        <div className="tape-strip">
          <span className="nav-icon">
            <i className="fa-solid fa-square-pen" />
          </span>
          <a href="#about">about</a>
          <a href="#education">education</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="nav-resume"
          >
            <i className="fa-solid fa-file-lines" /> resume
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="hero" id="home">
        <canvas id="hero-canvas" />
        <div className="deco-ring deco-ring-1" />
        <div className="deco-ring deco-ring-2" />

        <div className="hero-content">
          <p className="hero-label sf-round">Aspiring Product Manager</p>

          <h1 className="hero-name">
            Ibrahiim
            <br />
            <em>Muhamud.</em>
          </h1>

          <p className="hero-sub sf-round" id="typewriter" />

          {/* PM Brief card */}
          <div className="hero-brief">
            <div className="brief-bar">
              <span className="b-dot b-red" />
              <span className="b-dot b-yellow" />
              <span className="b-dot b-green" />
              <span className="brief-title">ibrahiim@uw ~ brief.md</span>
            </div>
            <div className="brief-body">
              <p>
                <span className="b-prompt">$</span> cat about.txt
              </p>
              <p className="b-out">school : UW iSchool, Informatics &#39;29</p>
              <p className="b-out">now    : Running Start @ Bellevue College</p>
              <p className="b-out">focus  : users × business × engineering</p>
              <p className="b-out">based  : Redmond, WA</p>
              <p>
                <span className="b-prompt">$</span> echo $STATUS
              </p>
              <p className="b-out">
                Open to PM internships <span className="b-blink">▌</span>
              </p>
            </div>
          </div>
        </div>

        <div className="torn-bottom" />
      </section>

      {/* ── Stats strip ─────────────────────────────────────── */}
      <div className="stats-strip">
        <div className="stat-item">
          <span className="stat-num sf-round" data-target="20" data-suffix="k+">0k+</span>
          <span className="stat-label">Students served</span>
        </div>
        <div className="stat-item">
          <span className="stat-num sf-round" data-target="30" data-suffix="%">0%</span>
          <span className="stat-label">Lab downtime cut</span>
        </div>
        <div className="stat-item">
          <span className="stat-num sf-round" data-target="5" data-suffix="+">0+</span>
          <span className="stat-label">Programs & roles</span>
        </div>
        <div className="stat-item">
          <span className="stat-num sf-round" data-target="2026" data-suffix="">0</span>
          <span className="stat-label">UW iSchool start</span>
        </div>
      </div>

      {/* ── Microsoft Discovery Intern ──────────────────────── */}
      <div className="ms-announce-section reveal">
        <div className="ms-announce-ticker">
          <div className="ms-announce-ticker-inner">
            <span>✦ MICROSOFT DISCOVERY PROGRAM · INCOMING INTERN · REDMOND, WA · SUMMER 2026 · MICROSOFT DISCOVERY PROGRAM · INCOMING INTERN · REDMOND, WA · SUMMER 2026 · </span>
            <span>✦ MICROSOFT DISCOVERY PROGRAM · INCOMING INTERN · REDMOND, WA · SUMMER 2026 · MICROSOFT DISCOVERY PROGRAM · INCOMING INTERN · REDMOND, WA · SUMMER 2026 · </span>
          </div>
        </div>
        <div className="ms-announce-card">
          <div className="ms-announce-logo">
            <Image src="/logos/microsoft.png" alt="Microsoft" width={48} height={48} quality={100} style={{ objectFit: "contain" }} />
          </div>
          <div className="ms-announce-content">
            <span className="ms-announce-label">Discovery Program · Summer 2026</span>
            <p className="ms-announce-title">Incoming Microsoft Discovery Intern</p>
            <p className="ms-announce-location">📍 Redmond, WA</p>
          </div>
          <span className="ms-announce-badge">Selected</span>
        </div>
      </div>

      {/* ── About ───────────────────────────────────────────── */}
      <section className="section about-section" id="about">
        <div className="section-tape section-tape--top sf-round">about me</div>

        <div className="about-card reveal">
          <div className="paperclip" />
          <h2 className="section-title">Hey, I&apos;m Ibrahiim.</h2>
          <p>
            I&apos;m completing both a high school diploma and an Associate of
            Arts at <strong>Bellevue College</strong> through Running Start.
            Next fall I join the <strong>University of Washington iSchool</strong>{" "}
            as an <strong>Informatics direct admit</strong>, focused on product
            management and human-centered design.
          </p>
          <p>
            I&apos;ve worked as a{" "}
            <strong>Computer Lab Assistant at Bellevue College</strong>, serving
            20k+ students, and was selected for{" "}
            <strong>Changemakers in Computing at the Paul G. Allen School</strong>{" "}
            and <strong>Microsoft&apos;s CE&amp;S Summer Camp</strong>. I&apos;m
            drawn to product because it sits at the intersection of users,
            business, and engineering — and I care about making technology that
            actually feels human.
          </p>
          <p>
            Originally from <strong>Redmond, WA</strong>. I&apos;ve led
            social media and community work at Tamkeen Youth, and completed a
            pre-apprenticeship in software development at Computing For All.
          </p>

          <div className="skills-block">
            <p className="skills-label sf-round">tools &amp; skills</p>
            <div className="tag-row">
              <span className="tag"><i className="fa-brands fa-figma" /> Figma</span>
              <span className="tag">Product Thinking</span>
              <span className="tag">User Research</span>
              <span className="tag"><i className="fa-brands fa-react" /> React</span>
              <span className="tag">Next.js</span>
              <span className="tag"><i className="fa-brands fa-python" /> Python</span>
            </div>
            <div className="tag-row" style={{ marginTop: "0.4rem" }}>
              <span className="tag">Prototyping</span>
              <span className="tag">Roadmapping</span>
              <span className="tag">JavaScript</span>
              <span className="tag">HTML / CSS</span>
              <span className="tag">Data Analysis</span>
            </div>
          </div>

          <p className="about-sig">— Ibrahiim, Redmond WA</p>
        </div>
      </section>

      {/* ── Education ───────────────────────────────────────── */}
      <section className="section edu-section" id="education">
        <div
          className="section-header-strip reveal"
          style={{ display: "flex", alignItems: "center" }}
        >
          <h2>Education</h2>
        </div>

        <div className="bento-grid">

          {/* UW iSchool — primary */}
          <div className="bento-card bc-7 reveal" style={{ ["--delay" as string]: "0.05s" }}>
            <div className="logo-avatar--wide">
              <Image src="/logos/uwischool-banner.jpg" alt="UW iSchool" width={160} height={32} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <span className="card-eyebrow">Fall 2026 – Expected 2030</span>
            <p className="card-title">B.S. Informatics</p>
            <p className="card-company">University of Washington Information School · Seattle, WA</p>
            <ul className="card-bullets">
              <li>Direct admit to the UW Information School, one of the most competitive programs in the country for human-centered computing.</li>
              <li>Informatics is a distinct interdisciplinary degree covering human-computer interaction, product design, data, and information systems.</li>
            </ul>
            <div className="card-tag-row">
              <span className="card-tag">Product</span>
              <span className="card-tag">HCI</span>
              <span className="card-tag">Informatics</span>
            </div>
          </div>

          {/* Bellevue College */}
          <div className="bento-card bc-5 reveal" style={{ ["--delay" as string]: "0.1s" }}>
            <div className="logo-avatar">
              <Image src="/logos/bellevue.jpg" alt="Bellevue College" width={50} height={50} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <span className="card-eyebrow">2024 – 2026</span>
            <p className="card-title">Associate of Arts, Running Start</p>
            <p className="card-company">Bellevue College · Bellevue, WA</p>
            <ul className="card-bullets">
              <li>Completing both a high school diploma and A.A. concurrently through Running Start.</li>
              <li>Worked on campus as a Computer Lab Assistant while enrolled.</li>
            </ul>
            <div className="card-tag-row">
              <span className="card-tag">Running Start</span>
              <span className="card-tag">A.A.</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────── */}
      <section className="section work-section" id="experience">
        <div
          className="section-header-strip reveal"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <h2>Experience</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="nav-resume sf-round"
            style={{ marginLeft: "1.5rem", fontSize: "1.1rem" }}
          >
            <i className="fa-solid fa-file-lines" /> résumé
          </a>
        </div>

        <div className="bento-grid">

          {/* Computer Lab Assistant — BC */}
          <div className="bento-card bc-7 reveal" style={{ ["--delay" as string]: "0.05s" }}>
            <div className="logo-avatar">
              <Image src="/logos/bellevue.jpg" alt="Bellevue College" width={50} height={50} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <span className="card-eyebrow">Sep 2025 – Present</span>
            <p className="card-title">Computer Lab Assistant</p>
            <p className="card-company">Bellevue College · Bellevue, WA</p>
            <ul className="card-bullets">
              <li>Weekly audits of equipment, reducing lab downtime by <strong>30%</strong> for 20k+ students.</li>
              <li>Front-line support for ~150 students per week, <strong>85%+</strong> first-contact resolution.</li>
            </ul>
            <div className="card-tag-row">
              <span className="card-tag">Operations</span>
              <span className="card-tag">Support</span>
              <span className="card-tag">Documentation</span>
            </div>
          </div>

          {/* Microsoft CE&S */}
          <div className="bento-card bc-5 reveal" style={{ ["--delay" as string]: "0.1s" }}>
            <div className="logo-avatar">
              <Image src="/logos/microsoft.png" alt="Microsoft" width={50} height={50} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <span className="card-eyebrow">Aug 2025</span>
            <p className="card-title">CE&amp;S Summer Camp</p>
            <p className="card-company">Microsoft · Redmond, WA</p>
            <ul className="card-bullets">
              <li>Networked with <strong>50+ professionals</strong> across CE&amp;S, Xbox, Azure, and AI/Copilot.</li>
            </ul>
            <div className="card-tag-row">
              <span className="card-tag">Networking</span>
              <span className="card-tag">Industry</span>
            </div>
          </div>

          {/* Paul G. Allen — Changemakers */}
          <div className="bento-card bc-5 reveal" style={{ ["--delay" as string]: "0.15s" }}>
            <div className="logo-avatar--wide">
              <Image src="/logos/paulgallen-banner.png" alt="Paul G. Allen School of CSE" width={140} height={32} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <span className="card-eyebrow">Jul – Aug 2025</span>
            <p className="card-title">Changemakers in Computing</p>
            <p className="card-company">Paul G. Allen School of CSE · Seattle, WA</p>
            <ul className="card-bullets">
              <li>6-person team prototyping a web + mobile concept for a social-impact challenge.</li>
              <li>Delivered a pitch to a <strong>Microsoft judge panel</strong>.</li>
              <li>Awarded <strong>Most Creative Capstone Project</strong> out of all teams.</li>
            </ul>
            <div className="card-tag-row">
              <span className="card-tag">Product</span>
              <span className="card-tag">Figma</span>
              <span className="card-tag">Prototype</span>
            </div>
          </div>

          {/* Computing For All */}
          <div className="bento-card bc-7 reveal" style={{ ["--delay" as string]: "0.2s" }}>
            <div className="logo-avatar--wide">
              <Image src="/logos/computingforall-banner.png" alt="Computing For All" width={140} height={32} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <span className="card-eyebrow">Jan 2025 – Jan 2026</span>
            <p className="card-title">Pre-Apprenticeship in Software Development</p>
            <p className="card-company">Computing For All</p>
            <ul className="card-bullets">
              <li>3+ projects: product specs, Figma designs, and implementation in a 5-person peer group.</li>
              <li><strong>100+ hours</strong> of coursework in Python, JavaScript, HTML/CSS, Figma.</li>
            </ul>
            <div className="card-tag-row">
              <span className="card-tag">Python</span>
              <span className="card-tag">JavaScript</span>
              <span className="card-tag">Figma</span>
            </div>
          </div>

          {/* Tamkeen Youth — full width, horizontal */}
          <div className="bento-card bc-12 bento-card--horizontal reveal" style={{ ["--delay" as string]: "0.25s" }}>
            <div className="logo-avatar" style={{ marginBottom: 0, flexShrink: 0 }}>
              <Image src="/logos/tamkeen.png" alt="Tamkeen Youth" width={50} height={50} quality={100} style={{ objectFit: "contain" }} />
            </div>
            <div className="bento-card-body">
              <span className="card-eyebrow">May 2022 – Present</span>
              <p className="card-title">Lead Social Media Manager</p>
              <p className="card-company">Tamkeen Youth</p>
              <ul className="card-bullets">
                <li>Managed design, editing, and event promotion — increasing attendance by <strong>45%</strong>.</li>
                <li>Led weekly meetings and mentored team members across multiple initiatives.</li>
              </ul>
              <div className="card-tag-row">
                <span className="card-tag">Leadership</span>
                <span className="card-tag">Design</span>
                <span className="card-tag">Community</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────── */}
      <section className="section projects-section" id="projects">
        <div className="section-tape section-tape--left sf-round">projects</div>

        <h2 className="projects-heading reveal">Things I&apos;ve Built</h2>

        {/* Under construction banner */}
        <div className="construction-wrap reveal" style={{ ["--delay" as string]: "0.05s" }}>
          <div className="caution-tape">
            <div className="caution-tape-inner">
              <span className="caution-text-run">⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠</span>
              <span className="caution-text-run">⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠</span>
            </div>
          </div>
          <div className="construction-body">
            <span className="construction-emoji">🏗️</span>
            <p className="construction-title">More projects on the way.</p>
            <p className="construction-sub">
              Currently building — check back soon for case studies,
              prototypes, and things I&apos;ve shipped.
            </p>
            <div className="construction-badges">
              <span className="construction-badge">Product</span>
              <span className="construction-badge">Design</span>
              <span className="construction-badge">Engineering</span>
              <span className="construction-badge">Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Personal Experiments — the one real card */}
        <div className="polaroid-grid" style={{ maxWidth: "320px" }}>
          <div className="pol-container reveal" style={{ ["--rot" as string]: "-1.5deg", ["--delay" as string]: "0.15s" }}>
            <div className="polaroid">
              <div className="polaroid-img pol-img--3" style={{ ["--tz" as string]: "42px" }} />
              <div className="polaroid-caption">
                <p className="pol-title sf-round" style={{ ["--tz" as string]: "28px" }}>Personal Experiments</p>
                <p className="pol-desc" style={{ ["--tz" as string]: "18px" }}>
                  Smaller projects exploring scheduling tools, student
                  workflows, and how to explain complex systems clearly.
                </p>
                <div className="tag-row" style={{ ["--tz" as string]: "12px" }}>
                  <span className="tag tag--dark">Next.js</span>
                  <span className="tag tag--dark">React</span>
                  <span className="tag tag--dark">Python</span>
                </div>
                <span className="pol-award sf-round" style={{ ["--tz" as string]: "36px" }}>Ongoing</span>
                <a
                  href="https://github.com/ibrahiimmuhamud"
                  target="_blank"
                  rel="noopener"
                  className="pol-github sf-round"
                  style={{ ["--tz" as string]: "8px" }}
                >
                  <i className="fa-brands fa-github" /> view on github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-name sf-round">Ibrahiim Muhamud</p>
          <p className="footer-tagline">
            Always open to connecting about PM internships, product
            collaborations, or just talking about building things people
            actually use.
          </p>
          <div className="footer-links">
            <a href="mailto:ibrahiimmmedinaacademy@gmail.com">
              <i className="fa-solid fa-envelope" /> email
            </a>
            <span>·</span>
            <a href="https://github.com/ibrahiimmuhamud" target="_blank" rel="noopener">
              <i className="fa-brands fa-github" /> github
            </a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/ibrahiimmuhamud/" target="_blank" rel="noopener">
              <i className="fa-brands fa-linkedin" /> linkedin
            </a>
          </div>
          <p className="footer-credit sf-round">built in Redmond, WA ✦</p>
        </div>
      </footer>

      <SiteScripts />
    </>
  );
}
