/** @format */

import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";
import { CONTACT, SOCIALS } from "../constants";

const ICONS = {
  LinkedIn: TbBrandLinkedin,
  GitHub: TbBrandGithub,
  WhatsApp: TbBrandWhatsapp,
  Instagram: TbBrandInstagram,
};

// Fixed rails on wide screens: socials on the left, email on the right.
const SideRails = () => (
  <>
    <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-5 xl:flex">
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.label];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-xl text-muted transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <Icon />
          </a>
        );
      })}
      <span className="h-24 w-px bg-fg/20" />
    </div>

    <div className="fixed bottom-0 right-8 z-40 hidden flex-col items-center gap-5 xl:flex">
      <a
        href={`mailto:${CONTACT.email}`}
        className="font-mono text-xs tracking-[0.15em] text-muted transition-[color,transform] duration-200 [writing-mode:vertical-rl] hover:-translate-y-0.5 hover:text-accent"
      >
        {CONTACT.email}
      </a>
      <span className="h-24 w-px bg-fg/20" />
    </div>
  </>
);

export default SideRails;
