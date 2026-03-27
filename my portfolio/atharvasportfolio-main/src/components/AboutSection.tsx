import { motion } from "framer-motion";
import LiquidGlassCard from "./LiquidGlassCard";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-space"
      >
        About Me
      </motion.h2>

      <LiquidGlassCard className="p-8 md:p-12 max-w-[800px] mx-auto">
        <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
          I'm <span className="text-foreground font-semibold">Atharva Kulunge</span>, a Diploma Computer Engineering student currently learning programming, artificial intelligence, and web technologies.
        </p>
        <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
          I'm passionate about building innovative digital experiences and constantly working on sharpening my problem-solving skills and logical thinking abilities.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          My ultimate goal is to become a skilled <span className="text-gradient font-semibold">AI Engineer</span>, building intelligent solutions that push the boundaries of technology.
        </p>
      </LiquidGlassCard>
    </section>
  );
};

export default AboutSection;
