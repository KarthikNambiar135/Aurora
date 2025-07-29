import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Star, Users, Globe } from 'lucide-react';

const testimonials = [
  {
    name: "Alexandra Chen",
    role: "Tech Executive",
    content: "Aurora One isn't just a smartwatch—it's a statement piece that happens to revolutionize how I manage my day.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Marcus Rodriguez",
    role: "Fitness Professional",
    content: "The biometric accuracy is unparalleled. Finally, a luxury device that performs as beautifully as it looks.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Dr. Priya Patel",
    role: "Cardiologist",
    content: "The ECG precision rivals medical-grade equipment. Aurora One bridges the gap between luxury and health monitoring.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
  }
];

const stats = [
  { icon: Users, value: "50K+", label: "Global Users" },
  { icon: Star, value: "4.9", label: "User Rating" },
  { icon: Globe, value: "85+", label: "Countries" }
];

export default function Experience() {
  const sectionRef = useRef();
  const testimonialsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(testimonialsRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.9
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    statsRef.current.forEach((stat, i) => {
      const valueEl = stat.querySelector('.stat-value');
      if(!valueEl) return;
      gsap.fromTo(valueEl, { textContent: 0 }, {
        textContent: parseFloat(stats[i].value),
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        onUpdate: function() {
          const val = this.targets()[0].textContent;
          if (stats[i].value.includes("K")) {
            this.targets()[0].textContent = val + "K+";
          } else if (stats[i].value.includes(".")) {
            this.targets()[0].textContent = (val / 10).toFixed(1);
          }
        }
      });
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-bold">
          User{' '}
          <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mt-4">
          Join the community of visionaries who've elevated their daily experience
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-10 mb-16 max-w-4xl mx-auto">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div key={label} ref={el => statsRef.current[i] = el} className="text-center">
            <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-xl bg-white/10 text-white">
              <Icon size={26} />
            </div>
            <div className="text-4xl font-bold stat-value">{value}</div>
            <div className="text-gray-400">{label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            ref={el => testimonialsRef.current[i] = el}
            className="bg-black/70 rounded-xl p-6 shadow-lg cursor-pointer hover:bg-black/85 transition"
            whileHover={{ y: -10 }}
          >
            <p className="italic mb-4 text-gray-200">“{t.content}”</p>
            <div className="flex items-center justify-end space-x-3">
              <div className="text-right text-gray-400">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm">{t.role}</div>
              </div>
              <img
                src={t.image}
                alt={`Photo of ${t.name}`}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
