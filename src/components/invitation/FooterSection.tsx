import { motion } from "framer-motion";

const FooterSection = () => (
  <footer className="relative py-16 px-4 text-center">
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="font-display text-5xl md:text-6xl text-gold text-center mb-4 gold-glow">
        ¡Te esperamos!
      </p>
      <motion.div
        className="h-px w-24 gold-gradient mx-auto mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />
      <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mb-8 italic">
        “Un día mágico, un vestido soñado y personas especiales como tú.”
      </p>
      <p className="font-display text-3xl md:text-4xl text-gold gold-glow">
        Con amor, Ariadna ✨
      </p>

    </motion.div>
  </footer>
);

export default FooterSection;
