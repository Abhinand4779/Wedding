import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AdvancedRose = ({ className, delay = 0 }) => {
  const containerRef = useRef(null);
  const petalsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow animation
      gsap.fromTo(".rose-glow", 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 0.3, 
          duration: 3, 
          delay: delay,
          ease: "power2.out" 
        }
      );

      // Staggered petal bloom
      gsap.fromTo(".petal", 
        { 
          scale: 0, 
          rotate: (i) => i * 45 - 20,
          opacity: 0,
          transformOrigin: "center center"
        },
        { 
          scale: 1, 
          rotate: (i) => i * 45,
          opacity: 1,
          duration: 2.5,
          delay: (i) => delay + i * 0.15,
          ease: "back.out(1.7)",
          stagger: 0.1
        }
      );

      // Subtle breathing effect after blooming
      gsap.to(".petal", {
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Glow Effect */}
      <div className="rose-glow absolute inset-0 bg-rose-200 blur-[60px] rounded-full mix-blend-screen" />
      
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
        <defs>
          <radialGradient id="roseGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-rose-100)" />
            <stop offset="70%" stopColor="var(--color-rose-300)" />
            <stop offset="100%" stopColor="var(--color-gold)" />
          </radialGradient>
          <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layered Petals */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const r = 60;
          const cx = 100 + Math.cos(angle) * r * 0.2;
          const cy = 100 + Math.sin(angle) * r * 0.2;
          
          return (
            <path
              key={i}
              className="petal"
              d="M100 100 C140 60 160 100 100 140 C40 100 60 60 100 100"
              fill="url(#roseGradient)"
              style={{ transformOrigin: 'center' }}
            />
          );
        })}

        {/* Center of the Rose */}
        <circle className="petal" cx="100" cy="100" r="20" fill="var(--color-gold-dark)" />
        <circle className="petal" cx="100" cy="100" r="10" fill="var(--color-rose-900)" opacity="0.5" />
      </svg>
    </div>
  );
};

export default AdvancedRose;
