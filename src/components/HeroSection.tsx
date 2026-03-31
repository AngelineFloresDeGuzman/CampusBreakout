import { motion } from "framer-motion";
import posterImage from "@/assets/campus-breakout-poster.png";
import logo from "@/assets/campus-breakout-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blood/20 via-background to-background z-0" />
      <div className="absolute inset-0 bg-noise z-[1]" />

      {/* Red glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <img
            src={logo}
            alt="Campus Breakout"
            className="w-full max-w-md mx-auto lg:mx-0 mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-typewriter text-primary tracking-[0.3em] uppercase text-sm mb-4"
          >
            Survival Horror
          </motion.p>

          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            A zombie outbreak has taken over the campus… and survival is your only mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-sm animate-pulse-glow transition-all hover:bg-primary/90 text-sm"
            >
              Download APK
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary/40 text-primary font-bold uppercase tracking-wider rounded-sm transition-all hover:bg-primary/10 text-sm"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-muted-foreground text-xs font-body">
            <span>🎮 Unity Engine</span>
            <span className="w-px h-4 bg-border" />
            <span>📅 April 6, 2026</span>
            <span className="w-px h-4 bg-border" />
            <span>🧟 2D Top-Down</span>
          </div>
        </motion.div>

        {/* Poster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-md lg:max-w-lg"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-2xl" />
            <img
              src={posterImage}
              alt="Campus Breakout - Survival Horror Game Poster"
              className="relative rounded-lg shadow-2xl w-full border border-primary/20"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
