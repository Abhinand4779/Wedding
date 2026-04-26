import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const TimeUnit = ({ value, label }) => {
  const valueRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(valueRef.current, 
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [value]);

  return (
    <div className="flex flex-col items-center p-6 min-w-[100px] md:min-w-[150px] group transition-all duration-500 hover:bg-rose-50/50 rounded-2xl">
      <div className="relative">
        <span ref={valueRef} className="relative z-10 font-serif text-5xl md:text-7xl text-rose-900 leading-none tracking-tight">
          {value.toString().padStart(2, '0')}
        </span>
        <div className="absolute inset-0 bg-rose-200 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
      </div>
      <span className="font-serif text-[10px] uppercase tracking-[0.6em] text-gold mt-6 font-bold opacity-60 group-hover:opacity-100 transition-all">
        {label}
      </span>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date('2026-07-11T15:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000); 
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-40 px-4 bg-rose-bg relative overflow-hidden border-y border-rose-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-cursive text-6xl md:text-8xl text-rose-950 mb-20 drop-shadow-sm">
          Counting Down to Forever
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 md:divide-x divide-rose-100/50">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
