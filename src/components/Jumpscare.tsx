import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface JumpscareProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const Jumpscare = ({ isVisible, onComplete }: JumpscareProps) => {
  const [phase, setPhase] = useState<"scary" | "thanks" | null>(null);

  useEffect(() => {
    if (isVisible) {
      setPhase("scary");
      // After 2.5 seconds of scary, show thank you
      const timer = setTimeout(() => {
        setPhase("thanks");
        // After 3 more seconds, complete
        setTimeout(() => {
          setPhase(null);
          onComplete?.();
        }, 3000);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {phase === "scary" && (
        <>
          {/* Glitching lights overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0.3, 1, 0.5, 1, 0],
              backgroundColor: [
                "hsl(0, 85%, 45%)",
                "hsl(0, 0%, 0%)",
                "hsl(0, 85%, 60%)",
                "hsl(60, 100%, 50%)",
                "hsl(0, 85%, 45%)",
                "hsl(0, 0%, 5%)"
              ]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              times: [0, 0.1, 0.2, 0.3, 0.5, 0.8, 1],
              repeat: 4,
              repeatDelay: 0.1
            }}
            className="fixed inset-0 z-[200] pointer-events-none"
          />
          
          {/* Screen shake with glitch */}
          <motion.div
            animate={{
              x: [0, -20, 20, -15, 15, -25, 25, -10, 10, 0],
              y: [0, -15, 15, -20, 20, -10, 10, -15, 15, 0],
              scale: [1, 1.05, 0.95, 1.02, 0.98, 1],
              filter: ["none", "invert(1)", "none", "hue-rotate(90deg)", "none", "contrast(200%)", "none"]
            }}
            transition={{ 
              duration: 2.5,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
              ease: "linear"
            }}
            className="fixed inset-0 z-[199] pointer-events-none"
          />

          {/* Scary text flashes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0, 1, 0, 1, 0],
              scale: [1, 1.5, 1, 2, 1, 1.3, 0]
            }}
            transition={{ 
              duration: 2,
              times: [0, 0.15, 0.25, 0.4, 0.5, 0.7, 1],
              ease: "easeInOut"
            }}
            className="fixed inset-0 flex items-center justify-center z-[201] pointer-events-none"
          >
            <div className="text-center">
              <motion.div className="font-display text-[20vw] md:text-[15vw] text-primary leading-none">
                🧟
              </motion.div>
              <motion.p className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white mt-4 px-2 sm:px-4 break-words max-w-full">
                RUN
              </motion.p>
            </div>
          </motion.div>

          {/* Static noise effect */}
          <motion.div
            animate={{
              opacity: [0, 0.3, 0, 0.5, 0, 0.4, 0]
            }}
            transition={{
              duration: 2,
              repeat: 1,
              ease: "linear"
            }}
            className="fixed inset-0 bg-noise z-[198] pointer-events-none mix-blend-overlay"
          />
        </>
      )}

      {phase === "thanks" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-4 sm:mb-6 px-4 break-words"
            >
              SEE YOU
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-body text-muted-foreground text-xl"
            >
              ...in the campus
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12 text-6xl"
            >
              🧟‍♂️
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Jumpscare;
