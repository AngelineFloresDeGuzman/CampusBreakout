import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import posterImage from "@/assets/campus-breakout-poster.png";
import jumpScareSound from "@/assets/jump-scare.mp3";

const PosterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  useEffect(() => {
    audioRef.current = new Audio(jumpScareSound);
    audioRef.current.volume = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed && audioRef.current) {
            audioRef.current.play().catch(() => {
              // Audio blocked by browser, ignore
            });
            setHasPlayed(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-blood/5 to-background"
    >
      {/* Background glow effect */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-hazard/10 border border-hazard/30 text-hazard text-sm font-medium tracking-wide">
              🎨 Poster
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display text-blood text-shadow-blood">
            Poster
          </h2>
        </motion.div>

        {/* Poster display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="relative group">
            {/* Glow behind poster */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blood/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Poster frame */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-border/50 shadow-2xl">
              <img
                src={posterImage}
                alt="Campus Breakout Official Poster"
                className="w-full h-auto object-cover"
              />

              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20 pointer-events-none" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-blood/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-hazard/20 rounded-full blur-xl"
            />
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center text-muted-foreground font-body text-sm"
          >
            Official poster for Campus Breakout
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PosterSection;
