import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

const FamilyDetails = () => {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-24">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[420px] bg-white rounded-[2.5rem] p-12 border border-gold/15 shadow-[0_30px_60px_rgba(184,146,84,0.08)] text-center relative group hover:border-gold/30 transition-all duration-500"
          >
            <div className="mb-10 relative inline-block">
              <div className="w-28 h-28 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 relative">
                <div className="absolute inset-1 rounded-full border border-gold/10" />
                <span className="font-cursive text-6xl text-gold pt-2 select-none">n</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <Sparkles className="text-gold w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-cursive text-7xl text-rose-900 mb-6">Ninan</h3>
              <div className="space-y-4">
                <p className="font-serif text-[11px] uppercase tracking-[0.5em] text-gold font-bold">Son of</p>
                <p className="font-sans font-bold text-rose-900 text-xl tracking-tight">Shantu Padayattil & Bindu Shantu</p>
                <p className="font-serif italic text-rose-800/50 text-sm leading-relaxed max-w-[280px] mx-auto">
                  Padayattil House, Angamaly,<br />Ernakulam
                </p>
              </div>
            </div>
          </motion.div>

          {/* Infinity Symbol */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="text-gold/40 text-8xl font-light scale-y-75 transform">∞</div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[420px] bg-white rounded-[2.5rem] p-12 border border-gold/15 shadow-[0_30px_60px_rgba(184,146,84,0.08)] text-center relative group hover:border-gold/30 transition-all duration-500"
          >
            <div className="mb-10 relative inline-block">
              <div className="w-28 h-28 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 relative">
                <div className="absolute inset-1 rounded-full border border-gold/10" />
                <span className="font-cursive text-6xl text-gold pt-2 select-none">a</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <Sparkles className="text-gold w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-cursive text-7xl text-rose-900 mb-6">Anu</h3>
              <div className="space-y-4">
                <p className="font-serif text-[11px] uppercase tracking-[0.5em] text-gold font-bold">Daughter of</p>
                <p className="font-sans font-bold text-rose-900 text-xl tracking-tight">Paulachan T P & Litty Paul</p>
                <p className="font-serif italic text-rose-800/50 text-sm leading-relaxed max-w-[280px] mx-auto">
                  Thekkanath Pulickalan House, Besleham,<br />Karukutty, Ernakulam
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="mt-32 pt-24 border-t border-rose-100">
          <div className="text-center mb-16">
            <h3 className="font-serif text-gold uppercase tracking-[0.5em] text-xs font-bold mb-4">Contact & Inquiries</h3>
            <p className="font-serif text-rose-900 text-lg">Feel free to reach out to us for any assistance.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-rose-900 border border-rose-50">
                <Phone size={24} />
              </div>
              <div className="text-center">
                <p className="font-serif text-[10px] uppercase tracking-widest text-gold mb-1">Call Us</p>
                <p className="font-sans text-rose-900 font-medium">+91 9446990357</p>
              </div>
            </motion.div>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://wa.me/919446990357?text=Hello! Regarding the wedding..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg text-white">
                <MessageCircle size={28} />
              </div>
              <div className="text-center">
                <p className="font-serif text-[10px] uppercase tracking-widest text-gold mb-1">WhatsApp</p>
                <p className="font-sans text-rose-900 font-medium">Click to Chat</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-50 rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] opacity-50 translate-x-1/4 translate-y-1/4" />
    </section>
  );
};

export default FamilyDetails;
