import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-belle.jpg";

const CoverSection = ({ guestName, onOpen }: { guestName: string; onOpen: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-sm font-heading uppercase tracking-[0.4em] text-gold-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Mis XV Años
            </motion.p>

            <motion.h1
              className="font-display text-7xl md:text-9xl gold-text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Ariadna
            </motion.h1>

            <motion.div
              className="h-px w-32 gold-gradient"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />

            <motion.p
              className="font-body text-lg text-cream italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Te invita a celebrar este día tan especial
            </motion.p>

            {guestName && (
              <motion.p
                className="font-heading text-sm uppercase tracking-[0.3em] text-gold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                Invitación para: {guestName}
              </motion.p>
            )}

            <motion.button
              className="mt-8 golden-border rounded-full px-10 py-3 font-heading text-sm uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold/10 animate-glow-pulse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              onClick={() => {
                setIsVisible(false);
                onOpen();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Abrir Invitación
            </motion.button>
          </motion.div>

          {/* Floating petals */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-red text-2xl"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 400),
                y: -50,
                rotate: 0,
                opacity: 0.7,
              }}
              animate={{
                y: typeof window !== "undefined" ? window.innerHeight + 50 : 900,
                rotate: 720,
                opacity: 0,
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            >
              🌹
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverSection;
