import NavBar from "./components/NavBar";
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
// import CyberAIFutureBackground from "./components/CyberAIFutureBackground";
// import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import React from "react";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [introDone, setIntroDone] = React.useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className="gradient text-white">
          {/* <CyberAIFutureBackground /> relative min-h-screen flex items-center justify-center text-white*/}
          <CustomCursor />
          {/* <ParticlesBackground /> */}

          <NavBar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
