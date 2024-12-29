import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails'

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const location = useLocation();
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  useEffect(() => {
    const scrollToSection = () => {
      switch (location.pathname) {
        case '/':
          heroRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '/about':
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '/projects':
          projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <div>
      <Header />
      <div ref={heroRef} id="hero">
        <Hero />
      </div>
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  </Router>
);

export default AppWrapper;