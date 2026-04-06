import { motion } from "framer-motion";
import campusBg from "@/assets/campus.png";

const details = [
  { label: "Title", value: "Campus Breakout" },
  { label: "Theme", value: "Zombie Outbreak" },
  { label: "Genre", value: "2D Top-Down Survival Horror" },
  { label: "Engine", value: "Unity" },
  { label: "Pre-release Date", value: "April 6, 2026" },
  { label: "Official Release Date", value: "April 16, 2026" },
  { label: "Website", value: "campusbreakout.vercel.app" },
];

const GameDetailsSection = () => {
  return (
    <section id="details" className="relative py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${campusBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 relative z-10">
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
              <span className="text-base">🎮</span> Specifications
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display text-blood text-shadow-blood mb-4">
            Game Details
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card border border-border rounded-lg overflow-hidden"
        >
          {details.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-between px-8 py-5 ${
                i !== details.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-muted-foreground font-body text-sm uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-foreground font-body font-medium text-sm">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GameDetailsSection;
