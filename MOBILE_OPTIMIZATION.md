# 移动端优化说明

## 已修复的问题

### 1. 移动端视口适配问题
- **问题**: `index.html` 中的 viewport meta 标签设置为固定宽度 `width=1200`
- **修复**: 改为响应式视口 `width=device-width, initial-scale=1.0, user-scalable=yes`
- **效果**: 移动端现在可以正确适配不同屏幕尺寸

### 2. 金币下落动画卡顿问题
- **问题**: CSS 动画同时使用复杂的 3D 变换，移动端性能不足
- **修复**: 
  - 简化动画，移除 `rotateX` 变换
  - 根据设备性能动态调整金币数量
  - 添加硬件加速 `transform: translateZ(0)`
  - 优化动画时长和延迟
- **效果**: 移动端动画流畅度显著提升

### 3. 移动端性能优化
- **新增功能**:
  - 设备性能检测 (`getDevicePerformance`)
  - 触摸设备检测 (`isTouchDevice`)
  - 网络状态检测 (`getNetworkInfo`)
  - 动画质量自适应 (`shouldReduceMotion`)

## 技术实现

### 移动端工具函数 (`src/lib/mobile-utils.ts`)
```typescript
// 检测设备性能等级
export const getDevicePerformance = (): 'low' | 'medium' | 'high'

// 检测是否为低端移动设备
export const isLowEndMobile = (): boolean

// 根据网络状态调整动画质量
export const shouldReduceMotion = (): boolean
```

### 响应式设计优化
- 使用 Tailwind CSS 的响应式前缀 (`sm:`, `md:`, `lg:`)
- 移动端优先的断点设计
- 触摸友好的按钮尺寸 (最小 44x44px)

### CSS 动画优化
```css
/* 硬件加速 */
.falling-coin {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* 移动端特定优化 */
@media (max-width: 768px) {
  .falling-coin {
    animation-duration: 3s !important;
  }
}
```

## 性能提升

### 金币动画性能
- **桌面端**: 8个金币，完整3D效果
- **移动端**: 3个金币，简化3D效果
- **低端设备**: 2个金币，基础动画
- **性能优先模式**: 1个金币或无动画

### 触摸体验优化
- 触摸友好的按钮尺寸
- 触摸滚动优化 (`-webkit-overflow-scrolling: touch`)
- 触摸手势支持
- 移动端视口高度修复

## 使用建议

### 开发时
1. 使用 `useIsMobile()` hook 检测移动端
2. 使用 `isLowEndMobile()` 检测低端设备
3. 使用 `shouldReduceMotion()` 控制动画质量

### 样式优化
1. 优先使用 Tailwind 响应式类
2. 添加触摸友好的交互元素
3. 使用 `touch-target` 类确保触摸区域足够大

### 性能监控
1. 监控动画帧率
2. 检测设备性能变化
3. 根据网络状态调整内容质量

## 测试建议

### 移动端测试
- 在不同尺寸的移动设备上测试
- 测试横屏和竖屏模式
- 测试触摸手势和滚动
- 测试低端设备的性能表现

### 性能测试
- 使用 Chrome DevTools 的 Performance 面板
- 监控动画帧率 (FPS)
- 测试内存使用情况
- 测试网络延迟下的表现

## 未来优化方向

1. **Web Workers**: 将复杂计算移到后台线程
2. **Intersection Observer**: 优化滚动性能
3. **Service Worker**: 离线支持和缓存优化
4. **WebAssembly**: 性能关键部分的优化
5. **Progressive Web App**: 原生应用体验
