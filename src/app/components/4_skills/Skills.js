import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import "./skills.css";

export default function Skills() {
  const skillRef = useRef();
  const {scrollYProgress } = useScroll({ target: skillRef });

  const moveDown = useTransform(scrollYProgress, [0, 0.75], [0, 2000]);
  const moveUp = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const fadeAway = useTransform(scrollYProgress, [0.75, 1], [0.2, 1]);

  useMotionValueEvent(scrollYProgress, (e) => {
    console.log("Positions: " + scrollYProgress);
  });
  return (
    <motion.div className="skills">
      <motion.div className="box text" ref={skillRef}>
        <motion.div style={{ opacity: fadeAway }}>HTML</motion.div>
        <motion.div>CSS</motion.div>
        <motion.div>JavaScript</motion.div>
        <motion.div style={{ opacity: fadeAway }}>TypeScript</motion.div>
        <motion.div>Next.js</motion.div>
        <motion.div style={{ opacity: fadeAway }}>Spline</motion.div>
        <motion.div style={{ opacity: fadeAway }}>Material UI</motion.div>
        <motion.div style={{ opacity: fadeAway }}>Tailwind CSS</motion.div>
        <motion.div style={{ opacity: fadeAway }}>Framer</motion.div>
        <motion.div>Framer motion</motion.div>
        <motion.div style={{ opacity: fadeAway }}>PHP</motion.div>
        <motion.div style={{ opacity: fadeAway }}>Dart</motion.div>
        <motion.div style={{ opacity: fadeAway }}>Flutter</motion.div>
        <motion.div style={{ opacity: fadeAway }}>Python</motion.div>
        <motion.div>Figma</motion.div>
      </motion.div>
    </motion.div>
  );
}
