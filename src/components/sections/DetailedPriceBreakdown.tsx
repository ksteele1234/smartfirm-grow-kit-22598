const DetailedPriceBreakdown = () => {
  return (
    <section className="py-16 md:py-section bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Detailed Price Comparison Breakdown
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-lg">
            <thead>
              <tr>
                <th className="bg-[#0F2942] text-white p-4 text-left font-bold text-xl uppercase tracking-wide" style={{ width: '45%' }}>
                  Service
                </th>
                <th className="bg-[#0F2942] text-white p-4 text-left font-bold text-xl uppercase tracking-wide" style={{ width: '27.5%' }}>
                  Competitor
                </th>
                <th className="bg-[#0F2942] text-white p-4 text-left font-bold text-xl uppercase tracking-wide" style={{ width: '27.5%' }}>
                  SmartFirm
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ONE-TIME SERVICES */}
              <tr className="bg-primary/10">
                <td colSpan={3} className="font-bold text-[#0F2942] text-lg p-3 px-6">
                  ONE-TIME SERVICES
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Marketing Roadmap
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  $3,500+
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Complex Website
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  $15K - $30K
                </td>
                <td className="p-3 px-6 text-primary font-bold border-b border-gray-200">
                  $14,500
                </td>
              </tr>
              
              {/* MONTHLY RECURRING SERVICES */}
              <tr className="bg-primary/10">
                <td colSpan={3} className="font-bold text-[#0F2942] text-lg p-3 px-6">
                  MONTHLY RECURRING SERVICES
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  CRM w/ Client Portal
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  $395/month
                </td>
                <td className="p-3 px-6 text-primary font-bold border-b border-gray-200">
                  $1,200/mo
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Website Hosting & Support
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  $225 - $400/month
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  SEO - Niche or Local
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  $800 - $2.5K/month
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Google Business Profile Optimization
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  Premium pricing
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Yext Business Listing Management (200+ sites)
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  Premium pricing
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Automated Lead Follow-Up System
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  Premium pricing
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Client Communication Workflows
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  Premium pricing
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Review Generation System
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  Premium pricing
                </td>
                <td className="p-3 px-6 text-primary font-semibold text-lg border-b border-gray-200">
                  Included
                </td>
              </tr>
              
              {/* A LA CARTE SERVICES */}
              <tr className="bg-primary/10">
                <td colSpan={3} className="font-bold text-[#0F2942] text-lg p-3 px-6">
                  A LA CARTE SERVICES
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Google/Meta/LinkedIn Ads Management
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  $800/month + ad spend
                </td>
                <td className="p-3 px-6 text-primary font-bold border-b border-gray-200">
                  $500/month + ad spend
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 px-6 font-semibold text-[#0F2942] border-b border-gray-200">
                  Social Media Content Plan & Management (60-day rotation)
                </td>
                <td className="p-3 px-6 text-secondary font-semibold border-b border-gray-200">
                  Monthly recurring
                </td>
                <td className="p-3 px-6 text-primary font-bold border-b border-gray-200">
                  $2,000 one-time
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DetailedPriceBreakdown;
