/** @format */

import Reveal from "./Reveal";

const SectionHeading = ({ index, label, title, accent, intro }) => (
  <Reveal className="mb-12 md:mb-16">
    <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-fg/20" />
      {label}
    </div>
    <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
      {title} {accent && <span className="text-muted">{accent}</span>}
    </h2>
    {intro && <p className="mt-5 max-w-2xl text-muted md:text-lg">{intro}</p>}
  </Reveal>
);

export default SectionHeading;
