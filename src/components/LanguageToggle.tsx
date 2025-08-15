import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onLanguageChange: (language: 'en' | 'zh') => void;
}

export const LanguageToggle = ({ onLanguageChange }: LanguageToggleProps) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');

  const handleLanguageChange = (lang: 'en' | 'zh') => {
    setCurrentLang(lang);
    onLanguageChange(lang);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex">
      <Button
        variant={currentLang === 'en' ? 'default' : 'secondary'}
        className="rounded-r-none px-3 py-1 font-bold"
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </Button>
      <Button
        variant={currentLang === 'zh' ? 'default' : 'secondary'}
        className="rounded-l-none px-3 py-1 font-bold"
        onClick={() => handleLanguageChange('zh')}
      >
        中文
      </Button>
    </div>
  );
};