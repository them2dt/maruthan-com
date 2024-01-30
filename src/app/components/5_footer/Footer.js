import React from "react";
import { motion } from "framer-motion";
import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.div className="footer">
      <motion.div></motion.div>
      <motion.div className="box text">
        <Link href={"https://github.com/them2dt"} target="blank">
          <motion.div>GitHub</motion.div>
        </Link>
        <Link href={"https://x.com/them2dt"} target="blank">
          <motion.div>Twitter</motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
