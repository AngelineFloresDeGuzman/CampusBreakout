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
          <h2 className="text-5xl md:text-6xl font-display text-primary text-shadow-blood mb-4">
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
          <div ref={containerRef} className="relative aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <video
              ref={videoRef}
              src={backStoryVideo}
              controls
              muted
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
