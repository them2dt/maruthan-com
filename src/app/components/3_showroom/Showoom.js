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

export default function Showoom() {
  const showroomRef = useRef();
  const { scrollY, scrollYProgress } = useScroll({ target: showroomRef });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("rotate: ", rotate.get());
  });

  return (
    <motion.div className="showroom" ref={showroomRef}>
      <motion.div className="info">
        <motion.div className="heading-2">The showroom</motion.div>
        <motion.div className="text">
          Explore the featured projects, i've been working on.
        </motion.div>
      </motion.div>
      <motion.div className="projects">
        <motion.div className="column">
          <motion.div
            className="project"
            style={{
              y: rotate,
            }}
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
          <motion.div className="row">
            <motion.div
              className="project"
              style={{
                y: rotate,
              }}
            >
              <motion.div className="info">
                <motion.div className="heading-4">MonoFusion</motion.div>
                <motion.div className="text">
                  One platform for all NFT's.
                  <br />
                  Coming this february.
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="project"
              style={{
                y: rotate,
              }}
            >
              <motion.div className="info">
                <motion.div className="heading-4">DistriDoc</motion.div>
                <motion.div className="text">
                  Publish readables on the blockchain.
                  <br />
                  Coming this summer.
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
