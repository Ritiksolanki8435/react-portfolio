/** @format */

import { motion } from "framer-motion";

// One cheap entrance used everywhere: a short fade-up on opacity/transform
// only, played once, so scrolling never re-triggers work.
const Reveal = ({ children, delay = 0, y = 16, className = "", as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
