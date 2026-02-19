import { motion } from "framer-motion";
import roseDivider from "@/assets/rose-divider.png";
import { FATHER_NAME, MADRINA_NAME, PADRINO_NAME } from "@/data/eventData";

const EventDetailsSection = () => {
  return (
    <section className="relative pt-2 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <motion.p
          className="font-body text-lg text-cream/80 max-w-2xl mx-auto mb-12 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Y con el amor de mi familia, tengo el honor de invitarte a celebrar conmigo
          este día tan especial en el que cumplo mis XV años.
        </motion.p>

        {/* Family */}
        <motion.div
          className="golden-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light mb-4">
            Mi Padre
          </p>
          <p className="font-body text-xl text-cream mb-6">
            {FATHER_NAME}
          </p>

          <div className="h-px w-16 gold-gradient mx-auto my-6" />

          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light mb-4">
            Mis Padrinos
          </p>
          <p className="font-body text-xl text-cream mb-2">
            {MADRINA_NAME}
          </p>
          <p className="font-body text-xl text-cream">
            {PADRINO_NAME}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
