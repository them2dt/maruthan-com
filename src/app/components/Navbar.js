import React, { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ prevCoordinate, coordinator }) {
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

  const [active, setActive] = useState(false);

  const deactivate = () => setActive(false);
  const activate = () => setActive(true);
  const toggleActivate = () => {
    if (active) {
      deactivate();
    } else {
      activate();
    }
  };

  const setAmbiente = ({ theme }) => {
    if (theme == "marine") {
      document.getElementById("ambiente-marine").classList.add("active");
      document.getElementById("ambiente-mentan").classList.remove("active");
      document.getElementById("ambiente-grenada").classList.remove("active");
      document.getElementById("ambiente-barista").classList.remove("active");
      coordinator("47°16'08.8\"N 9°23'56.5\"E");
      
      const body = document.querySelector("body");
      body.style.setProperty("--base", "rgb(2, 21, 63)");

    } else if (theme == "mentan") {
      document.getElementById("ambiente-marine").classList.remove("active");
      document.getElementById("ambiente-mentan").classList.add("active");
      document.getElementById("ambiente-grenada").classList.remove("active");
      document.getElementById("ambiente-barista").classList.remove("active");
      coordinator("39°30'44.5\"N 2°44'50.8\"E");

      const body = document.querySelector("body");
      body.style.setProperty("--base", "rgb(108, 153, 163)");
    } else if (theme == "grenada") {
      document.getElementById("ambiente-marine").classList.remove("active");
      document.getElementById("ambiente-mentan").classList.remove("active");
      document.getElementById("ambiente-grenada").classList.add("active");
      document.getElementById("ambiente-barista").classList.remove("active");
      coordinator("7°57'26.3\"N 80°45'37.5\"E");

      const body = document.querySelector("body");
      body.style.setProperty("--base", "rgb(6, 82, 47)");
    } else if (theme == "barista") {
      document.getElementById("ambiente-marine").classList.remove("active");
      document.getElementById("ambiente-mentan").classList.remove("active");
      document.getElementById("ambiente-grenada").classList.remove("active");
      document.getElementById("ambiente-barista").classList.add("active");
      coordinator("51°30'19.3\"N 0°04'31.4\"W");

      const body = document.querySelector("body");
      body.style.setProperty("--base", "rgb(92, 42, 20)");
    }
  };

  return (
    <motion.div>
      <motion.div className="navbar-loader-container">
        <motion.div
          className="navbar-loader"
          style={{ scaleX, borderRadius: 20 }}
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
          <AnimatePresence>
            {active && (
              <>
                <motion.div
                  className="theme-selector-value"
                  key={0}
                  onClick={() => setAmbiente({ theme: "mentan" })}
                  //
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  //
                  transition={{
                    duration: 0.2,
                    delay: 1.1,
                  }}
                >
                  <motion.div className="theme-selector-color mentan"></motion.div>
                </motion.div>
                <motion.div
                  className="theme-selector-value"
                  key={1}
                  onClick={() => setAmbiente({ theme: "grenada" })}
                  //
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  //
                  transition={{
                    duration: 0.2,
                    delay: 0.8,
                  }}
                >
                  <motion.div className="theme-selector-color grenada"></motion.div>
                </motion.div>
                <motion.div
                  className="theme-selector-value"
                  key={2}
                  onClick={() => setAmbiente({ theme: "marine" })}
                  //
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  //
                  transition={{
                    duration: 0.2,
                    delay: 0.5,
                  }}
                >
                  <motion.div className="theme-selector-color marine"></motion.div>
                </motion.div>
                <motion.div
                  className="theme-selector-value"
                  key={3}
                  onClick={() => setAmbiente({ theme: "barista" })}
                  //
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  //
                  transition={{
                    duration: 0.2,
                    delay: 0.2,
                  }}
                >
                  <motion.div className="theme-selector-color barista"></motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.div
            className="theme-selector-value activator"
            onClick={toggleActivate}
          >
            <motion.div
              className={
                active
                  ? "theme-selector-color activator active"
                  : "theme-selector-color activator"
              }
            >
              <FontAwesomeIcon icon={faPalette} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
