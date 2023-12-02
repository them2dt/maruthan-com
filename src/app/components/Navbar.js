import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navigate = ({ id }) => {
    const previousAnchor = window.location.href.split("/#");
    const previousId = previousAnchor[previousAnchor.length - 1];
    console.log("Previous ID: " + previousId);
    window.location.href = "/#" + id;

    if (id == "projects") {
      document.getElementById("navigator-projects").classList.add("selected");
      document.getElementById("navigator-blog").classList.remove("selected");
      document.getElementById("navigator-contact").classList.remove("selected");
    } else if (id == "blog") {
      document
        .getElementById("navigator-projects")
        .classList.remove("selected");
      document.getElementById("navigator-blog").classList.add("selected");
      document.getElementById("navigator-contact").classList.remove("selected");
    } else if (id == "contact") {
      document
        .getElementById("navigator-projects")
        .classList.remove("selected");
      document.getElementById("navigator-contact").classList.add("selected");
      document.getElementById("navigator-blog").classList.remove("selected");
    }
  };
  return (
    <motion.div>
      <motion.div className="navbar-loader-container">
        <motion.div
          className="navbar-loader"
          style={{ scaleX, borderRadius: 80 }}
        ></motion.div>
      </motion.div>
      <motion.div className="navbar-box">
        <motion.div
          className="navbar"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 1,
          }}
        >
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
        </motion.div>
        <motion.div
          className="navbar-theme-selector"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <motion.div className="navbar-theme-selector-color"></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
