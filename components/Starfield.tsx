'use client';

import { useEffect, useRef } from 'react';

export default function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create stars
    const createStars = () => {
      const starsCount = 150;
      const stars = [];
      
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 0.5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const animationDuration = Math.random() * 100 + 50;
        const animationDelay = Math.random() * -100;
        
        star.style.position = 'absolute';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.opacity = (Math.random() * 0.7 + 0.3).toString();
        star.style.animation = `twinkle ${animationDuration}s linear ${animationDelay}s infinite`;
        star.style.pointerEvents = 'none';
        star.style.willChange = 'transform, opacity';
        
        // Add glow effect
        star.style.boxShadow = `0 0 ${size * 3}px ${size * 1.5}px rgba(255, 255, 255, 0.2)`;
        
        stars.push(star);
        container.appendChild(star);
      }
      
      return stars;
    };
    
    const stars = createStars();
    
    // Cleanup
    return () => {
      stars.forEach(star => container.removeChild(star));
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{
        background: 'transparent',
        overflow: 'hidden'
      }}
    >
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            transform: translateX(100vw) scale(0.8);
            opacity: 0.3;
          }
          10% {
            opacity: 0.8;
            transform: scale(1.1);
          }
          20% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          30% {
            opacity: 0.7;
            transform: scale(1);
          }
          100% {
            transform: translateX(-100vw) scale(0.8);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
