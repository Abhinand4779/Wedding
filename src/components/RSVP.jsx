import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const RSVP = () => {
  const [response, setResponse] = useState(null); // 'yes', 'no', or null

  const handleYes = () => {
    setResponse('yes');
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5a017', '#ffdcb4', '#7a3e0f']
    });
    // Optional: Redirect after a short delay
    setTimeout(() => {
      window.open("https://wa.me/61468898137?text=I'll be attending the wedding! 🥂", "_blank");
    }, 2000);
  };

  const handleNo = () => {
    setResponse('no');
  };

  return (
    <section id="rsvp" className="py-32 px-4 bg-cream relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-gold uppercase tracking-[0.5em] text-[10px] block mb-4"
          >
            Engagement & Celebration
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cursive text-7xl md:text-8xl text-rose-900 mb-8"
          >
            Will you attend?
          </motion.h2>
          <p className="font-serif text-rose-800/60 text-sm tracking-widest uppercase">We would love to have you with us</p>
        </div>

        <AnimatePresence mode="wait">
          {!response ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#7a3e0f' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="w-full sm:w-48 bg-rose-900 text-gold font-serif uppercase tracking-[0.3em] text-xs py-6 rounded-full shadow-2xl transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Yes, I'll Be There
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#7a3e0f', color: '#7a3e0f' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNo}
                className="w-full sm:w-48 border border-rose-200 text-rose-400 font-serif uppercase tracking-[0.3em] text-xs py-6 rounded-full transition-all duration-300"
              >
                Sadly, I Can't
              </motion.button>
            </motion.div>
          ) : response === 'yes' ? (
            <motion.div
              key="yes-response"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-8 bg-white/60 backdrop-blur-md rounded-[3rem] border border-gold/20 shadow-2xl"
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-gold" />
                </div>
              </div>
              <h3 className="font-cursive text-5xl text-rose-900 mb-4">Wonderful!</h3>
              <p className="font-serif text-rose-800 leading-relaxed mb-8">
                We're so happy you're joining us! <br />
                Redirecting you to confirm on WhatsApp...
              </p>
              <a
                href="https://wa.me/919446990357?text=I'll be attending the wedding! 🥂"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-serif uppercase tracking-widest text-[10px] font-bold border-b border-gold pb-1 hover:text-rose-900 hover:border-rose-900 transition-colors"
              >
                Confirm Manually <MessageCircle size={14} />
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="no-response"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-8 bg-white/60 backdrop-blur-md rounded-[3rem] border border-rose-100 shadow-xl"
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center">
                  <XCircle size={40} className="text-rose-300" />
                </div>
              </div>
              <h3 className="font-cursive text-5xl text-rose-950 mb-4">We'll Miss You</h3>
              <p className="font-serif text-rose-800 leading-relaxed">
                Thank you for letting us know. <br />
                You'll be with us in spirit!
              </p>
              <button
                onClick={() => setResponse(null)}
                className="mt-8 text-[10px] uppercase tracking-widest text-rose-300 hover:text-rose-900 transition-colors"
              >
                Change Response
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-gold to-transparent" />
    </section>
  );
};

export default RSVP;
