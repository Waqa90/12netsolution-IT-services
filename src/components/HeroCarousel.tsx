import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    type: 'intro',
    title: 'Reliable IT Support in Fiji',
    description: 'Professional technology solutions for homes and businesses. Expert installation, support, and maintenance.',
    features: [
      { title: 'Fast Response', description: 'Same-day service available for urgent requests' },
      { title: 'Expert Team', description: 'Certified professionals with years of experience' },
      { title: 'Nationwide Coverage', description: 'Serving all areas across Fiji' }
    ]
  },
  {
    id: 2,
    type: 'product',
    theme: 'Sales',
    title: 'Computers & Laptops Ready for Work',
    description: 'Affordable desktops and laptops for office, school and gaming.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    cta: 'Request a Quote',
    ctaLink: '#quote'
  },
  {
    id: 3,
    type: 'product',
    theme: 'Office Setup Packages',
    title: 'Complete Office Setup Packages',
    description: 'Printers, monitors, keyboards and accessories installed and configured.',
    image: 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg',
    cta: 'Request a Quote',
    ctaLink: '#quote'
  },
  {
    id: 4,
    type: 'product',
    theme: 'Connectivity & Infrastructure',
    title: 'Fast & Secure Network Installation',
    description: 'Routers, switches, WiFi coverage and structured cabling solutions.',
    image: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg',
    cta: 'Request a Quote',
    ctaLink: '#quote'
  },
  {
    id: 5,
    type: 'product',
    theme: 'Headsets & Business Communication',
    title: 'Crystal Clear Business Communication',
    description: 'Professional headsets and VoIP equipment for calls and meetings.',
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
    cta: 'Request a Quote',
    ctaLink: '#quote'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        {slide.type === 'intro' ? (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#book"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                Book a Service
                <ArrowRight size={20} />
              </a>
              <a
                href="#quote"
                className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                Request a Quote
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {slide.features?.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <CheckCircle className="text-green-400 mb-3 mx-auto" size={32} />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
                  {slide.theme}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {slide.description}
                </p>
                <a
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  {slide.cta}
                  <ArrowRight size={20} />
                </a>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
}
