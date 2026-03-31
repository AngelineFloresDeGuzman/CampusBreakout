import { motion } from "framer-motion";

const details = [
  { label: "Title", value: "Campus Breakout" },
  { label: "Theme", value: "Zombie Outbreak" },
  { label: "Genre", value: "2D Top-Down Survival Horror" },
  { label: "Engine", value: "Unity" },
  { label: "Release Date", value: "April 6, 2026" },
  { label: "Website", value: "campusbreakout.vercel.app" },
];

const GameDetailsSection = () => {
  return (
    <section id="details" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-display text-primary text-shadow-blood mb-4">
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
