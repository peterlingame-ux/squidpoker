interface HeroSectionProps {
  language: 'en' | 'zh' | 'ko';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: "SQUIDPOKER",
      subtitle: "鱿鱼扑克",
      tagline: "Bet it all to survive the ultimate poker challenge!",
      downloadBtn: "Download Now",
      trailerBtn: "Watch Trailer",
      features: [
        { icon: "♠", text: "Texas Hold'em Rules" },
        { icon: "⚡", text: "Survival Mode" },
        { icon: "🏆", text: "Tournament Play" }
      ],
      stats: [
        { value: "100K+", label: "Players" },
        { value: "4.8★", label: "Rating" }
      ]
    },
    zh: {
      title: "鱿鱼扑克",
      subtitle: "SQUIDPOKER",
      tagline: "赌上全部，在终极扑克生存挑战中生存下来！",
      downloadBtn: "立即下载",
      trailerBtn: "观看预告",
      features: [
        { icon: "♠", text: "德州扑克规则" },
        { icon: "⚡", text: "生存模式" },
        { icon: "🏆", text: "锦标赛模式" }
      ],
      stats: [
        { value: "100K+", label: "在线玩家" },
        { value: "4.8★", label: "用户评分" }
      ]
    },
    ko: {
      title: "오징어 포커",
      subtitle: "SQUIDPOKER",
      tagline: "최후의 포커 도전에서 살아남기 위해 모든 것을 걸어라!",
      downloadBtn: "지금 다운로드",
      trailerBtn: "예고편 보기",
      features: [
        { icon: "♠", text: "텍사스 홀덤 규칙" },
        { icon: "⚡", text: "서바이벌 모드" },
        { icon: "🏆", text: "토너먼트 플레이" }
      ],
      stats: [
        { value: "100K+", label: "플레이어" },
        { value: "4.8★", label: "평점" }
      ]
    }
  };

  const currentContent = content[language];

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

      {/* Content positioned to center on mobile, right on desktop */}
      <div className="relative z-10 min-h-screen flex items-center justify-center lg:justify-end px-4 lg:px-12">
        <div className="max-w-xl w-full lg:mr-12 text-center lg:text-left">
          
          {/* Main content area optimized for mobile */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 lg:p-12 shadow-2xl border border-white/20 animate-fade-in">
            
            {/* Title Section */}
            <div className="text-center mb-6 lg:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 lg:mb-4 text-gray-900 leading-tight">
                {currentContent.title}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-squid-pink mb-4 lg:mb-6 tracking-wider">
                {currentContent.subtitle}
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 leading-relaxed px-2">
                {currentContent.tagline}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-3 lg:gap-4 mb-6 lg:mb-8">
              <button className="w-full px-6 lg:px-8 py-3 lg:py-4 bg-squid-pink hover:bg-squid-pink-dark text-white font-bold rounded-xl text-base lg:text-lg hover-lift transition-all duration-300 shadow-lg hover:shadow-xl">
                {currentContent.downloadBtn}
              </button>
              <button className="w-full px-6 lg:px-8 py-3 lg:py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl text-base lg:text-lg hover-lift transition-all duration-300 shadow-lg">
                {currentContent.trailerBtn}
              </button>
            </div>

            {/* Game Features Quick Info */}
            <div className="space-y-3 lg:space-y-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-2.5 lg:p-3 bg-gray-50 rounded-lg">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-squid-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs lg:text-sm">{feature.icon}</span>
                  </div>
                  <span className="text-gray-800 font-medium text-sm lg:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional floating info cards */}
          <div className="mt-4 lg:mt-6 grid grid-cols-2 gap-3 lg:gap-4">
            {currentContent.stats.map((stat, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-4 text-center shadow-lg animate-scale-in" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
                <div className="text-lg lg:text-2xl font-bold text-squid-pink mb-1">{stat.value}</div>
                <div className="text-xs lg:text-sm text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle decorative elements that don't interfere with the background */}
      <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 z-20 opacity-60">
        <div className="flex gap-1.5 lg:gap-2">
          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-squid-pink rounded-full animate-pulse"></div>
          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-player-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};