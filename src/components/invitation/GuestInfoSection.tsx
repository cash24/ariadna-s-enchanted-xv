import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Ticket, Users, Hash } from "lucide-react";
import type { GuestData } from "@/data/eventData";

const GuestInfoSection = ({ guest, eventUrl }: { guest: GuestData; eventUrl: string }) => {
  const qrValue = `${eventUrl}?id=${guest.id}`;

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-gold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tu Invitación
        </motion.h2>
        <motion.div
          className="h-px w-24 gold-gradient mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="golden-border rounded-2xl p-8 md:p-12 bg-card/60 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Guest name */}
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light mb-2">
            Invitación para
          </p>
          <h3 className="font-display text-4xl text-gold mb-8">{guest.name}</h3>

          {/* Info cards */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50">
              <Hash className="w-5 h-5 text-gold" />
              <span className="font-heading text-xs uppercase tracking-wider text-gold-light">Mesa</span>
              <span className="font-heading text-2xl text-gold font-bold">{guest.table}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50">
              <Ticket className="w-5 h-5 text-gold" />
              <span className="font-heading text-xs uppercase tracking-wider text-gold-light">Boletos</span>
              <span className="font-heading text-2xl text-gold font-bold">{guest.tickets}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50">
              <Users className="w-5 h-5 text-gold" />
              <span className="font-heading text-xs uppercase tracking-wider text-gold-light">Pases</span>
              <span className="font-heading text-2xl text-gold font-bold">{guest.companions.length + 1}</span>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-light">
              QR de Acceso
            </p>
            <motion.div
              className="p-4 rounded-xl bg-cream sparkle-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring" }}
            >
              <QRCodeSVG
                value={qrValue}
                size={180}
                bgColor="hsl(40, 50%, 90%)"
                fgColor="hsl(340, 30%, 8%)"
                level="H"
                includeMargin={false}
              />
            </motion.div>
            <p className="font-body text-sm text-muted-foreground">
              Presenta este código en la entrada
            </p>
            <p className="font-heading text-xs text-gold/60 uppercase tracking-wider">
              ID: {guest.id}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestInfoSection;
