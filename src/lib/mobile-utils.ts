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
