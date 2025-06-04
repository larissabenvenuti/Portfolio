'use client';

import React from "react";
import Header from "./Components/Header/page";
import About from "./Components/About/page";
import Skills from "./Components/Skills/page";
import Projects from "./Components/Projects/page";
import Footer from "./Components/Footer/page";
import Hero from "./Components/Hero/page";
import Contact from "./Components/Contact/page";

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