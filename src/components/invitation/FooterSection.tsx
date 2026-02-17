import { motion } from "framer-motion";

const FooterSection = () => (
  <footer className="relative py-16 px-4 text-center">
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="font-display text-4xl md:text-5xl text-gold mb-4">
        ¡Te esperamos!
      </p>
      <p className="font-body text-cream/60 italic text-lg mb-8">
        "Hay algo dulce y casi tan viejo como el tiempo..."
      </p>
      <div className="h-px w-24 gold-gradient mx-auto mb-4" />
      <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold/40">
        Con amor, Ariadna ✨
      </p>
      <p className="text-[8px] text-gold/20 mt-4 uppercase tracking-widest">
        Ver: 1.4.7 - NuclearSync
      </p>
    </motion.div>
  </footer>
);

export default FooterSection;
