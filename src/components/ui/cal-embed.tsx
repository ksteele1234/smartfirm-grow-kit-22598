import { useEffect, useRef } from "react";

interface CalEmbedProps {
  calLink: string;  // e.g. "katie-steele/30min"
  className?: string;
}

export function CalEmbed({ calLink, className = "" }: CalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Cal !== "undefined") {
        (window as any).Cal("inline", {
          elementOrSelector: containerRef.current,
          calLink,
          config: {
            layout: "month_view",
          },
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existing = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (existing) existing.remove();
    };
  }, [calLink]);

  return (
    <div
      ref={containerRef}
      className={`min-h-[600px] ${className}`}
      data-cal-link={calLink}
    />
  );
}
