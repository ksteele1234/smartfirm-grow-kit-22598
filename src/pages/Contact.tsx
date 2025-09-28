import { useEffect } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Load the form script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Contact SmartFirm
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your accounting firm's marketing? Get in touch with our team of experts who understand the unique challenges of accounting practices.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  Whether you're ready to get started or just have questions about our services, we're here to help. Our team specializes in marketing solutions designed specifically for accounting firms.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Phone</h3>
                        <p className="text-text-secondary">(541) 658-3789</p>
                        <p className="text-sm text-text-light">Monday - Friday: 9 AM - 6 PM PST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Email</h3>
                        <p className="text-text-secondary">hello@smartfirm.io</p>
                        <p className="text-sm text-text-light">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Location</h3>
                        <p className="text-text-secondary">Eugene, OR</p>
                        <p className="text-sm text-text-light">Serving accounting firms nationwide</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Business Hours</h3>
                        <div className="text-text-secondary">
                          <div>Monday - Friday: 9 AM - 6 PM</div>
                          <div>Saturday - Sunday: Closed</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[600px]">
                    <iframe  
                      src="https://api.leadconnectorhq.com/widget/form/R9iCUNna996pH7StYk0b"  
                      style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '600px'}}
                      id="inline-R9iCUNna996pH7StYk0b"   
                      data-layout="{'id':'INLINE'}"  
                      data-trigger-type="alwaysShow"  
                      data-trigger-value=""  
                      data-activation-type="alwaysActivated"  
                      data-activation-value=""  
                      data-deactivation-type="neverDeactivate"  
                      data-deactivation-value=""  
                      data-form-name="Lovable Contact Us"  
                      data-height="879"  
                      data-layout-iframe-id="inline-R9iCUNna996pH7StYk0b"  
                      data-form-id="R9iCUNna996pH7StYk0b"  
                      title="Lovable Contact Us"  
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;