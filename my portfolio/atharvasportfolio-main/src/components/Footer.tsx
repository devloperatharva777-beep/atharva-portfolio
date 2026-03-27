const Footer = () => {
  return (
    <footer className="mt-24 py-14 text-center border-t border-foreground/[0.06] backdrop-blur-xl" style={{ background: "hsl(0 0% 4% / 0.5)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-muted-foreground mb-6">© 2026 Atharva Kulunge</p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a href="https://github.com/devloperatharva777-beep" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/atharva-kulunge-537413399" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
            LinkedIn
          </a>
          <a href="/Atharva_Resume.pdf" download className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
            Resume
          </a>
          <a href="mailto:devloperatharva777@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
