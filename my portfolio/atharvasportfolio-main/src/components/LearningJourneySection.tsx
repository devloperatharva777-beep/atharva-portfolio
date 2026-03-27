import { motion } from "framer-motion";

const timeline = [
  { year: "2025", label: "Completed 10th Standard" },
  { year: "2025", label: "Started Diploma in Computer Engineering" },
  { year: "2026", label: "Learning Programming & Web Development" },
  { year: "Future", label: "AI Engineer" },
];

const LearningJourneySection = () => {
  return (
    <section id="journey" className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-space"
      >
        Learning Journey
      </motion.h2>

      <div className="relative max-w-[600px] mx-auto">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-14 md:pl-20"
            >
              {/* Dot */}
              <div
                className="absolute left-3 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background"
                style={{
                  boxShadow: "0 0 12px hsl(263 70% 58% / 0.5)",
                }}
              />
              <span className="text-xs font-semibold text-primary tracking-wider uppercase">{item.year}</span>
              <p className="text-foreground font-medium mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySection;
