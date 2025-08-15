interface HeroSectionProps {
  language: 'en' | 'zh';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/274b91c8-b439-4b9d-adcd-706a795d15d0.png"
          alt="Squid Poker Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content positioned to avoid overlapping with characters */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-4 lg:px-12">
        <div className="max-w-xl w-full lg:mr-12">
          
          {/* Main content area positioned on the right side */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 animate-fade-in">
            
            {/* Title Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
                鱿鱼扑克
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-squid-pink mb-6 tracking-wider">
                SQUIDPOKER
              </h2>
              
              <p className="text-lg lg:text-xl font-semibold text-gray-800 leading-relaxed">
                {language === 'en' 
                  ? "Bet it all to survive the ultimate poker challenge!"
                  : "赌上全部，在终极扑克生存挑战中生存下来！"
                }
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mb-8">
              <button className="w-full px-8 py-4 bg-squid-pink hover:bg-squid-pink-dark text-white font-bold rounded-xl text-lg hover-lift transition-all duration-300 shadow-lg hover:shadow-xl">
                {language === 'en' ? '立即下载' : '立即下载'}
              </button>
              <button className="w-full px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl text-lg hover-lift transition-all duration-300 shadow-lg">
                {language === 'en' ? '观看预告' : '观看预告'}
              </button>
            </div>

            {/* Game Features Quick Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-squid-pink rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">♠</span>
                </div>
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Texas Hold\'em Rules' : '德州扑克规则'}
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-player-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Survival Mode' : '生存模式'}
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🏆</span>
                </div>
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Tournament Play' : '锦标赛模式'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Additional floating info cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-squid-pink mb-1">100K+</div>
              <div className="text-sm text-gray-700 font-medium">
                {language === 'en' ? 'Players' : '在线玩家'}
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl font-bold text-squid-pink mb-1">4.8★</div>
              <div className="text-sm text-gray-700 font-medium">
                {language === 'en' ? 'Rating' : '用户评分'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle decorative elements that don't interfere with the background */}
      <div className="absolute bottom-8 left-8 z-20 opacity-60">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-squid-pink rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-3 h-3 bg-player-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};