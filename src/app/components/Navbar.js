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

  const setAmbiente = ({ theme }) => {
    if (theme == "marine") {
      document.getElementById("ambiente-marine").classList.add("active");
      document.getElementById("ambiente-mentan").classList.remove("active");
      document.getElementById("ambiente-grenada").classList.remove("active");
      document.getElementById("ambiente-barista").classList.remove("active");
    } else if (theme == "mentan") {
      document.getElementById("ambiente-marine").classList.remove("active");
      document.getElementById("ambiente-mentan").classList.add("active");
      document.getElementById("ambiente-grenada").classList.remove("active");
      document.getElementById("ambiente-barista").classList.remove("active");
    } else if (theme == "grenada") {
      document.getElementById("ambiente-marine").classList.remove("active");
      document.getElementById("ambiente-mentan").classList.remove("active");
      document.getElementById("ambiente-grenada").classList.add("active");
      document.getElementById("ambiente-barista").classList.remove("active");
    } else if (theme == "barista") {
      document.getElementById("ambiente-marine").classList.remove("active");
      document.getElementById("ambiente-mentan").classList.remove("active");
      document.getElementById("ambiente-grenada").classList.remove("active");
      document.getElementById("ambiente-barista").classList.add("active");
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
          className="theme-selector"
          id="theme-selector"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <motion.div
            className="theme-selector-value"
            onClick={() => setAmbiente({ theme: "mentan" })}
          >
            <motion.div className="theme-selector-color mentan"></motion.div>
          </motion.div>
          <motion.div
            className="theme-selector-value"
            onClick={() => setAmbiente({ theme: "grenada" })}
          >
            <motion.div className="theme-selector-color grenada"></motion.div>
          </motion.div>
          <motion.div
            className="theme-selector-value"
            onClick={() => setAmbiente({ theme: "marine" })}
          >
            <motion.div className="theme-selector-color marine"></motion.div>
          </motion.div>
          <motion.div
            className="theme-selector-value"
            onClick={() => setAmbiente({ theme: "barista" })}
          >
            <motion.div className="theme-selector-color barista"></motion.div>
          </motion.div>
          <motion.div
            className="theme-selector-value activator"
            onClick={() => setAmbiente({ theme: "barista" })}
          >
            <motion.div className="theme-selector-color activator"></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
