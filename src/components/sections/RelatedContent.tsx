import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { RelatedPageLink } from "@/config/internalLinks";

interface RelatedContentProps {
  heading: string;
  subtext?: string;
  items: RelatedPageLink[];
  variant?: "light" | "teal";
}

const RelatedContent = ({ heading, subtext, items, variant = "light" }: RelatedContentProps) => {
  if (!items || items.length === 0) return null;

  const isLight = variant === "light";
  const gridCols = items.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className={`py-12 px-6 md:px-12 ${isLight ? "bg-background-light" : "bg-gradient-deep-teal"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className={`text-2xl md:text-3xl font-heading font-bold mb-3 ${isLight ? "text-primary" : "text-white"}`}>
            {heading}
          </h2>
          {subtext && (
            <p className={`text-base max-w-2xl mx-auto ${isLight ? "text-muted-foreground" : "text-white/80"}`}>
              {subtext}
            </p>
          )}
        </div>
        <div className={`grid ${gridCols} gap-6`}>
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`group rounded-card-lg p-6 color-transition ${
                isLight
                  ? "bg-white border border-border hover:elevation-2"
                  : "bg-white/10 border border-white/20 hover:bg-white/15"
              }`}
            >
              <h3 className={`text-lg font-bold mb-2 group-hover:text-primary transition-colors ${
                isLight ? "text-foreground" : "text-white"
              }`}>
                {item.title}
              </h3>
              <p className={`text-sm mb-3 leading-relaxed ${
                isLight ? "text-muted-foreground" : "text-white/70"
              }`}>
                {item.description}
              </p>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                isLight ? "text-primary" : "text-white"
              } group-hover:gap-2 transition-all`}>
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
