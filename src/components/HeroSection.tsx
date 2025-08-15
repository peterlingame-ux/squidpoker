interface HeroSectionProps {
  language: 'en' | 'zh';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/274b91c8-b439-4b9d-adcd-706a795d15d0.png"
          alt="Squid Poker Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-end px-8 lg:px-16">
        {/* Right side content panel */}
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl">
            
            {/* Logo Section */}
            <div className="text-center mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                鱿鱼扑克
              </h1>
              <h2 className="text-xl lg:text-2xl font-bold text-pink-600 mb-4 tracking-wide">
                SQUIDPOKER
              </h2>
              <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                {language === 'en' 
                  ? "Bet it all to survive the ultimate poker challenge!"
                  : "赌上全部，在终极扑克生存挑战中生存下来！"
                }
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full py-3 px-6 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-colors duration-200">
                {language === 'en' ? '立即下载' : '立即下载'}
              </button>
              <button className="w-full py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl transition-colors duration-200">
                {language === 'en' ? '观看预告' : '观看预告'}
              </button>
            </div>

            {/* Game Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">♠</span>
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  {language === 'en' ? 'Texas Hold\'em Rules' : '德州扑克规则'}
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  {language === 'en' ? 'Survival Mode' : '生存模式'}
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🏆</span>
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  {language === 'en' ? 'Tournament Mode' : '锦标赛模式'}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-pink-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-pink-600">100K+</div>
                <div className="text-xs text-gray-600">
                  {language === 'en' ? 'Players' : '玩家'}
                </div>
              </div>
              <div className="bg-pink-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-pink-600">4.8★</div>
                <div className="text-xs text-gray-600">
                  {language === 'en' ? 'Rating' : '评分'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};