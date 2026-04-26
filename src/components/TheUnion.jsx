import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UnionImage = ({ src, alt, delay, reverse }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        y: 100,
        opacity: 0,
        rotation: reverse ? -5 : 5,
        duration: 1.5,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: true
        }
      });
    }, imgRef);
    return () => ctx.revert();
  }, [reverse]);

  return (
    <div ref={imgRef} className="relative w-full max-w-sm mx-auto group">
      <div className={`aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl border-[6px] border-white relative z-10 transition-transform duration-700 group-hover:scale-105`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className={`absolute -bottom-6 ${reverse ? '-left-6' : '-right-6'} w-full h-full border border-[#d4af37]/40 rounded-t-full z-0 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4`} />
    </div>
  );
}

const TheUnion = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".union-text > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 md:px-12 bg-rose-bg relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-gold/30" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center union-text mb-24">
          <p className="font-serif text-gold uppercase tracking-[0.5em] text-xs font-semibold mb-6">
            A New Beginning
          </p>
          <h2 className="font-cursive text-7xl md:text-9xl text-rose-900 mb-8">
            The Union
          </h2>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto mb-8" />
          <p className="font-serif text-rose-800 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl font-light">
            With the grace of God and the blessings of our beloved families, we invite you to share in the joy of our wedding celebration. We look forward to beginning our lives together surrounded by those we love.
          </p>
        </div>

        {/* Row 1: 3 Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center mt-20">
          <div className="md:translate-y-12">
            <UnionImage src="/media__1776860049863.jpg" alt="Ninan and Anu Together" reverse={true} />
          </div>
          <div className="md:-translate-y-12 z-20">
            <UnionImage src="/media__1776867906816.jpg" alt="The Beautiful Couple" delay={0.2} />
          </div>
          <div className="md:translate-y-12">
            <UnionImage src="/media__1776860184918.jpg" alt="Looking Forward" delay={0.4} reverse={false} />
          </div>
        </div>

        {/* Row 2: 2 Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-24 md:mt-48 max-w-5xl mx-auto">
          <div className="md:-translate-y-8">
            <UnionImage src="/media__1776867826629.jpg" alt="Walking together" reverse={true} />
          </div>
          <div className="md:translate-y-8">
            <UnionImage src="/media__1776867850078.jpg" alt="Laughing" reverse={false} delay={0.3} />
          </div>
        </div>

        {/* Row 3: 3 Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center mt-24 md:mt-48 mb-20">
          <div className="md:translate-y-12">
            <UnionImage src="/media__1776867873578.jpg" alt="Holding Hands" reverse={true} />
          </div>
          <div className="md:-translate-y-12 z-20">
            <UnionImage src="/media__1776859913938.jpg" alt="Rain Effect" delay={0.2} />
          </div>
          <div className="md:translate-y-12">
            <UnionImage src="/media__1776867925625.jpg" alt="Sitting on stairs" delay={0.4} reverse={false} />
          </div>
        </div>

        <div className="mt-32 text-center union-text">
          <p className="font-serif text-rose-800 text-xl md:text-3xl italic font-light">
            "Two families united, two hearts bound."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheUnion;
