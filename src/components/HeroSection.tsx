import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/campus-breakout-logo.mp4";
import jumpScareSound from "@/assets/jump-scare.mp3";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [userMuted, setUserMuted] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(jumpScareSound);
    audioRef.current.volume = 0.8;

    // Start video muted for autoplay to work
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    // Observe visibility to control video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current) {
            // Pause when scrolled out of view
            videoRef.current.pause();
          } else if (entry.isIntersecting && videoRef.current) {
            // Play when scrolled back into view
            videoRef.current.play().catch(() => {});
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [userMuted]);
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
      setUserMuted(newMutedState); // Track if user manually muted
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background - Full visibility */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover sm:object-cover object-contain"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
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

      {/* Enter the Outbreak + Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-sm font-body uppercase tracking-widest">
          Enter the Outbreak
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
