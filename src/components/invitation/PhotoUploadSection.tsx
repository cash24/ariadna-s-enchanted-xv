import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ImagePlus } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

const GOOGLE_PHOTOS_URL = "https://photos.app.goo.gl/RvYdPyn2wbv81x8G9";

const PhotoUploadSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-gold text-center mb-4 gold-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Comparte tus Momentos
        </motion.h2>
        <motion.div
          className="h-px w-24 gold-gradient mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* QR Code Column */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-4 bg-white rounded-2xl golden-border shadow-2xl relative group">
              {/* Subtle gold glow effect */}
              <div className="absolute inset-[-4px] rounded-[20px] bg-gradient-to-r from-gold via-gold-light to-gold opacity-30 blur-sm group-hover:opacity-60 transition-opacity" />
              <QRCodeCanvas 
                value={GOOGLE_PHOTOS_URL}
                size={200}
                bgColor="#ffffff"
                fgColor="#0a0f1a"
                level="H"
                includeMargin={false}
                className="relative z-10"
              />
            </div>
            <p className="font-body text-cream/70 text-sm italic max-w-[200px] leading-relaxed">
              Escanea este código con tu cámara para subir fotos directamente
            </p>
          </motion.div>

          {/* Button Column */}
          <motion.div
            className="flex flex-col items-center gap-8 md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-body text-xl text-cream leading-relaxed mb-2">
              Cada foto es un recuerdo inolvidable. Te invitamos a compartir los momentos que captures durante la celebración en nuestro álbum digital.
            </p>
            
            <motion.a
              href={GOOGLE_PHOTOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gold hover:bg-gold-light text-[#0a0f1a] font-heading font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              whileHover={{ y: -5 }}
            >
              <Camera className="w-6 h-6 animate-pulse" />
              <span className="tracking-widest">SUBIR FOTOS AL ÁLBUM</span>
              <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-100" />
            </motion.a>

            <div className="flex items-center gap-3 text-gold-light/60">
              <ImagePlus className="w-6 h-6" />
              <span className="text-sm font-body tracking-wider">VIA GOOGLE PHOTOS • CALIDAD ORIGINAL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoUploadSection;
