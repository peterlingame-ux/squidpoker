import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Language } from '@/types/common';
import { useIsMobile } from '@/hooks/use-mobile';

interface LanguageToggleProps {
  onLanguageChange: (language: Language) => void;
}

export const LanguageToggle = ({ onLanguageChange }: LanguageToggleProps) => {
  const [currentLang, setCurrentLang] = useState<Language>('ko');
  const isMobile = useIsMobile();

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
    <div className={`fixed z-50 flex flex-wrap gap-1 ${
      isMobile 
        ? 'top-3 right-3' 
        : 'top-2 sm:top-4 right-2 sm:right-4'
    }`}>
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          variant={currentLang === code ? 'default' : 'secondary'}
          size={isMobile ? "sm" : "sm"}
          className={`font-bold ${
            isMobile 
              ? 'text-xs min-w-[32px] px-2 py-1.5 h-8' 
              : 'text-xs sm:text-sm min-w-[35px] sm:min-w-[45px] px-2 py-1 sm:px-3 sm:py-2'
          }`}
          onClick={() => handleLanguageChange(code)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};