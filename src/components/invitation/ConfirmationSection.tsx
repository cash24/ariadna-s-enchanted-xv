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
                    className="inline-flex items-center gap-2 border border-[#25D366] text-[#25D366] px-6 py-2 rounded-full font-heading text-sm uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Confirmar Asistencia
                </motion.button>
            </div>
        </section>
    );
};

export default ConfirmationSection;
