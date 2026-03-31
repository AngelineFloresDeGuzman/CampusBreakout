import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/campus-breakout-logo.png";

const links = [
  { label: "Trailer", href: "#trailer" },
  { label: "Back Story", href: "#backstory" },
  { label: "Story", href: "#story" },
  { label: "Details", href: "#details" },
  { label: "Team", href: "#team" },
  { label: "Download", href: "#download" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="w-full px-4 flex items-center justify-between h-16 max-w-full">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Campus Breakout" className="h-10 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors z-50"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-lg border-b border-border shadow-2xl ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="px-4 py-6 space-y-1">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -20 }}
              transition={{ delay: i * 0.05 }}
              className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg text-base font-medium transition-colors"
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
