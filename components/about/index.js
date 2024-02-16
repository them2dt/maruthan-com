import React, { useState } from "react";
import { motion } from "framer-motion";

import "./style.css";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (darkMode == true) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  return (
    <motion.div className="about fps" id="about">
      <motion.div className="phone-box">
        <motion.div
          className="phone-button"
          onClick={toggleDarkMode}
        ></motion.div>
        <motion.div className="phone-body">
          <motion.div className="phone-display">
            <motion.div className="phone-text font-text-2">
              Hello stranger.
              <br />
              <br />
              I&#39;m Maru. I build software and more. I started over 6 years ago
              with <span>Java</span>, which in hindsight was a rather unusual
              choice for beginners. I continued to travel into other spaces as{" "}
              <span>Python</span>, <span>SQL</span>
              and taught myself to build <span>
                mobile applications
              </span> with <span>Flutter</span>. I actually built my first
              mobile app using Flutter, which also is available in the Google
              play store. Learn more in the showroom.
              <br />
              <br />4 years ago i discovered <span>web-development</span>. I
              started to build simple web-applications with{" "}
              <span>React.js</span>. Since then, I have consistently broadened
              my horizons, learning to utilize libraries such as{" "}
              <span>framer-motion</span>, <span>material-ui</span>, and{" "}
              <span>Next.js</span>. There&#39;s something new to learn, everyday.
              <br />
              <br />
              In late august 2022, during a period of Bitcoin&#39;s decline, i
              decided to go deeper into the blockchain technology. On August
              29th, i bought a course to learn{" "}
              <span>Smart contract development</span> for 13$. It was probably
              one of the hardest topics to learn by myself. The
              developer-community was very small compared to established
              technologies and the resources were limited.
              <br />
              <br />
              In December 2022, I co-founded Sporting Labs and achieved notable
              success by winning <span>two hackathons</span> between January and
              April 2023.
              <br />
              <br />
              Fast forward to summer 2023, i joined the{" "}
              <span>swiss armed forces</span> and try to learn something
              whenever there is an opportunity.
              <br />
              <br />
            </motion.div>
            <motion.div
              className={darkMode ? "phone-dark-mode" : "phone-light-mode"}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
