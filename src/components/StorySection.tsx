import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Crosshair, Flashlight, Skull } from "lucide-react";

const features = [
  {
    icon: Crosshair,
    title: "Improvised Weaponry",
    description:
      "Baseball bats, scissors, and whatever you can find. These aren't military tools — they're school supplies used in desperation. Every swing counts.",
  },
  {
    icon: Flashlight,
    title: "Limited Visibility",
    description:
      "Your flashlight is your lifeline. Navigate through pitch-dark corridors where every shadow could hide a threat. Stay in the light… or lose your mind.",
  },
  {
    icon: Skull,
    title: "The Horde Awaits",
    description:
      "Zombies press against every window, lurk behind every door. The campus is surrounded — there is no easy way out. Fight, run, survive.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const StorySection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} id="story" className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-noise opacity-30"
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fire/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-hazard/10 border border-hazard/30 text-hazard text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="text-base">⚠</span> Game Features
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-display text-blood text-shadow-blood mb-6">
            ⚠ The Story
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Campus Breakout is a 2D top-down survival horror zombie game where players must fight their way through a destroyed campus filled with hordes of the undead.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              />
              
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-500 h-full">
                {/* Icon with animated background */}
                <motion.div 
                  className="relative w-16 h-16 mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-colors duration-500" />
                  <div className="relative w-full h-full rounded-full bg-card border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors duration-500">
                    <feature.icon className="w-7 h-7 text-primary group-hover:animate-flicker" />
                  </div>
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-display text-blood mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body text-center">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
