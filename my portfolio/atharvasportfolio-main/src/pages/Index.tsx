import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import BackgroundShapes from "@/components/BackgroundShapes";
import FloatingParticles from "@/components/FloatingParticles";
import CinematicIntro from "@/components/CinematicIntro";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import LearningJourneySection from "@/components/LearningJourneySection";
import CurrentlyLearningSection from "@/components/CurrentlyLearningSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(() => {
    if (sessionStorage.getItem("intro_played")) return true;
    return false;
  });

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("intro_played", "true");
    setIntroComplete(true);
  }, []);

  return (
    <>
      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}

      <motion.div
        initial={!introComplete ? { opacity: 0 } : { opacity: 1 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <BackgroundShapes />
        <FloatingParticles />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <LearningJourneySection />
          <CurrentlyLearningSection />
          <SocialSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
