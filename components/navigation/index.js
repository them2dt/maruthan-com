import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import "./style.css";
import Link from "next/link";

export default function Index() {
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
      <div className="buttons font-text">
        <Link href={"#about"}>
          <div className="button">about</div>
        </Link>
        <Link href={"#showroom"}>
          <div className="button">showroom</div>
        </Link>
        <Link href={"#contact"}>
          <div className="button">contact</div>
        </Link>
      </div>
    </div>
  );
}
