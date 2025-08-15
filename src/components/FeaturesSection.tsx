import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Triangle, Circle, Square } from 'lucide-react';

interface FeaturesSectionProps {
  language: 'en' | 'zh';
}

export const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const content = {
    en: {
      title: "Game Features",
      subtitle: "Experience the ultimate fusion of poker strategy and Squid Game survival",
      features: [
        {
          icon: Triangle,
          title: "Multiple Game Modes",
          description: "Play in tournament or casual modes with Squid Game twists. Experience elimination-style poker games to compete for the ultimate prize.",
          gradient: "from-pink-500 to-red-500"
        },
        {
          icon: Circle,
          title: "Unique Character System",
          description: "Choose from iconic avatars like tracksuit players or masked guards. Each character has unique perks and styles.",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          icon: Square,
          title: "Challenging Stage Missions", 
          description: "Advance through Squid Game-inspired levels. Complete special poker challenges (Red Light Green Light, Tug-of-War, etc.) to survive and win rewards.",
          gradient: "from-indigo-500 to-purple-500"
        }
      ]
    },
    zh: {
      title: "游戏特色",
      subtitle: "体验扑克策略与鱿鱼游戏生存的终极融合",
      features: [
        {
          icon: Triangle,
          title: "多样对局模式",
          description: "在锦标赛或休闲模式中融入鱿鱼游戏元素，以淘汰制扑克赛争夺最终大奖。",
          gradient: "from-pink-500 to-red-500"
        },
        {
          icon: Circle,
          title: "独特角色系统", 
          description: "选择标志性角色，例如身穿绿色运动服的玩家或戴黑面具的守卫。每个角色都有独特的属性和风格。",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          icon: Square,
          title: "挑战关卡任务",
          description: "在鱿鱼游戏主题关卡中前进。完成特殊扑克挑战（如\"123木头人\"、拔河等）以求生存并赢取奖励。",
          gradient: "from-indigo-500 to-purple-500"
        }
      ]
    }
  };

  const { title, subtitle, features } = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-500 via-pink-600 to-red-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              {language === 'en' ? 'Features' : '特色功能'}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="mx-auto mb-6 relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <div className="w-16 h-0.5 bg-white/30 mx-auto group-hover:bg-white/60 transition-colors duration-300" />
                </CardHeader>
                
                <CardContent className="relative z-10 text-center">
                  <p className="text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="text-xs font-medium text-white uppercase tracking-wider">
                      {language === 'en' ? 'Learn More' : '了解更多'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {language === 'en' ? 'Survival-Based Gameplay' : '生存类游戏玩法'}
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="text-sm text-white/90">
              {language === 'en' ? 'High Stakes Competition' : '高风险竞技'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};