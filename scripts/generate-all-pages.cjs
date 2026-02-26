const fs = require('fs');
const path = require('path');

// Read the page data
const pagesDataPath = path.join(__dirname, '../../New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/data/programmatic-pages.json');
const pagesData = JSON.parse(fs.readFileSync(pagesDataPath, 'utf8'));

// Output directory for generated pages
const outputDir = path.join(__dirname, '../generated-pages');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper function to get category-specific content variations
function getAudienceVariations(audience) {
  const variations = {
    'CPAs': {
      profession: 'CPA',
      professionPlural: 'CPAs',
      workType: 'tax compliance work and advisory services',
      busyTime: 'busy season',
      expertise: 'accounting and tax expertise'
    },
    'accountants': {
      profession: 'accountant',
      professionPlural: 'accountants',
      workType: 'client work and financial reporting',
      busyTime: 'month end close and busy season',
      expertise: 'accounting expertise'
    },
    'tax firms': {
      profession: 'tax firm',
      professionPlural: 'tax firms',
      workType: 'tax preparation and advisory work',
      busyTime: 'tax season',
      expertise: 'tax expertise'
    },
    'bookkeepers': {
      profession: 'bookkeeper',
      professionPlural: 'bookkeepers',
      workType: 'client bookkeeping and financial management',
      busyTime: 'month end close',
      expertise: 'bookkeeping expertise'
    },
    'accounting firms': {
      profession: 'accounting firm',
      professionPlural: 'accounting firms',
      workType: 'client accounting work',
      busyTime: 'busy season',
      expertise: 'accounting expertise'
    },
    'tax preparers': {
      profession: 'tax preparer',
      professionPlural: 'tax preparers',
      workType: 'tax preparation',
      busyTime: 'tax season',
      expertise: 'tax preparation expertise'
    }
  };

  return variations[audience] || variations['CPAs'];
}

// Template for Technical Services pages (Category A)
function generateTechnicalServicesPage(page) {
  const audience = getAudienceVariations(page.targetAudience);
  const serviceType = page.subcategory.replace(/-/g, ' ');

  return `# ${page.h1}

Done for you ${serviceType} built specifically for ${audience.professionPlural}. Reclaim 10 to 15 hours per week and focus on billable work while we handle the implementation.

[Book a Free Call]

---

## The Challenge

As a ${audience.profession}, you know you need streamlined ${serviceType} to scale your practice. But between client work, compliance deadlines, and ${audience.busyTime}, you simply do not have time to research tools, configure systems, or manage ongoing execution.

Manual processes are costing you hours each week. Tasks fall through the cracks. Client communication happens inconsistently. Follow up gets delayed. Meanwhile, DIY automation platforms sit partially configured because implementation takes too much time.

Every hour spent on administrative tasks is an hour not spent on billable client work or business development.

---

## The SmartFirm Solution

We build and manage your ${serviceType} from start to finish. Our done for you approach means we handle the strategy, implementation, and ongoing optimization based on your specific practice needs and technology environment.

Your system is customized for your firm. Depending on your current tools and processes, we design a solution that fits your situation. We work with what you already have and fill the gaps where automation will deliver the most value.

The scope and features vary based on your current technology stack, processes, and specific goals. We start with a discovery process to understand your needs, then design a solution that works for your practice. No long term contracts because we earn your business by delivering results.

---

## What's Typically Included

Solutions are customized to each firm, but commonly include:

- Discovery and workflow analysis
- Custom automation design tailored to your practice
- Integration with your existing software and tools
- Automated workflow implementation
- Implementation and testing
- Training for your team
- Ongoing support and optimization
- No long term contracts

---

## What Firms Experience

Firms that implement automation typically see:

**Significant time savings** on administrative tasks
**More consistent execution** of key processes
**Improved client experience** with faster response times
**More time for billable work** instead of manual tasks

---

## Ready to Scale Your Practice?

Book a free call to see how SmartFirm can systemize your operations and free up your time for high value client work.

[Book Your Free Call]

---

## Common Questions

**How long does implementation take?**
Timeline varies based on your current systems and scope of automation. We start with a discovery process to understand your needs and provide a realistic timeline for your specific situation.

**What if we are not tech savvy?**
That is exactly why we exist. Our done for you approach means you do not need technical expertise. We handle strategy, implementation, and optimization based on your needs.

**Do we need to sign a long term contract?**
No. We work month to month after the initial implementation period. We earn your business by delivering results.

**How involved does our team need to be?**
Your involvement varies depending on the solution we design together. We handle the technical work, but you will need to provide input on your processes and approve the approach that works best for your practice.

**Can this work with our existing software?**
We design solutions around your current technology stack. During discovery, we assess your tools and create a plan that integrates with what you already use.${page.subcategory.includes('workflow') || page.subcategory.includes('onboarding') || page.subcategory.includes('practice-management') ? `

**What practice management platforms do you integrate with?**
We work with most major practice management platforms including Karbon, Canopy, and others. We design solutions that integrate with your current tools.

For firms looking to upgrade to a modern, cloud-based practice management system, we often recommend [Karbon](https://karbon.referral-factory.com/uEybmnS7) (affiliate link - we may earn a commission) as it's built specifically for accounting and bookkeeping firms. We work with Karbon regularly and find it integrates well with automation workflows, but we design solutions around whatever platform works best for your needs.` : ''}

---

*Home > Services > ${page.title}*
`;
}

// Template for Conversational Solutions pages (Category B)
function generateConversationalSolutionsPage(page) {
  const audience = getAudienceVariations(page.targetAudience);
  const problem = page.title.replace('How to ', '').toLowerCase();

  return `# ${page.h1}

The answer is automation. Let SmartFirm build and manage your system so you can focus on what you do best: serving clients and growing your practice.

[Book a Free Call]

---

## You Are Not Alone

Most ${audience.professionPlural} face this exact challenge. You know you need a solution, but implementing systems feels overwhelming during ${audience.busyTime}. You have tried manual approaches with limited results. Time constraints keep you from following through consistently.

Meanwhile, competitors with systemized operations are winning the clients you should be getting. Every day without automation costs you time, efficiency, and new business opportunities.

You know you should systemize this, but between client deadlines, ${audience.busyTime}, and daily operations, there is simply no time to implement and manage it yourself.

---

## Here Is How It Works

SmartFirm provides done for you automation built specifically for accounting professionals. We handle the entire implementation, from system design and tool selection to configuration and ongoing management.

The system is customized to your practice and technology environment. We design workflows that fit your specific needs and client communication style. Everything is personalized with your branding and tailored to how you work.

You focus on ${audience.workType} while we handle the automation strategy, implementation, and ongoing optimization.

---

## The SmartFirm Process

**1. Discovery Call**
We learn about your practice, ideal clients, and current challenges in a consultation.

**2. Custom Strategy**
We design a system tailored to your services, client types, and communication preferences.

**3. Done For You Setup**
We build and configure everything. You review and approve. No technical work on your end.

**4. Launch & Optimize**
We manage ongoing execution, track results, and continuously optimize based on your feedback.

---

## What's Typically Included

Solutions are customized to each firm, but commonly include:

- Discovery and current process assessment
- Custom system design for your specific needs
- Automated workflow implementation
- Integration with your existing tools and platforms
- Communication templates tailored to your brand
- Implementation and testing
- Training for your team
- Ongoing support and optimization
- No long term contracts

---

## What Firms Experience

Firms that implement automation typically see:

**More consistent execution** without manual effort
**Better client communication** and response rates
**Improved efficiency** in daily operations
**More time for billable work** instead of administrative tasks

---

## Ready to Stop Struggling and Start Growing?

Book a free call with our team. We will show you exactly how we can solve this challenge for your practice.

[Book Your Free Call]

---

## Your Questions Answered

**What makes SmartFirm different from other solutions?**
We are done for you, not DIY. We design and implement custom solutions for your specific situation. We also focus exclusively on accounting firms, so we understand your unique needs, ${audience.busyTime} challenges, and the compliance to advisory shift.

**How much does this cost?**
Investment varies based on your needs and current technology environment. We start with discovery to understand your situation, then provide transparent pricing for your specific solution. No long term contracts.

**Is this right for solo practitioners or just larger firms?**
We work with firms of all sizes, from solo practitioners to multi partner practices. Solutions are tailored to your firm size, goals, and current systems.

**What if we have tried this before and it did not work?**
Most manual approaches fail because they require consistent effort you do not have time for. We design automated systems that fit your workflow and practice management approach, making it sustainable long term.

---

*Home > Solutions > ${page.title}*
`;
}

// Template for Hybrid pages (Category C)
function generateHybridPage(page) {
  const audience = getAudienceVariations(page.targetAudience);
  const serviceType = page.title.split(' with ')[0].replace(`${page.targetAudience} `, '').toLowerCase();
  const benefit = page.title.split(' with ')[1] || 'automation';

  return `# ${page.h1}

Get results without the hassle with done for you ${serviceType} designed exclusively for accounting firms.

[Book a Free Call]

---

## The Best of Both Worlds

You need ${serviceType} that actually delivers measurable results. Not vague promises about brand awareness. Not DIY tools that sit unused because setup takes too long. Not agencies that do not understand the difference between tax compliance work and advisory services.

SmartFirm combines accounting industry expertise with hands on execution so you get real outcomes without investing your limited time. We understand ${audience.busyTime}. We know how to target the right clients. We focus on transparent results showing exactly where leads come from and what they generate.

Most importantly, we handle everything. You focus on billable work. We handle execution.

---

## Why Firms Choose SmartFirm

**Accounting Firms Only**
We understand ${audience.busyTime}, utilization rates, realization, and the compliance to advisory shift. We speak your language and understand your ideal clients.

**Done For You Execution**
We build and manage everything. No DIY setup, no tech burden, no ongoing hassle. We handle strategy, execution, optimization, and reporting.

**${benefit}**
Our systems ensure consistent follow through and execution whether you are in client meetings or managing ${audience.busyTime} deadlines.

**Transparent Results**
We focus on real metrics tied to real outcomes. No vague brand awareness metrics.

**No Long Term Contracts**
Month to month after initial setup. We earn your business by delivering results.

---

## How It Works

We start with a discovery call to understand your practice, growth goals, target clients, and current efforts. Then we build a custom system tailored to your specific needs and technology environment.

Depending on your situation, solutions can include various automation workflows, integrations, and optimizations. We work with your existing tools where possible and recommend additions where they will deliver value.

You focus on billable work while we handle strategy, implementation, and ongoing optimization based on your goals and feedback.

---

## What's Typically Included

Solutions are customized to each firm, but commonly include:

- Discovery and strategy assessment
- Custom plan for your specific goals
- Implementation tailored to your technology stack
- Automated workflows designed for your needs
- Integration with your existing tools and platforms
- Ongoing optimization and support
- Regular communication and strategy alignment
- No long term contracts

---

## What Firms Experience

Firms that implement automation typically see:

**More consistent execution** without manual effort
**Better results** from systemized operations
**Improved efficiency** in key processes
**More time for billable work** instead of manual tasks

---

## Ready to Get Started?

Book a free call to see exactly how SmartFirm can deliver the results you need without the time investment you cannot afford.

[Schedule Your Call]

---

## Common Questions

**How is this different from DIY tools like GoHighLevel or HubSpot?**
We actually use GoHighLevel and other powerful platforms as part of our solutions. The difference is we handle all the setup, configuration, and ongoing management for you. You get the benefits of these tools without the months of learning curve and technical work required to use them effectively.

**What if we already tried this and got mixed results?**
We start with discovery to understand what you tried and why it did not work. Then we design a solution that addresses those specific gaps, whether that is better targeting, improved messaging, or more consistent execution.

**Can you work with our existing tools and software?**
We assess your current technology stack during discovery and design solutions that integrate with what you already use. We recommend additions only where they will deliver clear value.

**What kind of results can we expect?**
Results vary significantly based on your market, target clients, current visibility, and other factors. We focus on sustainable improvements rather than making specific promises about metrics.

---

*Home > Services > ${page.title}*
`;
}

// Template for Profession Specific pages (Category D)
function generateProfessionSpecificPage(page) {
  const audience = getAudienceVariations(page.targetAudience);
  const niche = page.title.split(' for ')[1] || page.targetAudience;
  const serviceType = page.title.split(' for ')[0].toLowerCase();

  return `# ${page.h1}

Done for you ${serviceType} built specifically for ${niche}. Focus on serving clients while we handle the automation strategy, implementation, and ongoing management.

[Book a Free Call]

---

## Your Unique Challenges

As ${niche}, you face unique challenges that generic automation solutions do not address. You need systems that understand your specific workflow, client base, and practice structure. Off the shelf tools require too much customization. DIY platforms take time you do not have.

You need automation that fits how you actually work, not how some generic platform thinks you should work.

---

## Tailored Solution

We design ${serviceType} specifically for practices like yours. During discovery, we learn about your unique situation, technology stack, and specific goals. Then we build a custom solution that addresses your exact needs.

The approach varies based on your practice size, service offerings, and current systems. We work with what you already have and add the right tools where they will deliver clear value.

Everything is customized to your practice. No cookie cutter templates. No one size fits all approach. Just automation designed specifically for how you work.

---

## What's Typically Included

Solutions are customized to each firm, but commonly include:

- Discovery focused on your specific practice model
- Custom automation design for your workflows
- Integration with your existing tools
- Implementation tailored to your processes
- Training customized to your team
- Ongoing support and optimization
- No long term contracts

---

## Why We Are Different

**We understand ${niche}**
Not just accounting firms in general. We understand the specific challenges and opportunities of practices like yours.

**Custom solutions, not templates**
Every solution is designed specifically for your practice, not adapted from a generic template.

**Done for you approach**
We handle strategy, implementation, and ongoing management. You focus on client work.

**Accounting firms only**
We speak your language and understand ${audience.busyTime}, utilization, and the compliance to advisory shift.

**No long term contracts**
Month to month after initial setup. We earn your business by delivering results.

---

## What Firms Experience

Firms like yours that implement automation typically see:

**Significant time savings** on administrative work
**More consistent operations** regardless of workload
**Better client experience** with faster response times
**More time for billable work** and practice growth

---

## Ready to Scale Your Practice?

Book a free call to see how SmartFirm can design automation specifically for ${niche}.

[Book Your Free Call]

---

## Common Questions

**How is this different from generic automation?**
We design solutions specifically for ${niche}. We understand your unique challenges, workflow, and client base. Everything is customized to how you actually work.

**What if we have unique processes?**
That is exactly what we specialize in. We design custom solutions around your specific processes, not force you into a template.

**Do we need to change how we work?**
No. We design automation that fits your current workflow and enhances it, not replaces it with something unfamiliar.

---

*Home > For > ${page.title}*
`;
}

// Template for Alternatives pages (Category E)
function generateAlternativesPage(page) {
  const audience = getAudienceVariations(page.targetAudience);
  const competitor = page.title.split(' alternative ')[0];
  const isToolAlternative = competitor.toLowerCase().includes('gohighlevel') ||
                           competitor.toLowerCase().includes('hubspot') ||
                           competitor.toLowerCase().includes('keap');

  return `# ${page.h1}

Done for you automation designed exclusively for accounting firms. Get all the benefits of powerful automation tools without the DIY setup, learning curve, or ongoing management burden.

[Book a Free Call]

---

## Why Consider an Alternative

${isToolAlternative ?
`${competitor} is a powerful platform, but it requires significant time investment to set up and manage effectively. Most accounting firms do not have dedicated marketing staff to handle the configuration, workflow building, and ongoing optimization.

You need the results ${competitor} can deliver, but without the months of learning curve and ongoing management burden.` :
`You are looking for a better approach to automation for your accounting practice. You need solutions designed specifically for accounting firms, not generic services adapted to fit your needs.`}

---

## SmartFirm Done For You Approach

We actually use tools like ${isToolAlternative ? competitor : 'industry leading platforms'} as part of our solutions. The difference is we handle all the setup, configuration, and ongoing management for you.

**What You Get:**

**Done For You Implementation**
We design, build, and configure everything. No learning curve. No technical work on your end.

**Accounting Firm Expertise**
We understand ${audience.busyTime}, the compliance to advisory shift, and how to target the right clients for your practice.

**Ongoing Management**
We handle optimization, troubleshooting, and updates. You just see the results.

**Custom Solutions**
Every implementation is designed specifically for your practice, technology stack, and goals.

**No Long Term Contracts**
Month to month after initial setup. We earn your business by delivering results.

---

## How It Works

We start with discovery to understand your practice, goals, and current technology. Then we design a custom automation system tailored to your specific needs.

We handle all implementation, integration with your existing tools, testing, and launch. You focus on client work while we manage the automation.

---

## What's Typically Included

Solutions are customized to each firm, but commonly include:

- Discovery and technology assessment
- Custom automation strategy
- Full implementation and configuration
- Integration with existing tools
- Testing and optimization
- Training for your team
- Ongoing support and management
- No long term contracts

---

## What Firms Experience

Firms that switch to SmartFirm typically see:

**Better results** from expertly configured systems
**Significant time savings** from not managing tools themselves
**More consistent execution** with ongoing optimization
**Peace of mind** knowing experts are handling it

---

## Ready to Get Better Results?

Book a free call to see how SmartFirm can deliver the automation results you need without the DIY burden.

[Book Your Free Call]

---

## Common Questions

**Do you actually use ${isToolAlternative ? competitor : 'these tools'}?**
${isToolAlternative ?
`Yes. We use ${competitor} and other powerful platforms as part of our solutions. The difference is we are experts who handle all the setup and management for you.` :
`We use best in class tools based on your needs. The difference is we handle all implementation and management.`}

**What if we already have ${isToolAlternative ? competitor : 'other tools'}?**
We assess your current setup and either optimize what you have or recommend a better approach. We work with what makes sense for your practice.

**How is this different from hiring someone to manage it?**
We bring accounting industry expertise, not just technical skills. We understand your practice needs and design solutions accordingly.

---

*Home > VS > ${page.title}*
`;
}

// Template for Service Combinations pages (Category F)
function generateServiceCombinationsPage(page) {
  const audience = getAudienceVariations(page.targetAudience);
  const services = page.title.split(' and ');
  const service1 = services[0] || 'automation';
  const service2 = services[1] ? services[1].split(' for ')[0] : 'integration';

  return `# ${page.h1}

Get comprehensive automation that delivers results across multiple areas of your practice. Done for you implementation designed exclusively for accounting firms.

[Book a Free Call]

---

## Why Bundle These Services

${service1} and ${service2} work better together than separately. When integrated properly, they create a complete system that drives better results than either service alone.

Most firms try to piece together separate solutions and end up with disconnected systems that do not communicate. Data sits in silos. Manual work bridges the gaps. Opportunities fall through cracks between systems.

An integrated approach eliminates these gaps and creates seamless workflows across your entire practice.

---

## What Is Included

This package combines ${service1} and ${service2} into a unified system designed specifically for your practice.

**${service1}**
Custom implementation tailored to your practice needs, technology stack, and target clients.

**${service2}**
Integrated with your ${service1.toLowerCase()} to create seamless workflows and eliminate manual bridging between systems.

**Integration & Optimization**
Everything works together as a complete system, not disconnected tools you have to manually coordinate.

---

## How They Work Together

When ${service1} and ${service2} are properly integrated, you get:

- Seamless data flow between systems
- Automated workflows across multiple areas
- Better results from coordinated execution
- Eliminated manual work bridging gaps
- Single source of truth for reporting

The integration creates efficiencies and results that neither service delivers alone.

---

## Why Firms Choose This Package

**Complete Solution**
Address multiple areas of your practice with one integrated system.

**Better Results**
Integrated services deliver more than the sum of separate implementations.

**Simplified Management**
One partner managing everything, not multiple vendors to coordinate.

**Accounting Firm Expertise**
We understand ${audience.busyTime} and design solutions for how accounting practices actually work.

**Done For You**
We handle all strategy, implementation, integration, and ongoing management.

**Transparent Pricing**
Package pricing is more cost effective than implementing services separately.

**No Long Term Contracts**
Month to month after initial setup.

---

## What's Typically Included

Solutions are customized to each firm, but commonly include:

- Comprehensive discovery across all areas
- Custom strategy for integrated implementation
- Full implementation of all services
- Integration between all systems and tools
- Testing and optimization
- Training for your team
- Ongoing support and management
- No long term contracts

---

## What Firms Experience

Firms that implement integrated solutions typically see:

**Better results** from coordinated systems
**Greater efficiency** from eliminated gaps
**More consistent execution** across all areas
**Significant time savings** from automation

---

## Ready to Implement a Complete Solution?

Book a free call to see how SmartFirm can deliver an integrated system designed specifically for your practice.

[Book Your Free Call]

---

## Common Questions

**Is this more expensive than separate services?**
Package pricing is typically more cost effective than implementing services separately. We provide transparent pricing during discovery.

**How long does implementation take?**
Timeline varies based on scope and your current systems. We provide a realistic timeline after discovery.

**Can we start with one service and add others later?**
Yes. We can design solutions that start with your highest priority and expand over time.

**What if we already have some of these systems?**
We assess what you have and integrate with existing tools where it makes sense, or recommend better approaches where needed.

---

*Home > Packages > ${page.title}*
`;
}

// Main generation function
function generatePageContent(page) {
  switch (page.category) {
    case 'services-technical':
      return generateTechnicalServicesPage(page);
    case 'solutions-conversational':
      return generateConversationalSolutionsPage(page);
    case 'hybrid':
      return generateHybridPage(page);
    case 'profession-specific':
      return generateProfessionSpecificPage(page);
    case 'alternatives':
      return generateAlternativesPage(page);
    case 'service-combinations':
      return generateServiceCombinationsPage(page);
    default:
      return generateTechnicalServicesPage(page);
  }
}

// Generate all pages
console.log('🚀 Starting page generation...\n');

let successCount = 0;
let errorCount = 0;

pagesData.forEach((page, index) => {
  try {
    // Create category directory
    const categoryDir = path.join(outputDir, page.category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Generate content
    const content = generatePageContent(page);

    // Add frontmatter
    const fullContent = `---
id: ${page.id}
slug: ${page.slug}
title: ${page.title}
category: ${page.category}
subcategory: ${page.subcategory || ''}
targetAudience: ${page.targetAudience}
published: ${page.published}
publishDate: ${page.publishDate}
metaDescription: ${page.metaDescription}
focusKeyword: ${page.focusKeyword}
---

${content}`;

    // Write file
    const fileName = `${page.slug}.md`;
    const filePath = path.join(categoryDir, fileName);
    fs.writeFileSync(filePath, fullContent, 'utf8');

    successCount++;

    // Log progress every 25 pages
    if ((index + 1) % 25 === 0) {
      console.log(`✅ Generated ${index + 1} / ${pagesData.length} pages...`);
    }
  } catch (error) {
    console.error(`❌ Error generating page ${page.id} (${page.slug}):`, error.message);
    errorCount++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 GENERATION COMPLETE');
console.log('='.repeat(60));
console.log(`✅ Successfully generated: ${successCount} pages`);
console.log(`❌ Errors: ${errorCount} pages`);
console.log(`📁 Output directory: ${outputDir}`);
console.log('='.repeat(60));

// Generate summary by category
const categorySummary = pagesData.reduce((acc, page) => {
  acc[page.category] = (acc[page.category] || 0) + 1;
  return acc;
}, {});

console.log('\n📈 Pages by Category:');
Object.entries(categorySummary).forEach(([category, count]) => {
  console.log(`   ${category}: ${count} pages`);
});

console.log('\n✨ All pages generated successfully!\n');
