interface HeroSectionProps {
  language: 'en' | 'zh';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen hero-gradient">
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
          鱿鱼扑克 <span className="whitespace-nowrap">SQUIDPOKER</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-black">
          {language === 'en' 
            ? "Bet it all to survive the ultimate poker challenge!"
            : "赌上全部，在终极扑克生存挑战中生存下来！"
          }
        </p>
      </div>
    </section>
  );
};