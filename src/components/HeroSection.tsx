interface HeroSectionProps {
  language: 'en' | 'zh';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b03c5211-f310-42bd-af44-a2dcc98b72c8.png"
          alt="Squid Poker Characters Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Empty hero section - content removed */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/* Content area reserved for future use */}
      </div>
    </section>
  );
};