import { cn } from "@/lib/utils";

// Geometric divider component
export const GeometricDivider = ({ 
  variant = "dots", 
  className = "" 
}: { 
  variant?: "dots" | "lines" | "wave" | "zigzag";
  className?: string;
}) => {
  const variants = {
    dots: (
      <div className={cn("flex justify-center items-center space-x-2 py-8", className)}>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-teal rounded-full"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
    ),
    lines: (
      <div className={cn("flex items-center justify-center py-8", className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30 max-w-24"></div>
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-4">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/30 max-w-24"></div>
      </div>
    ),
    wave: (
      <div className={cn("py-8 overflow-hidden", className)}>
        <svg viewBox="0 0 1200 120" className="w-full h-6">
          <path d="M0,60 Q300,10 600,60 T1200,60" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30"/>
        </svg>
      </div>
    ),
    zigzag: (
      <div className={cn("py-8 overflow-hidden", className)}>
        <svg viewBox="0 0 1200 40" className="w-full h-6">
          <path d="M0,20 L50,5 L100,20 L150,5 L200,20 L250,5 L300,20 L350,5 L400,20 L450,5 L500,20 L550,5 L600,20 L650,5 L700,20 L750,5 L800,20 L850,5 L900,20 L950,5 L1000,20 L1050,5 L1100,20 L1150,5 L1200,20" 
                stroke="currentColor" strokeWidth="2" fill="none" className="text-teal/40"/>
        </svg>
      </div>
    )
  };

  return variants[variant];
};

// Floating geometric shapes
export const FloatingShapes = ({ 
  className = "",
  variant = "circles"
}: {
  className?: string;
  variant?: "circles" | "squares" | "triangles";
}) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {variant === "circles" && (
        <>
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-teal/10 rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-16 h-16 bg-secondary/5 rounded-full"></div>
        </>
      )}
      {variant === "squares" && (
        <>
          <div className="absolute top-16 right-16 w-8 h-8 bg-primary/10 rotate-45"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 bg-teal/10 rotate-12"></div>
        </>
      )}
      {variant === "triangles" && (
        <>
          <div className="absolute top-20 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-primary/10"></div>
          <div className="absolute bottom-24 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-teal/10 rotate-180"></div>
        </>
      )}
    </div>
  );
};

// Accent line component
export const AccentLine = ({ 
  orientation = "horizontal",
  className = "",
  variant = "gradient"
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
  variant?: "gradient" | "solid" | "dashed";
}) => {
  if (orientation === "vertical") {
    return (
      <div className={cn("w-px h-full", className)}>
        {variant === "gradient" && <div className="w-full h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"></div>}
        {variant === "solid" && <div className="w-full h-full bg-primary/20"></div>}
        {variant === "dashed" && <div className="w-full h-full border-l-2 border-dashed border-primary/20"></div>}
      </div>
    );
  }

  return (
    <div className={cn("h-px w-full", className)}>
      {variant === "gradient" && <div className="w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"></div>}
      {variant === "solid" && <div className="w-full h-full bg-primary/20"></div>}
      {variant === "dashed" && <div className="w-full h-full border-t-2 border-dashed border-primary/20"></div>}
    </div>
  );
};

// Section background patterns
export const BackgroundPattern = ({ 
  pattern = "grid",
  className = ""
}: {
  pattern?: "grid" | "dots" | "diagonal";
  className?: string;
}) => {
  const patterns = {
    grid: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23647FBC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    dots: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23647FBC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    diagonal: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23647FBC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    }
  };

  return (
    <div 
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={patterns[pattern]}
    />
  );
};