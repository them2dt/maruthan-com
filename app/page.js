"use client";
import Navigation from "../components/navigation";
import Base from "../components/base";
import Hero from "../components/hero";
import About from "../components/about";
import Showroom from "../components/showroom";
import Contact from "../components/contact";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  //0 = light mode , 1 = dark mode
  const [mode, setMode] = useState(0);
  const styles = ["light", "grey", "dark","blueprint"];

  const toggleMode = () => {
    if (mode == 0) {
      setMode(1);
    } else if (mode == 1) {
      setMode(2);
    } else if (mode == 2) {
      setMode(3);
    } else {
      setMode(0);
    }
  };
  return (
    <motion.div data-theme={styles[mode]}>
      <Base />
      <Hero toggleMode={toggleMode} />
      <About />
      <Showroom />
      <Contact />
      <Navigation />
    </motion.div>
  );
}
