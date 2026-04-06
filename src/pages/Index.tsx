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
import { motion } from "framer-motion";

const Index = () => {
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
      <Navbar />
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
