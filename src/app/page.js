//use client-side-rendering
"use client";
//next
import Link from "next/link";
import Image from "next/image";
//local components
import tag from "./media/tag-2.png";
import Navbar from "./components/Navbar";
//framer
import { motion } from "framer-motion";
//fontawesome
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main>
      <div className="ambiente"></div>
      <Navbar />
      <div className="section room" id="home">
        <motion.div
          className="room-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 1,
          }}
          viewport={{ once: false }}
        >
          Maruthan
        </motion.div>
        <motion.div
          className="room-location"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 1,
          }}
          viewport={{ once: false }}
        >
          47°23'09.8"N 8°32'01.2"E
        </motion.div>

        <motion.div
          className="room-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          viewport={{ once: false }}
        >
          <div className="room-description-mobile-box">
            UI Designer <br />
            Web Developer <br />
            Blockchain Developer
          </div>
        </motion.div>
        <motion.div
          className="room-version"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 1,
          }}
          viewport={{ once: false }}
        >
          Version 2023
        </motion.div>
        <motion.div className="room-tag-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            transition={{
              duration: 0.2,
              delay: 1,
            }}
            viewport={{ once: false }}
          >
            <Image className="room-tag" alt="tag" src={tag} />
          </motion.div>
        </motion.div>
      </div>
      <div className="section projects" id="projects">
        <div className="projects-container">
          <div className="projects-title">Selected Projects</div>
          <div className="projects-grid">
            <div className="project">
              <div className="project-details">
                <div className="project-title">DistriDoc</div>
                <div className="project-description">
                  Write documents and store them as NFT's. Cheap & persistent.
                </div>
              </div>
              <div className="project-links">
                <Link href={"https://distridoc.emptea.xyz"} target="_blank">
                  <FontAwesomeIcon icon={faGlobe} />
                </Link>
                <Link href={"https://github.com/them2dt"} target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
            <div className="project">
              <div className="project-details">
                <div className="project-title">CrowdSwift</div>
                <div className="project-description">
                  Create crowdfunding campaigns.
                </div>
              </div>
              <div className="project-links">
                <Link href={"https://distridoc.emptea.xyz"} target="_blank">
                  <FontAwesomeIcon icon={faGlobe} />
                </Link>
                <Link href={"https://github.com/them2dt"} target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section blog" id="blog">
        <div className="blog-content">
          <div className="blog-title">Articles</div>
          <div className="blog-grid-box-flexer">
            <motion.div
              className="blog-grid-box"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
              viewport={{ once: false }}
            >
              <div className="blog-grid">
                <motion.div
                  className="blog-grid-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                >
                  <div className="blog-grid-item-type">Blog</div>
                  <div className="blog-grid-item-cover"></div>
                  <div className="blog-grid-item-info">
                    <div className="blog-grid-item-text">
                      <div className="blog-grid-item-title">
                        Writing a solana program
                      </div>
                      <div className="blog-grid-item-description">
                        In this step i'll build a solana program step-by-step.
                      </div>
                    </div>
                    <div className="blog-grid-item-button">dive in!</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="section socials" id="contact">
        <div className="socials-grid">
          <div className="socials-grid-item">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="socials-grid-item">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="socials-grid-item">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="socials-grid-item">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </main>
  );
}
