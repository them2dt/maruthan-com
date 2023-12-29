import React, { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({
  activateMarine,
  activateMentan,
  activateBarista,
  activateGrenada,
  prevCoordinate,
  coordinator,
}) {
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
                  onClick={activateMentan}
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
                  onClick={activateGrenada}
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
                  onClick={activateMarine}
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
                  onClick={activateBarista}
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
