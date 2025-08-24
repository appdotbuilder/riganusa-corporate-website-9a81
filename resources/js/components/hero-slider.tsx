import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Riganusa',
    subtitle: 'Leading Palm Oil Excellence',
    image: '/api/placeholder/1920/1080?text=Palm+Oil+Plantation',
    description: 'Empowering Businesses With Reliable Crude Palm Oil Solutions'
  },
  {
    id: 2,
    title: 'Crude Palm Oil',
    subtitle: 'Quality & Innovation',
    image: '/api/placeholder/1920/1080?text=CPO+Factory+Industry',
    description: 'Our Commitment Is To Quality And Customer Satisfaction'
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / 60); // 6 seconds = 60 intervals of 100ms
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="container mx-auto px-4">
                <h1 className="hero-title font-serif font-bold text-white mb-4 fade-in">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <h2 className="text-2xl md:text-3xl font-light text-blue-300 mb-6 fade-in">
                    {slide.subtitle}
                  </h2>
                )}
                {slide.description && (
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 fade-in">
                    {slide.description}
                  </p>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
                  <button className="btn-primary">
                    Discover Our Solutions
                  </button>
                  <button className="btn-secondary">
                    Contact Us Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="flex items-center space-x-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-24 h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Slide Title */}
          <div className="text-white font-medium">
            {slides[currentSlide].title}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}