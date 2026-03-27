import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-foreground/[0.06]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "hsl(0 0% 4% / 0.8)" } : {}}
    >
      <div className="max-w-[1200px] mx-auto h-full flex justify-between items-center px-6 md:px-10">
        <a href="#" className="text-3xl font-extrabold text-primary tracking-tight transition-all duration-300 font-space">
          AK
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`font-medium transition-all duration-300 ${
                  item.href === "#contact"
                    ? "btn-gradient px-6 py-2.5 rounded-full"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden backdrop-blur-xl border-t border-foreground/[0.06]"
          style={{ background: "hsl(0 0% 4% / 0.95)" }}
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
