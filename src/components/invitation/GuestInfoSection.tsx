import { useState } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Ticket, Users, Hash } from "lucide-react";
import type { GuestData } from "@/data/eventData";

const GuestInfoSection = ({ guest, eventUrl }: { guest: GuestData; eventUrl: string }) => {
  const qrValue = `${eventUrl}?id=${guest.id}`;
  const [activeTicket, setActiveTicket] = useState(0);

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
          className="relative max-w-sm mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ticket Carousel Helper */}
          <div className="mb-4 flex flex-col items-center">
            <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-gold-light mb-1">
              Desliza para ver tus pases
            </p>
            <div className="flex gap-1.5">
              {[...Array(guest.tickets)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTicket ? 'w-6 bg-gold' : 'w-1.5 bg-gold/30'}`}
                />
              ))}
            </div>
          </div>

          <div className="relative h-[480px] w-full overflow-hidden">
            <motion.div
              className="flex gap-4 cursor-grab active:cursor-grabbing px-4"
              drag="x"
              dragConstraints={{ right: 0, left: -(guest.tickets - 1) * 316 }}
              onDragEnd={(_, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold && activeTicket < guest.tickets - 1) {
                  setActiveTicket(prev => prev + 1);
                } else if (info.offset.x > threshold && activeTicket > 0) {
                  setActiveTicket(prev => prev - 1);
                }
              }}
              animate={{ x: -activeTicket * 316 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[...Array(guest.tickets)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[300px] h-[450px] golden-border rounded-3xl bg-card/80 backdrop-blur-md p-6 flex flex-col shadow-2xl relative overflow-hidden"
                >
                  {/* Ticket Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="font-heading text-[8px] uppercase tracking-wider text-gold/60">Invitado Especial</p>
                      <h4 className="font-heading text-lg text-gold truncate max-w-[180px]">{guest.name}</h4>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-[8px] uppercase tracking-wider text-gold/60">Ticket</p>
                      <p className="font-heading text-sm text-gold font-bold">#{i + 1}/{guest.tickets}</p>
                    </div>
                  </div>

                  {/* Perforation line */}
                  <div className="absolute top-[80px] left-0 right-0 flex justify-between items-center px-[-10px]">
                    <div className="w-4 h-4 rounded-full bg-midnight -ml-2 border-r border-gold/30" />
                    <div className="flex-1 border-t border-dashed border-gold/30 mx-1" />
                    <div className="w-4 h-4 rounded-full bg-midnight -mr-2 border-l border-gold/30" />
                  </div>

                  {/* QR Content */}
                  <div className="flex-1 flex flex-col items-center justify-center gap-6 mt-4">
                    <div className="p-3 rounded-2xl bg-cream sparkle-shadow-sm">
                      <QRCodeSVG
                        value={`${qrValue}&t=${i + 1}`}
                        size={160}
                        bgColor="hsl(40, 50%, 90%)"
                        fgColor="hsl(220, 40%, 7%)"
                        level="M"
                        includeMargin={false}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-8 w-full">
                      <div className="text-center">
                        <p className="font-heading text-[8px] uppercase tracking-wider text-gold/60 mb-1">Mesa</p>
                        <div className="flex items-center justify-center gap-1 text-gold">
                          <Hash className="w-3 h-3" />
                          <span className="font-heading text-xl font-bold">{guest.table}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-heading text-[8px] uppercase tracking-wider text-gold/60 mb-1">Zona</p>
                        <div className="flex items-center justify-center gap-1 text-gold">
                          <Users className="w-3 h-3" />
                          <span className="font-heading text-xl font-bold">A</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gold/10 flex justify-between items-end">
                    <div>
                      <p className="font-heading text-[8px] uppercase tracking-wider text-gold/60">Evento</p>
                      <p className="font-heading text-[10px] text-gold tracking-widest uppercase">Ariadna XV</p>
                    </div>
                    <p className="font-heading text-[8px] text-gold/40">ID: {guest.id}-{i + 1}</p>
                  </div>

                  {/* Decorative background circle */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestInfoSection;
