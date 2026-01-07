import { Helmet } from 'react-helmet-async';

interface OpenGraphProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'service';
}

export const OpenGraphTags = ({ 
  title, 
  description, 
  image = 'https://smartfirm.io/og-default.jpg',
  url,
  type = 'website'
}: OpenGraphProps) => {
  return (
    <Helmet>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
