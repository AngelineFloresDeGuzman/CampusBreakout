import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import BackStorySection from "@/components/BackStorySection";
import GameDetailsSection from "@/components/GameDetailsSection";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scrollbar-hide">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <BackStorySection />
      <StorySection />
      <GameDetailsSection />
      <TeamSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
