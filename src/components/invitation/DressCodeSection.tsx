import { motion } from "framer-motion";
import { Shirt, Camera, Gift } from "lucide-react";

const DressCodeSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-gold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Detalles del Evento
        </motion.h2>
        <motion.div
          className="h-px w-24 gold-gradient mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Shirt className="w-8 h-8" />,
              title: "Código de Vestimenta",
              description: "Formal / Elegante",
              note: "Colores sugeridos: Dorado, Burgundy, Rojo",
            },
            {
              icon: <Camera className="w-8 h-8" />,
              title: "Hashtag del Evento",
              description: "#XVAriadna2026",
              note: "Comparte tus fotos con este hashtag",
            },
            {
              icon: <Gift className="w-8 h-8" />,
              title: "Mesa de Regalos",
              description: "Tu presencia es el mejor regalo",
              note: "Si deseas obsequiar algo, lluvia de sobres 💌",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="golden-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-gold">{item.icon}</div>
              <h3 className="font-heading text-sm uppercase tracking-wider text-gold-light">
                {item.title}
              </h3>
              <p className="font-body text-xl text-cream">{item.description}</p>
              <p className="font-body text-sm text-muted-foreground italic">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
