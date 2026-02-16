import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = ({ autoPlay }: { autoPlay: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Beauty and the Beast instrumental - using a royalty-free music URL
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked by browser
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <motion.button
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full golden-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-gold transition-colors hover:bg-gold/10"
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div key="on" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <Volume2 className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="off" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <VolumeX className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default MusicPlayer;
