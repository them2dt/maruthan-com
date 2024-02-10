"use client";

import CircularText from "./components/circular-text/CircularText";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Grid from "./components/grid/Grid";

export default function Home() {
  const stdAboutText = "";
  const [aboutText, setAboutText] = useState(stdAboutText);
  return (
    <>
      <div className="board">
        <div className="hero fp-section" id="hero">
          <div className="hero-title font-hero">Maruthan Thanabalasingam</div>
          <div className="hero-specialities">
            <div className="hero-base">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <CircularText />
          </div>
        </div>
      </div>
      <Navigation />
      
    </>
  );
}
