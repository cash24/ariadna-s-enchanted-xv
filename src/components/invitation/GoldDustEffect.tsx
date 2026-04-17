import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = [
  "#d4af37",  // gold
  "#f5e7a3",  // gold-light
  "#fff8dc",  // cream
  "#c9980a",  // gold-dark
  "#ffe066",  // bright gold
];

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -10,
    size: Math.random() * 8 + 3,
    rotation: Math.random() * 360,
    duration: Math.random() * 2 + 2,
    delay: Math.random() * 1.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));

interface GoldDustEffectProps {
  active: boolean;
}

const GoldDustEffect = ({ active }: GoldDustEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerEffect = useCallback(() => {
    setParticles(generateParticles(60));
    const timeout = setTimeout(() => setParticles([]), 4000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (active) {
      return triggerEffect();
    }
  }, [active, triggerEffect]);

  return (
    <AnimatePresence>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed pointer-events-none z-[100]"
          style={{
            left: `${p.x}vw`,
            top: 0,
            width: p.size,
            height: p.size,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          initial={{ y: "-10vh", opacity: 1, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [1, 1, 0],
            rotate: p.rotation,
            x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </AnimatePresence>
  );
};

export default GoldDustEffect;
