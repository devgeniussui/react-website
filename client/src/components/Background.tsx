import React, { useEffect } from 'react';

const Background: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const grid = document.getElementById('animatedGrid');
      if (grid) {
        grid.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
      
      const lightSource = document.getElementById('lightSource');
      if (lightSource) {
        lightSource.style.opacity = Math.max(0.1, Math.min(0.3, 1 - scrollPosition / 1000)).toString();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Overlay */}
      <div 
        id="animatedGrid"
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(#7cff00 1px, transparent 1px), linear-gradient(to right, #7cff00 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Animated Circles */}
      {Array.from({length: 30}).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-[#7cff00]/20"
          style={{
            width: Math.random() * 20 + 5 + 'px',
            height: Math.random() * 20 + 5 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            filter: 'blur(2px)',
            animation: `float ${Math.random() * 15 + 10}s infinite linear`,
            opacity: Math.random() * 0.5 + 0.1
          }}
        ></div>
      ))}
      
      {/* Light Source */}
      <div 
        id="lightSource"
        className="absolute top-0 left-1/2 w-full h-screen bg-[#7cff00]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
};

export default Background;
