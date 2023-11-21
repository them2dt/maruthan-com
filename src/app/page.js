"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import tag from "./media/tag-2.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className="ambiente"></div>

      <div className="navbar">
        <div className="navbar-item">projects</div>
        <div className="navbar-item">articles</div>
        <div className="navbar-item">contact</div>
      </div>

      <div className="section room" id="home">
        <motion.div
          className="room-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: false }}
        >
          Maruthan Thanabalasingam
        </motion.div>
        <motion.div
          className="room-location"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon icon={faLocationPin} /> Zurich, Switzerland
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
            Web Developer <br />
            Web Designer <br />
            Version 2023
          </div>
        </motion.div>
        <motion.div className="room-tag-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            viewport={{ once: false }}
          >
            <Image className="room-tag" src={tag} />
          </motion.div>
        </motion.div>
      </div>
      <div className="section projects">
        <div className="projects-grid-box">
          <div className="projects-grid">
            <motion.div
              className="projects-grid-item project-grid-item-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.3,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-7"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.6,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.7,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-9"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.8,
              }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="projects-grid-item project-grid-item-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.9,
              }}
              viewport={{ once: false }}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="section blog">
        <motion.div
          className="blog-grid-box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
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
                delay: 0.2,
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
            <motion.div
              className="blog-grid-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
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
            <motion.div
              className="blog-grid-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
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
            <motion.div
              className="blog-grid-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
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
      <div className="section socials">
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
