import { useIsMobile } from '@/hooks/use-mobile';

/**
 * 移动端优化的工具函数
 */

/**
 * 根据设备类型返回响应式的类名
 */
export const getMobileClasses = (mobileClasses: string, desktopClasses: string): string => {
  return `${mobileClasses} ${desktopClasses}`;
};

/**
 * 移动端优化的间距类名
 */
export const mobileSpacing = {
  padding: {
    small: 'px-3 py-2',
    medium: 'px-4 py-3',
    large: 'px-6 py-4',
    xlarge: 'px-8 py-6'
  },
  margin: {
    small: 'my-2',
    medium: 'my-4',
    large: 'my-6',
    xlarge: 'my-8'
  },
  gap: {
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6',
    xlarge: 'gap-8'
  }
};

/**
 * 移动端优化的字体大小类名
 */
export const mobileTextSizes = {
  xs: 'text-xs sm:text-sm',
  sm: 'text-sm sm:text-base',
  base: 'text-base sm:text-lg',
  lg: 'text-lg sm:text-xl',
  xl: 'text-xl sm:text-2xl',
  '2xl': 'text-2xl sm:text-3xl',
  '3xl': 'text-3xl sm:text-4xl',
  '4xl': 'text-4xl sm:text-5xl'
};

/**
 * 移动端优化的网格布局类名
 */
export const mobileGridLayouts = {
  single: 'grid-cols-1',
  double: 'grid-cols-1 sm:grid-cols-2',
  triple: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  quadruple: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
};

/**
 * 移动端优化的组件尺寸
 */
export const mobileComponentSizes = {
  button: {
    small: 'px-3 py-2 text-sm min-h-[36px]',
    medium: 'px-4 py-2 text-base min-h-[40px]',
    large: 'px-6 py-3 text-lg min-h-[44px]'
  },
  icon: {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
    xlarge: 'w-8 h-8'
  },
  card: {
    padding: 'p-4 sm:p-6',
    margin: 'mb-4 sm:mb-6'
  }
};

/**
 * 移动端优化的动画类名
 */
export const mobileAnimations = {
  fadeIn: 'animate-fade-in',
  scaleIn: 'animate-scale-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down'
};

/**
 * 移动端优化的响应式断点
 */
export const mobileBreakpoints = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl'
};

/**
 * 移动端优化的Hook，返回响应式的类名和配置
 */
export const useMobileOptimization = () => {
  const isMobile = useIsMobile();
  
  return {
    isMobile,
    spacing: mobileSpacing,
    textSizes: mobileTextSizes,
    gridLayouts: mobileGridLayouts,
    componentSizes: mobileComponentSizes,
    animations: mobileAnimations,
    breakpoints: mobileBreakpoints,
    
    // 便捷方法
    getResponsiveClass: (mobileClass: string, desktopClass: string) => 
      isMobile ? mobileClass : desktopClass,
    
    getResponsiveSize: (mobileSize: string, desktopSize: string) => 
      isMobile ? mobileSize : desktopSize,
    
    getResponsiveSpacing: (size: keyof typeof mobileSpacing.padding) => 
      mobileSpacing.padding[size],
    
    getResponsiveText: (size: keyof typeof mobileTextSizes) => 
      mobileTextSizes[size],
    
    getResponsiveGrid: (layout: keyof typeof mobileGridLayouts) => 
      mobileGridLayouts[layout]
  };
};

/**
 * 移动端工具函数
 * 提供触摸手势检测、性能优化等功能
 */

// 检测是否为触摸设备
export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// 检测设备性能等级
export const getDevicePerformance = (): 'low' | 'medium' | 'high' => {
  const cores = navigator.hardwareConcurrency || 1;
  const memory = (navigator as any).deviceMemory || 1;
  
  if (cores < 4 || memory < 4) return 'low';
  if (cores < 8 || memory < 8) return 'medium';
  return 'high';
};

// 检测是否为低端移动设备
export const isLowEndMobile = (): boolean => {
  const isMobile = window.innerWidth < 768;
  const performance = getDevicePerformance();
  return isMobile && performance === 'low';
};

// 优化触摸事件
export const optimizeTouchEvents = (element: HTMLElement): void => {
  // 添加触摸优化属性
  element.style.touchAction = 'manipulation';
  element.style.webkitTouchCallout = 'none';
  element.style.webkitUserSelect = 'none';
  element.style.userSelect = 'none';
};

// 防抖函数，用于优化频繁触发的事件
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// 节流函数，用于限制函数调用频率
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// 检测网络状态
export const getNetworkInfo = (): { effectiveType: string; downlink: number } => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (connection) {
    return {
      effectiveType: connection.effectiveType || 'unknown',
      downlink: connection.downlink || 0
    };
  }
  
  return { effectiveType: 'unknown', downlink: 0 };
};

// 根据网络状态调整动画质量
export const shouldReduceMotion = (): boolean => {
  const networkInfo = getNetworkInfo();
  const isLowPerformance = getDevicePerformance() === 'low';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // 只在网络很差或用户明确要求减少动画时才返回true
  return networkInfo.effectiveType === 'slow-2g' || prefersReducedMotion;
};

// 移动端视口高度修复（解决移动端浏览器地址栏问题）
export const getMobileViewportHeight = (): number => {
  if (typeof window !== 'undefined') {
    return window.innerHeight;
  }
  return 100;
};

// 检测设备方向变化
export const onOrientationChange = (callback: (orientation: 'portrait' | 'landscape') => void): (() => void) => {
  const handleOrientationChange = () => {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    callback(orientation);
  };
  
  window.addEventListener('orientationchange', handleOrientationChange);
  window.addEventListener('resize', handleOrientationChange);
  
  // 初始调用
  handleOrientationChange();
  
  return () => {
    window.removeEventListener('orientationchange', handleOrientationChange);
    window.removeEventListener('resize', handleOrientationChange);
  };
};
