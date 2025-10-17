import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  direction?: "down" | "up";
  className?: string;
}

export const WaveDivider = ({ 
  fromColor, 
  toColor, 
  direction = "down",
  className
}: WaveDividerProps) => {
  
  // Simple, smooth wave that WORKS
  const downPath = "M0 0 Q 360 40 720 20 T 1440 0 L 1440 100 L 0 100 Z";
  const upPath = "M0 100 Q 360 60 720 80 T 1440 100 L 1440 0 L 0 0 Z";
  
  const pathData = direction === "down" ? downPath : upPath;
  const fillColor = direction === "down" ? toColor : fromColor;
  const bgColor = direction === "down" ? fromColor : toColor;
  
  return (
    <div 
      className={cn("w-full relative", className)}
      style={{ 
        backgroundColor: bgColor,
        lineHeight: 0,
        marginTop: 0,
        marginBottom: 0
      }}
    >
      <svg 
        className="block w-full"
        style={{ 
          display: 'block',
          height: '80px',
          width: '100%'
        }}
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill={fillColor}
          d={pathData}
        />
      </svg>
    </div>
  );
};
