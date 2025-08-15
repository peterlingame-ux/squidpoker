import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onLanguageChange: (language: 'en' | 'zh' | 'ko') => void;
}

export const LanguageToggle = ({ onLanguageChange }: LanguageToggleProps) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh' | 'ko'>('en');

  const handleLanguageChange = (lang: 'en' | 'zh' | 'ko') => {
    setCurrentLang(lang);
    onLanguageChange(lang);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'ko', label: '한국어' }
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