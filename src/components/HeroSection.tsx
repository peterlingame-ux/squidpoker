import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { LanguageProps } from '@/types/common';
import { Falling3DCoins } from './Falling3DCoins';

export const HeroSection = ({ language }: LanguageProps) => {
  const scrollToSection = useScrollToSection();
  const content = {
    en: {
      title: "SQUIDPOKER",
      tagline: "Bet it all to survive the ultimate poker challenge",
      downloadBtn: "Download Now",
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
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#f5f1e8' }}>
      {/* Background Image with natural color extension */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b03c5211-f310-42bd-af44-a2dcc98b72c8.png"
          alt="Squid Poker Characters Background" 
          className="w-full h-full object-contain object-center"
        />
        {/* Left side color extension */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#f5f1e8] via-[#f5f1e8] to-transparent"></div>
        {/* Right side color extension */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#f5f1e8] via-[#f5f1e8] to-transparent"></div>
      </div>

      {/* 3D散落硬币效果 */}
      <Falling3DCoins />

      {/* Download Button Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 text-white drop-shadow-2xl tracking-wider px-4">
            {currentContent.title}
          </h1>
          
          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 drop-shadow-lg max-w-2xl mx-auto px-4">
            {currentContent.tagline}
          </p>
          
          {/* Download Button */}
          <Button 
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-bold bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 mx-4"
            size="lg"
            onClick={() => scrollToSection('download-section')}
          >
            {currentContent.downloadBtn}
          </Button>
        </div>
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 opacity-40">
        <div className="flex gap-1 sm:gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted rounded-full"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};