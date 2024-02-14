import React from "react";
import { motion } from "framer-motion";

import "./style.css";

export default function Index({ toggleMode }) {
  return (
    <motion.div className="hero fps" id="hero">
      <motion.div className="hero-title font-title">
        Maruthan Thanabalasingam
      </motion.div>
      <motion.div className="hero-description font-text">
        WEB - MOBILE - BLOCKCHAIN
      </motion.div>

      <motion.div className="hero-graphic-container">
        <motion.div className="hero-graphic">
          <motion.div className="drill" onClick={toggleMode}>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>

            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
          </motion.div>
          <motion.div className="hole"></motion.div>
          <motion.div className="rotator"></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
