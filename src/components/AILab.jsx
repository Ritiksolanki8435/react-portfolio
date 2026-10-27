/** @format */

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { TbCheck, TbLoader2 } from "react-icons/tb";
import { AI_FLOWS } from "../constants";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const STEP_MS = 1500;
const HOLD_MS = 2800;

const Typewriter = ({ text }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () =>
        setCount((c) => {
          if (c >= text.length) clearInterval(id);
          return Math.min(c + 2, text.length);
        }),
      30
    );
    return () => clearInterval(id);
  }, [text]);
  return <>{text.slice(0, count)}</>;
};

const StepCard = ({ step, index, state }) => (
  <div
    className={`rounded-2xl border p-4 transition-colors duration-300 md:p-5 ${
      state === "active"
        ? "border-accent bg-accent/[0.08]"
        : state === "done"
        ? "border-fg/15 bg-fg/[0.03]"
        : "border-fg/10"
    }`}
  >
    <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-muted">
      <span>0{index + 1}</span>
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] transition-colors duration-300 ${
          state === "done" ? "bg-accent text-onaccent" : state === "active" ? "border border-accent" : "border border-fg/15"
        }`}
      >
        {state === "done" && <TbCheck />}
        {state === "active" && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
      </span>
    </div>
    <p className="font-display text-lg font-semibold">{step.title}</p>
    <p className="mt-1 text-xs leading-relaxed text-muted">{step.detail}</p>
  </div>
);

const AILab = () => {
  const [tab, setTab] = useState(0);
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const panelRef = useRef(null);
  const inView = useInView(panelRef, { margin: "-15% 0px" });
  const flow = AI_FLOWS[tab];
  const total = flow.steps.length;

  // Only ticks while the panel is on screen
  useEffect(() => {
    if (!inView) return;
    const done = step >= total;
    const id = setTimeout(() => setStep(done ? 0 : step + 1), done ? HOLD_MS : STEP_MS);
    return () => clearTimeout(id);
  }, [step, total, inView, run]);

  const select = (i) => {
    setTab(i);
    setStep(0);
    setRun((r) => r + 1);
  };

  return (
    <section id="ai-lab" className="shell py-24 md:py-32">
      <SectionHeading
        index="04"
        label="AI Lab"
        title="How I build"
        accent="intelligent systems."
        intro="The patterns behind DocuAssist and Kriyova AI, played step by step."
      />

      <Reveal>
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div role="tablist" aria-label="AI system type" className="inline-flex w-fit flex-wrap gap-1 rounded-full border border-fg/10 bg-surface p-1">
            {AI_FLOWS.map((f, i) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={tab === i}
                onClick={() => select(i)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 md:px-5 ${
                  tab === i ? "bg-accent text-onaccent" : "text-muted hover:text-fg"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="max-w-sm text-sm text-muted md:text-right">{flow.caption}</p>
        </div>

        <div ref={panelRef} className="card p-4 md:p-6">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {flow.steps.map((s, i) => (
              <StepCard
                key={`${flow.key}-${i}`}
                step={s}
                index={i}
                state={i < step ? "done" : i === step ? "active" : "idle"}
              />
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-fg/10 bg-[#0c0c0f] text-[#e7e7ea]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[11px] text-white/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                ~/lab/{flow.key}.ts
              </div>
              <span className="flex items-center gap-2">
                {step >= total ? (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4ff4d]" /> completed
                  </>
                ) : (
                  <>
                    <TbLoader2 className="animate-spin" /> running
                  </>
                )}
              </span>
            </div>
            <div className="min-h-[176px] space-y-1.5 p-5 font-mono text-xs md:text-sm">
              <p className="text-white/50">
                <span className="text-[#c4ff4d]">❯</span> node {flow.key}.ts
              </p>
              {flow.steps.slice(0, Math.min(step + 1, total)).map((s, i) => (
                <p key={`${flow.key}-${run}-${i}`} className={i === step ? "text-white" : "text-white/55"}>
                  <span className="text-[#5eead4]">[{String(i + 1).padStart(2, "0")}]</span>{" "}
                  {i === step ? <Typewriter text={s.log} /> : s.log}
                  {i === step && (
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-[#c4ff4d]" />
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AILab;
