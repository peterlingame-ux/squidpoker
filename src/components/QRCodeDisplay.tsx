import { QRCodeConfig } from '@/types/common';

interface QRCodeDisplayProps {
  qrCode: QRCodeConfig;
  platform: 'ios' | 'android';
  className?: string;
}

export const QRCodeDisplay = ({ qrCode, platform, className = "" }: QRCodeDisplayProps) => {
  return (
    <div className={`bg-white rounded-3xl p-8 shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-slate-200 ${className}`}>
      <div className="aspect-square relative">
        <img 
          src={qrCode.src} 
          alt={qrCode.alt}
          className="w-full h-full object-contain" 
          onError={(e) => {
            // Fallback handling if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && qrCode.fallbackText) {
              parent.innerHTML = `
                <div class="flex items-center justify-center h-full text-slate-600 text-center">
                  <div>
                    <div class="text-4xl mb-2">📱</div>
                    <div class="text-sm">${qrCode.fallbackText}</div>
                  </div>
                </div>
              `;
            }
          }}
        />
      </div>
    </div>
  );
};