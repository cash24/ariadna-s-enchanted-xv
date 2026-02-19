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
        “Un día mágico, un vestido soñado y personas especiales como tú.”
      </p>
      <p className="font-display text-3xl md:text-4xl text-gold gold-glow">
        Con amor, Ariadna ✨
      </p>

    </motion.div>
  </footer>
);

export default FooterSection;
