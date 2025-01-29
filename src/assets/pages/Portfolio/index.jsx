import React from "react";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Projects } from "../Projects";
import { About } from "../About";
import { Footer } from "../Footer";
import { Container } from "./portfolio";

const Portfolio = () => (
  <Container>
    <Header />
    <Hero />
    <Projects />
    <About />
    <Footer />
  </Container>
);

export default Portfolio;
