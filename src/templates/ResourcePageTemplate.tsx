import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ResourcePageData } from "@/types/cms";
import { Calendar, Clock, Download, ArrowRight, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";

interface ResourcePageTemplateProps {
  data: ResourcePageData;
}

const ResourcePageTemplate = ({ data }: ResourcePageTemplateProps) => {
  const isArticle = true;
  const publishDate = data.publishDate || new Date().toISOString();
  const authorName = data.author?.name;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        pageType={isArticle ? 'blog' : 'default'}
        topic={isArticle ? data.heroTitle : undefined}
        title={data.title}
        description={data.heroSubtitle || data.metaDescription}
        datePublished={publishDate}
        dateModified={publishDate}
        author={authorName}
      />
      <Header />
      <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/20 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            {data.category}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {data.heroTitle}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {data.heroSubtitle}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-sm text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(data.publishDate).toLocaleDateString()}</span>
            </div>
            {data.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{data.readTime} min read</span>
              </div>
            )}
            {data.author && (
              <div className="flex items-center gap-2">
                {data.author.image && (
                  <img 
                    src={data.author.image} 
                    alt={data.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                )}
                <span>By {data.author.name}</span>
              </div>
            )}
          </div>
          
          {data.downloadLink && (
            <div className="mt-8">
              <Button size="lg" className="group" asChild>
                <a href={data.downloadLink}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resource
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: data.content }}
              className="text-muted-foreground leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* Author Bio Section */}
      {data.author && data.author.bio && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {data.author.image && (
                    <img 
                      src={data.author.image} 
                      alt={data.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-xl">About {data.author.name}</h3>
                    <p className="text-muted-foreground font-normal">Author</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{data.author.bio}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Related Resources Section */}
      {data.relatedResources && data.relatedResources.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Related Resources
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
              {data.relatedResources.map((resource, index) => (
                <Card key={index} className="hover:elevation-3 transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 line-clamp-3">
                      {resource.excerpt}
                    </CardDescription>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.link}>Read More</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get More Resources Like This
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our newsletter for the latest marketing insights for accounting firms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View All Resources
            </Button>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcePageTemplate;
