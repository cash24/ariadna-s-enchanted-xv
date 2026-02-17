import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import CoverSection from "@/components/invitation/CoverSection";
import CountdownSection from "@/components/invitation/CountdownSection";
import EventDetailsSection from "@/components/invitation/EventDetailsSection";
import LocationsSection from "@/components/invitation/LocationsSection";
import GuestInfoSection from "@/components/invitation/GuestInfoSection";
import DressCodeSection from "@/components/invitation/DressCodeSection";
import FooterSection from "@/components/invitation/FooterSection";
import MusicPlayer from "@/components/invitation/MusicPlayer";
import ConfirmationSection from "@/components/invitation/ConfirmationSection";
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
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const guest = useMemo(() => getGuestData(invitationId), [invitationId]);

  const eventUrl = typeof window !== "undefined"
    ? window.location.origin + import.meta.env.BASE_URL
    : "";

  // Auto-scroll logic (velocity 20)
  useEffect(() => {
    let scrollInterval: any;
    if (isScrolling) {
      scrollInterval = setInterval(() => {
        window.scrollBy({ top: 1, behavior: 'auto' });

        // Stop if at bottom
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          setIsScrolling(false);
        }
      }, 50); // 1px every 50ms = approx 20px per second (Velocity 20)
    }

    const stopScroll = () => setIsScrolling(false);
    window.addEventListener('touchstart', stopScroll);
    window.addEventListener('wheel', stopScroll);

    return () => {
      clearInterval(scrollInterval);
      window.removeEventListener('touchstart', stopScroll);
      window.removeEventListener('wheel', stopScroll);
    };
  }, [isScrolling]);

  const handleOpenInvitation = useCallback(() => {
    setIsOpen(true);
    setIsMusicPlaying(true);
    // Give a small delay to let sections render then start scroll
    setTimeout(() => {
      setIsScrolling(true);
    }, 1000);
  }, []);

  if (!guest) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="golden-border rounded-2xl p-12 bg-card/50 text-center max-w-md">
          <p className="font-display text-4xl text-gold mb-4">Invitación no encontrada</p>
          <p className="font-body text-cream/60">
            El ID de invitación "<span className="text-gold">{invitationId}</span>" no es válido.
          </p>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Ejemplos: INV001, FAM002, AMI003, GEN004
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <CoverSection guestName={guest.name} onOpen={handleOpenInvitation} />

      <MusicPlayer isPlaying={isMusicPlaying} onToggle={setIsMusicPlaying} />

      <motion.div
        id="invitation-content"
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(to bottom, #1a2a4a, #0a0f1a)",
        }}
      >
        {/* Ornate Gold Frame Overlay */}
        <div className="absolute inset-0 pointer-events-none z-50 ornate-frame-border">
          <div className="ornate-corner-bottom left-corner-bottom" />
          <div className="ornate-corner-bottom right-corner-bottom" />
        </div>

        {/* Stars / Dust Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: `url(${patternBg})`, backgroundSize: '400px', mixBlendMode: 'overlay' }} />

        <div className="relative z-10">
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
          <ConfirmationSection />
          <SectionDivider />
          <FooterSection />
        </div>
      </motion.div>
    </>
  );
};

export default Index;
