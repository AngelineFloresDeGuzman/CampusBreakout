import { motion } from "framer-motion";
import { useState } from "react";
import wanderImage from "@/assets/Wander.png";
import runnerImage from "@/assets/Runner.png";
import tankImage from "@/assets/Tank.png";

const zombies = [
  {
    name: "Wander",
    image: wanderImage,
    description: "Slow-moving but relentless. These undead shuffle through the campus halls, drawn by any sound or movement. Easy to outrun, but dangerous in groups.",
    stats: {
      speed: 20,
      strength: 40,
      threat: 30,
    },
    color: "#22c55e",
  },
  {
    name: "Runner",
    image: runnerImage,
    description: "Fast and agile. Once human athletes, now terrifying predators that sprint at full speed. Their screams echo through corridors as they chase prey.",
    stats: {
      speed: 95,
      strength: 60,
      threat: 85,
    },
    color: "#eab308",
  },
  {
    name: "Tank",
    image: tankImage,
    description: "Massive and nearly unstoppable. These hulking infected can smash through doors and walls. Tremors announce their approach—if you hear them, run.",
    stats: {
      speed: 15,
      strength: 100,
      threat: 90,
    },
    color: "#dc2626",
  },
];

const StatBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-xs text-muted-foreground w-16">{label}</span>
    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-full rounded-full relative"
        style={{ backgroundColor: color }}
      >
        {/* Flowing shine effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
    <span className="text-xs font-medium w-8 text-right">{value}</span>
  </div>
);

const ZombieSection = () => {

  return (
    <section id="zombies" className="relative py-24 bg-noise bg-grid-lines">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-hazard/10 border border-hazard/30 text-hazard text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="text-base">⚠</span> Threat Alert
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display text-blood text-shadow-blood mb-4">
            The Infected
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Know your enemy. Each type requires different tactics to survive.
          </p>
        </motion.div>

        {/* Zombie Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {zombies.map((zombie, index) => (
            <motion.div
              key={zombie.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="relative cursor-pointer group"
            >
              {/* Red glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blood to-blood rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative bg-card/80 border border-border/50 rounded-xl p-6 hover:border-blood/50 transition-all duration-300 hover:bg-card">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: `${zombie.color}20` }}
                  >
                    <img 
                      src={zombie.image} 
                      alt={zombie.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-foreground">
                      {zombie.name}
                    </h3>
                    <div
                      className="h-1 w-12 rounded-full mt-1"
                      style={{ backgroundColor: zombie.color }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  {zombie.description}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <StatBar
                    label="Speed"
                    value={zombie.stats.speed}
                    color={zombie.color}
                  />
                  <StatBar
                    label="Strength"
                    value={zombie.stats.strength}
                    color={zombie.color}
                  />
                  <StatBar
                    label="Threat"
                    value={zombie.stats.threat}
                    color={zombie.color}
                  />
                </div>

                {/* Hover Effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${zombie.color}10, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground font-body">
            <span className="text-blood">⚠ Warning:</span> Encounter reports suggest these are just the beginning...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ZombieSection;
