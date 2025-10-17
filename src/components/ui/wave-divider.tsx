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
  // Down curve: wave goes down in the middle
  const downPath = "M0,50 Q360,80 720,50 T1440,50 L1440,100 L0,100 Z";
  
  // Up curve: wave goes up in the middle
  const upPath = "M0,50 Q360,20 720,50 T1440,50 L1440,0 L0,0 Z";
  
  const pathData = direction === "down" ? downPath : upPath;

  return (
    <div className={cn("w-full -mt-1 -mb-1 leading-[0]", className)} style={{ backgroundColor: useGradient ? (direction === "down" ? fromColor : toColor) : (direction === "down" ? fromColor : toColor) }}>
      <svg 
        className="block w-full h-[60px] md:h-[80px]"
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
