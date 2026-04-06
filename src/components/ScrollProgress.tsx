import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-3">
      {/* Hazard stripe progress bar that grows from left to right */}
      <motion.div
        className="h-full origin-left"
        style={{ 
          scaleX,
          background: "repeating-linear-gradient(45deg, #eab308 0px, #eab308 12px, #000 12px, #000 24px)"
        }}
      />
    </div>
  );
};

export default ScrollProgress;
