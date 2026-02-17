import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import {
  CHURCH_NAME,
  CHURCH_ADDRESS,
  CHURCH_MAP_URL,
  VENUE_NAME,
  VENUE_ADDRESS,
  VENUE_MAP_URL,
  CEREMONY_TIME,
  RECEPTION_TIME,
} from "@/data/eventData";

interface LocationCardProps {
  icon: React.ReactNode;
  title: string;
  name: string;
  address: string;
  time: string;
  mapUrl: string;
  delay?: number;
}

const LocationCard = ({ icon, title, name, address, time, mapUrl, delay = 0 }: LocationCardProps) => (
  <motion.div
    className="golden-border rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
  >
    <div className="p-6 text-center space-y-4">
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon}
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light">{title}</p>
      </div>
      <h3 className="font-heading text-2xl text-gold mb-1">{name}</h3>
      <p className="font-body text-base text-cream/70 mb-4">{address}</p>
      <div className="flex items-center justify-center gap-2 text-gold-light mb-6">
        <Clock className="w-5 h-5" />
        <span className="font-heading text-lg">{time}</span>
      </div>

      <motion.a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full py-4 rounded-xl bg-gold/10 border border-gold/30 text-gold font-heading text-xs uppercase tracking-widest hover:bg-gold hover:text-midnight transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Ver Ubicación en Maps
      </motion.a>
    </div>
  </motion.div>
);

const LocationsSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-gold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ubicaciones
        </motion.h2>
        <motion.div
          className="h-px w-24 gold-gradient mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <div className="grid md:grid-cols-2 gap-8">
          <LocationCard
            icon={<MapPin className="w-4 h-4 text-gold-light" />}
            title="Ceremonia Religiosa"
            name={CHURCH_NAME}
            address={CHURCH_ADDRESS}
            time={CEREMONY_TIME}
            mapUrl={CHURCH_MAP_URL}
            delay={0.2}
          />
          <LocationCard
            icon={<MapPin className="w-4 h-4 text-gold-light" />}
            title="Recepción"
            name={VENUE_NAME}
            address={VENUE_ADDRESS}
            time={RECEPTION_TIME}
            mapUrl={VENUE_MAP_URL}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
