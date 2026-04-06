import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Warning hazard progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        {/* Main progress bar - hazard yellow */}
        <motion.div
          className="h-2 bg-hazard origin-left relative"
          style={{ scaleX }}
        />

        {/* Hazard stripe pattern overlay */}
        <div 
          className="absolute inset-0 h-2 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)",
          }}
        />
      </div>
      
      {/* Side progress indicator - updated to match theme */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 z-50">
        {["Hero", "Trailer", "Story", "Details", "Team", "Download"].map((section, i) => (
          <motion.a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="group flex items-center gap-3"
            whileHover={{ x: -5 }}
          >
            <span className="opacity-0 group-hover:opacity-100 text-xs text-hazard uppercase tracking-wider transition-opacity">
              {section}
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-border group-hover:bg-hazard transition-colors"
              whileHover={{ scale: 1.5 }}
            />
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default ScrollProgress;
