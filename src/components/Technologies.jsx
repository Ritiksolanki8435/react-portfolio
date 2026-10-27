/** @format */

import { TbBrain, TbCode, TbCloud, TbServer } from "react-icons/tb";
import { STACK } from "../constants";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { TECH_ICONS } from "./ui/techIcons";

const GROUP_ICONS = { ai: TbBrain, backend: TbServer, frontend: TbCode, cloud: TbCloud };
const LAYOUT = { ai: "md:col-span-2", backend: "md:col-span-2 lg:col-span-1", frontend: "md:col-span-2 lg:col-span-1", cloud: "md:col-span-2" };

const SkillTile = ({ name }) => {
  const tech = TECH_ICONS[name];
  const Icon = tech?.icon;
  return (
    <li className="flex items-center gap-2.5 rounded-xl border border-fg/10 bg-page/60 px-3 py-2.5 text-sm transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/50">
      {Icon && <Icon className="shrink-0 text-base" style={tech.color ? { color: tech.color } : undefined} />}
      <span className="truncate">{name}</span>
    </li>
  );
};

const Technologies = () => (
  <section id="skills" className="shell py-24 md:py-32">
    <SectionHeading
      index="02"
      label="Skills"
      title="Full stack,"
      accent="AI native."
      intro="The tools I reach for every day, from the browser down to the vector index."
    />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {STACK.map((group, i) => {
        const Icon = GROUP_ICONS[group.key];
        return (
          <Reveal key={group.key} delay={(i % 2) * 0.06} className={LAYOUT[group.key]}>
            <SpotlightCard className="h-full p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${
                    group.key === "ai" ? "bg-accent text-onaccent" : "bg-fg/[0.06] text-fg"
                  }`}
                >
                  <Icon />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{group.blurb}</p>
                </div>
              </div>
              <ul
                className={`mt-7 grid gap-2 ${
                  ["ai", "cloud"].includes(group.key) ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-2"
                }`}
              >
                {group.items.map((name) => (
                  <SkillTile key={name} name={name} />
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </div>
  </section>
);

export default Technologies;
