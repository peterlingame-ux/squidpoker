import { Card, CardContent } from '@/components/ui/card';

interface CharactersSectionProps {
  language: 'en' | 'zh';
}

export const CharactersSection = ({ language }: CharactersSectionProps) => {
  const content = {
    en: {
      title: "Meet the Players",
      subtitle: "Choose your character and enter the deadly game",
      characters: [
        {
          id: 1,
          name: "Golden Tiger",
          role: "VIP Player",
          description: "Mysterious high-stakes player with golden mask",
          image: "/lovable-uploads/fe1bea2b-bffe-4d06-866e-6a3e4d71e72d.png"
        },
        {
          id: 2,
          name: "Player 067",
          role: "Survivor",
          description: "Determined player fighting for survival",
          image: "/lovable-uploads/fbc03043-c256-49b0-87e5-4027c9fd2aed.png"
        },
        {
          id: 3,
          name: "Player 456",
          role: "Protagonist",
          description: "Main character seeking redemption",
          image: "/lovable-uploads/ad8bfc61-caa3-4b49-a346-e72caf73829c.png"
        },
        {
          id: 4,
          name: "The Front Man",
          role: "Game Master",
          description: "Elite overseer of the deadly games",
          image: "/lovable-uploads/02c14ce8-af92-4e1f-9230-3234cc0abf41.png"
        },
        {
          id: 5,
          name: "Sae-byeok",
          role: "Strategic Player",
          description: "Smart and calculated competitor",
          image: "/lovable-uploads/ab9c73ad-81b1-4405-8237-a1460e009a71.png"
        },
        {
          id: 6,
          name: "Masked Guard",
          role: "Enforcer",
          description: "Silent guardian of game rules",
          image: "/lovable-uploads/442e269f-df3e-4970-a9c7-bb51a3602584.png"
        },
        {
          id: 7,
          name: "Young-hee",
          role: "Game Controller",
          description: "Innocent appearance, deadly consequences",
          image: "/lovable-uploads/90a8b6c4-9943-439f-9795-083aafc43d0f.png"
        },
        {
          id: 8,
          name: "Sang-woo",
          role: "Strategist",
          description: "Intelligent but ruthless competitor",
          image: "/lovable-uploads/c7df8594-9079-4396-a442-85563c2e106b.png"
        },
        {
          id: 9,
          name: "Red Guard",
          role: "Supervisor",
          description: "High-ranking game administrator",
          image: "/lovable-uploads/55c6cf57-7c3f-466f-a7c8-bd4a8c4d582f.png"
        }
      ]
    },
    zh: {
      title: "认识游戏角色",
      subtitle: "选择你的角色，进入致命游戏",
      characters: [
        {
          id: 1,
          name: "黄金虎面",
          role: "VIP玩家",
          description: "戴着黄金面具的神秘高级玩家",
          image: "/lovable-uploads/fe1bea2b-bffe-4d06-866e-6a3e4d71e72d.png"
        },
        {
          id: 2,
          name: "067号玩家",
          role: "幸存者",
          description: "为生存而战的坚强玩家",
          image: "/lovable-uploads/fbc03043-c256-49b0-87e5-4027c9fd2aed.png"
        },
        {
          id: 3,
          name: "456号玩家",
          role: "主角",
          description: "寻求救赎的主要角色",
          image: "/lovable-uploads/ad8bfc61-caa3-4b49-a346-e72caf73829c.png"
        },
        {
          id: 4,
          name: "前线人",
          role: "游戏主管",
          description: "致命游戏的精英监督者",
          image: "/lovable-uploads/02c14ce8-af92-4e1f-9230-3234cc0abf41.png"
        },
        {
          id: 5,
          name: "姜晓",
          role: "策略玩家",
          description: "聪明且善于计算的竞争者",
          image: "/lovable-uploads/ab9c73ad-81b1-4405-8237-a1460e009a71.png"
        },
        {
          id: 6,
          name: "面具守卫",
          role: "执行者",
          description: "游戏规则的沉默守护者",
          image: "/lovable-uploads/442e269f-df3e-4970-a9c7-bb51a3602584.png"
        },
        {
          id: 7,
          name: "英熙",
          role: "游戏控制者",
          description: "天真外表下的致命后果",
          image: "/lovable-uploads/90a8b6c4-9943-439f-9795-083aafc43d0f.png"
        },
        {
          id: 8,
          name: "曹尚佑",
          role: "策略家",
          description: "聪明但冷酷的竞争者",
          image: "/lovable-uploads/c7df8594-9079-4396-a442-85563c2e106b.png"
        },
        {
          id: 9,
          name: "红衣守卫",
          role: "监督员",
          description: "高级游戏管理员",
          image: "/lovable-uploads/55c6cf57-7c3f-466f-a7c8-bd4a8c4d582f.png"
        }
      ]
    }
  };

  const { title, subtitle, characters } = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-secondary/5 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {language === 'en' ? 'Character Selection' : '角色选择'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card 
              key={character.id} 
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-0 relative z-10">
                {/* Character Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square relative group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium">
                    {character.role}
                  </div>
                </div>

                {/* Character Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {character.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {character.description}
                  </p>
                  
                  {/* Hover Effect Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-xs font-medium">
                      {language === 'en' ? 'Select Character' : '选择角色'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {language === 'en' ? '9 Unique Characters' : '9个独特角色'}
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="text-sm text-muted-foreground">
              {language === 'en' ? 'Each with Special Abilities' : '每个都有特殊能力'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};