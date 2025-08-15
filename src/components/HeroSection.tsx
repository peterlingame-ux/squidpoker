import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: 'en' | 'zh' | 'ko';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: "SQUIDPOKER",
      tagline: "Bet it all to survive the ultimate poker challenge",
      downloadBtn: "Download Now",
      trailerBtn: "Watch Trailer",
      features: [
        { text: "Texas Hold'em Rules" },
        { text: "Survival Mode" },
        { text: "Tournament Play" }
      ],
      stats: [
        { value: "100K+", label: "Players" },
        { value: "4.8★", label: "Rating" }
      ]
    },
    zh: {
      title: "鱿鱼扑克",
      tagline: "赌上全部，在终极扑克生存挑战中生存下来",
      downloadBtn: "立即下载",
      trailerBtn: "观看预告",
      features: [
        { text: "德州扑克规则" },
        { text: "生存模式" },
        { text: "锦标赛模式" }
      ],
      stats: [
        { value: "100K+", label: "在线玩家" },
        { value: "4.8★", label: "用户评分" }
      ]
    },
    ko: {
      title: "오징어 포커",
      tagline: "최후의 포커 도전에서 살아남기 위해 모든 것을 걸어라",
      downloadBtn: "지금 다운로드",
      trailerBtn: "예고편 보기",
      features: [
        { text: "텍사스 홀덤 규칙" },
        { text: "서바이벌 모드" },
        { text: "토너먼트 플레이" }
      ],
      stats: [
        { value: "100K+", label: "플레이어" },
        { value: "4.8★", label: "평점" }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b03c5211-f310-42bd-af44-a2dcc98b72c8.png"
          alt="Squid Poker Characters Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-50/95"></div>
      </div>

      {/* Content positioned to right */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-6 lg:px-16">
        <div className="max-w-lg w-full">
          
          {/* Main content area - Clean and Professional */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-xl border border-white/20">
            
            {/* Title Section - Simplified */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white tracking-tight drop-shadow-lg">
                {currentContent.title}
              </h1>
              
              <p className="text-lg text-white/90 leading-relaxed drop-shadow">
                {currentContent.tagline}
              </p>
            </div>
            
            {/* Action Buttons - Clean Design */}
            <div className="flex flex-col gap-3 mb-8">
              <Button 
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg"
                size="lg"
              >
                {currentContent.downloadBtn}
              </Button>
              <Button 
                variant="outline" 
                className="w-full py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl backdrop-blur border-white/30"
                size="lg"
              >
                {currentContent.trailerBtn}
              </Button>
            </div>

            {/* Game Features - Minimal Design */}
            <div className="space-y-3 mb-8">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 drop-shadow"></div>
                  <span className="font-medium text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats - Clean Layout */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/30">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1 drop-shadow">{stat.value}</div>
                  <div className="text-sm text-white/80 font-medium drop-shadow">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute bottom-8 left-8 z-20 opacity-40">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};