import { useEffect, useState } from 'react';

interface Coin {
  id: number;
  x: number;
  delay: number;
  duration: number;
  rotation: number;
}

export const Falling3DCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    // 根据屏幕大小调整硬币数量
    const isMobile = window.innerWidth < 768;
    const coinCount = isMobile ? 5 : 8;
    
    // 创建多个硬币
    const coinArray: Coin[] = Array.from({ length: coinCount }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10, // 10-90% 位置，避免边缘
      delay: Math.random() * 2, // 0-2秒延迟，缩短延迟
      duration: 4 + Math.random() * 2, // 4-6秒持续时间，加快速度
      rotation: Math.random() * 360, // 初始旋转角度
    }));

    setCoins(coinArray);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 falling-coin opacity-80"
          style={{
            left: `${coin.x}%`,
            animationDelay: `${coin.delay}s`,
            animationDuration: `${coin.duration}s`,
            transform: `rotate(${coin.rotation}deg)`,
          }}
        >
          {/* 3D硬币CSS效果 */}
          <div className="relative w-full h-full coin-3d">
            {/* 硬币正面 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-lg transform-gpu coin-face coin-front">
              {/* 装饰边缘圆点 */}
              <div className="absolute inset-1 rounded-full border-2 border-yellow-600 border-dotted opacity-60"></div>
              
              {/* 乌贼图案 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 relative">
                  {/* 乌贼身体 */}
                  <div className="absolute top-2 left-1/2 w-4 h-6 bg-yellow-700 rounded-full transform -translate-x-1/2"></div>
                  {/* 乌贼头部 */}
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-700 rounded-full transform -translate-x-1/2"></div>
                  {/* 触手 */}
                  <div className="absolute bottom-0 left-1/2 w-6 h-2 transform -translate-x-1/2">
                    <div className="flex justify-between">
                      <div className="w-0.5 h-2 bg-yellow-700 rounded"></div>
                      <div className="w-0.5 h-2 bg-yellow-700 rounded"></div>
                      <div className="w-0.5 h-2 bg-yellow-700 rounded"></div>
                      <div className="w-0.5 h-2 bg-yellow-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 几何符号 */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {/* 三角形 */}
                <div className="w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-yellow-700"></div>
                {/* 正方形 */}
                <div className="w-2 h-2 bg-yellow-700"></div>
                {/* 圆形 */}
                <div className="w-2 h-2 bg-yellow-700 rounded-full"></div>
              </div>
            </div>

            {/* 硬币背面 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 shadow-lg transform-gpu coin-face coin-back">
              <div className="absolute inset-1 rounded-full border-2 border-yellow-700 border-dotted opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-yellow-800 font-bold text-xs">₩</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};