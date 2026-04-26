import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChristianHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic image reveal
      gsap.from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 2.5,
        ease: "power3.out",
        stagger: 0.2
      });

      // Parallax effect on images
      gsap.to(".hero-image-left", {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".hero-image-right", {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Cinematic text reveal
      gsap.from(".reveal-text", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[140vh] md:min-h-[140vh] flex flex-col items-center justify-center pb-40 pt-20 overflow-hidden bg-rose-bg">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200/30 to-rose-bg z-0 pointer-events-none" />

      {/* Hero Images Grid */}
      <div className="absolute inset-0 flex justify-between items-center px-4 md:px-20 z-10 opacity-30 blur-[2px] md:opacity-80 md:blur-none pointer-events-none">
        <div className="hero-image-left hero-image relative w-[40vw] md:w-[25vw] h-[60vh] md:h-[70vh] rounded-t-full overflow-hidden shadow-2xl border-4 border-white transform -translate-y-10">
          <img 
            src="/media__1776859865552.jpg" 
            alt="Ninan and Anu" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#b91c1c]/20 mix-blend-overlay"></div>
        </div>

        <div className="hero-image-right hero-image relative w-[40vw] md:w-[25vw] h-[60vh] md:h-[70vh] rounded-t-full overflow-hidden shadow-2xl border-4 border-white transform translate-y-20">
          <img 
            src="/media__1776859894044.jpg" 
            alt="Ninan and Anu Celebration" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
           <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay"></div>
        </div>
      </div>

      <div className="relative z-20 text-center px-4 w-full mt-[-10vh]">
        <div className="reveal-text overflow-hidden mb-12">
          <p className="font-serif text-[#7f1d1d] italic text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed font-light">
            "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
          </p>
          <span className="block mt-4 text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[#C5A017] font-semibold">
            Matthew 19:6
          </span>
          <div className="w-24 h-[1px] bg-[#C5A017] mx-auto mt-8 opacity-40" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-16 mix-blend-multiply">
          <div className="reveal-text">
            <h1 className="font-cursive text-[5.5rem] sm:text-[6rem] md:text-[14rem] text-rose-900 leading-[0.8] md:leading-[0.6] drop-shadow-sm">
              Ninan
            </h1>
          </div>

          <div className="reveal-text my-2 md:my-0">
            <span className="font-cursive text-5xl md:text-9xl text-gold">
              &
            </span>
          </div>

          <div className="reveal-text">
            <h1 className="font-cursive text-[5.5rem] sm:text-[6rem] md:text-[14rem] text-rose-900 leading-[0.8] md:leading-[0.6] drop-shadow-sm">
              Anu
            </h1>
          </div>
        </div>
        
        <div className="reveal-text mt-12 md:mt-24 space-y-4 md:space-y-8 bg-cream/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] md:rounded-full mx-auto shadow-[0_8px_30px_rgba(122,62,15,0.08)] border border-rose-100 w-[90%] md:w-auto inline-block">
          <div className="flex items-center justify-center gap-4 md:gap-12">
            <div className="hidden md:block h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="font-serif text-rose-900 text-xl md:text-5xl tracking-[0.2em] md:tracking-[0.4em] font-light whitespace-nowrap">11 . 07 . 26</p>
            <div className="hidden md:block h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="font-serif text-rose-800 uppercase tracking-[0.2em] md:tracking-[0.8em] text-[8px] md:text-[14px] font-medium pt-2 md:pt-4">
            St. George Basilica Church, Angamaly
          </p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6 z-20"
      >
        <span className="font-serif text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#C5A017] whitespace-nowrap">Begin the Journey</span>
        <motion.div
           animate={{ y: [0, 15, 0] }}
           transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
           className="w-[1px] h-20 bg-gradient-to-b from-[#C5A017] to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default ChristianHero;
