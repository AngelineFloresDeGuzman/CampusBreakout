import logo from "@/assets/campus-breakout-logo2.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-noise">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="Campus Breakout" className="h-12 w-auto mx-auto mb-4" />
        <p className="text-muted-foreground text-xs font-body mb-4">
          #CampusBreakout #ZombieGame #SurvivalHorror #UnityGame #IndieGame #StudentDevelopers
        </p>
        <p className="text-muted-foreground text-xs">
          © 2026 Campus Breakout. Developed by Tristan Santos, Angeline De Guzman & Justine Veneracion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
