const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "hsl(var(--primary))",
          top: "10%",
          left: "10%",
          animation: "float 25s infinite linear",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "hsl(var(--secondary))",
          bottom: "10%",
          right: "10%",
          animation: "float 25s infinite linear",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute w-[250px] h-[250px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "hsl(var(--primary))",
          top: "50%",
          right: "25%",
          animation: "float 25s infinite linear",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
};

export default BackgroundShapes;
