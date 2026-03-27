import { motion } from "framer-motion";
import LiquidGlassCard from "./LiquidGlassCard";

const topics = [
  "Artificial Intelligence",
  "Python for AI",
  "Machine Learning Basics",
  "Web Development",
];

const CurrentlyLearningSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-space"
      >
        Currently Learning
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mx-auto">
        {topics.map((topic, i) => (
          <LiquidGlassCard key={topic} delay={i * 0.1} className="p-6 text-center">
            <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2))",
              border: "1px solid hsl(var(--primary) / 0.3)",
            }}>
              <span className="text-primary text-lg">✦</span>
            </div>
            <p className="text-sm font-medium text-foreground">{topic}</p>
          </LiquidGlassCard>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearningSection;
