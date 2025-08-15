interface HeroSectionProps {
  language: 'en' | 'zh';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">

      {/* Empty hero section - content removed */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/* Content area reserved for future use */}
      </div>
    </section>
  );
};