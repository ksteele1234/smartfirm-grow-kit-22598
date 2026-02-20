import { useParams } from "react-router-dom";
import { programmaticPages, programmaticPageIndex } from "@/data/programmaticSeoPages";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import NotFound from "@/pages/NotFound";

const ProgrammaticPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFound />;

  // Look up the page data
  const pageData = programmaticPages[slug];

  // Check if page exists and is published
  const pageMeta = programmaticPageIndex.find(p => p.slug === slug);

  if (!pageData || !pageMeta || !pageMeta.published) {
    return <NotFound />;
  }

  return <ServicePageTemplate data={pageData} />;
};

export default ProgrammaticPage;
