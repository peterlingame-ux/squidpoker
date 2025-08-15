import { useState, useCallback } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { HeroSection } from '@/components/HeroSection';
import { RulesSection } from '@/components/RulesSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CharactersSection } from '@/components/CharactersSection';
import { DownloadSection } from '@/components/DownloadSection';

type Language = 'en' | 'zh' | 'ko';

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <RulesSection language={language} />
      <FeaturesSection language={language} />
      <CharactersSection language={language} />
      <DownloadSection language={language} />
    </div>
  );
};

export default Index;
