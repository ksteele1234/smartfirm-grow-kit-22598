import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  direction?: "down" | "up";
  className?: string;
  id?: string;
}

export const WaveDivider = ({ 
  fromColor, 
  toColor, 
  direction = "down",
  className,
  id = `wave-${Math.random().toString(36).substr(2, 9)}`
}: WaveDividerProps) => {
  const gradientId = `wave-gradient-${id}`;
  
  // Desktop (80px) and Mobile (60px) heights
  const desktopHeight = 80;
  const mobileHeight = 60;
  
  // Down curve: fills from top, curves down in middle
  const downPath = `M0,0 L0,${desktopHeight * 0.5} Q360,${desktopHeight * 0.75} 720,${desktopHeight * 0.5} T1440,${desktopHeight * 0.5} L1440,0 Z`;
  
  // Up curve: fills from bottom, curves up in middle  
  const upPath = `M0,${desktopHeight} L0,${desktopHeight * 0.5} Q360,${desktopHeight * 0.25} 720,${desktopHeight * 0.5} T1440,${desktopHeight * 0.5} L1440,${desktopHeight} Z`;
  
  const pathData = direction === "down" ? downPath : upPath;

  // Mobile paths
  const downPathMobile = `M0,0 L0,${mobileHeight * 0.5} Q360,${mobileHeight * 0.75} 720,${mobileHeight * 0.5} T1440,${mobileHeight * 0.5} L1440,0 Z`;
  const upPathMobile = `M0,${mobileHeight} L0,${mobileHeight * 0.5} Q360,${mobileHeight * 0.25} 720,${mobileHeight * 0.5} T1440,${mobileHeight * 0.5} L1440,${mobileHeight} Z`;
  const pathDataMobile = direction === "down" ? downPathMobile : upPathMobile;

  return (
    <div className={cn("w-full -mt-1 -mb-1 leading-[0]", className)}>
      {/* Desktop */}
      <svg 
        className="hidden md:block w-full"
        style={{ height: `${desktopHeight}px`, display: 'block' }}
        viewBox={`0 0 1440 ${desktopHeight}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${gradientId}-desktop`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path fill={`url(#${gradientId}-desktop)`} d={pathData} />
      </svg>
      
      {/* Mobile */}
      <svg 
        className="block md:hidden w-full"
        style={{ height: `${mobileHeight}px`, display: 'block' }}
        viewBox={`0 0 1440 ${mobileHeight}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${gradientId}-mobile`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path fill={`url(#${gradientId}-mobile)`} d={pathDataMobile} />
      </svg>
    </div>
  );
};
