import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Jumpscare from "./Jumpscare";

const DownloadSection = () => {
  const [showJumpscare, setShowJumpscare] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowJumpscare(true);
    // Total animation time: 2.5s scary + 3s thanks = 5.5s
    setTimeout(() => setShowJumpscare(false), 5500);
  };

  return (
    <section id="download" className="relative py-24">
      <Jumpscare isVisible={showJumpscare} />
      <div className="absolute inset-0 bg-gradient-to-t from-blood/10 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display text-primary text-shadow-blood mb-6">
            Ready to Survive?
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
            Can you survive the outbreak… or will you become one of them? Download the APK and face the horde.
          </p>

          <button
            onClick={handleDownloadClick}
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-sm animate-pulse-glow transition-all hover:bg-primary/90 text-sm sm:text-base cursor-pointer touch-manipulation min-h-[48px]"
          >
            <Download className="w-5 h-5" />
            Download APK
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
