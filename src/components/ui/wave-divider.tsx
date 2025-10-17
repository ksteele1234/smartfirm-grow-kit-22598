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
   // Down curve: More pronounced waves across full width
   const downPath = "M0,0 C240,40 480,0 720,30 C960,60 1200,20 1440,40 L1440,100 L0,100 Z";
   
   // Up curve: More pronounced waves across full width  
   const upPath = "M0,100 C240,60 480,100 720,70 C960,40 1200,80 1440,60 L1440,0 L0,0 Z";
  
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
