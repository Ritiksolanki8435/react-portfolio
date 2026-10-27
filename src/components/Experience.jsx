/** @format */

import { EXPERIENCES, YEARS_OF_EXPERIENCE } from "../constants";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const Experience = () => (
  <section id="experience" className="shell py-24 md:py-32">
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:sticky lg:top-28 lg:col-span-4 lg:h-fit">
        <SectionHeading
          index="05"
          label="Experience"
          title="The"
          accent="journey."
          intro={`${YEARS_OF_EXPERIENCE} years building production software in Indore, from full-stack web apps to applied AI.`}
        />
      </div>

      <ol className="relative space-y-6 lg:col-span-7 lg:col-start-6 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-px before:bg-fg/10">
        {EXPERIENCES.map((exp, i) => (
          <Reveal as="li" key={exp.company} className="relative pl-10">
            <span className="absolute left-0 top-8 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-accent bg-page">
              <span className={`h-[7px] w-[7px] rounded-full ${i === 0 ? "bg-accent" : "bg-fg/30"}`} />
            </span>
            <div className="card p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{exp.year}</p>
                {i === 0 && (
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                    Current
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{exp.role}</h3>
              <p className="mt-1 text-muted">
                {exp.company} · {exp.location}
              </p>
              <ul className="mt-5 space-y-2.5">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-fg/85 md:text-base">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
