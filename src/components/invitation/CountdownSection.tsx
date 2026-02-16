import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EVENT_DATE } from "@/data/eventData";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="font-heading text-xs uppercase tracking-[0.5em] text-gold-light mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Faltan
        </motion.p>

        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="golden-border rounded-lg w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-card/80 backdrop-blur-sm">
                <span className="font-heading text-2xl md:text-4xl text-gold font-bold">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 font-heading text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 font-display text-3xl md:text-4xl text-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          20 de Junio, 2026
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownSection;
