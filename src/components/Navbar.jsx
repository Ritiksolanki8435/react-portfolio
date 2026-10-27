/** @format */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbArrowUpRight, TbCommand, TbMenu2, TbMoon, TbSun, TbX } from "react-icons/tb";
import { NAV_LINKS, SOCIALS } from "../constants";
import { useTheme } from "../lib/theme";
import { OPEN_PALETTE_EVENT } from "./CommandPalette";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const light = theme === "light";
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${light ? "dark" : "light"} theme`}
      title={`Switch to ${light ? "dark" : "light"} theme`}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-fg/[0.06] text-lg transition-colors hover:bg-fg/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {light ? <TbMoon /> : <TbSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id === "top" ? "" : e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [{ id: "top" }, ...NAV_LINKS].forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="shell fixed inset-x-0 top-0 z-50 pt-4">
        <nav
          className={`-mx-3 flex items-center justify-between rounded-full border py-2 pl-5 pr-2 transition-all duration-300 ${
            scrolled || open
              ? "border-fg/10 bg-page/80 shadow-lg shadow-black/5 backdrop-blur-md"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="font-display text-xl font-bold tracking-tight">
            RS<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    active === id ? "bg-fg/[0.08] text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
              aria-label="Open command palette"
              className="hidden h-10 items-center gap-2 rounded-full bg-fg/[0.06] pl-3 pr-2 text-sm text-muted transition-colors hover:bg-fg/10 hover:text-fg md:flex"
            >
              <span className="hidden xl:inline">Quick nav</span>
              <kbd className="flex items-center gap-0.5 rounded-md border border-fg/15 bg-page px-1.5 py-0.5 font-mono text-[10px]">
                <TbCommand /> K
              </kbd>
            </button>
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden items-center gap-1 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-onaccent transition-transform hover:-translate-y-0.5 sm:flex"
            >
              Let&apos;s talk <TbArrowUpRight />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-fg/[0.06] text-xl lg:hidden"
            >
              {open ? <TbX /> : <TbMenu2 />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-page px-6 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="space-y-1">
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.04 * i }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-1 font-display text-4xl font-semibold"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
