'use client';

import React from "react";
import Header from "./Header/page";
import About from "./About/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Footer from "./Footer/page";
import Hero from "./Hero/page";
import Contact from "./Contact/page";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}