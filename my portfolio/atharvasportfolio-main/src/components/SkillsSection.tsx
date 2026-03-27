import { motion } from "framer-motion";
import LiquidGlassCard from "./LiquidGlassCard";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C Programming", "Python"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Other Skills",
    skills: ["Problem Solving", "Logic Development", "AI Learning", "Creative Development"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-space"
      >
        My Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <LiquidGlassCard key={cat.title} delay={i * 0.15} className="p-8">
            <h3 className="text-xl font-bold text-gradient mb-6 font-space">{cat.title}</h3>
            <div className="flex flex-col gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] text-muted-foreground font-medium text-sm transition-all duration-300 hover:border-primary/30 hover:text-foreground"
                >
                  {skill}
                </div>
              ))}
            </div>
          </LiquidGlassCard>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
