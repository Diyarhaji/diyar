import { useEffect } from 'react'
import NavBar from './Nav/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './Nav/Footer'
import Services from './pages/Services'

import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
}, []);

  return (
    <section className="bg-first scroll-smooth overflow-hidden  font-serif text-gray-100">
      <NavBar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}

export default App