"use client";
import Navigation from "../components/navigation";
import Base from "../components/base";
import Hero from "../components/hero";
import About from "../components/about";
import Showroom from "../components/showroom";
export default function Home() {
  return (
    <>
      <Base />
      <Hero />
      <About />
      <Showroom />
      <Navigation />
    </>
  );
}
