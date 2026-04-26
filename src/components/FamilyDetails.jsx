import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FamilyDetails = () => {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Groom's Family */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-right space-y-6"
          >
            <h3 className="font-serif text-gold uppercase tracking-[0.3em] text-sm font-semibold">Groom's Parents</h3>
            <div className="space-y-2">
              <p className="font-cursive text-5xl text-rose-900">Shantu Padayattil</p>
              <p className="font-serif text-rose-700 italic">Father</p>
            </div>
            <div className="space-y-2">
              <p className="font-cursive text-5xl text-rose-900">Bindu Shantu</p>
              <p className="font-serif text-rose-700 italic">Mother</p>
            </div>
          </motion.div>

          {/* Bride's Family */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left space-y-6 border-t md:border-t-0 md:border-l border-rose-100 pt-16 md:pt-0 md:pl-16"
          >
            <h3 className="font-serif text-gold uppercase tracking-[0.3em] text-sm font-semibold">Bride's Parents</h3>
            <div className="space-y-2">
              <p className="font-cursive text-5xl text-rose-900">Thekkanath Pulickalan Paulachan</p>
              <p className="font-serif text-rose-700 italic">Father</p>
            </div>
            <div className="space-y-2">
              <p className="font-cursive text-5xl text-rose-900">Litty Paul</p>
              <p className="font-serif text-rose-700 italic">Mother</p>
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
                <p className="font-sans text-rose-900 font-medium">+91 98765 43210</p>
              </div>
            </motion.div>

            <motion.a 
              whileHover={{ y: -5 }}
              href="https://wa.me/919876543210?text=Hello! Regarding the wedding..."
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
