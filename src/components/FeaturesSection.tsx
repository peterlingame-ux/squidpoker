import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeaturesSectionProps {
  language: 'en' | 'zh';
}

export const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const content = {
    en: {
      title: "Game Features",
      features: [
        {
          icon: "shape-triangle",
          title: "Multiple Game Modes",
          description: "Play in tournament or casual modes with Squid Game twists. Experience elimination-style poker games to compete for the ultimate prize."
        },
        {
          icon: "shape-circle",
          title: "Unique Character System",
          description: "Choose from iconic avatars like tracksuit players or masked guards. Each character has unique perks and styles."
        },
        {
          icon: "shape-square",
          title: "Challenging Stage Missions", 
          description: "Advance through Squid Game-inspired levels. Complete special poker challenges (Red Light Green Light, Tug-of-War, etc.) to survive and win rewards."
        }
      ]
    },
    zh: {
      title: "游戏特色",
      features: [
        {
          icon: "shape-triangle",
          title: "多样对局模式",
          description: "在锦标赛或休闲模式中融入鱿鱼游戏元素，以淘汰制扑克赛争夺最终大奖。"
        },
        {
          icon: "shape-circle",
          title: "独特角色系统", 
          description: "选择标志性角色，例如身穿绿色运动服的玩家或戴黑面具的守卫。每个角色都有独特的属性和风格。"
        },
        {
          icon: "shape-square",
          title: "挑战关卡任务",
          description: "在鱿鱼游戏主题关卡中前进。完成特殊扑克挑战（如\"123木头人\"、拔河等）以求生存并赢取奖励。"
        }
      ]
    }
  };

  const { title, features } = content[language];

  return (
    <section className="py-12 px-6 squid-gradient">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary-foreground">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift bg-black/20 backdrop-blur-sm border-white/10 text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="text-white mb-3">
                  <div className={feature.icon}></div>
                </div>
                <CardTitle className="text-xl font-bold text-primary-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};