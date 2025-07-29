import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Threads from './GalaxyBG';

export default function Hero() {
  const heroRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current.children, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out'
    });
    gsap.fromTo(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      rotationY: 45
    }, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.5,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="overview"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Subtle moving gradient circles */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-3xl animate-[pulse_8s_ease-in-out_infinite] z-10"></div>
      <div className="absolute bottom-24 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
         <div style={{ width: '100%', height: '600px', position: 'relative', margin: 0}}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      <div ref={textRef} className="z-10 max-w-4xl space-y-8">
        <motion.h1 className="text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent mb-40 mt-0">
          AURORA ONE
        </motion.h1>
        </div>
      <div className="z-10 max-w-4xl space-y-8">
        <motion.p className="text-xl text-gray-300 max-w-xl mx-auto">
          The future of luxury timepieces. <span className="font-semibold text-white">Crafted for visionaries.</span>
        </motion.p>
        <motion.p className="text-gray-400 max-w-md mx-auto">
          Experience time redefined through cutting-edge technology and timeless design philosophy.
        </motion.p>
        <motion.button className="mt-8 px-12 py-4 rounded-full bg-white text-black font-semibold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform duration-300">
          Discover Now
        </motion.button>
        </div>
      
    </section>
  );
}
