import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Language } from '@/types/common';

interface LanguageToggleProps {
  onLanguageChange: (language: Language) => void;
}

export const LanguageToggle = ({ onLanguageChange }: LanguageToggleProps) => {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    onLanguageChange(lang);
  };

  const languages = [
    { code: 'en' as Language, label: 'EN' },
    { code: 'zh' as Language, label: '中文' },
    { code: 'ko' as Language, label: '한국어' }
  ] as const;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-wrap gap-1">
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          variant={currentLang === code ? 'default' : 'secondary'}
          size="sm"
          className="font-bold text-xs sm:text-sm min-w-[40px] sm:min-w-[50px]"
          onClick={() => handleLanguageChange(code)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};