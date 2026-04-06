import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

const emojis = ["🧟", "🏫", "🔪", "🏏", "✂️", "🩸", "👦", "👧", "👫", "⚠️"];

interface EmojiRainItem {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  duration: number;
  scale: number;
  rotation: number;
}

const EmojiRain = () => {
  const { scrollYProgress } = useScroll();
  
  // Trigger when we reach ~85-95% of the page (Download section)
  const rainOpacity = useTransform(
    scrollYProgress, 
    [0.85, 0.90, 0.95, 1], 
    [0, 1, 1, 0]
  );

  const rainItems = useMemo<EmojiRainItem[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100, // 0-100% width
      delay: Math.random() * 3, // 0-3s delay
      duration: 2 + Math.random() * 2, // 2-4s fall time
      scale: 0.8 + Math.random() * 0.7, // 0.8-1.5 scale
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[60] overflow-hidden"
      style={{ opacity: rainOpacity }}
    >
      {rainItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-2xl md:text-3xl"
          style={{
            left: `${item.x}%`,
            top: "-50px",
            scale: item.scale,
          }}
          initial={{ y: -50, rotate: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, item.rotation, -item.rotation, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EmojiRain;
