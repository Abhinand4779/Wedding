import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import ChristianHero from './components/ChristianHero';
import TheUnion from './components/TheUnion';
import Events from './components/Events';
import Countdown from './components/Countdown';
import FamilyDetails from './components/FamilyDetails';
import RSVP from './components/RSVP';
import FloatingElements from './components/FloatingElements';
import CustomCursor from './components/CustomCursor';
import { Volume2, VolumeX } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartOpen = () => {
    const audioEl = document.getElementById('bg-music');
    if (audioEl) {
      audioEl.play().catch(e => console.error("Audio playback blocked:", e));
      setIsPlaying(true);
    }
  };

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true);
  };

  const toggleMusic = () => {
    const audioEl = document.getElementById('bg-music');
    if (!audioEl) return;
    
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play().catch(() => { });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-rose-bg font-sans text-rose-900 overflow-x-hidden selection:bg-rose-700/30">
      <CustomCursor />

      {/* Hidden Audio */}
      <audio
        id="bg-music"
        loop
        preload="auto"
        src="/freemusicforvideo-romantic-515595.mp3" 
      />

      <AnimatePresence mode="wait">
        {!envelopeOpened ? (
          <Preloader key="loader" isLoaded={isLoaded} onOpen={handleOpenEnvelope} onStartOpen={handleStartOpen} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative z-10"
          >
            {/* Music Toggle UI */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[150] w-12 h-12 glass rounded-full flex items-center justify-center border border-rose-200 text-rose-900 hover:scale-110 transition-transform shadow-lg"
            >
              {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </motion.button>

            <FloatingElements />

            <main>
              <ChristianHero />
              <TheUnion />
              <Events />
              <Countdown />
              <FamilyDetails />
              <RSVP />
            </main>

            <footer className="py-24 bg-rose-900 text-rose-50 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center font-cursive text-[15vw] whitespace-nowrap pointer-events-none">
                Thank You
              </div>
              <div className="relative z-10 px-4">
                <p className="font-cursive text-5xl mb-6 text-gold-light">Ninan & Anu</p>
                <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
                <p className="font-serif text-[10px] uppercase tracking-[0.5em] opacity-80 mb-12">
                  July 11, 2026
                </p>
                <p className="font-serif italic text-lg text-cream opacity-90">
                  “Best wishes as Jobzen Shantu Padayattil”
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
