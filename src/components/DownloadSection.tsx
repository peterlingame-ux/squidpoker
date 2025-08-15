import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, TabletSmartphone, Download, QrCode, Star, Users, Shield, Gamepad2 } from 'lucide-react';

interface DownloadSectionProps {
  language: 'en' | 'zh' | 'ko';
}

export const DownloadSection = ({ language }: DownloadSectionProps) => {
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
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl opacity-40" />
      </div>
      
      {/* Squid Game poker characters background */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/19ae2a74-0348-404c-afb9-5ff36b170d11.png')`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 mb-8">
            <Download className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              {description}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Download Cards - Professional Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {/* iOS Card */}
          <Card className="group relative overflow-hidden bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <CardHeader className="relative z-10 pb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 group-hover:border-primary/30 transition-all duration-500">
                    <Smartphone className="w-8 h-8 text-slate-300 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                      {ios}
                    </CardTitle>
                    <p className="text-slate-400 mt-1 font-medium">iPhone & iPad</p>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-700/30">
                  <QrCode className="w-6 h-6 text-slate-500" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="bg-white rounded-3xl p-8 shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-slate-200">
                <div className="aspect-square relative">
                  <img 
                    src="/lovable-uploads/2923158d-96b1-4bb0-8baa-047760828b66.png" 
                    alt="iOS QR Code" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-slate-300 font-medium mb-2">{scanText}</p>
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
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 group-hover:border-primary/30 transition-all duration-500">
                    <TabletSmartphone className="w-8 h-8 text-slate-300 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                      {android}
                    </CardTitle>
                    <p className="text-slate-400 mt-1 font-medium">Android Devices</p>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-700/30">
                  <QrCode className="w-6 h-6 text-slate-500" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="bg-white rounded-3xl p-8 shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-slate-200">
                <div className="aspect-square relative">
                  <img 
                    src="/lovable-uploads/2923158d-96b1-4bb0-8baa-047760828b66.png" 
                    alt="Android QR Code" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-slate-300 font-medium mb-2">{scanText}</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Android 7.0+ Required</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-primary/30 hover:bg-slate-800/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center gap-6 sm:gap-8 px-8 py-6 rounded-3xl bg-slate-800/40 backdrop-blur-lg border border-slate-700/50">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold text-sm sm:text-base">
                {language === 'en' ? 'Available Now' : language === 'zh' ? '现已上线' : '지금 이용 가능'}
              </span>
            </div>
            <div className="w-px h-6 bg-slate-600/50 hidden sm:block" />
            <div className="text-slate-300 font-semibold text-sm sm:text-base">
              {language === 'en' ? 'Free Download' : language === 'zh' ? '免费下载' : '무료 다운로드'}
            </div>
            <div className="w-px h-6 bg-slate-600/50 hidden sm:block" />
            <div className="text-slate-300 font-semibold text-sm sm:text-base">
              {language === 'en' ? 'No Ads' : language === 'zh' ? '无广告' : '광고 없음'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};