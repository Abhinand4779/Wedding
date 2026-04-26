import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AdvancedRose from './AdvancedRose';
import gsap from 'gsap';

const Petal = ({ index }) => {
  const petalRef = useRef(null);

  useEffect(() => {
    const delay = Math.random() * 10;
    const duration = 15 + Math.random() * 10;

    gsap.fromTo(petalRef.current,
      {
        y: "110vh",
        x: `${Math.random() * 100}vw`,
        rotate: 0,
        opacity: 0,
        scale: 0.5 + Math.random() * 0.5
      },
      {
        y: "-10vh",
        x: (i, target) => {
          const currentX = parseFloat(target.style.left);
          return `${currentX + (Math.random() * 20 - 10)}vw`;
        },
        rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
        opacity: [0, 0.4, 0.4, 0],
        duration: duration,
        delay: delay,
        repeat: -1,
        ease: "none"
      }
    );
  }, []);

  return (
    <div
      ref={petalRef}
      className="absolute pointer-events-none z-0"
      style={{
        width: `${10 + Math.random() * 20}px`,
        height: `${8 + Math.random() * 15}px`,
        left: `${Math.random() * 100}vw`
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-rose-200 opacity-20">
        <path d="M12 2C12 2 4 6 4 12C4 18 12 22 12 22C12 22 20 18 20 12C20 6 12 2 12 2Z" fill="currentColor" />
      </svg>
    </div>
  );
};

const FloatingElements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 50;
      const yPos = (clientY / window.innerHeight - 0.5) * 50;

      gsap.to(containerRef.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-[-100px] pointer-events-none z-0 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <Petal key={i} index={i} />
      ))}

      {/* Floating Advanced Roses */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`rose-${i}`}
          initial={{ y: '110vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 0.3, 0.3, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 7,
            ease: "linear"
          }}
          className="absolute"
        >
          <AdvancedRose className="w-16 h-16 opacity-40 blur-[1px]" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
