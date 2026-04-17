import { motion } from "framer-motion";
import { Music2, Send } from "lucide-react";
import { WHATSAPP_CONFIRM } from "@/data/eventData";

const SongRequestSection = () => {
  const handleSongRequest = () => {
    const message = encodeURIComponent(
      "🎵 ¡Hola! Te sugiero esta canción para la fiesta de Ariadna:\n\n[Escribe aquí el nombre de tu canción y artista]\n\n¡Que no puede faltar! 🎉"
    );
    window.open(
      `https://wa.me/${WHATSAPP_CONFIRM.replace("+", "")}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-gold text-center mb-4 gold-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          DJ, pon esa canción
        </motion.h2>
        <motion.div
          className="h-px w-24 gold-gradient mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="font-body text-xl text-cream/80 leading-relaxed mb-10 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          ¿Hay una canción que no puede faltar en la fiesta de Ariadna?
          <br />
          <span className="text-gold not-italic">¡Cuéntanos y la ponemos!</span>
        </motion.p>

        {/* Animated music notes background */}
        <div className="relative inline-block mb-10">
          <motion.div
            className="absolute -top-4 -left-6 text-gold/30 text-2xl"
            animate={{ y: [-4, 4, -4], rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >♪</motion.div>
          <motion.div
            className="absolute -top-2 -right-6 text-gold/20 text-3xl"
            animate={{ y: [4, -4, 4], rotate: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >♫</motion.div>
          <motion.div
            className="absolute -bottom-2 left-0 text-gold/20 text-xl"
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >♩</motion.div>

          <div className="golden-border rounded-2xl px-10 py-8 bg-card/40 backdrop-blur-sm">
            <Music2 className="w-16 h-16 text-gold mx-auto mb-4 animate-pulse" />
            <p className="font-heading text-sm uppercase tracking-[0.3em] text-gold-light">
              Tu canción favorita
            </p>
          </div>
        </div>

        <motion.button
          onClick={handleSongRequest}
          className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-heading text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(37,211,102,0.3)]"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Send className="w-4 h-4" />
          Sugerir una Canción por WhatsApp
        </motion.button>
      </div>
    </section>
  );
};

export default SongRequestSection;
