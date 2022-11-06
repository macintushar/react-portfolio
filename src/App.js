import React from "react";
import About from "./components/about"
import Intro from "./components/intro"
import Skills from "./components/skills"
import Podcast from "./components/podcast";
import Navbar from "./components/navbar"
import Projects from "./components/projects"
import Footer from "./components/footer"
import Contact from "./components/contact";

function App() {
  return (
    <main className="text-gray-400 body-font">
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Podcast />
      <Skills />
      <Contact />   
      
      <Footer />
    </main>
  );
}

export default App;
