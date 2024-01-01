"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ changeTheme }) {
  const [anchor, setAnchor] = useState(0);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const switchVariants = {
    active: {
      backgroundColor: "rgba(255,255,255,1)",
      color: "rgba(0,0,0,1)",
    },
    inactive: {},
  };
  // Get scroll position
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (position) => {
    if (position < 0.1) {
      setAnchor(0);
    }if (0.1 < position && position < 0.38) {
      setAnchor(1);
    }
    if (0.51 < position && position < 0.73) {
      setAnchor(2);
    }
    if (0.73 < position) {
      setAnchor(3);
    }
    console.log(position);
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div className="navigation">
      <motion.div className="background">
        <motion.div className="shaper">
          <motion.div className="loader" style={{ scaleX }}></motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="foreground">
        <motion.div className="navbar">
          <motion.div
            className="button"
            onClick={() => {
              setAnchor(1);
            }}
            variants={switchVariants}
            animate={anchor == 1 ? "active" : "inactive"}
            transition={{ duration: 0.2 }}
          >
            showroom
          </motion.div>
          <motion.div
            className="button"
            onClick={() => {
              setAnchor(2);
            }}
            variants={switchVariants}
            animate={anchor == 2 ? "active" : "inactive"}
            transition={{ duration: 0.2 }}
          >
            articles
          </motion.div>
          <motion.div
            className="button"
            onClick={() => {
              setAnchor(3);
            }}
            variants={switchVariants}
            animate={anchor == 3 ? "active" : "inactive"}
            transition={{ duration: 0.2 }}
          >
            contact
          </motion.div>
        </motion.div>
        <motion.div className="switch">
          <FontAwesomeIcon icon={faPalette} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
