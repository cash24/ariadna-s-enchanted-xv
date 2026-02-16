import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import CoverSection from "@/components/invitation/CoverSection";
import CountdownSection from "@/components/invitation/CountdownSection";
import EventDetailsSection from "@/components/invitation/EventDetailsSection";
import LocationsSection from "@/components/invitation/LocationsSection";
import GuestInfoSection from "@/components/invitation/GuestInfoSection";
import DressCodeSection from "@/components/invitation/DressCodeSection";
import FooterSection from "@/components/invitation/FooterSection";
import MusicPlayer from "@/components/invitation/MusicPlayer";
import { getGuestData } from "@/data/eventData";
import patternBg from "@/assets/pattern-bg.jpg";

const SectionDivider = () => (
  <div className="flex items-center justify-center py-4">
    <div className="h-px w-16 gold-gradient" />
    <span className="mx-4 text-gold text-xl">✦</span>
    <div className="h-px w-16 gold-gradient" />
  </div>
);

const Index = () => {
  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get("id") || "INV001";
  const [isOpen, setIsOpen] = useState(false);

  const guest = useMemo(() => getGuestData(invitationId), [invitationId]);
  const eventUrl = typeof window !== "undefined" ? window.location.origin : "";

  if (!guest) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="golden-border rounded-2xl p-12 bg-card/50 text-center max-w-md">
          <p className="font-display text-4xl text-gold mb-4">Invitación no encontrada</p>
          <p className="font-body text-cream/60">
            El ID de invitación "<span className="text-gold">{invitationId}</span>" no es válido.
          </p>
          <p className="font-body text-sm text-muted-foreground mt-4">
            IDs de ejemplo: INV001, INV002, INV003, INV004, INV005
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <CoverSection guestName={guest.name} onOpen={() => setIsOpen(true)} />

      {isOpen && <MusicPlayer autoPlay={true} />}

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
          backgroundBlendMode: "soft-light",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay on pattern */}
        <div className="relative" style={{ backgroundColor: "hsl(340 30% 8% / 0.92)" }}>
          <CountdownSection />
          <SectionDivider />
          <EventDetailsSection />
          <SectionDivider />
          <LocationsSection />
          <SectionDivider />
          <GuestInfoSection guest={guest} eventUrl={eventUrl} />
          <SectionDivider />
          <DressCodeSection />
          <SectionDivider />
          <FooterSection />
        </div>
      </motion.div>
    </>
  );
};

export default Index;
