import React from "react";
import { motion } from "framer-motion";
import "./footer.css";

export default function Footer() {
  return (
    <motion.div className="footer">
      <motion.div></motion.div>
      <motion.div className="box text">
        <motion.div>GitHub</motion.div>
        <motion.div>Twitter</motion.div>
        <motion.div>Instagram</motion.div>
      </motion.div>
    </motion.div>
  );
}
