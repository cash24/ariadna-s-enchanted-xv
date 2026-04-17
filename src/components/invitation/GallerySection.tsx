import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Carga automática de todas las imágenes en la carpeta assets/gallery
const imageModules = import.meta.glob<{ default: string }>('/src/assets/gallery/*.{png,jpg,jpeg,JPG,JPEG,PNG,webp}', { 
  eager: true 
});
const images = Object.values(imageModules).map(mod => mod.default);

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: images.length > 1,
    align: 'center',
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (images.length === 0) return null;

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-gold text-center mb-4 gold-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nuestra Festejada
        </motion.h2>
        <motion.div
          className="h-px w-24 gold-gradient mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <div className="relative group">
          <div className="overflow-hidden rounded-2xl golden-border bg-card/30 backdrop-blur-sm" ref={emblaRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[500px] md:h-[650px]">
                  <img
                    src={src}
                    alt={`Ariadna ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Subtle vignette for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-gold/50 text-gold flex items-center justify-center backdrop-blur-md transition-all hover:bg-gold hover:text-black z-10 md:opacity-0 group-hover:opacity-100"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-gold/50 text-gold flex items-center justify-center backdrop-blur-md transition-all hover:bg-gold hover:text-black z-10 md:opacity-0 group-hover:opacity-100"
            onClick={scrollNext}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        
        <p className="mt-8 font-body text-center text-gold-light/80 italic text-lg">
          "Un sueño hecho realidad"
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
