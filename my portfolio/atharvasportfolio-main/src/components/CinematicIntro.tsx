import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
  "Initializing AI Interface",
  "Loading Neural Systems",
  "Preparing Developer Portfolio",
];

const CinematicIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  // 0 = loading sequence (0-2.4s)
  // 1 = name reveal (2.4-4.2s)
  // 2 = exit (4.2s+)
  const [loadingIndex, setLoadingIndex] = useState(0);

  useEffect(() => {
    const t0 = setTimeout(() => setLoadingIndex(1), 800);
    const t1 = setTimeout(() => setLoadingIndex(2), 1600);
    const t2 = setTimeout(() => setPhase(1), 2400);
    const t3 = setTimeout(() => setPhase(2), 4200);
    const t4 = setTimeout(() => onComplete(), 5000);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#0A0A0A" }}
        >
          {/* Scanning lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`scan-${i}`}
                className="absolute left-0 w-full h-px"
                style={{
                  top: `${8 + i * 9}%`,
                  background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "hsl(263 70% 58% / 0.3)" : "hsl(187 82% 55% / 0.2)"}, transparent)`,
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
              />
            ))}
          </div>

          {/* Neural network SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 600">
            {[...Array(15)].map((_, i) => {
              const x1 = 50 + Math.random() * 700;
              const y1 = 30 + Math.random() * 540;
              const x2 = 50 + Math.random() * 700;
              const y2 = 30 + Math.random() * 540;
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={i % 2 === 0 ? "#8B5CF6" : "#22D3EE"}
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.5, 0.2] }}
                  transition={{ duration: 2.5, delay: i * 0.1, ease: "easeOut" }}
                />
              );
            })}
            {[...Array(10)].map((_, i) => {
              const cx = 100 + Math.random() * 600;
              const cy = 80 + Math.random() * 440;
              return (
                <motion.circle
                  key={`node-${i}`}
                  cx={cx} cy={cy} r="2.5"
                  fill={i % 2 === 0 ? "#8B5CF6" : "#22D3EE"}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.8, 0.4], scale: [0, 1.5, 1] }}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(35)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: 1.5 + Math.random() * 3,
                  height: 1.5 + Math.random() * 3,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#22D3EE" : "#ffffff",
                }}
                animate={{
                  y: [0, -20 - Math.random() * 50, 0],
                  x: [0, (Math.random() - 0.5) * 30, 0],
                  opacity: [0, 0.7, 0],
                  scale: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* AI Core orb */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Outer pulsing glow */}
            <motion.div
              className="absolute -inset-24 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(263 70% 58% / 0.15) 0%, hsl(187 82% 55% / 0.05) 40%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Outer ring */}
            <motion.div
              className="absolute -inset-6 rounded-full"
              style={{ border: "1px solid hsl(263 70% 58% / 0.2)" }}
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            />

            {/* Core orb */}
            <motion.div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full relative"
              style={{
                background: "radial-gradient(circle at 35% 35%, #22D3EE, #8B5CF6, #1a1a2e)",
                boxShadow: "0 0 50px hsl(263 70% 58% / 0.5), 0 0 100px hsl(187 82% 55% / 0.3), inset 0 0 25px hsl(263 70% 58% / 0.3)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {/* Inner rings */}
              <motion.div
                className="absolute inset-3 rounded-full"
                style={{ border: "1px solid hsl(263 70% 58% / 0.5)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-6 rounded-full"
                style={{ border: "1px solid hsl(187 82% 55% / 0.4)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              {/* Center dot */}
              <motion.div
                className="absolute inset-0 m-auto w-3 h-3 rounded-full"
                style={{ background: "#22D3EE", boxShadow: "0 0 15px #22D3EE" }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Text area */}
          <div className="absolute bottom-[18%] left-0 right-0 text-center z-10 px-6">
            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.div
                  key="loading-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={loadingIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm md:text-base tracking-[0.25em] uppercase font-outfit font-light"
                      style={{ color: "#8B5CF6" }}
                    >
                      {loadingTexts[loadingIndex]}
                    </motion.p>
                  </AnimatePresence>

                  {/* Loading bar */}
                  <div className="mx-auto mt-5 w-48 h-[2px] rounded-full overflow-hidden" style={{ background: "hsl(0 0% 100% / 0.08)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #8B5CF6, #22D3EE)" }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.4, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              )}

              {phase === 1 && (
                <motion.div
                  key="welcome-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3"
                >
                  <p className="text-2xl md:text-4xl font-extrabold font-space" style={{ color: "#F5F5F5" }}>
                    Atharva Kulunge
                  </p>
                  <p className="text-base md:text-xl font-medium font-outfit text-gradient">
                    Future AI Engineer & Creative Developer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
