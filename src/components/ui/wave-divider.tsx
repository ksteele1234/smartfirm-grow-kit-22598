import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  direction?: "down" | "up";
  className?: string;
  id?: string;
  useGradient?: boolean;
}

export const WaveDivider = ({ 
  fromColor, 
  toColor, 
  direction = "down",
  className,
  id = `wave-${Math.random().toString(36).substr(2, 9)}`,
  useGradient = false
}: WaveDividerProps) => {
   // Down curve: Single smooth wave
   const downPath = "M0,0 Q720,60 1440,0 L1440,100 L0,100 Z";
   
   // Up curve: Single smooth wave  
   const upPath = "M0,100 Q720,40 1440,100 L1440,0 L0,0 Z";
  
  const pathData = direction === "down" ? downPath : upPath;

  return (
    <div className={cn("w-full", className)} style={{ backgroundColor: useGradient ? 'transparent' : (direction === "down" ? fromColor : toColor), marginTop: '-1px', marginBottom: '-1px', lineHeight: 0, overflow: 'visible' }}>
      <svg 
        className="block w-full h-[60px] md:h-[80px]"
        style={{ display: 'block', minWidth: '100%' }}
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
