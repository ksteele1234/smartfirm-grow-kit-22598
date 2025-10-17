import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  direction?: "down" | "up";
  className?: string;
  id?: string;
  useGradient?: boolean;
  height?: number; // px height of the SVG
  amplitude?: number; // 0-100 in viewBox units
  overlap?: number; // px overlap to remove seams
}

export const WaveDivider = ({ 
  fromColor, 
  toColor, 
  direction = "down",
  className,
  id = `wave-${Math.random().toString(36).substr(2, 9)}`,
  useGradient = false,
  height = 80,
  amplitude = 32,
  overlap = 2
}: WaveDividerProps) => {
  // Down wave: Creates smooth S-curve (valley then rise)
  const downPath = `M0,0 Q360,${amplitude} 720,0 T1440,0 L1440,100 L0,100 Z`;
  
  // Up wave: Creates smooth S-curve (peak then valley)  
  const upPath = `M0,100 Q360,${100 - amplitude} 720,100 T1440,100 L1440,0 L0,0 Z`;
  
  const pathData = direction === "down" ? downPath : upPath;

  return (
    <div className={cn("w-full", className)} style={{ backgroundColor: useGradient ? 'transparent' : (direction === "down" ? fromColor : toColor), marginTop: `-${overlap}px`, marginBottom: `-${overlap}px`, lineHeight: 0, overflow: 'visible' }}>
      <svg 
        className="block w-full"
        style={{ display: 'block', minWidth: '100%', height: `${height}px` }}
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {useGradient && (
          <defs>
            <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={direction === "down" ? fromColor : toColor} />
              <stop offset="100%" stopColor={direction === "down" ? toColor : fromColor} />
            </linearGradient>
          </defs>
        )}
        <path fill={useGradient ? `url(#gradient-${id})` : (direction === "down" ? toColor : fromColor)} d={pathData} />
      </svg>
    </div>
  );
};
