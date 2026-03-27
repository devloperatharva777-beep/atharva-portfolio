import { motion } from "framer-motion";

const SocialSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-16 font-space"
      >
        Connect With Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-5 justify-center flex-wrap"
      >
        <a
          href="https://github.com/devloperatharva777-beep"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full font-semibold border border-foreground/15 text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_25px_hsl(263_70%_58%_/_0.2)] backdrop-blur-sm"
        >
          View GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/atharva-kulunge-537413399"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient px-8 py-4 rounded-full font-semibold"
        >
          Connect on LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default SocialSection;
