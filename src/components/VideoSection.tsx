import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Volume2, Maximize } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import teaserVideo from "@/assets/campus-breakout-video-teaser.mp4";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
          } else {
            setShowVideo(false);
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  return (
    <section ref={sectionRef} id="trailer" className="relative py-32 overflow-hidden bg-grid-lines">
      {/* Cinematic background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blood/5 to-background" />
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none"
      />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-hazard/10 border border-hazard/30 text-hazard text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="text-base">▶</span> Watch Now
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display text-blood text-shadow-blood mb-6">
            ⚠ Teaser Trailer
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Watch the horror unfold… experience the terror that awaits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div 
            ref={containerRef}
            className="relative aspect-video bg-card rounded-2xl border border-border/50 overflow-hidden group shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Cinematic frame border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 pointer-events-none z-20 group-hover:border-primary/40 transition-colors duration-500" />
            
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 z-20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-20" />

            {!showVideo ? (
              <>
                <video
                  ref={videoRef}
                  src={teaserVideo}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted={false}
                  loop
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                
                {/* Premium play button overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <motion.button
                    onClick={() => setShowVideo(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(185, 28, 28, 0.4)",
                        "0 0 0 20px rgba(185, 28, 28, 0)",
                        "0 0 0 0 rgba(185, 28, 28, 0)",
                      ],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity },
                    }}
                    className="relative w-24 h-24 rounded-full bg-primary/95 flex items-center justify-center cursor-pointer group-hover:bg-primary transition-colors"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl group-hover:bg-primary/50 transition-colors" />
                    <Play className="relative w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </motion.button>
                </motion.div>

                {/* Video info overlay */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-6 z-20"
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-blood font-display text-xl mb-1">Campus Breakout</h3>
                      <p className="text-blood/70 text-sm font-body">Official Teaser Trailer • 2026</p>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Volume2 className="w-5 h-5" />
                      <Maximize className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <video
                ref={videoRef}
                src={teaserVideo}
                controls
                autoPlay
                muted={false}
                loop
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
