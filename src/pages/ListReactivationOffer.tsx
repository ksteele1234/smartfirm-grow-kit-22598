import { FunnelHeader } from "@/components/navigation/FunnelHeader";
import { FunnelFooter } from "@/components/sections/FunnelFooter";
import { HiddenRevenueCalculator } from "@/components/calculator/HiddenRevenueCalculator";
import { CheckCircle, Gift, Shield, Users, Calendar, FileText, Mail, Phone, Target } from "lucide-react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const ListReactivationOffer = () => {
  const coreDeliverables = [
    {
      title: "Done-For-You Data Mining + Cleaning",
      value: "$2,500 value",
    },
    {
      title: "Human-Sounding 9-Word Email Campaign",
      value: "$1,500 value",
    },
    {
      title: "Booking Concierge Handling",
      value: "$1,000 value",
    },
  ];

  const bonuses = [
    {
      icon: Users,
      title: "Dormant Client Segmentation",
      description: "Advisory-ideal vs tax-only vs referral sources.",
      value: "$1,500 value",
    },
    {
      icon: Mail,
      title: "Follow-Up Script Pack (3 emails)",
      description: "Plain text, partner-voice, ready to send.",
      value: "$900 value",
    },
    {
      icon: FileText,
      title: "Appointment Intake Form Template",
      description: "Keeps calls clean, high-status.",
      value: "$600 value",
    },
    {
      icon: Phone,
      title: "No-Show Rescue Sequence",
      description: "Human reminders that preserve trust.",
      value: "$500 value",
    },
    {
      icon: Target,
      title: "Advisory Offer Positioning One-Sheet",
      description: "Helps you close reactivated clients into higher fees.",
      value: "$1,200 value",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        pageType="service"
        serviceName="Hidden Money Reactivation Offer"
        audience="accounting firms"
        title="Hidden Money Reactivation - Fill Your Calendar | SmartFirm"
        description="We'll fill your calendar with 5 qualified tax planning appointments from your dead files. No ads. No cold outreach. Done-for-you reactivation campaign."
        canonicalUrl="https://smartfirm.io/list-reactivation-offer"
        noindex={true}
      />
      
      <FunnelHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We Will Fill Your Calendar With 5 Qualified Tax Planning Appointments From Your Dead Files
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              You don't need ads. You don't need cold outreach. You already paid to acquire these clients once. <span className="font-semibold text-secondary">We bring them back.</span>
            </motion.p>

            <HiddenRevenueCalculator />
          </div>
        </section>

        {/* What This Is */}
        <section id="what-this-is" className="py-16 px-6 bg-background-subtle">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What This Is
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                A done-for-you reactivation campaign.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We clean your dormant client list, send a human 9-word email from your partner domain, and handle replies until your calendar is full.
              </p>
              <p className="text-xl font-semibold text-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                No bots. No auto-responders. No cheap tricks.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Deliverables */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-primary text-center mb-12"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Core Deliverables
            </motion.h2>
            
            <div className="space-y-4 mb-8">
              {coreDeliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm border border-slate-light"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item.title}
                    </span>
                  </div>
                  <span className="text-secondary font-semibold whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Core stack value: <span className="text-accent-gold">$5,000</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="py-16 px-6 bg-background-subtle">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                <Gift className="w-5 h-5" />
                <span className="font-semibold">FREE BONUSES</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                "But Wait, There's More"
              </h2>
              <p className="text-lg text-muted-foreground mt-2">We also include:</p>
            </motion.div>
            
            <div className="space-y-4">
              {bonuses.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-light"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {item.description}
                          </p>
                        </div>
                        <span className="text-secondary font-semibold whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Bonus value: <span className="text-accent-gold">$4,700</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-light text-center"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Total Value vs Price
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl text-foreground">
                  Total value: <span className="font-bold text-accent-gold">$9,700</span>
                </p>
                <div className="border-t border-slate-light pt-4">
                  <p className="text-lg text-muted-foreground mb-2">Your Investment:</p>
                  <p className="text-2xl font-bold text-primary mb-2">
                    Setup: <span className="text-accent">$500</span>
                  </p>
                  <p className="text-lg text-foreground">
                    Then just <span className="font-bold text-accent">$100</span> per qualified appointment we deliver.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-6 bg-background-subtle">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 rounded-2xl p-8 md:p-12 border-2 border-primary/20 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our Guarantee
              </h2>
              <p className="text-xl text-foreground leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="font-bold">5 qualified appointments in 14 days</span> or we refund your setup fee.
              </p>
              <p className="text-lg text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We segment your list and only target clients with real tax planning needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Qualification */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Do You Qualify?
              </h2>
              <p className="text-lg text-foreground mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                You might be a fit if:
              </p>
              <ul className="text-lg text-foreground leading-relaxed mb-6 space-y-2 inline-block text-left" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>You have 100+ past clients in your system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>You haven't emailed them in a while</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>You have calendar availability in the next 30 days</span>
                </li>
              </ul>
              <p className="text-lg text-secondary font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Fill out the form and we'll confirm within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="book-call" className="py-20 px-6 bg-gradient-mesh-professional">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to Reactivate Your Dead Files?
              </h2>
              <p className="text-xl text-white/90 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                You've seen the math. You've got the script. Let us run it for you — 5 appointments in 14 days, guaranteed.
              </p>
              <a 
                id="reactivation-bottom-book-call-btn"
                href="https://api.leadconnectorhq.com/widget/bookings/15-min-reactivation-fit-call?utm_source=website&utm_medium=landing-page&utm_campaign=offer5-reactivation&utm_content=bottom-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Book Your Reactivation Call
              </a>
              <p className="text-sm text-white/70 mt-4">
                $500 setup + $100 per appointment delivered
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      
      <FunnelFooter />
    </div>
  );
};

export default ListReactivationOffer;
