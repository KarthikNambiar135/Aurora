import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (animations, dependencies = []) => {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      animations();
    }, ref);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

export const useScrollAnimation = (element, animation, trigger = "top 80%") => {
  useEffect(() => {
    if (!element) return;

    gsap.fromTo(element, 
      animation.from || { opacity: 0, y: 50 },
      {
        ...animation.to || { opacity: 1, y: 0 },
        duration: animation.duration || 1,
        ease: animation.ease || "power2.out",
        scrollTrigger: {
          trigger: element,
          start: trigger,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [element, animation, trigger]);
};
