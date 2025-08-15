import { QRCodeConfig, PlatformDownload } from '@/types/common';

// QR Code configurations - Easy to update
export const QR_CODES: Record<'ios' | 'android', QRCodeConfig> = {
  ios: {
    src: "/lovable-uploads/2923158d-96b1-4bb0-8baa-047760828b66.png",
    alt: "iOS QR Code for SQUIDPOKER Download",
    fallbackText: "Scan to download on iOS"
  },
  android: {
    src: "/lovable-uploads/2923158d-96b1-4bb0-8baa-047760828b66.png", 
    alt: "Android QR Code for SQUIDPOKER Download",
    fallbackText: "Scan to download on Android"
  }
};

// Platform download configurations
export const PLATFORM_DOWNLOADS: PlatformDownload[] = [
  {
    platform: 'ios',
    qrCode: QR_CODES.ios,
    requirements: 'iOS 12.0+ Required'
  },
  {
    platform: 'android',
    qrCode: QR_CODES.android,
    requirements: 'Android 7.0+ Required'
  }
];

// Function to update QR codes easily
export const updateQRCode = (platform: 'ios' | 'android', newSrc: string) => {
  QR_CODES[platform].src = newSrc;
};