"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className="section-room">
        <div className="navbar"></div>
        <div className="section-room-text">
          <div className="section-room-title">Maruthan Thanabalasingam</div>
          <div className="section-room-description">
            I love to design & build software.
          </div>
        </div>
      </div>
    </main>
  );
}
