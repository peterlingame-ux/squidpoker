import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RulesSectionProps {
  language: 'en' | 'zh';
}

export const RulesSection = ({ language }: RulesSectionProps) => {
  const content = {
    en: {
      title: "♠ Texas Hold'em Rules Overview",
      rules: [
        "Each player is dealt 2 private \"hole\" cards.",
        "5 community cards are dealt in stages (the Flop, Turn, and River).",
        "Players bet in four rounds: Pre-Flop, Flop, Turn, and River.",
        "The goal is to make the best five-card hand to win the pot."
      ]
    },
    zh: {
      title: "♠ 德州扑克规则简介",
      rules: [
        "每位玩家发2张底牌（仅自己可见）。",
        "场上会分阶段发出5张公共牌（包括翻牌圈、转牌和河牌）。",
        "游戏包含四轮下注：翻牌前、翻牌圈、转牌圈和河牌圈。",
        "目标是以最好的五张牌组合赢得底池。"
      ]
    }
  };

  const { title, rules } = content[language];

  return (
    <section className="py-12 px-6 bg-guard-black">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-muted-foreground">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};