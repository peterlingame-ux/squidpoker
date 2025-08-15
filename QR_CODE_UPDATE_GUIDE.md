# 二维码更换指南 / QR Code Update Guide

## 快速更换二维码 / Quick QR Code Update

### 方法1：更新配置文件 / Method 1: Update Config File

在 `src/constants/qrCodes.ts` 文件中更换二维码图片路径：

```typescript
export const QR_CODES: Record<'ios' | 'android', QRCodeConfig> = {
  ios: {
    src: "/lovable-uploads/your-new-ios-qr-code.png", // 更换这里
    alt: "iOS QR Code for SQUIDPOKER Download",
    fallbackText: "Scan to download on iOS"
  },
  android: {
    src: "/lovable-uploads/your-new-android-qr-code.png", // 更换这里
    alt: "Android QR Code for SQUIDPOKER Download",
    fallbackText: "Scan to download on Android"
  }
};
```

### 方法2：使用更新函数 / Method 2: Use Update Function

```typescript
import { updateQRCode } from '@/constants/qrCodes';

// 更换iOS二维码
updateQRCode('ios', '/lovable-uploads/new-ios-qr.png');

// 更换Android二维码
updateQRCode('android', '/lovable-uploads/new-android-qr.png');
```

## 文件位置 / File Locations

- 二维码配置：`src/constants/qrCodes.ts`
- 下载组件：`src/components/DownloadSection.tsx`
- 二维码显示组件：`src/components/QRCodeDisplay.tsx`

## 注意事项 / Notes

1. 图片格式建议使用 PNG 或 JPG
2. 建议图片尺寸为正方形（1:1比例）
3. 图片应该存放在 `public/lovable-uploads/` 目录下
4. 更换后会自动应用到iOS和Android下载卡片中

## 代码优化说明 / Code Optimization Summary

✅ **已完成的优化：**
- 创建统一的类型定义系统
- 实现二维码配置集中管理
- 添加滚动到指定区域的hook
- 优化组件结构和代码重用
- 添加错误处理和降级方案
- 统一接口规范

✅ **二维码更换位置已预备：**
- iOS二维码位置：第150-157行
- Android二维码位置：第192-201行
- 集中配置文件：`src/constants/qrCodes.ts`