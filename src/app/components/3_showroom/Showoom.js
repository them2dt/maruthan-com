import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import sportinglabs from "../../media/sporting-labs.png";
import Image from "next/image";
import "./showroom.css";
import Link from "next/link";

export default function Showoom() {
  const ref = useRef();
  const { scrollY, scrollYProgress } = useScroll({ target: ref });

  const moveDown = useTransform(scrollYProgress, [0, 0.75], [0, 1000]);
  const moveUp = useTransform(scrollYProgress, [0, 0.75], [0, -500]);
  const fadeAway = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <motion.div className="showroom" ref={ref}>
      <motion.div className="info">
        <motion.div className="heading-2">The showroom</motion.div>
        <motion.div className="text">
          Explore the featured projects, i've been working on.
        </motion.div>
      </motion.div>
      <motion.div className="projects">
        <motion.div className="column">
          <Link href={"https://sporting.gg"} target="blank">
            <motion.div
              className="project"
              style={{ y: moveDown, opacity: fadeAway }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.div className="info">
                <motion.div className="heading-3">Sporting Labs</motion.div>
                <motion.div className="text">
                  A on-chain fantasy league for F1. <br />
                  2x hackathon winner & +2'900 downloads.
                </motion.div>
              </motion.div>

              <Image className="image" src={sportinglabs} />
            </motion.div>
          </Link>
          <motion.div className="row">
            <motion.div
              className="project"
              style={{ y: moveUp, opacity: fadeAway }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.div className="info">
                <motion.div className="heading-4">MonoFusion</motion.div>
                <motion.div className="text">Coming this february.</motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="project"
              style={{ y: moveUp, opacity: fadeAway }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.div className="info">
                <motion.div className="heading-4">DistriDoc</motion.div>
                <motion.div className="text">Coming this summer.</motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
