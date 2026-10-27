/** @format */

import { motion, useScroll } from "framer-motion";
import About from "./components/About";
import AILab from "./components/AILab";
import CommandPalette from "./components/CommandPalette";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SideRails from "./components/SideRails";
import Technologies from "./components/Technologies";
import ThemeProvider from "./components/ThemeProvider";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider>
      <div className="relative overflow-x-clip">
        <motion.div
          className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent to-accent2"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <SideRails />
        <CommandPalette />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Project />
          <AILab />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
