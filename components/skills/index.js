import React, { useRef, useState } from "react";
import "./style.css";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Index() {
  const [activeFrame, setActiveFrame] = useState(0);

  const sportingRef = useRef();
  const { scrollYProgress } = useScroll({ target: sportingRef });

  const sportingFadeAway = useTransform(scrollYProgress, [0, 0.2], [1, 1]);
  const keymountFadeAway = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const distriFadeAway = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log("1: " + sportingFadeAway.get());
    console.log("2: " + keymountFadeAway.get());
    console.log("3: " + distriFadeAway.get());
  });

  return (
    <motion.div className="skills fps" id="showroom" ref={sportingRef}>
    </motion.div>
  );
}
