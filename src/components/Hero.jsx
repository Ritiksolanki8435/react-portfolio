/** @format */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbArrowDown, TbArrowUpRight, TbCommand, TbDownload } from "react-icons/tb";
import photo from "../assets/ritik-face.webp";
import {
  CONTACT,
  CURRENT_COMPANY,
  HERO_CONTENT,
  HIGHLIGHTS,
  RESUME_URL,
  ROLES,
  SUBTITLE,
  TITLE,
} from "../constants";
import { OPEN_PALETTE_EVENT } from "./CommandPalette";
import LocalTime from "./ui/LocalTime";

const ease = [0.22, 1, 0.36, 1];

const enter = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

// Splits a word into letters that rise in once on load, then lift on hover
// (CSS only). With `gradient`, each letter takes its own step of a quiet
// foreground → muted fade, so the colors follow the theme.
const Letters = ({ text, delay, gradient = false, hoverClass }) =>
  text.split("").map((ch, i) => (
    <motion.span
      key={i}
      className="inline-block"
      initial={{ y: "0.35em", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: delay + i * 0.05, ease }}
    >
      <span
        className={`inline-block cursor-default transition-[transform,color] duration-300 ease-out hover:-translate-y-[0.1em] ${
          gradient ? "text-[color:var(--c)]" : ""
        } ${hoverClass}`}
        style={
          gradient
            ? {
                "--c": `color-mix(in oklab, rgb(var(--fg)) ${Math.round(
                  90 - (i / (text.length - 1)) * 65
                )}%, rgb(var(--muted)))`,
              }
            : undefined
        }
      >
        {ch}
      </span>
    </motion.span>
  ));

const RING_TEXT = "Software developer • Full-stack • Applied AI • ";

// Circular portrait with a slowly rotating text ring. Sized in em, so it
// scales with the headline it sits beside.
const PortraitBadge = () => (
  <motion.span
    initial={{ scale: 0.7, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.45, ease }}
    className="group relative block h-[1.25em] w-[1.25em] shrink-0 md:h-[1em] md:w-[1em]"
  >
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] text-muted"
    >
      <defs>
        <path id="ring-path" d="M50,50 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <text className="fill-current font-mono uppercase" fontSize="7" letterSpacing="1.2">
        <textPath href="#ring-path" textLength="272">
          {RING_TEXT}
        </textPath>
      </text>
    </svg>
    <span className="absolute inset-[17%] overflow-hidden rounded-full border border-fg/15 ring-4 ring-accent/20">
      <img
        src={photo}
        alt="Ritik Solanki"
        width={360}
        height={360}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </span>
    <span className="absolute bottom-[21%] right-[21%] h-[10%] w-[10%] rounded-full border-2 border-page bg-accent" />
  </motion.span>
);

const RoleRotator = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-grid align-top [clip-path:inset(0)]">
      <AnimatePresence initial={false}>
        <motion.span
          key={ROLES[index]}
          className="text-gradient whitespace-nowrap [grid-area:1/1]"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="ambient pointer-events-none absolute inset-0" />
    <div className="dot-grid pointer-events-none absolute inset-0" />

    <div className="shell relative pb-16 pt-28 md:pt-32">
      {/* Meta row */}
      <motion.div
        {...enter(0)}
        className="eyebrow grid grid-cols-2 gap-x-6 gap-y-3 border-b border-fg/10 pb-5 md:grid-cols-4"
      >
        <p className="flex items-center gap-2 text-fg">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to opportunities
        </p>
        <p>{TITLE}</p>
        <p>
          Currently @ <span className="text-fg">{CURRENT_COMPANY}</span>
        </p>
        <p className="md:text-right">
          {CONTACT.location} · <LocalTime suffix=" IST" />
        </p>
      </motion.div>

      {/* Name: sans + portrait + serif italic, letters lift on hover */}
      <h1
        aria-label="Ritik Solanki"
        className="relative mt-10 flex flex-wrap items-center gap-x-[0.18em] gap-y-2 text-[clamp(3.6rem,11.5vw,12.5rem)] leading-none md:mt-16"
      >
        <span aria-hidden className="font-display font-bold tracking-[-0.05em]">
          <Letters text="Ritik" delay={0.1} hoverClass="hover:text-accent" />
        </span>

        <span className="relative">
          <PortraitBadge />
          <span
            aria-hidden
            className="pointer-events-none absolute -top-[0.62em] left-[78%] hidden items-start gap-1 whitespace-nowrap font-serif text-[0.19em] italic text-muted lg:flex"
          >
            <svg viewBox="0 0 40 30" className="mt-[0.5em] h-[1.6em] w-[2.2em] -scale-x-100" fill="none">
              <path
                d="M2 4 C 14 2, 30 8, 36 24 M36 24 l-7 -3 M36 24 l1 -7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            hi, that&apos;s me
          </span>
        </span>

        <span aria-hidden className="pr-[0.08em] font-serif italic tracking-[-0.02em]">
          <Letters text="Solanki" delay={0.35} gradient hoverClass="hover:text-accent" />
        </span>
      </h1>

      {/* Details grid */}
      <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
        <motion.div {...enter(0.45)} className="lg:col-span-6">
          <p className="eyebrow mb-4">{SUBTITLE}</p>
          <p className="font-display text-2xl font-medium leading-snug md:text-4xl">
            I build <RoleRotator />
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted md:text-lg">{HERO_CONTENT}</p>
        </motion.div>

        <motion.div
          {...enter(0.55)}
          className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9"
        >
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="btn-primary group">
              See my work
              <TbArrowUpRight className="transition-transform group-hover:rotate-45" />
            </a>
            <a href={RESUME_URL} download className="btn-ghost">
              <TbDownload /> Resume
            </a>
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
            className="hidden w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-fg md:flex"
          >
            Press
            <kbd className="flex items-center gap-0.5 rounded-md border border-fg/15 bg-surface px-1.5 py-0.5 font-mono text-[11px]">
              <TbCommand /> K
            </kbd>
            to explore like a developer
          </button>
        </motion.div>
      </div>

      {/* Highlights */}
      <motion.dl
        {...enter(0.65)}
        className="mt-14 grid grid-cols-1 divide-y divide-fg/10 border-y border-fg/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.label}
            className="flex flex-row-reverse items-baseline justify-between gap-4 py-5 sm:flex-col-reverse sm:items-start sm:justify-end sm:gap-1 sm:px-6 sm:first:pl-0"
          >
            <dt className="text-sm text-muted">{h.label}</dt>
            <dd className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{h.value}</dd>
          </div>
        ))}
      </motion.dl>

      <a href="#about" className="eyebrow mt-10 flex w-fit items-center gap-2 transition-colors hover:text-fg">
        <TbArrowDown className="animate-bounce" /> Scroll
      </a>
    </div>
  </section>
);

export default Hero;
