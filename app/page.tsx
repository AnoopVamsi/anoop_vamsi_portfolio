"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  ContactRound,
  Download,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { portfolio } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease }}
    >
      {children}
    </motion.div>
  );
}

function Network() {
  const points = [
    [30, 440],
    [180, 260],
    [345, 350],
    [510, 160],
    [690, 270],
    [870, 90],
    [250, 80],
    [450, 520],
    [790, 500],
    [270, 560],
  ];

  return (
    <div className="network" aria-hidden="true">
      <svg viewBox="0 0 900 640" preserveAspectRatio="xMidYMid slice">
        <g>
          <path d="M30 440L180 260L345 350L510 160L690 270L870 90" />
          <path d="M180 260L250 80M345 350L450 520M510 160L690 270L790 500M30 440L270 560" />
        </g>

        {points.map(([cx, cy], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r={index % 3 === 0 ? 7 : 4}
          />
        ))}
      </svg>
    </div>
  );
}

function MagneticLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16 });
  const springY = useSpring(y, { stiffness: 180, damping: 16 });

  return (
    <motion.a
      href={href}
      className={secondary ? "button secondary" : "button"}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rectangle = event.currentTarget.getBoundingClientRect();

        x.set(
          (event.clientX - rectangle.left - rectangle.width / 2) * 0.15,
        );
        y.set(
          (event.clientY - rectangle.top - rectangle.height / 2) * 0.15,
        );
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

function Cursor() {
  const x = useMotionValue(-50);
  const y = useMotionValue(-50);
  const springX = useSpring(x, { stiffness: 500, damping: 35 });
  const springY = useSpring(y, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [x, y]);

  return (
    <motion.div
      className="cursor"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  );
}

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardReference = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  return (
    <motion.div
      ref={cardReference}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      onMouseMove={(event) => {
        if (!cardReference.current) {
          return;
        }

        const rectangle = cardReference.current.getBoundingClientRect();

        rotateY.set(
          ((event.clientX - rectangle.left) / rectangle.width - 0.5) * 5,
        );

        rotateX.set(
          -((event.clientY - rectangle.top) / rectangle.height - 0.5) * 5,
        );
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function Header({
  theme,
  toggle,
}: {
  theme: string;
  toggle: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <header>
      <a className="monogram" href="#top">
        AV<span>.</span>
      </a>

      <nav className={menuOpen ? "open" : ""}>
        {navigation.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme"
          onClick={toggle}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>

        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((currentRole) => {
        return (currentRole + 1) % portfolio.roles.length;
      });
    }, 2400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero reference-hero" id="top">
      <Network />

      <div className="hero-index">PORTFOLIO / 2026</div>

      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="eyebrow"
        >
          Hi, I’m Anoop Vamsi Meduri
        </motion.p>

        <div className="reference-grid">
          <motion.div
            className="hero-role-copy"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <span className="role-kicker">I design &amp; build</span>

            <motion.h1
              key={role}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              {portfolio.roles[role].split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  <br />
                </span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.div
            className="portrait-wrap portrait-stage"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 1, ease }}
          >
            <div className="portrait-halo" />

            <img
              src={`${basePath}/anoop-portrait.png`}
              alt="Anoop Vamsi Meduri"
            />

            <div className="availability">
              <i /> Open to AI/ML opportunities
            </div>
          </motion.div>

          <motion.div
            className="hero-summary"
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease }}
          >
            <span>Turning data into decisions</span>

            <p>
              I build reliable Generative AI, machine-learning, and data
              systems for complex enterprise problems.
            </p>

            <div className="hero-ctas">
              <MagneticLink href="#projects">
                View my work <ArrowDown />
              </MagneticLink>

              <MagneticLink href={portfolio.links.resume} secondary>
                Resume <Download />
              </MagneticLink>
            </div>
          </motion.div>
        </div>

        <div className="reference-footer">
          <span>↓ Scroll to explore</span>

          <div className="socials">
            <a href={portfolio.links.linkedin} aria-label="LinkedIn">
              <ContactRound />
            </a>

            <a href={portfolio.links.github} aria-label="GitHub">
              <Code2 />
            </a>

            <a href="#contact" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const statistics = [
    ["7+", "Years of experience"],
    ["04", "Major industries"],
    ["03", "Cloud platforms"],
    ["∞", "End-to-end delivery"],
  ];

  return (
    <section id="about" className="section about">
      <Reveal>
        <p className="section-label">01 / About</p>

        <div className="about-grid">
          <h2>
            Engineering AI
            <br />
            with <em>evidence.</em>
          </h2>

          <div>
            <p className="lead">
              I’m a Senior AI/ML Engineer with 7+ years of experience building
              data platforms, machine-learning solutions, and enterprise
              Generative AI applications.
            </p>

            <p>
              My recent work focuses on RAG systems, AI agents, LLM evaluation,
              document intelligence, and production-grade AI applications
              across AWS, Azure, and GCP.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="stats">
        {statistics.map(([value, label], index) => (
          <Reveal key={label}>
            <div className="stat">
              <span>0{index + 1}</span>
              <strong>{value}</strong>
              <p>{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section experience">
      <Reveal>
        <p className="section-label">02 / Experience</p>

        <div className="section-head">
          <h2>
            Where I’ve
            <br />
            <em>made impact.</em>
          </h2>

          <p>
            A career spanning financial services, healthcare, mortgage
            technology, analytics, and enterprise data.
          </p>
        </div>
      </Reveal>

      <div className="timeline">
        {portfolio.experiences.map((experience, index) => (
          <motion.button
            key={experience.company}
            className={`experience-row ${
              active === index ? "active" : ""
            }`}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            aria-expanded={active === index}
          >
            <span className="timeline-dot" />
            <span className="exp-num">0{index + 1}</span>
            <span className="exp-company">{experience.company}</span>
            <span className="exp-role">{experience.role}</span>
            <span className="exp-period">{experience.period}</span>
            <ArrowUpRight />

            <motion.p
              className="exp-detail"
              animate={{
                height: active === index ? "auto" : 0,
                opacity: active === index ? 1 : 0,
              }}
            >
              {experience.detail}
            </motion.p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [open, setOpen] = useState(0);

  return (
    <section id="projects" className="section projects">
      <Reveal>
        <p className="section-label">03 / Selected work</p>

        <div className="section-head">
          <h2>
            Systems built for
            <br />
            <em>the real world.</em>
          </h2>

          <p>
            Selected projects across retrieval, intelligent agents, secure
            enterprise AI, and evaluation.
          </p>
        </div>
      </Reveal>

      <div className="project-track">
        {portfolio.projects.map((project, index) => (
          <TiltCard
            key={project.title}
            className={`project-card p${index}`}
          >
            <div className="project-top">
              <span>{project.kicker}</span>
              <b>{project.number}</b>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-actions">
              <button
                onClick={() => {
                  setOpen(open === index ? -1 : index);
                }}
              >
                {open === index ? "Close case study" : "View case study"}
                <ArrowUpRight />
              </button>

              {project.github && (
                <a href={project.github}>
                  View GitHub <Code2 />
                </a>
              )}
            </div>

            <motion.div
              className="case-study"
              animate={{
                height: open === index ? "auto" : 0,
                opacity: open === index ? 1 : 0,
              }}
            >
              {Object.entries(project.details).map(([title, value]) => (
                <div key={title}>
                  <span>{title}</span>
                  <p>{value}</p>
                </div>
              ))}

              <div>
                <span>Technology Stack</span>
                <p>{project.stack.join(" · ")}</p>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

const pipeline = [
  "Documents",
  "Extraction",
  "Chunking",
  "Embeddings",
  "Vector DB",
  "Hybrid Retrieval",
  "Reranking",
  "LLM",
  "Grounded Answer",
];

function Architecture() {
  return (
    <section className="section architecture">
      <Reveal>
        <p className="section-label">04 / Architecture</p>

        <div className="section-head">
          <h2>
            From document to
            <br />
            <em>grounded answer.</em>
          </h2>

          <p>
            A modern retrieval pipeline designed to make model output relevant,
            traceable, and useful.
          </p>
        </div>
      </Reveal>

      <Reveal className="pipeline">
        <div className="flow-line">
          <motion.i
            initial={{ left: "0%" }}
            whileInView={{ left: "98%" }}
            viewport={{ once: false }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {pipeline.map((item, index) => (
          <div className="node" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <Reveal>
        <p className="section-label">05 / Capabilities</p>

        <div className="section-head">
          <h2>
            Deep expertise.
            <br />
            <em>Practical delivery.</em>
          </h2>

          <p>Tools are selected for the problem and business requirements.</p>
        </div>
      </Reveal>

      <div className="skill-grid">
        {Object.entries(portfolio.skills).map(
          ([group, items], index) => (
            <Reveal key={group}>
              <div className="skill-group">
                <span>0{index + 1}</span>
                <h3>{group}</h3>

                <div>
                  {items.map((item) => (
                    <b key={item}>{item}</b>
                  ))}
                </div>
              </div>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <Network />

      <Reveal>
        <p className="section-label">06 / Contact</p>

        <h2>
          Let’s build intelligent
          <br />
          systems that work in
          <br />
          <em>the real world.</em>
        </h2>

        <div className="contact-links">
          <a href={portfolio.email ? `mailto:${portfolio.email}` : "mailto:"}>
            Email me <ArrowUpRight />
          </a>

          <a href={portfolio.links.linkedin}>
            Connect on LinkedIn <ArrowUpRight />
          </a>

          <a href={portfolio.links.github}>
            View GitHub <ArrowUpRight />
          </a>

          <a href={portfolio.links.resume}>
            Download resume <Download />
          </a>
        </div>
      </Reveal>

      <footer>
        <span>© 2026 Anoop Vamsi Meduri</span>
        <span>AI / ML / DATA</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <main>
      <Cursor />

      <Header
        theme={theme}
        toggle={() => {
          setTheme((currentTheme) => {
            return currentTheme === "dark" ? "light" : "dark";
          });
        }}
      />

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Architecture />
      <Skills />
      <Contact />
    </main>
  );
}