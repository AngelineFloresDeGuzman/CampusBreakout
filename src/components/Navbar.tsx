import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Play, Download } from "lucide-react";
import logo from "@/assets/campus-breakout-logo.png";

const links = [
  { label: "Trailer", href: "#trailer" },
  { label: "Backstory", href: "#backstory" },
  { label: "Zombies", href: "#zombies" },
  { label: "Story", href: "#story" },
  { label: "Details", href: "#details" },
  { label: "Team", href: "#team" },
  { label: "Download", href: "#download" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Left side - Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo + Brand */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Campus Breakout" className="h-10 w-auto" />
            <img src="/src/assets/campus-breakout-logo.2png" alt="" className="h-6 w-auto hidden sm:block" />
          </a>

          {/* Desktop - Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors tracking-wide cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#trailer"
            onClick={(e) => handleNavClick(e, '#trailer')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all cursor-pointer"
          >
            <Play className="w-4 h-4" />
            Trailer
          </a>
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, '#download')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blood hover:bg-blood/90 rounded-full transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors z-50"
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
        className={`md:hidden fixed inset-x-0 top-16 bg-black/90 backdrop-blur-lg border-b border-border/50 shadow-2xl ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="px-4 py-6 space-y-1">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -20 }}
              transition={{ delay: i * 0.05 }}
              className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg text-base font-medium transition-colors cursor-pointer"
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
