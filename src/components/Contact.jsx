/** @format */

import { useState } from "react";
import { TbArrowUp, TbArrowUpRight, TbCheck, TbCopy, TbDownload, TbMail, TbPhone } from "react-icons/tb";
import { CONTACT, RESUME_URL, SOCIALS } from "../constants";
import Reveal from "./ui/Reveal";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Let's work together")}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = mailto;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-fg/10">
      <div className="ambient pointer-events-none absolute inset-0 rotate-180" />

      <div className="shell relative pt-24 md:pt-32">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">06</span>
            <span className="h-px w-8 bg-fg/20" />
            Contact
          </div>
          <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
            Have an idea?
            <br />
            <span className="text-gradient">Let&apos;s build it.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Open to full-time roles and freelance work in full-stack and applied AI. I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-12 grid gap-4 md:grid-cols-2">
          <button
            onClick={copy}
            className="card group flex items-center justify-between gap-4 p-6 text-left transition-colors hover:border-accent/50 md:col-span-2 md:p-8"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-xl text-onaccent sm:flex">
                <TbMail />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {copied ? "Copied to clipboard" : "Email · click to copy"}
                </p>
                <p className="mt-1 truncate font-display text-xl font-semibold md:text-3xl">{CONTACT.email}</p>
              </div>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-fg/15 text-lg">
              {copied ? <TbCheck className="text-accent" /> : <TbCopy />}
            </span>
          </button>

          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
            className="card flex items-center gap-4 p-6 transition-colors hover:border-accent/50"
          >
            <TbPhone className="text-2xl text-muted" />
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Phone</p>
              <p className="mt-1 font-display text-xl font-semibold">{CONTACT.phoneNo}</p>
            </div>
          </a>
          <a
            href={RESUME_URL}
            download
            className="card group flex items-center justify-between p-6 transition-colors hover:border-accent/50"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Resume</p>
              <p className="mt-1 font-display text-xl font-semibold">Download PDF</p>
            </div>
            <TbDownload className="text-2xl transition-transform group-hover:translate-y-0.5" />
          </a>
        </Reveal>

        <ul className="mt-16 grid grid-cols-2 border-t border-fg/10 md:grid-cols-4">
          {SOCIALS.map((s) => (
            <li key={s.label} className="border-b border-fg/10 md:border-b-0">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-1 py-6 md:px-4"
              >
                <span className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
                  {s.label}
                </span>
                <TbArrowUpRight className="text-muted transition-transform group-hover:rotate-45 group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-fg/10 py-8 font-mono text-[11px] uppercase tracking-widest text-muted md:flex-row">
          <span>© {new Date().getFullYear()} Ritik Solanki</span>
          <span>{CONTACT.location}</span>
          <a href="#top" className="flex items-center gap-2 transition-colors hover:text-accent">
            Back to top <TbArrowUp />
          </a>
        </footer>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap bg-gradient-to-b from-fg/20 to-transparent bg-clip-text text-center font-display text-[11.2vw] font-bold uppercase leading-[0.8] tracking-[-0.05em] text-transparent"
      >
        Ritik Solanki
      </p>
    </section>
  );
};

export default Contact;
