import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, TabletSmartphone, Download, QrCode, Star, Users, Shield, Gamepad2 } from 'lucide-react';
import { LanguageProps } from '@/types/common';
import { QR_CODES } from '@/constants/qrCodes';
import { useIsMobile } from '@/hooks/use-mobile';

export const DownloadSection = ({ language }: LanguageProps) => {
  const isMobile = useIsMobile();
  
  const content = {
    en: {
      title: "Download & Start Playing",
      subtitle: "Join millions of players in the ultimate poker survival game",
      ios: "iOS Download",
      android: "Android Download",
      description: "Available on all platforms",
      scanText: "Scan with your device camera",
      stats: [
        { icon: Users, value: "1M+", label: "Active Players" },
        { icon: Star, value: "4.8", label: "App Store Rating" },
        { icon: Download, value: "5M+", label: "Total Downloads" }
      ],
      features: [
        { icon: Shield, text: "Secure & Fair Play" },
        { icon: Gamepad2, text: "Cross-Platform Gaming" },
        { icon: Users, text: "24/7 Community" },
        { icon: Star, text: "Regular Updates" }
      ]
    },
    zh: {
      title: "下载并开始游戏",
      subtitle: "加入数百万玩家，体验终极扑克生存游戏",
      ios: "iOS 下载",
      android: "Android 下载",
      description: "支持所有平台",
      scanText: "使用设备相机扫描",
      stats: [
        { icon: Users, value: "100万+", label: "活跃玩家" },
        { icon: Star, value: "4.8", label: "应用商店评分" },
        { icon: Download, value: "500万+", label: "总下载量" }
      ],
      features: [
        { icon: Shield, text: "安全公平游戏" },
        { icon: Gamepad2, text: "跨平台游戏" },
        { icon: Users, text: "24/7 社区支持" },
        { icon: Star, text: "定期更新" }
      ]
    },
    ko: {
      title: "다운로드 및 게임 시작",
      subtitle: "수백만 명의 플레이어와 함께 궁극의 포커 서바이벌 게임에 참여하세요",
      ios: "iOS 다운로드",
      android: "Android 다운로드",
      description: "모든 플랫폼에서 지원",
      scanText: "기기 카메라로 스캔",
      stats: [
        { icon: Users, value: "100만+", label: "활성 플레이어" },
        { icon: Star, value: "4.8", label: "앱스토어 평점" },
        { icon: Download, value: "500만+", label: "총 다운로드" }
      ],
      features: [
        { icon: Shield, text: "안전하고 공정한 플레이" },
        { icon: Gamepad2, text: "크로스 플랫폼 게임" },
        { icon: Users, text: "24시간 커뮤니티" },
        { icon: Star, text: "정기 업데이트" }
      ]
    }
  };

  const { title, subtitle, ios, android, description, scanText, stats, features } = content[language];

  return (
    <section 
      id="download-section"
      className={`relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ${
        isMobile ? 'py-16 px-4' : 'py-24 px-4 sm:px-6'
      }`}
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl opacity-40" />
      </div>
      
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Header */}
        <div className={`text-center ${isMobile ? 'mb-16' : 'mb-20'}`}>
          <div className={`inline-flex items-center gap-3 rounded-full bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 mb-6 ${
            isMobile ? 'px-4 py-2' : 'px-6 py-3'
          }`}>
            <Download className="w-5 h-5 text-primary" />
            <span className={`font-semibold text-slate-200 uppercase tracking-wider ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}>
              {description}
            </span>
          </div>
          
          <h2 className={`font-bold mb-6 sm:mb-8 text-white leading-tight ${
            isMobile ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl lg:text-6xl'
          }`}>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className={`text-slate-400 max-w-4xl mx-auto leading-relaxed font-light ${
            isMobile ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'
          }`}>
            {subtitle}
          </p>
          
          {/* Stats Row */}
          <div className={`flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-8 sm:mt-12 ${
            isMobile ? 'gap-6' : 'gap-8 sm:gap-12'
          }`}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <span className={`font-bold text-white ${
                      isMobile ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                    }`}>{stat.value}</span>
                  </div>
                  <p className={`text-slate-400 font-medium ${
                    isMobile ? 'text-xs sm:text-sm' : 'text-sm'
                  }`}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Download Cards - Professional Layout */}
        <div className={`grid gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20 ${
          isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'
        }`}>
          {/* iOS Card */}
          <Card className="group relative overflow-hidden bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <CardHeader className="relative z-10 pb-6">
              <div className={`flex items-center justify-between mb-4 sm:mb-6 ${
                isMobile ? 'flex-col sm:flex-row gap-3 sm:gap-0' : ''
              }`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 group-hover:border-primary/30 transition-all duration-500 ${
                    isMobile ? 'w-12 h-12' : 'w-16 h-16'
                  }`}>
                    <Smartphone className={`text-slate-300 group-hover:text-primary transition-colors duration-500 ${
                      isMobile ? 'w-6 h-6' : 'w-8 h-8'
                    }`} />
                  </div>
                  <div>
                    <CardTitle className={`font-bold text-white group-hover:text-primary transition-colors duration-500 ${
                      isMobile ? 'text-lg sm:text-xl' : 'text-2xl'
                    }`}>
                      {ios}
                    </CardTitle>
                    <p className={`text-slate-400 mt-1 font-medium ${
                      isMobile ? 'text-sm' : 'text-base'
                    }`}>iPhone & iPad</p>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-700/30">
                  <QrCode className="w-6 h-6 text-slate-500" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className={`bg-white rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-slate-200 ${
                isMobile ? 'p-4 sm:p-6' : 'p-8'
              }`}>
                <div className="aspect-square relative">
                  {/* iOS QR Code - Easy to replace by updating QR_CODES.ios.src */}
                  <img 
                    src={QR_CODES.ios.src} 
                    alt={QR_CODES.ios.alt}
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="text-center mt-6 sm:mt-8">
                <p className={`text-slate-300 font-medium mb-2 ${
                  isMobile ? 'text-sm' : 'text-base'
                }`}>{scanText}</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>iOS 12.0+ Required</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Android Card */}
          <Card className="group relative overflow-hidden bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <CardHeader className="relative z-10 pb-6">
              <div className={`flex items-center justify-between mb-4 sm:mb-6 ${
                isMobile ? 'flex-col sm:flex-row gap-3 sm:gap-0' : ''
              }`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 group-hover:border-primary/30 transition-all duration-500 ${
                    isMobile ? 'w-12 h-12' : 'w-16 h-16'
                  }`}>
                    <TabletSmartphone className={`text-slate-300 group-hover:text-primary transition-colors duration-500 ${
                      isMobile ? 'w-6 h-6' : 'w-8 h-8'
                    }`} />
                  </div>
                  <div>
                    <CardTitle className={`font-bold text-white group-hover:text-primary transition-colors duration-500 ${
                      isMobile ? 'text-lg sm:text-xl' : 'text-2xl'
                    }`}>
                      {android}
                    </CardTitle>
                    <p className={`text-slate-400 mt-1 font-medium ${
                      isMobile ? 'text-sm' : 'text-base'
                    }`}>Android Devices</p>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-700/30">
                  <QrCode className="w-6 h-6 text-slate-500" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className={`bg-white rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-slate-200 ${
                isMobile ? 'p-4 sm:p-6' : 'p-8'
              }`}>
                <div className="aspect-square relative">
                  {/* Android QR Code - Easy to replace by updating QR_CODES.android.src */}
                  <img 
                    src={QR_CODES.android.src} 
                    alt={QR_CODES.android.alt}
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="text-center mt-6 sm:mt-8">
                <p className={`text-slate-300 font-medium mb-2 ${
                  isMobile ? 'text-sm' : 'text-base'
                }`}>{scanText}</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Android 7.0+ Required</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className={`grid gap-4 sm:gap-6 ${
            isMobile ? 'grid-cols-1 sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4'
          }`}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className={`flex flex-col items-center text-center rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-primary/30 hover:bg-slate-800/30 transition-all duration-300 group ${
                    isMobile ? 'p-4' : 'p-6'
                  }`}
                >
                  <div className={`rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300 ${
                    isMobile ? 'w-10 h-10' : 'w-12 h-12'
                  }`}>
                    <IconComponent className={`text-primary ${
                      isMobile ? 'w-5 h-5' : 'w-6 h-6'
                    }`} />
                  </div>
                  <span className={`text-slate-300 font-medium ${
                    isMobile ? 'text-xs sm:text-sm' : 'text-sm'
                  }`}>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className={`inline-flex flex-wrap items-center gap-4 sm:gap-6 sm:gap-8 rounded-3xl bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 ${
            isMobile ? 'px-6 py-4 flex-col sm:flex-row' : 'px-8 py-6'
          }`}>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className={`font-semibold ${
                isMobile ? 'text-sm' : 'text-sm sm:text-base'
              }`}>
                {language === 'en' ? 'Available Now' : language === 'zh' ? '现已上线' : '지금 이용 가능'}
              </span>
            </div>
            <div className={`bg-slate-600/50 ${
              isMobile ? 'w-full h-px sm:w-px sm:h-6' : 'w-px h-6'
            } hidden sm:block`} />
            <div className={`text-slate-300 font-semibold ${
              isMobile ? 'text-sm' : 'text-sm sm:text-base'
            }`}>
              {language === 'en' ? 'Free Download' : language === 'zh' ? '免费下载' : '무료 다운로드'}
            </div>
            <div className={`bg-slate-600/50 ${
              isMobile ? 'w-full h-px sm:w-px sm:h-6' : 'w-px h-6'
            } hidden sm:block`} />
            <div className={`text-slate-300 font-semibold ${
              isMobile ? 'text-sm' : 'text-sm sm:text-base'
            }`}>
              {language === 'en' ? 'No Ads' : language === 'zh' ? '无广告' : '광고 없음'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};