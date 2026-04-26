import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const Preloader = ({ isLoaded, onOpen, onStartOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const cardRef = useRef(null);
  const upperRef = useRef(null);
  const lowerRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      gsap.to(".loader-text", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        ease: "power2.inOut"
      });
      gsap.to(".bloom-btn", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
      });
    }
  }, [isLoaded]);

  const handleOpen = () => {
    setIsOpening(true);
    if (onStartOpen) onStartOpen();
    
    // Bulletproof fallback to play audio directly via DOM
    const audioEl = document.getElementById('bg-music');
    if (audioEl) {
      audioEl.play().catch(e => console.log("Direct play blocked:", e));
    }

    const tl = gsap.timeline({
      onComplete: onOpen
    });

    tl.to(".bloom-btn", { opacity: 0, scale: 0.8, duration: 0.4 })
      .to(upperRef.current, { y: "-100%", duration: 1.8, ease: "expo.inOut" }, 0.2)
      .to(lowerRef.current, { y: "100%", duration: 1.8, ease: "expo.inOut" }, 0.2)
      .to(cardRef.current, {
        y: -300,
        opacity: 0,
        scale: 1.2,
        rotateY: 90,
        duration: 1.4,
        ease: "power2.in"
      }, 0.4);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-stone-950 overflow-hidden">
      {/* Background Panels */}
      <div ref={upperRef} className="absolute inset-0 h-1/2 bg-stone-900 z-[150] border-b border-gold/10 flex items-end justify-center overflow-hidden">
        <div className="font-cursive text-[30vw] text-rose-900 opacity-20 translate-y-1/2 whitespace-nowrap select-none">
          Welcome Welcome Welcome
        </div>
      </div>
      <div ref={lowerRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-stone-900 z-[150] border-t border-gold/10 flex items-start justify-center overflow-hidden">
        <div className="font-cursive text-[30vw] text-rose-900 opacity-20 -translate-y-1/2 whitespace-nowrap select-none">
          Welcome Welcome Welcome
        </div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-[140]">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* The Invitation Card */}
      <div ref={cardRef} className="relative z-[160] w-[90%] max-w-sm perspective-1000">
        <div className="relative aspect-[3/4] bg-stone-950 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] rounded-sm flex flex-col justify-end border-[8px] border-solid border-white/90 overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img src="/media__1776859894044.jpg" alt="Ninan and Anu" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a0808] via-[#4a0404]/60 to-transparent"></div>
          </div>

          <div className="text-center relative z-10 w-full px-8 pb-12">
            <p className="loader-text font-serif text-[#ffd700] uppercase tracking-[0.6em] text-[10px] mb-6 drop-shadow-md font-medium">
              Wedding Invitation
            </p>

            <h2 className="font-cursive text-6xl md:text-7xl text-white leading-none mb-6 drop-shadow-lg">
              Ninan & Anu
            </h2>

            <div className="bloom-btn opacity-0 translate-y-10">
              <button
                onClick={handleOpen}
                disabled={!isLoaded}
                className="mt-2 px-10 py-4 bg-white/20 backdrop-blur-md text-white border border-white/50 font-serif uppercase tracking-[0.6em] text-[9px] transition-all hover:bg-white/30 active:scale-95 shadow-xl hover:shadow-white/20"
              >
                Open Invitation
              </button>
            </div>
          </div>

          {!isLoaded && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="w-48 h-[1px] bg-rose-100/10 relative overflow-hidden">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gold/60 w-1/3"
                />
              </div>
              <span className="font-serif text-[9px] uppercase tracking-[0.4em] text-rose-400 opacity-60">Nurturing Roses...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
