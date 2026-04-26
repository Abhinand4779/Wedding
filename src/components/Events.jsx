import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Clock, CalendarDays } from 'lucide-react';
import gsap from 'gsap';

const EventCard = ({ title, date, time, location, mapUrl, delay }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: 1000 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      className="event-card group relative bg-white p-10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-rose-100/50 overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(60px)" }}
        className="relative z-10"
      >
        <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-rose-900 group-hover:text-white transition-all duration-500 shadow-sm">
           <CalendarDays size={24} />
        </div>
        
        <h3 className="font-serif text-4xl text-rose-950 mb-8 font-medium leading-tight">{title}</h3>
        
        <div className="space-y-6 text-rose-800 font-sans font-light">
          <div className="flex items-center gap-6">
            <div className="p-1 rounded-full bg-gold/10">
              <CalendarDays size={16} className="text-gold" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="p-1 rounded-full bg-gold/10">
              <Clock size={16} className="text-gold" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{time}</span>
          </div>
          <div className="flex items-start gap-6">
            <div className="p-1 rounded-full bg-gold/10 shrink-0">
              <MapPin size={16} className="text-gold" />
            </div>
            <span className="text-sm leading-relaxed opacity-80">{location}</span>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-rose-50/50">
          <motion.a 
            whileHover={{ x: 10 }}
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-serif text-[10px] uppercase tracking-[0.4em] text-gold font-bold"
          >
            Explore Venue <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
          </motion.a>
        </div>
      </div>

      {/* Decorative Blur Gradients */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-50 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-gold/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100" />
    </motion.div>
  );
};

const Events = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-title > *", {
        y: 60,
        opacity: 0,
        skewY: 5,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Background text parallax
      gsap.to(".bg-text-events", {
        x: 150,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-48 px-4 bg-rose-bg relative overflow-hidden">
      {/* Parallax Background Title */}
      <div className="bg-text-events absolute top-1/2 left-0 font-cursive text-[25vw] text-rose-50 opacity-30 pointer-events-none select-none -translate-y-1/2 whitespace-nowrap">
        Celebration Celebration
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="event-title text-center mb-32">
          <span className="font-serif text-gold uppercase tracking-[0.7em] text-[11px] block mb-8 font-semibold">Save the Date</span>
          <h2 className="font-cursive text-8xl md:text-[11rem] text-rose-950 drop-shadow-md leading-none">The Big Day</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-4">
          <EventCard 
            title="The Wedding"
            date="Saturday, July 11, 2026"
            time="3:00 PM"
            location="St. George Basilica Church, Angamaly"
            mapUrl="https://www.google.com/maps/search/?api=1&query=St.+George+Basilica+Church,+Angamaly"
            delay={0.2}
          />
          <EventCard 
            title="Wedding Reception"
            date="Saturday, July 11, 2026"
            time="5:30 PM"
            location="St. George Basilica Angamaly, Parish Hall"
            mapUrl="https://www.google.com/maps/search/?api=1&query=St.+George+Basilica+Church,+Angamaly"
            delay={0.4}
          />
        </div>
      </div>
      
      {/* Section Divider Decor */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-gold to-transparent" />
    </section>
  );
};

export default Events;
