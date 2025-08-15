import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Spade, Users, Target, Trophy } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface RulesSectionProps {
  language: 'en' | 'zh' | 'ko';
}

export const RulesSection = ({ language }: RulesSectionProps) => {
  const isMobile = useIsMobile();
  const content = {
    en: {
      title: "Texas Hold'em Rules Overview",
      subtitle: "Master the fundamentals of the world's most popular poker game",
      rules: [
        {
          icon: Users,
          title: "Hole Cards",
          description: "Each player is dealt 2 private \"hole\" cards."
        },
        {
          icon: Spade,
          title: "Community Cards",
          description: "5 community cards are dealt in stages (the Flop, Turn, and River)."
        },
        {
          icon: Target,
          title: "Betting Rounds",
          description: "Players bet in four rounds: Pre-Flop, Flop, Turn, and River."
        },
        {
          icon: Trophy,
          title: "Win Condition",
          description: "The goal is to make the best five-card hand to win the pot."
        }
      ]
    },
    zh: {
      title: "德州扑克规则简介",
      subtitle: "掌握世界上最受欢迎扑克游戏的基础知识",
      rules: [
        {
          icon: Users,
          title: "底牌",
          description: "每位玩家发2张底牌（仅自己可见）。"
        },
        {
          icon: Spade,
          title: "公共牌",
          description: "场上会分阶段发出5张公共牌（包括翻牌圈、转牌和河牌）。"
        },
        {
          icon: Target,
          title: "下注轮次",
          description: "游戏包含四轮下注：翻牌前、翻牌圈、转牌圈和河牌圈。"
        },
        {
          icon: Trophy,
          title: "获胜条件",
          description: "目标是以最好的五张牌组合赢得底池。"
        }
      ]
    },
    ko: {
      title: "텍사스 홀덤 규칙 개요",
      subtitle: "세계에서 가장 인기 있는 포커 게임의 기본을 마스터하세요",
      rules: [
        {
          icon: Users,
          title: "홀 카드",
          description: "각 플레이어는 2장의 개인 \"홀\" 카드를 받습니다."
        },
        {
          icon: Spade,
          title: "커뮤니티 카드",
          description: "5장의 커뮤니티 카드가 단계별로 공개됩니다 (플롭, 턴, 리버)."
        },
        {
          icon: Target,
          title: "베팅 라운드",
          description: "네 번의 베팅 라운드가 있습니다: 프리플롭, 플롭, 턴, 리버."
        },
        {
          icon: Trophy,
          title: "승리 조건",
          description: "최고의 5장 카드 조합을 만들어 팟을 차지하는 것이 목표입니다."
        }
      ]
    }
  };

  const { title, subtitle, rules } = content[language];

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${
      isMobile ? 'py-16 px-4' : 'py-20 px-6'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center ${isMobile ? 'mb-12' : 'mb-16'}`}>
          <div className={`inline-flex items-center gap-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 mb-6 ${
            isMobile ? 'px-4 py-2' : 'px-6 py-3'
          }`}>
            <Spade className="w-5 h-5 text-primary" />
            <span className={`font-semibold text-slate-300 uppercase tracking-wider ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}>
              {language === 'en' ? 'Game Rules' : language === 'zh' ? '游戏规则' : '게임 규칙'}
            </span>
          </div>
          
          <h2 className={`font-bold mb-4 sm:mb-6 text-white ${
            isMobile ? 'text-2xl sm:text-3xl' : 'text-4xl md:text-5xl'
          }`}>
            {title}
          </h2>
          <p className={`text-slate-400 max-w-3xl mx-auto leading-relaxed ${
            isMobile ? 'text-base sm:text-lg' : 'text-xl'
          }`}>
            {subtitle}
          </p>
        </div>

        {/* Rules Grid */}
        <div className={`grid gap-4 sm:gap-6 ${
          isMobile ? 'grid-cols-1' : 'md:grid-cols-2'
        }`}>
          {rules.map((rule, index) => {
            const IconComponent = rule.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-600/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`flex items-center gap-3 sm:gap-4 mb-3 ${
                    isMobile ? 'flex-col sm:flex-row text-center sm:text-left' : ''
                  }`}>
                    <div className={`flex-shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 ${
                      isMobile ? 'w-12 h-12' : 'w-14 h-14'
                    }`}>
                      <IconComponent className={`text-primary ${
                        isMobile ? 'w-6 h-6' : 'w-7 h-7'
                      }`} />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className={`font-bold mb-1 group-hover:text-primary transition-colors duration-300 ${
                        isMobile ? 'text-lg' : 'text-xl'
                      }`}>
                        {rule.title}
                      </CardTitle>
                      <div className="w-12 h-0.5 bg-primary/30 group-hover:bg-primary/60 transition-colors duration-300" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <p className={`text-slate-300 leading-relaxed ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className={`mt-12 sm:mt-16 text-center`}>
          <div className={`inline-flex items-center gap-4 sm:gap-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 ${
            isMobile ? 'px-6 py-3 flex-col sm:flex-row' : 'px-8 py-4'
          }`}>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {language === 'en' ? 'Official Texas Hold\'em Rules' : language === 'zh' ? '官方德州扑克规则' : '공식 텍사스 홀덤 규칙'}
            </div>
            <div className={`bg-slate-600/50 ${
              isMobile ? 'w-full h-px sm:w-px sm:h-4' : 'w-px h-4'
            }`} />
            <div className="text-sm text-slate-400">
              {language === 'en' ? 'WSOP Approved' : language === 'zh' ? 'WSOP认证' : 'WSOP 인증'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};