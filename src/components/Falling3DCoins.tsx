import { useEffect, useState, useCallback } from 'react';
import { isLowEndMobile, getDevicePerformance } from '@/lib/mobile-utils';

interface Coin {
  id: number;
  x: number;
  y: number; // 添加Y轴起始位置随机
  delay: number;
  duration: number;
  rotation: number;
  scale: number; // 添加大小随机
  opacity: number; // 添加透明度随机
}

export const Falling3DCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const createCoins = useCallback(() => {
    // 根据设备性能和设置调整硬币数量
    const isMobile = window.innerWidth < 768;
    const isLowPerformance = isLowEndMobile();
    
    let coinCount = 12; // 增加桌面端金币数量
    let baseDuration = 2.5; // 减少基础动画时长，让金币下落更快
    
    if (isMobile) {
      coinCount = 6; // 移动端增加到6个金币
      baseDuration = 2;
    }
    
    if (isLowPerformance) {
      coinCount = 4; // 低端设备增加到4个金币
      baseDuration = 1.8;
    }
    
    // 创建多个硬币，增加随机性
    const coinArray: Coin[] = Array.from({ length: coinCount }, (_, i) => {
      // 随机起始位置（X轴）
      const x = Math.random() * 85 + 7.5; // 7.5-92.5% 位置，避免完全边缘
      
      // 随机起始位置（Y轴）- 减少范围，让金币更快开始下落
      const y = Math.random() * 100 - 50; // -50到50px，减少垂直随机性
      
      // 随机延迟 - 大幅减少延迟时间
      const delay = Math.random() * 0.3; // 0-0.3秒延迟，让金币更快开始
      
      // 随机动画时长 - 减少变化范围
      const durationVariation = Math.random() * 0.6 - 0.3; // -0.3到+0.3秒变化
      const duration = baseDuration + durationVariation;
      
      // 随机旋转角度
      const rotation = Math.random() * 720 - 360; // -360到+720度
      
      // 随机大小变化
      const scale = 0.8 + Math.random() * 0.4; // 0.8-1.2倍大小
      
      // 随机透明度
      const opacity = 0.6 + Math.random() * 0.4; // 0.6-1.0透明度
      
      return {
        id: i,
        x,
        y,
        delay,
        duration,
        rotation,
        scale,
        opacity,
      };
    });

    setCoins(coinArray);
  }, []);

  useEffect(() => {
    createCoins();
    
    // 添加窗口大小变化监听
    const handleResize = () => {
      createCoins();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [createCoins]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {coins.length > 0 ? (
        coins.map((coin) => (
          <div
            key={coin.id}
            className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 falling-coin"
            style={{
              left: `${coin.x}%`,
              top: `${coin.y}px`,
              animationDelay: `${coin.delay}s`,
              animationDuration: `${coin.duration}s`,
              opacity: coin.opacity,
            }}
          >
            {/* 3D金币效果 - 恢复旋转动画 */}
            <div className="relative w-full h-full coin-3d-simple">
              {/* 金币正面 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-lg transform-gpu coin-face coin-front">
                {/* 装饰边缘圆点 */}
                <div className="absolute inset-1 rounded-full border-2 border-yellow-600 border-dotted opacity-60"></div>
                
                {/* 乌贼图案 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 relative">
                    {/* 乌贼身体 */}
                    <div className="absolute top-1 sm:top-2 left-1/2 w-2 h-3 sm:w-3 sm:h-4 md:w-4 md:h-6 bg-yellow-700 rounded-full transform -translate-x-1/2"></div>
                    {/* 乌贼头部 */}
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-yellow-700 rounded-full transform -translate-x-1/2"></div>
                    {/* 触手 */}
                    <div className="absolute bottom-0 left-1/2 w-3 h-1 sm:w-4 sm:h-1.5 md:w-6 md:h-2 transform -translate-x-1/2">
                      <div className="flex justify-between">
                        <div className="w-0.5 h-1 sm:h-1.5 md:h-2 bg-yellow-700 rounded"></div>
                        <div className="w-0.5 h-1 sm:h-1.5 md:h-2 bg-yellow-700 rounded"></div>
                        <div className="w-0.5 h-1 sm:h-1.5 md:h-2 bg-yellow-700 rounded"></div>
                        <div className="w-0.5 h-1 sm:h-1.5 md:h-2 bg-yellow-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 几何符号 */}
                <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-0.5 sm:space-x-1">
                  {/* 三角形 */}
                  <div className="w-0 h-0 border-l-1 sm:border-l-2 border-r-1 sm:border-r-2 border-b-1 sm:border-b-2 border-transparent border-b-yellow-700"></div>
                  {/* 正方形 */}
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-700 rounded"></div>
                  {/* 圆形 */}
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-700 rounded-full"></div>
                </div>
              </div>

              {/* 金币背面 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 shadow-lg transform-gpu coin-face coin-back">
                <div className="absolute inset-1 rounded-full border-2 border-yellow-700 border-dotted opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-yellow-800 font-bold text-xs sm:text-sm md:text-base">₩</div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-sm">
          加载金币中...
        </div>
      )}
    </div>
  );
};