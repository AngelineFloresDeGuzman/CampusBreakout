import { motion } from "framer-motion";
import { Sword, Palette, Mountain } from "lucide-react";
import developersImage from "@/assets/developers.png";

const team = [
  {
    name: "Tristan Joseph Santos",
    role: "The Survivors & Combat",
    icon: Sword,
    focus: "Character Design, Story, and Weaponry",
    description: `Tristan Joseph Santos is the lead developer behind the character design, story, and combat system of Campus Breakout: Escape of the Undead. He created the Chibi-inspired main character—a student with a torn uniform and blood splatter—designed to evoke emotion and relatability. The character is equipped with a baseball bat as a primary weapon and a backpack filled with books and supplies, highlighting both vulnerability and readiness.

Tristan also developed the enemy characters, the Undead Students, featuring glowing red eyes, pale green skin, and visible wounds to give a haunting, post-apocalyptic feel. He designed the zombie hordes and an optional boss character, adding intensity and challenge to the gameplay. For combat, Tristan implemented a top-down 2D system using melee weapons like bats and knives, enhanced with blood particle effects and controller support for immersive, responsive action.

Beyond combat, he contributed to the game's narrative, setting the zombie outbreak in a school environment to amplify the psychological tension of survival in a familiar place turned dangerous.`,
  },
  {
    name: "Angeline De Guzman",
    role: "The Vision & Branding",
    icon: Palette,
    focus: "Typography, Branding & Technical Direction",
    description: `Angeline De Guzman served as the game designer and document specialist, with a focus on typography, branding, and technical direction. She created the game's logo using custom-designed fonts and color schemes that match the horror-survival theme—sharp, distressed, and unsettling, evoking a sense of decay and urgency.

She worked with visual motifs like the school crest integrated with biohazard symbols, representing the fall of a safe academic space into a quarantine zone. Angeline also helped guide the technical implementation, ensuring that the Unity game development process aligned with the design vision.

Her work brought consistency and professional polish to the visual identity of the game, helping players immediately recognize and emotionally connect with the Campus Breakout brand.`,
  },
  {
    name: "Justine Veneracion",
    role: "The Atmosphere & Environment",
    icon: Mountain,
    focus: "Background, Lighting & Zombie Threat",
    description: `Justine Veneracion is the artist behind the game's haunting atmosphere and backgrounds. She designed the school environment as a post-apocalyptic ruin, using dark tones, flickering lights, and fire-lit skies to immerse players in a sense of danger and decay.

The background features destroyed buildings, scattered furniture, and debris, showing the aftermath of chaos. Justine also integrated environmental storytelling—zombie hordes pressed against windows and gates heighten the feeling of being trapped and surrounded.

Using parallax scrolling and particle effects like smoke, fire, and dust, she created dynamic depth and realism. Her work transforms the game world into a terrifying experience, balancing tension and beauty to pull players deeper into the story of survival.`,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-24 bg-noise">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display text-primary text-shadow-blood mb-4">
            The Developers
          </h2>
          <p className="font-typewriter text-muted-foreground">
            Instructor: Bryce Ganotice
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-xl" />
            <img
              src={developersImage}
              alt="The Development Team"
              className="relative w-full rounded-lg border border-border/50 shadow-xl"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/40 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <member.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-xs font-body uppercase tracking-wider mb-1">{member.role}</p>
              <p className="text-muted-foreground text-xs mb-4">{member.focus}</p>
              <p className="text-secondary-foreground text-sm leading-relaxed font-body text-justify">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
