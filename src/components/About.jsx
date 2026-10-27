/** @format */

import { TbBolt, TbMapPin, TbSchool, TbShieldCheck, TbStack2 } from "react-icons/tb";
import workspace from "../assets/ritik-workspace.webp";
import { ABOUT_TEXT, CONTACT, EDUCATION, NOW } from "../constants";
import LocalTime from "./ui/LocalTime";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

const PRINCIPLES = [
  { icon: TbBolt, title: "Performance", text: "Code-splitting, lean queries, fast first paint." },
  { icon: TbShieldCheck, title: "Reliability", text: "Secure, tested features that stay up in production." },
  { icon: TbStack2, title: "Ownership", text: "Requirements to deployment, end to end." },
];

const About = () => (
  <section id="about" className="shell py-24 md:py-32">
    <SectionHeading index="01" label="About" title="Engineer by craft," accent="builder by nature." />

    <div className="grid gap-4 lg:grid-cols-12">
      {/* Portrait */}
      <Reveal className="lg:col-span-4 lg:row-span-2">
        <figure className="card group relative h-full min-h-[460px] overflow-hidden">
          <img
            src={workspace}
            alt="Ritik Solanki at his desk"
            width={853}
            height={1280}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white">
            <div>
              <p className="font-display text-xl font-semibold">Build. Ship. Improve.</p>
              <p className="mt-0.5 text-sm text-white/70">The loop I work in, every day.</p>
            </div>
            <span className="shrink-0 rounded-full bg-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
              Indore
            </span>
          </figcaption>
        </figure>
      </Reveal>

      {/* Story */}
      <Reveal className="lg:col-span-8">
        <SpotlightCard className="h-full p-7 md:p-10">
          <p className="eyebrow mb-6">The short story</p>
          <p className="font-display text-2xl font-medium leading-snug md:text-[2rem] md:leading-[1.25]">
            {ABOUT_TEXT[0]}
          </p>
          <div className="mt-8 grid gap-5 text-muted md:grid-cols-2">
            {ABOUT_TEXT.slice(1).map((para) => (
              <p key={para} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>

      {/* Now */}
      <Reveal delay={0.05} className="lg:col-span-4">
        <SpotlightCard className="h-full border-accent/30 p-7 md:p-8">
          <p className="eyebrow mb-5 flex items-center gap-2 text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Right now
          </p>
          <p className="font-display text-2xl font-semibold leading-tight">{NOW.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{NOW.detail}</p>
        </SpotlightCard>
      </Reveal>

      {/* Location */}
      <Reveal delay={0.1} className="lg:col-span-4">
        <SpotlightCard className="h-full p-7 md:p-8">
          <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_80%_50%,black,transparent_70%)]" />
          <div className="relative flex h-full items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 flex items-center gap-1.5">
                <TbMapPin /> Based in
              </p>
              <p className="font-display text-2xl font-semibold">{CONTACT.location}</p>
              <p className="mt-1 text-sm text-muted">UTC+5:30 · open to remote</p>
            </div>
            <p className="font-display text-5xl font-semibold tracking-tight text-fg/90">
              <LocalTime />
            </p>
          </div>
        </SpotlightCard>
      </Reveal>

      {/* Principles */}
      <Reveal className="lg:col-span-7">
        <div className="grid h-full gap-4 sm:grid-cols-3">
          {PRINCIPLES.map(({ icon: Icon, title, text }) => (
            <SpotlightCard key={title} className="p-6">
              <Icon className="text-2xl text-accent" />
              <p className="mt-6 font-display text-lg font-semibold">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
            </SpotlightCard>
          ))}
        </div>
      </Reveal>

      {/* Education */}
      <Reveal delay={0.05} className="lg:col-span-5">
        <SpotlightCard className="h-full p-6 md:p-7">
          <p className="eyebrow mb-5 flex items-center gap-1.5">
            <TbSchool /> Education
          </p>
          <ol className="space-y-4">
            {EDUCATION.map((e) => (
              <li key={e.title} className="flex items-baseline justify-between gap-4 border-b border-fg/10 pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.place}
                    {e.year && ` · ${e.year}`}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs text-accent">{e.score}</p>
              </li>
            ))}
          </ol>
        </SpotlightCard>
      </Reveal>
    </div>
  </section>
);

export default About;
