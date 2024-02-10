import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import "./style.css";

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 30,
    restDelta: 0.01,
  });
  return (
    <div className="navigation" id="navigation">
      <motion.div
        className="progress"
        style={{
          scaleX,
        }}
      ></motion.div>
      <div className="buttons font-navigation">
        <div className="button">cover</div>
        <div className="button">about</div>
        <div className="button">showroom</div>
        <div className="button">contact</div>
      </div>
    </div>
  );
}
