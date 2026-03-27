import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const LiquidGlassCard = ({ children, className = "", delay = 0 }: LiquidGlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${className}`}
      style={{
        background: "hsl(0 0% 100% / 0.06)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid hsl(0 0% 100% / 0.1)",
        boxShadow: "0 8px 32px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 40px hsl(263 70% 58% / 0.15), 0 12px 40px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.1)",
      }}
    >
      {/* Top edge highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.15), transparent)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default LiquidGlassCard;
