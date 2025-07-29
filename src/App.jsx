import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import TechSpecs from './components/TechSpecs';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: targetSection, offsetY: 100 },
            ease: "power3.inOut"
          });
        }
      });
    });

    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <NavigationBar />
      <Hero />
      <Overview />
      <Features />
      <TechSpecs />
      <Gallery />
      <Experience />
      <Footer />
    </div>
  );
}
