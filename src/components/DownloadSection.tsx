import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, TabletSmartphone } from 'lucide-react';
import iosQr from '@/assets/ios-qr.png';
import androidQr from '@/assets/android-qr.png';

interface DownloadSectionProps {
  language: 'en' | 'zh';
}

export const DownloadSection = ({ language }: DownloadSectionProps) => {
  const content = {
    en: {
      title: "Download & Play",
      subtitle: "Scan the QR code to download SQUIDPOKER",
      ios: "iOS Download",
      android: "Android Download",
      description: "Available on all platforms"
    },
    zh: {
      title: "下载并开始游戏", 
      subtitle: "扫描二维码下载鱿鱼扑克游戏",
      ios: "iOS 下载",
      android: "Android 下载",
      description: "支持所有平台"
    }
  };

  const { title, subtitle, ios, android, description } = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Hooded figure background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/e5aa437e-c3d4-45f5-b169-1086a3c9144a.png')`
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{description}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Download Section - Single QR Code Placeholder */}
        <div className="flex justify-center">
          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10 pb-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {title}
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                <div className="w-full aspect-square bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 max-w-80 mx-auto">
                  <img 
                    src="/lovable-uploads/2923158d-96b1-4bb0-8baa-047760828b66.png" 
                    alt="Download QR Code" 
                    className="w-full h-full object-contain filter contrast-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'en' ? 'Scan to download the game' : '扫描下载游戏'}
                </p>
                <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    iOS
                  </span>
                  <div className="w-px h-3 bg-border" />
                  <span className="flex items-center gap-1">
                    <TabletSmartphone className="w-3 h-3" />
                    Android
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {language === 'en' ? 'Available Now' : '现已上线'}
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="text-sm text-muted-foreground">
              {language === 'en' ? 'Free to Download' : '免费下载'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};