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

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-wrap gap-1">
      <Button
        variant={currentLang === 'en' ? 'default' : 'secondary'}
        className="px-2 sm:px-3 py-1 font-bold text-xs sm:text-sm min-w-[40px] sm:min-w-[50px]"
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </Button>
      <Button
        variant={currentLang === 'zh' ? 'default' : 'secondary'}
        className="px-2 sm:px-3 py-1 font-bold text-xs sm:text-sm min-w-[40px] sm:min-w-[50px]"
        onClick={() => handleLanguageChange('zh')}
      >
        中文
      </Button>
      <Button
        variant={currentLang === 'ko' ? 'default' : 'secondary'}
        className="px-2 sm:px-3 py-1 font-bold text-xs sm:text-sm min-w-[40px] sm:min-w-[50px]"
        onClick={() => handleLanguageChange('ko')}
      >
        한국어
      </Button>
    </div>
  );
};