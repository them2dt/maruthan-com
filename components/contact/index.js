import React from "react";
import "./style.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function index() {
  return (
    <div className="fps" id="contact">
      <Link href={"https://github.com"} target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href={"https://linkedin.com/in/maruthan"} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href={"https://x.com/them2dt"} target="_blank">
        <FontAwesomeIcon icon={faXTwitter} />
      </Link>
      <Link href={"mailto:maruthan@outlook.com"} target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
    </div>
  );
}
