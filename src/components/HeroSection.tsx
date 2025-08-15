import squidPokerCharacters from '@/assets/squid-poker-characters.png';

interface HeroSectionProps {
  language: 'en' | 'zh';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 shape-triangle text-squid-pink"></div>
        <div className="absolute top-40 right-20 shape-circle text-player-teal"></div>
        <div className="absolute bottom-40 left-20 shape-square text-squid-pink-light"></div>
        <div className="absolute bottom-20 right-10 shape-triangle text-guard-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-black leading-tight">
            鱿鱼扑克
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl tracking-wider">SQUIDPOKER</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-8 leading-relaxed">
            {language === 'en' 
              ? "Bet it all to survive the ultimate poker challenge!"
              : "赌上全部，在终极扑克生存挑战中生存下来！"
            }
          </p>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-squid-pink hover:bg-squid-pink-dark text-white font-bold rounded-lg text-lg hover-lift transition-all duration-300">
              {language === 'en' ? 'Download Now' : '立即下载'}
            </button>
            <button className="px-8 py-4 bg-black/20 hover:bg-black/30 text-black font-bold rounded-lg text-lg hover-lift transition-all duration-300 backdrop-blur-sm">
              {language === 'en' ? 'Watch Trailer' : '观看预告'}
            </button>
          </div>
        </div>

        {/* Character Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <img 
              src={squidPokerCharacters} 
              alt="Squid Poker Characters" 
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            />
            {/* Floating poker elements */}
            <div className="absolute -top-8 -left-8 animate-bounce">
              <div className="w-12 h-12 bg-squid-pink rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                A
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-xl">
                ♠
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};