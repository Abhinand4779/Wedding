import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AdvancedRose from './AdvancedRose';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the rose
      gsap.to(".hero-rose", {
        y: 150,
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Cinematic text reveal
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        skewY: 10,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        delay: 1
      });

      // Background scale effect
      gsap.to(".hero-bg", {
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-rose-bg">
      {/* Cinematic Background */}
      <div className="hero-bg absolute inset-0 z-0 h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,245,245,0)_0%,rgba(45,10,10,0.4)_100%)] z-10" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vmin] h-[160vmin] opacity-[0.08] pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-rose-900 stroke-[0.1]">
            {[...Array(24)].map((_, i) => (
              <path key={i} d="M50 50 Q75 0 100 50" transform={`rotate(${i * 15} 50 50)`} />
            ))}
          </svg>
        </motion.div>
      </div>

      <div className="z-20 text-center px-4 mt-[-10vh]">
        <div className="hero-rose mb-12 flex justify-center">
          <AdvancedRose className="w-40 h-40 md:w-56 md:h-56" delay={0.5} />
        </div>

        <div className="reveal-text overflow-hidden mb-6">
          <p className="font-serif text-rose-600 italic text-lg md:text-xl max-w-lg mx-auto">
            "I am my beloved's, and my beloved is mine."
          </p>
          <span className="block mt-2 text-[10px] uppercase tracking-[0.5em] text-rose-400 opacity-60">
            Song of Solomon 6:3
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12">
          <div className="reveal-text">
            <h1 className="font-cursive text-[10rem] md:text-[14rem] text-rose-900 leading-[0.8] drop-shadow-2xl">
              Ninan
            </h1>
          </div>

          <div className="reveal-text my-4 md:my-0">
            <span className="font-cursive text-6xl md:text-8xl text-gold">
              &
            </span>
          </div>

          <div className="reveal-text">
            <h1 className="font-cursive text-[10rem] md:text-[14rem] text-rose-900 leading-[0.8] drop-shadow-2xl">
              Anu
            </h1>
          </div>
        </div>

        <div className="reveal-text mt-16 space-y-6">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="font-serif text-rose-700 text-2xl md:text-3xl tracking-[0.3em]">11 . 07 . 26</p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="font-serif text-rose-500 uppercase tracking-[0.6em] text-[12px] opacity-80">
            St. George Basilica Church, Angamaly
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-serif text-[10px] uppercase tracking-[0.4em] text-rose-400">Step Into Our Story</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border border-rose-300 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
