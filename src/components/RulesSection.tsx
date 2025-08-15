import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Spade, Users, Target, Trophy } from 'lucide-react';

interface RulesSectionProps {
  language: 'en' | 'zh';
}

export const RulesSection = ({ language }: RulesSectionProps) => {
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
    }
  };

  const { title, subtitle, rules } = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 mb-8">
            <Spade className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              {language === 'en' ? 'Game Rules' : '游戏规则'}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((rule, index) => {
            const IconComponent = rule.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-600/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                        {rule.title}
                      </CardTitle>
                      <div className="w-12 h-0.5 bg-primary/30 group-hover:bg-primary/60 transition-colors duration-300" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <p className="text-slate-300 leading-relaxed text-base">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-600/30">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {language === 'en' ? 'Official Texas Hold\'em Rules' : '官方德州扑克规则'}
            </div>
            <div className="w-px h-4 bg-slate-600/50" />
            <div className="text-sm text-slate-400">
              {language === 'en' ? 'WSOP Approved' : 'WSOP认证'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};