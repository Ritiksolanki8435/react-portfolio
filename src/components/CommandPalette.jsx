/** @format */

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbCopy,
  TbCornerDownLeft,
  TbFileText,
  TbHash,
  TbMail,
  TbPalette,
  TbSearch,
} from "react-icons/tb";
import { CONTACT, NAV_LINKS, RESUME_URL, SOCIALS } from "../constants";
import { useTheme } from "../lib/theme";

// Anything on the page can open the palette by dispatching this event.
export const OPEN_PALETTE_EVENT = "open-command-palette";

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const openTab = (href) => window.open(href, "_blank", "noopener,noreferrer");
const socialHref = (label) => SOCIALS.find((s) => s.label === label)?.href;

// The dialog owns its own state: AnimatePresence can keep rendering a stale
// copy of its direct child element, so state must not live in the parent.
const PaletteDialog = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [notice, setNotice] = useState("");
  const { theme, toggle } = useTheme();

  const actions = useMemo(
    () => [
      ...NAV_LINKS.map((l) => ({ group: "Navigate", label: `Go to ${l.label}`, icon: TbHash, run: () => go(l.id) })),
      {
        group: "Actions",
        label: `Switch to ${theme === "light" ? "dark" : "light"} theme`,
        icon: TbPalette,
        run: toggle,
        keep: true,
      },
      {
        group: "Actions",
        label: "Copy email address",
        icon: TbCopy,
        run: async () => {
          try {
            await navigator.clipboard.writeText(CONTACT.email);
            setNotice("Email copied");
          } catch {
            setNotice(CONTACT.email);
          }
        },
        keep: true,
      },
      { group: "Actions", label: "Send an email", icon: TbMail, run: () => (window.location.href = `mailto:${CONTACT.email}`) },
      { group: "Actions", label: "Download resume", icon: TbFileText, run: () => openTab(RESUME_URL) },
      { group: "Links", label: "Open LinkedIn", icon: TbBrandLinkedin, run: () => openTab(socialHref("LinkedIn")) },
      { group: "Links", label: "Open GitHub", icon: TbBrandGithub, run: () => openTab(socialHref("GitHub")) },
    ],
    [theme, toggle]
  );

  const results = actions.filter((a) => a.label.toLowerCase().includes(query.trim().toLowerCase()));

  const runAt = (i) => {
    const action = results[i];
    if (!action) return;
    action.run();
    if (!action.keep) onClose();
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (c - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      runAt(cursor);
    }
  };

  let lastGroup = "";

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-black/50 px-4 pt-[15vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onMouseDown={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-fg/15 bg-surface shadow-2xl shadow-black/40"
        initial={{ y: -8, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -8, scale: 0.98 }}
        transition={{ duration: 0.15 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-fg/10 px-4">
          <TbSearch className="text-lg text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Type a command or search…"
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted"
          />
          <kbd className="rounded-md border border-fg/15 px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
        </div>

        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No results</li>}
          {results.map((a, i) => {
            const header = a.group !== lastGroup;
            lastGroup = a.group;
            const Icon = a.icon;
            return (
              <li key={a.group + a.label}>
                {header && <p className="eyebrow px-3 pb-1.5 pt-3">{a.group}</p>}
                <button
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => runAt(i)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    cursor === i ? "bg-fg/[0.07] text-fg" : "text-fg/80"
                  }`}
                >
                  <Icon className={`text-lg ${cursor === i ? "text-accent" : "text-muted"}`} />
                  <span className="flex-1">{a.label}</span>
                  {cursor === i && <TbCornerDownLeft className="text-muted" />}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-fg/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted">
          <span>{notice || "↑↓ to move · ↵ to run"}</span>
          <span>Ritik Solanki</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((o) => !o);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    const onOpen = () => setIsOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && <PaletteDialog key="command-palette" onClose={() => setIsOpen(false)} />}
    </AnimatePresence>
  );
};

export default CommandPalette;
