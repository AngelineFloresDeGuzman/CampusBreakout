import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, Download } from "lucide-react";
import posterImage from "@/assets/campus-breakout-poster.png";

const PosterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-blood/5 to-background"
    >
      {/* Background glow effect */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none"
      />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-hazard/10 border border-hazard/30 text-hazard text-sm font-medium tracking-wide flex items-center gap-2">
                <span>⚠</span> Official Key Art
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-display text-blood text-shadow-blood mb-6 leading-tight">
              Campus<br/>Breakout
            </h2>

            {/* Description */}
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              Escape the undead horde in this thrilling 2D survival horror. Navigate through a zombie-infested campus, scavenge for supplies, and fight for your life in a desperate bid for freedom.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/AngelineFloresDeGuzman/CampusBreakout/releases/download/v1.0.0/CampusBreakout.apk"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blood text-white font-bold rounded-full hover:bg-blood/90 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Android APK
              </motion.a>

              <motion.a
                href="#trailer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Watch trailer
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Poster */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Glow behind poster */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blood/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Poster */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-border/50 shadow-2xl">
                <img
                  src={posterImage}
                  alt="Campus Breakout Official Poster"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blood/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-hazard/20 rounded-full blur-xl"
              />
            </div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-center text-muted-foreground font-body text-sm uppercase tracking-wider"
            >
              Official Key Art
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
