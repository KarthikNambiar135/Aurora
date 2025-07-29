import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const specs = [
  { label: "Size", value: "1.75\" OLED" },
  { label: "Resolution", value: "450 x 450 pixels" },
  { label: "Brightness", value: "700 nits peak" },
  { label: "Protection", value: "Sapphire Crystal" },
  { label: "Processor", value: "Dual-core ARM" },
  { label: "Memory", value: "32GB Storage" },
  { label: "RAM", value: "2GB LPDDR4" },
  { label: "Connectivity", value: "5G, WiFi 6, BT 5.3" },
  { label: "Heart Rate", value: "ECG + Optical" },
  { label: "Blood Oxygen", value: "SpO2 monitoring" },
  { label: "Temperature", value: "Body temp sensor" },
  { label: "Water Resistance", value: "10ATM Water Resistant" },
  { label: "Battery Life", value: "14 days typical" },
];

export default function TechSpecs() {
  const sectionRef = useRef();
  const rowsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(rowsRef.current, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Technical Specifications</h2>
        <table className="w-full text-left border-separate border-spacing-y-3 text-gray-300">
          <tbody>
            {specs.map((spec, idx) => (
              <tr key={spec.label} ref={el => (rowsRef.current[idx] = el)} className="border-b border-gray-700">
                <td className="py-3 font-semibold w-1/3">{spec.label}</td>
                <td className="py-3">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
