import { motion } from "framer-motion";
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

const StorySection = () => {
  return (
    <section id="story" className="relative py-24 bg-noise">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display text-primary text-shadow-blood mb-6">
            The Story
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Campus Breakout is a 2D top-down survival horror zombie game where players must fight their way through a destroyed campus filled with hordes of the undead. With limited weapons and resources, every move matters as you try to escape the nightmare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors group"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4 mx-auto group-hover:animate-flicker" />
              <h3 className="text-2xl font-display text-foreground mb-3 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body text-justify">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
