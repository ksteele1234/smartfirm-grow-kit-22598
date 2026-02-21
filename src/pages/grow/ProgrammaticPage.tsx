import { useParams } from "react-router-dom";
import { programmaticPages, programmaticPageIndex } from "@/data/programmaticSeoPages";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import NotFound from "@/pages/NotFound";
import type { ServicePageData, SolutionPageData } from "@/types/cms";

const ProgrammaticPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFound />;

  const pageData = programmaticPages[slug];
  const pageMeta = programmaticPageIndex.find(p => p.slug === slug);

  if (!pageData || !pageMeta || !pageMeta.published) {
    return <NotFound />;
  }

  if (pageData.templateType === 'solution') {
    return <SolutionPageTemplate data={pageData as SolutionPageData} />;
  }

  return <ServicePageTemplate data={pageData as ServicePageData} />;
};

export default ProgrammaticPage;
