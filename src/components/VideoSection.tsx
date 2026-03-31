import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import teaserVideo from "@/assets/campus-breakout-video-teaser.mp4";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.5 }
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
    <section id="trailer" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blood/5 to-background" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-display text-primary text-shadow-blood mb-4">
            Teaser Trailer
          </h2>
          <p className="font-body text-muted-foreground">
            Watch the horror unfold…
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div ref={containerRef} className="relative aspect-video bg-card rounded-lg border border-border overflow-hidden group"
            onClick={() => setShowVideo(true)}
          >
            {!showVideo ? (
              <>
                <video
                  ref={videoRef}
                  src={teaserVideo}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow cursor-pointer">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground font-body text-sm">
                  Click to watch the teaser
                </p>
              </>
            ) : (
              <video
                ref={videoRef}
                src={teaserVideo}
                controls
                autoPlay
                muted
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
