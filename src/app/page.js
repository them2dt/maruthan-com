"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const openSection = (id) => {
    const item = document.getElementById("section-window");
    item.style.backgroundColor = "var(--section-" + id + "-color)";

    item.classList.add(["section-window-active"]);
  };

  return (
    <main>
      <div className="intro">
        <div className="intro-grid">
          <div className="grid-item-1">
            <button
              className="grid-item-1-bubble"
              onClick={() => {
                openSection(0);
              }}
            >
              <div className="grid-item-text">about</div>
            </button>
          </div>
          <div className="grid-item-2">
            <button
              className="grid-item-2-bubble"
              onClick={() => {
                openSection(1);
              }}
            >
              <div className="grid-item-text">gallery</div>
            </button>
          </div>
          <div className="grid-item-3">
            <button
              className="grid-item-3-bubble"
              onClick={() => {
                openSection(2);
              }}
            >
              <div className="grid-item-text">services</div>
            </button>
          </div>
          <div
            className="grid-item-4"
            onClick={() => {
              openSection(3);
            }}
          >
            <button className="grid-item-4-bubble">
              <div className="grid-item-text">contact</div>
            </button>
          </div>
          <div className="grid-item-5">
            <button className="grid-item-5-bubble">
              <div className="title">MARUTHAN THANABALASINGAM</div>
            </button>
          </div>
        </div>
      </div>
      <div className="section-window-container" id="section-window-container">
        <div className="section-window" id="section-window"></div>
      </div>
    </main>
  );
}
