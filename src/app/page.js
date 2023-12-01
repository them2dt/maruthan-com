"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLocationPin, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import Image from "next/image";
import tag from "./media/tag-2.png";
//logos
import logo_react from "./media/logos/react.svg";
import Link from "next/link";

export default function Home() {
  const navigate = ({ id }) => {
    const previousAnchor = window.location.href.split("/#");
    const previousId = previousAnchor[previousAnchor.length - 1];
    console.log("Previous ID: " + previousId);
    window.location.href = "/#" + id;
    setTimeout(() => {
      if (id == "projects") {
        console.log(previousId == "contact");
        if (previousId == "contact") {
          document.getElementById("navigator-contact").classList.remove("selected");
          document.getElementById("navigator-contact").classList.remove("fade-out");
          setTimeout(() => {
            document.getElementById("navigator-blog").classList.remove("selected");
            document.getElementById("navigator-blog").classList.remove("fade-out");
            setTimeout(() => {
              document.getElementById("navigator-projects").classList.remove("fade-out");
              document.getElementById("navigator-projects").classList.add("selected");
            }, 100);
          }, 100);
        } else if(previousId=="blog"){
          document.getElementById("navigator-contact").classList.remove("selected");
          document.getElementById("navigator-contact").classList.remove("fade-out");

          document.getElementById("navigator-blog").classList.remove("selected");
          document.getElementById("navigator-blog").classList.remove("fade-out");
          setTimeout(() => {
            setTimeout(() => {
              document.getElementById("navigator-projects").classList.remove("fade-out");
              document.getElementById("navigator-projects").classList.add("selected");
            }, 100);
          }, 100);
        }else{
          document.getElementById("navigator-projects").classList.remove("fade-out");
          document.getElementById("navigator-projects").classList.add("selected");
          
          document.getElementById("navigator-blog").classList.remove("selected");
          document.getElementById("navigator-blog").classList.remove("fade-out");

          document.getElementById("navigator-contact").classList.remove("selected");
          document.getElementById("navigator-contact").classList.remove("fade-out");
        }
      } else if (id == "blog") {

          document.getElementById("navigator-projects").classList.add("fade-out");
          document.getElementById("navigator-projects").classList.remove("selected");

          setTimeout(()=>{
            document.getElementById("navigator-blog").classList.add("selected");
            document.getElementById("navigator-blog").classList.remove("fade-out");
          },100);

          document.getElementById("navigator-contact").classList.remove("selected");
          document.getElementById("navigator-contact").classList.remove("fade-out");

      } else if (id == "contact") {
        if (previousId == "projects") {
          document.getElementById("navigator-projects").classList.remove("selected");
          document.getElementById("navigator-projects").classList.add("fade-out");
          setTimeout(() => {
            document.getElementById("navigator-blog").classList.add("selected");
            document.getElementById("navigator-blog").classList.add("fade-out");
            setTimeout(() => {
              document.getElementById("navigator-contact").classList.remove("fade-out");
              document.getElementById("navigator-contact").classList.add("selected");
            }, 100);
          }, 100);
        } else{
          document.getElementById("navigator-projects").classList.add("fade-out");
          document.getElementById("navigator-projects").classList.remove("selected");
          setTimeout(()=>{
            document.getElementById("navigator-contact").classList.add("selected");
            document.getElementById("navigator-contact").classList.remove("fade-out");
          },100);
          document.getElementById("navigator-blog").classList.add("fade-out");
          document.getElementById("navigator-blog").classList.remove("selected");
  

        }


      }
    }, 100);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      <div className="ambiente"></div>
      <motion.div className="navbar-loader-container">
        <motion.div
          className="navbar-loader"
          style={{ scaleX, borderRadius: 80 }}
        ></motion.div>
      </motion.div>
      <div className="navbar-box">
        <div className="navbar">
          <motion.div
            className="navbar-item"
            id="navigator-projects"
            onClick={() => navigate({ id: "projects" })}
          >
            portfolio
          </motion.div>
          <motion.div
            className="navbar-item"
            id="navigator-blog"
            onClick={() => navigate({ id: "blog" })}
          >
            blog
          </motion.div>
          <motion.div
            className="navbar-item"
            id="navigator-contact"
            onClick={() => navigate({ id: "contact" })}
          >
            contact
          </motion.div>
        </div>
        <div className="navbar-theme-selector">
          <div className="navbar-theme-selector-color"></div>
        </div>
      </div>

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
