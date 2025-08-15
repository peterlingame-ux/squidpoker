import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
      android: "Android Download"
    },
    zh: {
      title: "下载并开始游戏", 
      subtitle: "扫描二维码下载鱿鱼扑克游戏",
      ios: "iOS 下载",
      android: "Android 下载"
    }
  };

  const { title, subtitle, ios, android } = content[language];

  return (
    <section className="py-12 px-6 bg-guard-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
          {title}
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          {subtitle}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Card className="hover-lift bg-card backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-semibold text-foreground">
                {ios}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-56 h-56 bg-white rounded-lg overflow-hidden">
                <img 
                  src={iosQr} 
                  alt="iOS QR Code" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-card backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-semibold text-foreground">
                {android}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-56 h-56 bg-white rounded-lg overflow-hidden">
                <img 
                  src={androidQr} 
                  alt="Android QR Code" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};