/** @format */

import { useState } from "react";
import { TbArrowUpRight, TbCheck, TbFileSearch, TbMessageChatbot, TbPlus } from "react-icons/tb";
import { MORE_PROJECTS, PROJECT_DOMAINS, PROJECTS, YEARS_OF_EXPERIENCE } from "../constants";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

// A static mock of Kriyova's embeddable widget, standing in for a screenshot.
const ChatMock = () => (
  <div className="card w-full max-w-sm overflow-hidden" aria-hidden>
    <div className="flex items-center gap-3 border-b border-fg/10 bg-fg/[0.03] px-4 py-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-onaccent">
        <TbMessageChatbot />
      </span>
      <div className="text-sm">
        <p className="font-semibold">Support assistant</p>
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Online
        </p>
      </div>
    </div>
    <div className="space-y-3 p-4 text-sm">
      <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-fg px-3.5 py-2 text-page">
        What&apos;s your refund policy?
      </p>
      <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-md bg-fg/[0.06] px-3.5 py-2">
        Refunds are available within 30 days of purchase. Want me to start one for your last order?
      </p>
      <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
        <TbFileSearch /> from refund-policy.pdf
      </p>
    </div>
    <div className="border-t border-fg/10 px-4 py-3 font-mono text-[11px] text-muted">
      &lt;script src=&quot;…/widget.js&quot;&gt;
    </div>
  </div>
);

const ProjectRow = ({ project, index, open, onToggle }) => {
  const id = `project-${index}`;
  return (
    <li className="border-b border-fg/10">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        data-open={open}
        className="sweep group grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 py-6 text-left md:grid-cols-12 md:gap-x-6 md:px-4 md:py-8"
      >
        <span className="font-mono text-xs text-muted md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
        <span
          className={`font-display text-3xl font-semibold tracking-tight transition-[transform,color] duration-300 group-hover:translate-x-2 md:col-span-5 md:text-5xl xl:text-6xl ${
            open ? "text-accent" : ""
          }`}
        >
          {project.title}
        </span>
        <span className="col-start-2 text-sm text-muted md:col-span-3 md:col-start-auto md:text-base">
          {project.tagline}
        </span>
        <span className="hidden text-sm text-muted md:col-span-2 md:block">{project.role.split(" · ")[0]}</span>
        <span
          className={`col-start-3 row-span-2 row-start-1 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border text-lg transition-[transform,background-color,border-color,color] duration-300 md:col-span-1 md:col-start-auto md:row-auto ${
            open ? "rotate-45 border-accent bg-accent text-onaccent" : "border-fg/15 group-hover:border-fg/40"
          }`}
        >
          <TbPlus />
        </span>
      </button>

      {/* grid-rows 0fr → 1fr expands to the content's height with no JS measuring */}
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-10 pb-10 pt-2 md:grid-cols-12 md:px-4">
            <div className="md:col-span-6 md:col-start-2">
              <p className="eyebrow mb-3">{project.role}</p>
              <p className="text-lg leading-relaxed">{project.description}</p>
              {project.points.length > 0 && (
                <ul className="mt-6 space-y-2.5">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-muted">
                      <TbCheck className="mt-1 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-col gap-6 md:col-span-4 md:col-start-9">
              {project.featured && <ChatMock />}
              <div>
                <p className="eyebrow mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary group w-fit">
                  Visit live site
                  <TbArrowUpRight className="transition-transform group-hover:rotate-45" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Project = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="work" className="shell py-24 md:py-32">
      <SectionHeading
        index="03"
        label="Selected work"
        title="Things I've"
        accent="shipped."
        intro="From a multi-tenant AI chatbot platform to enterprise document management. Open any project for the details."
      />
      <Reveal as="ol" className="border-t border-fg/10">
        {PROJECTS.map((project, i) => (
          <ProjectRow
            key={project.title}
            project={project}
            index={i}
            open={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </Reveal>

      <Reveal className="mt-20 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">More projects</p>
          <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Earlier client work</h3>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {MORE_PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 0.05}>
            <SpotlightCard className="h-full p-6">
              <div className="flex h-full flex-col">
                <p className="eyebrow text-accent">{p.category}</p>
                <h4 className="mt-3 font-display text-2xl font-semibold tracking-tight">{p.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* There's more than fits on a page: say so instead of pretending this is everything */}
      <Reveal className="mt-4">
        <div className="card relative overflow-hidden p-7 md:p-10">
          <div className="ambient pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                …and many more.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted md:text-lg">
                These are highlights. Over {Math.floor(YEARS_OF_EXPERIENCE)}+ years I&apos;ve shipped many more client
                projects and internal tools that aren&apos;t listed here. Happy to walk you through any of them, along
                with the code and decisions behind them.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {PROJECT_DOMAINS.map((d) => (
                  <span key={d} className="tag">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex lg:col-span-4 lg:col-start-9 lg:justify-end">
              <a href="#contact" className="btn-primary group">
                Ask me about them
                <TbArrowUpRight className="transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Project;
