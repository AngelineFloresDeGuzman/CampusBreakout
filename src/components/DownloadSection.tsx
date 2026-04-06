import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Skull, AlertTriangle } from "lucide-react";
import Jumpscare from "./Jumpscare";

const DownloadSection = () => {
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setShowJumpscare(true);
    setTimeout(() => setShowJumpscare(false), 5500);
  };

  return (
    <section ref={sectionRef} id="download" className="relative py-32 overflow-hidden">
      <Jumpscare isVisible={showJumpscare} />
      
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-t from-blood/20 via-background to-background"
      />
      
      {/* Animated glow effects */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 rounded-full blur-[200px] pointer-events-none"
      />

      {/* Warning stripes - yellow hazard */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-repeating-linear-gradient-pattern opacity-70" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(45deg, hsl(50 95% 50%), hsl(50 95% 50%) 10px, transparent 10px, transparent 20px)" 
        }} 
      />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Warning badge - hazard yellow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="px-4 py-2 rounded-full bg-hazard/20 border border-hazard/50 text-hazard text-sm font-bold tracking-wide flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ⚠ ENTER AT YOUR OWN RISK
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl md:text-8xl font-display text-blood text-shadow-blood mb-6"
          >
            ⚠ Ready to Survive?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed"
          >
            Can you survive the outbreak… or will you become one of them? 
            <span className="text-blood font-semibold">Download the APK</span> and face the horde.
          </motion.p>

          {/* Download button with dramatic effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated ring effect */}
            {isHovered && (
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="absolute inset-0 rounded-lg bg-primary/30 blur-xl"
              />
            )}

            <motion.a
              href="/CampusBreakout.apk"
              download
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isHovered ? {
                boxShadow: [
                  "0 0 30px hsl(0 85% 35% / 0.4)",
                  "0 0 60px hsl(0 85% 35% / 0.6)",
                  "0 0 30px hsl(0 85% 35% / 0.4)",
                ],
              } : {}}
              transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
              className="relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg text-base cursor-pointer overflow-hidden group no-underline"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-200%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />
              
              <Download className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download APK</span>
              <Skull className="w-5 h-5 relative z-10 opacity-50" />
            </motion.a>
          </motion.div>

          {/* File info */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-6 text-muted-foreground text-sm"
          >
            <span className="flex items-center gap-2 text-blood">
              <span className="w-2 h-2 bg-blood rounded-full animate-pulse" />
              ⚠ beta version 1.2.0
            </span>
            <div className="w-px h-4 bg-border" />
            <span>85 MB</span>
            <div className="w-px h-4 bg-border" />
            <span>Android 8.0+</span>
          </motion.div>

          {/* Warning text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-xs text-blood/70 max-w-md mx-auto"
          >
            ⚠ WARNING: By downloading, you acknowledge this game contains horror themes, jump scares, and intense survival scenarios. Player discretion is advised.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom warning stripe - yellow hazard */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-repeating-linear-gradient-pattern opacity-70" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(-45deg, hsl(50 95% 50%), hsl(50 95% 50%) 10px, transparent 10px, transparent 20px)" 
        }} 
      />
    </section>
  );
};

export default DownloadSection;
