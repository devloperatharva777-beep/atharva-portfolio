import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-5 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(263 70% 58% / 0.1) 0%, hsl(187 82% 55% / 0.05) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-8 border border-primary/30 text-primary bg-primary/5">
            Portfolio v2.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-space"
        >
          Future AI Engineer &{" "}
          <span className="text-gradient">
            Creative Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Diploma Computer Engineering student passionate about Artificial Intelligence, programming, and modern web technologies. Focused on developing strong logic, software skills, and building innovative digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="/Atharva_Resume.pdf"
            download
            className="btn-gradient px-8 py-4 rounded-full font-semibold text-base"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full font-semibold border border-foreground/15 text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(263_70%_58%_/_0.2)] backdrop-blur-sm"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
