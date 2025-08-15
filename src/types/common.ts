export type Language = 'en' | 'zh' | 'ko';

export interface LanguageProps {
  language: Language;
}

export interface QRCodeConfig {
  src: string;
  alt: string;
  fallbackText?: string;
}

export interface PlatformDownload {
  platform: 'ios' | 'android';
  qrCode: QRCodeConfig;
  requirements: string;
}

export interface ContentItem {
  text: string;
  icon?: any;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: any;
}