import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { useRef } from "react";
// import "./locomotive.css";
export default function App() {
  // const containerRef = useRef(null);

  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //   }}
    //   watch={[]}
    //   containerRef={containerRef}
    // >
    //   <main className="bg-[#201e2a]" data-scroll-container ref={containerRef}>
    //     <Navbar data-scroll-sticky />
    //     <Hero />
    //     <About />
    //     <Skills />
    //     <Projects />
    //     <Contact />
    //   </main>
    // </LocomotiveScrollProvider>
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
