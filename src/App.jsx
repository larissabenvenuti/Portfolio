import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./assets/contexts/ThemeProvider";
import { GlobalStyle } from "./assets/styles/globalStyle";
import Portfolio from "./assets/pages/Portfolio";
import { Projects } from "./assets/pages/Projects";
import { About } from "./assets/pages/About";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
