import { motion } from "framer-motion";

const sections = [
  { id: "poster", label: "Poster" },
  { id: "trailer", label: "Trailer" },
  { id: "backstory", label: "Backstory" },
  { id: "zombies", label: "Zombies" },
  { id: "story", label: "Story" },
  { id: "details", label: "Details" },
  { id: "team", label: "Team" },
  { id: "download", label: "Download" },
];

const SectionNavigator = ({ activeSection }: { activeSection: string }) => {
  const handleClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Random zigzag offsets for map-like appearance
  const offsets = [0, -18, 25, -12, 30, -8, 20, -5];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      {sections.map((section, index) => {
        const isActive = activeSection === `#${section.id}`;
        const isPast = sections.findIndex((s) => `#${s.id}` === activeSection) > index;
        const offset = offsets[index] || 0;

        return (
          <div key={section.id} className="flex flex-col items-center" style={{ marginLeft: `${offset}px` }}>
            {/* Dot */}
            <motion.button
              onClick={() => handleClick(section.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
              aria-label={`Go to ${section.label}`}
            >
              {/* Outer ring for active */}
              {isActive && (
                <motion.span
                  layoutId="activeRing"
                  className="absolute inset-0 -m-1 rounded-full border border-blood/50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Dot */}
              <span
                className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-blood scale-125"
                    : isPast
                    ? "bg-blood/50"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />

              {/* Label tooltip */}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-black/80 text-white/80 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {section.label}
              </span>
            </motion.button>
          </div>
        );
      })}
    </motion.div>
  );
};

export default SectionNavigator;
