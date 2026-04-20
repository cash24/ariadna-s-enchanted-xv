import { motion } from "framer-motion";
import { Church, Wine, Star, Utensils, Music, Cake, PartyPopper } from "lucide-react";

const events = [
  { time: "6:00 PM", label: "Ceremonia Religiosa", icon: <Church className="w-5 h-5" /> },
  { time: "7:45 PM", label: "Recepción en Salón", icon: <Wine className="w-5 h-5" /> },
  { time: "8:30 PM", label: "Presentación de Ariadna", icon: <Star className="w-5 h-5" /> },
  { time: "8:45 PM", label: "Cena", icon: <Utensils className="w-5 h-5" /> },
  { time: "9:45 PM", label: "Vals", icon: <Music className="w-5 h-5" /> },
  { time: "10:15 PM", label: "Partida de Pastel", icon: <Cake className="w-5 h-5" /> },
  { time: "10:30 PM", label: "Bailes quinceañera", icon: <Music className="w-5 h-5" /> },
  { time: "11:00 PM", label: "Baile", icon: <PartyPopper className="w-5 h-5" /> },
];

const TimelineSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-gold text-center mb-4 gold-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Programa del evento
        </motion.h2>
        <motion.div
          className="h-px w-24 gold-gradient mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold/30" />

          <div className="flex flex-col gap-10">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative flex items-center gap-4 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Content card */}
                  <div className={`w-[calc(50%-28px)] ${isLeft ? "text-right" : "text-left"}`}>
                    <div className="golden-border rounded-xl p-4 bg-card/40 backdrop-blur-sm inline-block w-full">
                      <p className="font-heading text-xs uppercase tracking-widest text-gold-light mb-1">
                        {event.time}
                      </p>
                      <p className="font-body text-cream text-sm leading-snug">
                        {event.label}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0f1a] border-2 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10 shrink-0">
                    {event.icon}
                  </div>

                  {/* Spacer */}
                  <div className="w-[calc(50%-28px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
