import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PosterSection from "@/components/PosterSection";
import StorySection from "@/components/StorySection";
import BackStorySection from "@/components/BackStorySection";
import GameDetailsSection from "@/components/GameDetailsSection";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import ZombieSection from "@/components/ZombieSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import AtmosphericEffects from "@/components/AtmosphericEffects";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SectionNavigator from "@/components/SectionNavigator";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.querySelector(`#${section.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background scrollbar-hide relative cursor-none md:cursor-none"
    >
      <CustomCursor />
      <ScrollProgress />
      <AtmosphericEffects />
      <Navbar activeSection={activeSection} />
      <SectionNavigator activeSection={activeSection} />
      <main className="relative z-10">
        <HeroSection />
        <PosterSection />
        <VideoSection />
        <BackStorySection />
        <ZombieSection />
        <StorySection />
        <GameDetailsSection />
        <TeamSection />
        <DownloadSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
