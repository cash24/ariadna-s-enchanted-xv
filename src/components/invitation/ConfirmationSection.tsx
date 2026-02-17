import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_CONFIRM } from "@/data/eventData";

const ConfirmationSection = () => {
    const handleConfirm = () => {
        const message = encodeURIComponent("¡Hola! Confirmo mi asistencia a los XV años de Ariadna ✨");
        window.open(`https://wa.me/${WHATSAPP_CONFIRM.replace('+', '')}?text=${message}`, '_blank');
    };

    return (
        <section className="relative py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="font-display text-5xl md:text-6xl text-gold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Confirmación
                </motion.h2>

                <motion.p
                    className="font-body text-xl text-cream/80 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Para nosotros es muy importante tu asistencia. Por favor confirma antes del <span className="text-gold font-bold">15 de Abril</span>.
                </motion.p>

                <motion.button
                    onClick={handleConfirm}
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-heading text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    Confirmar por WhatsApp
                </motion.button>
            </div>
        </section>
    );
};

export default ConfirmationSection;
