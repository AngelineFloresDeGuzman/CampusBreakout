import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Play, Download, ChevronDown, Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/campus-breakout-logo.mp4";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay with sound blocked, mute and try again
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
    }
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background - Full visibility */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Ultra minimal gradient - just for bottom text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Sound Toggle */}
      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-24 right-6 z-30 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/70 transition-all"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white/70" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* CTA Buttons - Ultra minimal */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-24 left-0 right-0 z-10 flex items-center justify-center gap-3"
      >
        <motion.a
          href="https://drive.google.com/drive/folders/1JLEi2K3lxBjN4epNqOI2qUIN2L5W6-6P?fbclid=IwY2xjawRAtnRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeS6pvoHirQIGpu-3yDYrjQ3HwvLfxGbRDbfEpsZwBF1pWUWp49gVUbWhTPKw_aem_HqpG3cqDTSW9qdDmaUYEFA"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blood text-white text-sm font-bold rounded-full hover:bg-blood/90 transition-all"
        >
          <Download className="w-4 h-4" />
          Download
        </motion.a>

        <motion.a
          href="#trailer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/30 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 hover:bg-black/50 transition-all"
        >
          <Play className="w-4 h-4" fill="currentColor" />
          Trailer
        </motion.a>
      </motion.div>

      {/* Scroll Indicator - Ultra minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
