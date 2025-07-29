import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Overview() {
  const imageRef = useRef();

  useEffect(() => {
    gsap.fromTo(imageRef.current, { scale: 0.8, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  }, []);

  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-gray-900 py-24 flex justify-center px-6">
      <div className="max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80"
            alt="Aurora One watch detail"
            className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
            loading="lazy"
          />
          {/* Floating badges */}
          <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-5 py-3 text-center text-white font-semibold tracking-wide shadow-lg">
            14 Day Battery
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-5 py-3 text-center text-white font-semibold tracking-wide shadow-lg">
            10 ATM Water Resistant
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Engineered for <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Excellence</span></h2>
          <p className="text-gray-300 mb-6 max-w-xl">
            Every detail meticulously crafted. Every surface purposefully designed. Aurora One represents the pinnacle of wearable technology.
          </p>
          <p className="text-gray-400 mb-6 max-w-xl">
            From the precision-milled carbon ceramic case to the sapphire crystal display, experience luxury that performs as beautifully as it appears.
          </p>
          <div className="grid grid-cols-3 gap-12 max-w-lg">
            <div className="text-center">
              <p className="font-extrabold text-3xl">700nits</p>
              <p className="text-gray-400">Peak Brightness</p>
            </div>
            <div className="text-center">
              <p className="font-extrabold text-3xl">1.75"</p>
              <p className="text-gray-400">OLED Display</p>
            </div>
            <div className="text-center">
              <p className="font-extrabold text-3xl">45g</p>
              <p className="text-gray-400">Ultra Light</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
