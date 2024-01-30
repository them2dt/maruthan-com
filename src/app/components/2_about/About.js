import React from "react";
import { motion } from "framer-motion";
import "./about.css"

export default function About() {
  return (
    <motion.div className="about">
      <motion.div className="design paragraph">
        <motion.div className="info">
          <motion.div className="heading-2">
            Balancing Art and functionality.
          </motion.div>
          <motion.div className="text">
            When building web applications, I ensure seamless alignment with
            users' interests -<br />a skill forged over years of crafting
            tailored solutions for clients.
          </motion.div>
        </motion.div>
        <motion.div className="media text">
          <span className="quote">
            "Design is not just what it looks like and feels like. Design is how
            it works."
          </span>
          <span>-Steve Jobs</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
