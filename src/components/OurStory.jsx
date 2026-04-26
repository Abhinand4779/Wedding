import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AdvancedRose from './AdvancedRose';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StorySection = ({ title, year, text, index }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-image", {
        scale: 1.2,
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true
        }
      });

      gsap.from(".story-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 mb-48`}>
      <div className="story-image w-full md:w-1/2 relative group px-4 md:px-0">
        <div className="aspect-[4/5] rounded-[30px] relative overflow-hidden shadow-2xl border-8 border-white group-hover:shadow-3xl transition-shadow duration-700">
          <img 
            src={index === 0 ? "/media__1776860049863.jpg" : index === 1 ? "/media__1776860184918.jpg" : "/media__1776859913938.jpg"} 
            alt={`Story ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a5568]/60 to-transparent opacity-60" />
          <div className="absolute inset-8 border border-white/50 pointer-events-none rounded-[22px]" />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#d4af37]/40 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 rounded-br-[40px]" />
      </div>

      <div className="story-content w-full md:w-1/2 text-center md:text-left space-y-6">
        <span className="text-gold font-serif text-sm uppercase tracking-[0.8em] block">
          {year}
        </span>
        <h3 className="font-serif text-5xl md:text-6xl text-rose-900 italic font-medium leading-tight">
          {title}
        </h3>
        <p className="font-sans text-rose-700 leading-relaxed font-light text-xl max-w-md">
          {text}
        </p>
        <div className={`h-[1px] w-24 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 mx-auto md:mx-0 ${index % 2 === 0 ? '' : 'md:ml-auto'}`} />
      </div>
    </div>
  );
};

const OurStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-text", {
        x: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 px-6 bg-[#fffcfc] overflow-hidden relative">
       {/* Background decorative path */}
       <div className="bg-text absolute top-20 left-0 font-cursive text-[25vw] whitespace-nowrap pointer-events-none text-rose-50 opacity-40 select-none">
          The Journey of Ninan & Anu
       </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-40">
          <div className="flex justify-center mb-10">
            <AdvancedRose className="w-24 h-24" delay={0.2} />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif text-gold uppercase tracking-[0.5em] text-xs mb-8"
          >
            A Walk through time
          </motion.p>
          <h2 className="font-cursive text-8xl md:text-[10rem] text-rose-900 drop-shadow-sm">
            Our Love Story
          </h2>
        </div>

        <StorySection
          index={0}
          year="2020"
          title="The Sparks Begin"
          text="In the quiet moments of shared conversation, we found a heartbeat that resonated with our own. A simple friendship blossomed into a love that feels like destiny."
        />

        <StorySection
          index={1}
          year="2023"
          title="Growing Together"
          text="Through every season, we've built a foundation of trust, laughter, and unwavering support. Every memory created has been a step towards this beautiful tomorrow."
        />

        <StorySection
          index={2}
          year="2026"
          title="The Promise"
          text="Now, we stand at the threshold of a lifetime together. With hearts full of hope and a promise that knows no bounds, we begin our greatest adventure yet."
        />
      </div>
    </section>
  );
};

export default OurStory;
