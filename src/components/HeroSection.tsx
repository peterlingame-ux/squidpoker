interface HeroSectionProps {
  language: 'en' | 'zh';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/5f292410-cd11-4993-b593-85e4dd6f4468.png"
          alt="Squid Poker Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Character Image Section */}
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="relative max-w-2xl w-full">
              <img 
                src="/lovable-uploads/4c7f6319-fd29-4ec4-b481-a46fd0255a45.png"
                alt="Squid Poker Characters" 
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{ maxHeight: '600px' }}
              />
              
              {/* Floating animation elements */}
              <div className="absolute -top-4 -left-4 animate-bounce">
                <div className="w-12 h-12 bg-squid-pink rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg opacity-80">
                  A
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-pulse">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-xl opacity-80">
                  ♠
                </div>
              </div>
              <div className="absolute top-1/3 -right-8 animate-spin" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg opacity-70">
                  ♥
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
                鱿鱼扑克
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl tracking-wider text-squid-pink-light">
                  SQUIDPOKER
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl font-semibold text-white mb-8 leading-relaxed drop-shadow-md">
                {language === 'en' 
                  ? "Bet it all to survive the ultimate poker challenge!"
                  : "赌上全部，在终极扑克生存挑战中生存下来！"
                }
              </p>
              
              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-squid-pink hover:bg-squid-pink-dark text-white font-bold rounded-lg text-lg hover-lift transition-all duration-300 shadow-xl">
                  {language === 'en' ? 'Download Now' : '立即下载'}
                </button>
                <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg text-lg hover-lift transition-all duration-300 backdrop-blur-sm border border-white/20">
                  {language === 'en' ? 'Watch Trailer' : '观看预告'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 shape-triangle text-white animate-pulse"></div>
        <div className="absolute top-40 right-20 shape-circle text-squid-pink animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 shape-square text-yellow-400 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 shape-triangle text-white animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
};