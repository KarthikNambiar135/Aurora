import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    title: 'Midnight Black',
    description: 'Classic elegance meets modern technology',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1200&q=80',
    title: 'Urban Lifestyle',
    description: 'Seamlessly integrated into daily life',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80',
    title: 'Professional',
    description: 'Refined aesthetics for business settings',
  },
  {
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    title: 'In Motion',
    description: 'Dynamic features demonstration',
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visual Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore Aurora One from every angle.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-900 mb-8">
            {/* Current Item Display */}
            <div className="w-full h-full">
              {galleryItems[activeIndex].type === 'video' ? (
                <div className="relative w-full h-full">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop
                  >
                    <source src={galleryItems[activeIndex].src} type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
              ) : (
                <img
                  src={galleryItems[activeIndex].src}
                  alt={galleryItems[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {galleryItems[activeIndex].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {galleryItems[activeIndex].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails */}
          <div className="flex justify-center gap-4 mb-6">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  i === activeIndex 
                    ? 'border-white scale-105' 
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full bg-gray-800">
                    <video className="w-full h-full object-cover" muted>
                      <source src={item.src} type="video/webm" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
