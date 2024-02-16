import React, { useState } from "react";
import { motion } from "framer-motion";

import "./style.css";

export default function Index({ toggleMode }) {
  const [legend, setLegend] = useState("click here!");

  return (
    <motion.div className="hero fps" id="hero">
      <div className="hero-text">
        <motion.div className="hero-title font-title">
          Maruthan Thanabalasingam
        </motion.div>
        <motion.div className="hero-description font-text">
          WEB - MOBILE - BLOCKCHAIN
        </motion.div>
      </div>

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
          <motion.div className="hole">{legend}</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
