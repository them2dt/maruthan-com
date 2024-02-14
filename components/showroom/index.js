import React, { useRef, useState } from "react";
import "./style.css";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Index() {
  const [activeFrame, setActiveFrame] = useState(0);

  const sportingRef = useRef();
  const { scrollYProgress } = useScroll({ target: sportingRef });

  const sportingFadeAway = useTransform(scrollYProgress, [0, 0.2], [1, 1]);
  const keymountFadeAway = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const distriFadeAway = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log("1: " + sportingFadeAway.get());
    console.log("2: " + keymountFadeAway.get());
    console.log("3: " + distriFadeAway.get());
  });

  return (
    <motion.div className="showroom fps" id="showroom" ref={sportingRef}>
      <motion.div className="column left">
        <motion.div className="block block-1">
          <motion.div className="phone-container">
            <motion.div className="buttons">
              <motion.div
                className="button"
                onClick={() => setActiveFrame(0)}
              ></motion.div>
              <motion.div
                className="button"
                onClick={() => setActiveFrame(1)}
              ></motion.div>
              <motion.div
                className="button"
                onClick={() => setActiveFrame(2)}
              ></motion.div>
            </motion.div>
            <motion.div className="phone">
              <motion.div className="display">
                <motion.div className={"frame frame-1"} style={{ opacity: sportingFadeAway }}></motion.div>
                <motion.div className={"frame frame-2"} style={{ opacity: keymountFadeAway }}></motion.div>
                <motion.div className={"frame frame-3"} style={{ opacity: distriFadeAway }}></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="column right">
        <motion.div className="block block-2">
          <motion.div className="content">
            <motion.div className="font-h3">Sporting Labs</motion.div>
            <motion.div className="font-text">
              The idea was simple. A fantasy league platform for Formula 1
              enthusiasts. We wanted to create a community that allowed members
              to connect with other passionate inmotion.dividuals and compete
              against each other in various challenges, all while supporting the
              sport they love.
              <br />
              <br />
              Sporting Labs got 2&#39;800 downloads and won two hackathons.
              <br />
              <br />
              The app was planned to be redesigned for a better experience (look
              left) but never got the chance to be released since the underlying
              third-party-platform was no longer maintained. <br />
              <br />
              <Link href={"https://sporting.gg"} target="_blank">
                Landing page
              </Link>
              <br />
              <Link
                href={"https://github.com/sportinglabs/sporting-xnft"}
                target="_blank"
              >
                GitHub
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="block block-3">
          <motion.div className="content">
            <motion.div className="font-h3">Keymount</motion.div>
            <motion.div className="font-text">
              This was the first mobile application i planned out and developed
              solo.
              <br />
              <br />
              An passwort manager, with built-in functions, such as password
              rating & password generation. The passwords would be stored
              offline on the device, so that you wouldnt have to trust a
              third-party cloud.
              <br />
              <br />
              I built this app in 2022.
              <br />
              <br />
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=app.emptea.keymount&pcampaignid=web_share"
                }
                target="_blank"
              >
                Google play Store
              </Link>
              <br />
              <Link
                href={"https://github.com/them2dt/keymount"}
                target="_blank"
              >
                GitHub
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="block block-4">
          <motion.div className="content">
            <motion.div className="font-h3">DistriDoc</motion.div>
            <motion.div className="font-text">
              A new way to publish.
              <br />
              <br />
              DistriDoc is a open platform to create and publish documents
              without the burden of a third party. You simply upload the
              document on the blockchain and the whole world can access it. No
              servers needed.
              <br />
              <br />
              This app is a solo project, and is still in development.
              <br />
              <br />
              <br />
              <Link
                href={"https://github.com/emptea-xyz/distridoc"}
                target="_blank"
              >
                GitHub
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
