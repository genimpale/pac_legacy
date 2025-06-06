
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const quotes = [
    "Reality is wrong. Dreams are for real.",
    "I'm not saying I'm gonna change the world, but I guarantee that I will spark the brain that will change the world.",
    "Death is not the greatest loss in life. The greatest loss is what dies inside while still alive.",
    "During your life, never stop dreaming. No one can take away your dreams."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 parallax-container"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 175, 55, 0.1) 0%, rgba(128, 0, 32, 0.1) 50%, rgba(10, 10, 10, 1) 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tupac-black/50 to-tupac-black"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-tupac-gold transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-tupac-maroon transform rotate-12 animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="hero-text mb-8 leading-tight">
            TUPAC
            <br />
            <span className="text-tupac-maroon">SHAKUR</span>
          </h1>
          
          <div className="min-h-[80px] flex items-center justify-center mb-12">
            <blockquote 
              key={currentQuote}
              className="quote-text max-w-3xl animate-fade-in"
            >
              "{quotes[currentQuote]}"
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-tupac-gold to-yellow-500 text-tupac-black font-semibold rounded-lg hover:shadow-lg hover:shadow-tupac-gold/25 transition-all duration-300 transform hover:scale-105">
              Explore His Story
            </button>
            <button className="px-8 py-4 border-2 border-tupac-gold text-tupac-gold hover:bg-tupac-gold hover:text-tupac-black transition-all duration-300 rounded-lg transform hover:scale-105">
              Listen to Legacy
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-tupac-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tupac-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
