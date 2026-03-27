import { motion } from "framer-motion";
import LiquidGlassCard from "./LiquidGlassCard";

const projects = [
  {
    title: "Atharva Portfolio Website",
    desc: "A futuristic personal portfolio featuring glassmorphism UI, cinematic intro, and smooth animations.",
    link: "https://atharvasportfolio.lovable.app",
  },
  {
    title: "Aadya Coaching Classes",
    desc: "A professional business website designed for coaching classes with a clean and modern interface.",
    link: "https://aadyacoachingclassess.lovable.app",
  },
  {
    title: "Youware Web App",
    desc: "An advanced web application built using modern development tools and frameworks.",
    link: "https://ytk486tqv0.youware.app",
  },
  {
    title: "NeuralCore AI",
    desc: "A futuristic AI infrastructure platform with neural brain visualization and quantum processing capabilities.",
    link: "https://nuralcore.lovable.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-space"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <LiquidGlassCard key={project.title} delay={i * 0.15} className="overflow-hidden group">
            <div
              className="h-44 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
              }}
            />
            <div className="p-7">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300 font-space">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-block px-6 py-2.5 rounded-full font-semibold text-sm"
              >
                Visit Project →
              </a>
            </div>
          </LiquidGlassCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
