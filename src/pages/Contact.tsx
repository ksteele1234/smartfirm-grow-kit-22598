import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2, Clock, Calendar } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().max(20, { message: "Phone number must be less than 20 characters" }).optional(),
  firmName: z.string().trim().min(1, { message: "Firm name is required" }).max(100, { message: "Firm name must be less than 100 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      firmName: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Get In Touch: Let's Grow Your Firm Together
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have questions? Ready to start? Reach out to the SmartFirm team today.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="firmName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Firm Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your firm name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How Can We Help You? *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your goals and challenges..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-sm text-text-light text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">Other Ways to Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary">Phone</h3>
                      <p className="text-text-primary font-semibold">(555) 123-4567</p>
                      <p className="text-text-secondary text-sm">Monday - Friday, 8AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary">Email</h3>
                      <p className="text-text-primary">hello@smartfirm.io</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageCircle className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary">Live Chat</h3>
                      <p className="text-text-secondary text-sm">Available Monday - Friday, 9AM - 5PM EST</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Start Chat
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary">Address</h3>
                      <p className="text-text-primary">123 Business Center Drive</p>
                      <p className="text-text-primary">Austin, TX 78701</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-card bg-accent">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-teal" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary">Quick Response</h3>
                      <p className="text-text-secondary">We typically respond within 2 hours during business hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Quick Answers
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How quickly can we get started with SmartFirm services?
                </AccordionTrigger>
                <AccordionContent>
                  Most clients can begin seeing results within 2-4 weeks. We start with a comprehensive strategy session to understand your goals, then implement our proven systems tailored to your firm's specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What's included in your initial consultation?
                </AccordionTrigger>
                <AccordionContent>
                  Our free strategy call includes a complete assessment of your current marketing efforts, identification of growth opportunities, and a customized roadmap for scaling your firm. No obligations - just valuable insights you can use immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do you work with firms of all sizes?
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in helping small to medium-sized accounting firms scale from $400K to $1M+ in revenue. Whether you're a solo practitioner or have a team of 20+, we have solutions that fit your growth stage and budget.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal to-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready for a Deeper Dive?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free strategy call to discuss your specific needs and growth goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>No sales pressure</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>Actionable insights</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>Customized strategy</span>
              </div>
            </div>

            <Button variant="hero-secondary" size="hero" className="mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Strategy Call
            </Button>
            
            <p className="text-white/80 text-sm">
              Most strategy calls result in immediate actionable steps you can implement today.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;