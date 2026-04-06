import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import tristanImage from "@/assets/Tristan.png";
import angelineImage from "@/assets/Angeline.png";
import justineImage from "@/assets/Justine.png";

const team = [
  {
    name: "Tristan",
    role: "The Survivors & Combat",
    image: tristanImage,
    focus: "Character Design, Story, and Weaponry",
    color: "from-red-500/20 to-orange-500/20",
    description: `Tristan Joseph Santos is the lead developer behind the character design, story, and combat system of Campus Breakout: Escape of the Undead. He created the Chibi-inspired main character—a student with a torn uniform and blood splatter—designed to evoke emotion and relatability. The character is equipped with a baseball bat as a primary weapon and a backpack filled with books and supplies, highlighting both vulnerability and readiness.`,
  },
  {
    name: "Angeline",
    role: "The Vision & Branding",
    image: angelineImage,
    focus: "Typography, Branding & Technical Direction",
    color: "from-purple-500/20 to-pink-500/20",
    description: `Angeline De Guzman served as the game designer and document specialist, with a focus on typography, branding, and technical direction. She created the game's logo using custom-designed fonts and color schemes that match the horror-survival theme—sharp, distressed, and unsettling, evoking a sense of decay and urgency.`,
  },
  {
    name: "Justine",
    role: "The Atmosphere & Environment",
    image: justineImage,
    focus: "Background, Lighting & Zombie Threat",
    color: "from-emerald-500/20 to-teal-500/20",
    description: `Justine Veneracion is the artist behind the game's haunting atmosphere and backgrounds. She designed the school environment as a post-apocalyptic ruin, using dark tones, flickering lights, and fire-lit skies to immerse players in a sense of danger and decay.`,
  },
];

const TeamSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} id="team" className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-noise opacity-20"
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-hazard/10 border border-hazard/30 text-hazard text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="text-base">👥</span> Meet The Team
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display text-blood text-shadow-blood mb-6">
            ⚠ The Developers
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            The minds behind the nightmare
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect - red */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blood to-blood rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative overflow-hidden rounded-2xl h-[600px]">
                {/* Full background image */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                
                {/* Content - positioned lower with padding-top */}
                <div className="relative px-6 pb-6 pt-[280px] h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-display text-blood mb-1 group-hover:text-primary transition-colors text-center">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary text-sm font-body uppercase tracking-wider mb-1 text-center">
                    {member.role}
                  </p>
                  
                  <p className="text-white/70 text-xs mb-3 text-center">
                    {member.focus}
                  </p>
                  
                  <p className="text-white/80 text-sm leading-relaxed font-body text-justify">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <div className="relative inline-block">
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blood/50" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blood/50" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blood/50" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blood/50" />
            
            <div className="px-8 py-4">
              <h4 className="text-2xl font-display text-blood mb-1">Mr. Bryce Angel A. Ganotice</h4>
              <span className="text-hazard text-sm font-body uppercase tracking-wider">Instructor</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
