import React from 'react';
import { motion } from 'framer-motion';

const RoseBloom = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer Petals */}
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          d="M50 50 Q75 25 100 50 Q75 75 50 50"
          fill="var(--color-rose-200)"
          className="origin-center"
        />
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          d="M50 50 Q25 25 0 50 Q25 75 50 50"
          fill="var(--color-rose-200)"
          className="origin-center"
        />
        <motion.path  
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          d="M50 50 Q75 75 50 100 Q25 75 50 50"
          fill="var(--color-rose-300)"
          className="origin-center"
        />
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          d="M50 50 Q25 25 50 0 Q75 25 50 50"
          fill="var(--color-rose-300)"
          className="origin-center"
        />

        {/* Inner Bloom */}
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
          cx="50" cy="50" r="15"
          fill="var(--color-gold)"
        />
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.2, type: "spring" }}
          cx="50" cy="50" r="8"
          fill="var(--color-gold-dark)"
        />
      </svg>
    </div>
  );
};

export default RoseBloom;
