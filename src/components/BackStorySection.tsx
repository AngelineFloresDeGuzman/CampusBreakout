import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import backStoryVideo from "@/assets/campus-breakout-back-story.mp4";

const BackStorySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              videoRef.current.play();
            }
          } else {
            setIsVisible(false);
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="backstory" className="relative py-24 bg-noise">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-hazard/10 border border-hazard/30 text-hazard text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="text-base">📖</span> The Beginning
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display text-blood text-shadow-blood mb-4">
            Back Story
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg mb-10 leading-relaxed">
            Discover how the outbreak began…
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-card/50 border border-border/50 rounded-lg p-8">
            <p className="font-body text-foreground leading-relaxed mb-6">
              In the halls of a quiet university, a normal day quickly turns into a nightmare. What starts as a strange illness among students soon spirals into chaos as the infected turn aggressive, violent, and uncontrollable. The campus, once full of life and learning, becomes a battleground for survival.
            </p>
            <p className="font-body text-foreground leading-relaxed mb-6">
              The source of the outbreak remains unknown. Some whisper about a secret experiment gone wrong in the science wing, others suspect a contaminated batch of experimental medication. As the infection spreads rapidly through the dormitories and lecture halls, those who remain uninfected must fight to survive.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              You are one of the few survivors left. With limited supplies, improvised weapons, and the constant threat of the undead lurking around every corner, your only goal is to escape the campus alive. But the deeper you venture into the infected grounds, the more you realize that some secrets are better left buried…
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div ref={containerRef} className="relative aspect-video bg-card rounded-2xl border border-border/50 overflow-hidden group shadow-2xl">
            {/* Cinematic frame border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blood/20 pointer-events-none z-20 group-hover:border-blood/40 transition-colors duration-500" />
            
            {/* Corner accents - red lines */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blood/50 z-20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blood/50 z-20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blood/50 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blood/50 z-20" />
            <video
              ref={videoRef}
              src={backStoryVideo}
              controls
              muted={false}
              loop
              preload="metadata"
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackStorySection;
