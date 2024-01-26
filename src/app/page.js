"use client";
import React, { useEffect, useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Intro from "./components/1_intro/Intro";
import About from "./components/2_about/About";
import Showoom from "./components/3_showroom/Showoom";
import Skills from "./components/4_skills/Skills";
import Footer from "./components/5_footer/Footer";

export default function Home() {
  return (
    <motion.div>
      <motion.div className="texture"></motion.div>
      <Intro />
      <About />
      <Showoom />
      <Skills />
      <Footer />
    </motion.div>
  );
}
