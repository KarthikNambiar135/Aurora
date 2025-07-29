import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ShieldCheck, Heart, Infinity, EyeOff } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Carbon Ceramic Body', description: 'Military-grade durability meets luxury aesthetics.' },
  { icon: Heart, title: 'Advanced Biometrics', description: 'Real-time health monitoring with clinical precision.' },
  { icon: Infinity, title: 'Infinity Display', description: 'Seamless edge-to-edge OLED visualization.' },
  { icon: EyeOff, title: 'Privacy Shield', description: 'E-ink privacy glass for confidential moments.' },
];

export default function Features() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!cardsRef.current || !sectionRef.current) return;
    gsap.fromTo(cardsRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.9,
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    });
  }, []);

  return (
    <section id="technology" ref={sectionRef} className="py-20 bg-gray-900 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {features.map((feature, idx) => (
          <div
            ref={(el) => (cardsRef.current[idx] = el)}
            key={feature.title}
            className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-80 transition"
          >
            <feature.icon className="w-16 h-16 text-white mb-5" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
