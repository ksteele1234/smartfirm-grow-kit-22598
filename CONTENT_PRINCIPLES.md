# Content Principles for Programmatic Pages

## ✅ REVISED APPROACH: Consultative, Not Prescriptive

Based on feedback, all 251 pages should follow these principles to avoid overpromising and reflect the custom nature of each engagement.

---

## ✅ Compact Keywords SEO Rule

**The focus keyword for each page must appear in all 5 of these locations:**

1. **Slug** (URL)
2. **H1** (page heading)
3. **Title** (meta title)
4. **Meta Description**
5. **First sentence** of the page body (the first line of visible content after the H1)

This ensures maximum keyword density where search engines weight it most, without stuffing. The first sentence should read naturally while incorporating the focus keyword.

---

## ✅ Category Voice Distinction

The two main page categories target different search intents and should read differently:

**Solutions (solutions-conversational):** Written in the searcher's own words. These target how someone would describe their problem or desired outcome in plain language. Titles use "How to..." or "How do I..." phrasing. The tone is empathetic and problem-first. Example: "How to Get More Reviews for My CPA Firm."

**Services (services-technical):** Written with light industry jargon and service-oriented framing. These target people who already know the name of the solution they need. Titles use the technical service name. The tone is competent and implementation-focused. Example: "Review Request Automation for CPAs."

Even when a solutions page and a services page cover the same underlying topic, they should differ in:
- **Opening angle:** Solutions lead with the pain point. Services lead with what the service does.
- **Body content:** Solutions explain why the problem exists and why automation helps. Services explain how the system works and what is involved.
- **FAQs:** Solutions answer "should I?" and "will this work?" questions. Services answer "how does this work?" and "what is included?" questions.

---

## ✅ Google Reviews Only

**All review-related content should focus exclusively on Google Business Profile reviews.** Do not recommend or mention Yelp, Facebook reviews, LinkedIn recommendations, or other review platforms. Google is the only platform we actively build review systems for. If a client asks about other platforms on a case-by-case basis, that is a private conversation, not something we advertise.

---

## ❌ NEVER USE: Em-Dashes

**Em-dashes must NEVER appear in any content.** Do not use them in page titles, body copy, meta descriptions, or any other text. Use periods, commas, or restructure the sentence instead.

---

## ❌ NEVER USE: "Guaranteed Results" Language

**The word "guaranteed" (and variations like "guarantee", "guaranteed results") must NEVER appear in any page title, slug, heading, body copy, meta description, or focus keyword.** We do not guarantee results. Every engagement is custom and outcomes vary by firm.

Forbidden phrases:
- "guaranteed results"
- "guarantee" (when referring to outcomes)
- "90 day ROI guarantee"
- Any variation implying a promise of specific outcomes

Use instead:
- "target 90 day ROI"
- "proven systems"
- "consistent results"
- "track record of delivering"

This rule is also enforced in `src/utils/contentValidator.ts`.

---

## ❌ AVOID: Specific Deliverables Lists

**DON'T say:**
- "Complete onboarding workflow design and implementation"
- "Monthly performance dashboard tracking time saved"
- "Real time ROI reporting"
- "24/7 real human tech support"
- "Unlimited clients and contacts"
- "About 2 hours monthly after setup"

**Why:** Every firm has different tech stacks, needs, and what we can deliver varies significantly.

---

## ✅ DO: Consultative, Conditional Language

**DO say:**
- "Solutions customized to each firm"
- "Depending on your current tools and processes, this can include..."
- "We work with what you already have"
- "During discovery, we assess your needs"
- "Timeline varies based on your current systems"
- "Your involvement varies depending on the solution we design together"

**Why:** Sets realistic expectations and acknowledges the custom nature of the work.

---

## Key Phrases to Use

### Instead of Specific Features:

❌ **Too Specific:**
> "You get automated welcome email sequences, electronic engagement letter generation, secure document collection with client portal, automated client intake forms, payment processing setup, and monthly performance dashboard."

✅ **Better:**
> "Your system is customized for your firm. Depending on your current tools and processes, this can include automated welcome sequences, document collection workflows, engagement letter delivery, and integration with your existing practice management software. We work with what you already have and fill the gaps where automation will deliver the most value."

---

### Instead of Specific Time Commitments:

❌ **Too Specific:**
> "You invest just 2 hours monthly after the initial setup, while we handle all execution, optimization, and reporting."

✅ **Better:**
> "Our done for you approach means we handle the strategy, implementation, and ongoing optimization based on your specific practice needs and technology environment."

---

### Instead of Specific Timelines:

❌ **Too Specific:**
> "Most onboarding systems are fully operational within 30 days."

✅ **Better:**
> "Timeline varies based on your current systems and scope of automation. We start with a discovery process to understand your needs and provide a realistic timeline for your specific situation."

---

### Instead of Specific Metrics:

❌ **Too Specific:**
> "**10 to 15 hours** saved per week
> **427%** average ROI
> **90 days** time to positive ROI
> **98%** client satisfaction"

✅ **Better:**
> "Firms that automate their client onboarding typically see:
>
> **Significant time savings** on administrative tasks
> **Faster client setup** from days to hours
> **Consistent client experience** regardless of team member
> **Improved client satisfaction** with streamlined process"

---

## Revised "What You Get" Section

### ❌ Old Version (Too Specific):
```
## What You Get

- Complete onboarding workflow design and implementation
- Automated welcome email sequences
- Electronic engagement letter generation and signature
- Secure document collection with client portal
- Automated client intake forms and questionnaires
- Integration with QuickBooks, Xero, and practice management software
- Payment processing setup and automation
- Monthly performance dashboard tracking time saved
- Real time ROI reporting
- Unlimited clients and contacts
- 24/7 real human tech support
- No long term contracts
```

### ✅ New Version (Consultative):
```
## What's Typically Included

Solutions are customized to each firm, but commonly include:

- Discovery and workflow analysis
- Custom automation design for your specific needs
- Integration with your existing software and tools
- Automated client communication workflows
- Document collection and management solutions
- Implementation and testing
- Training for your team
- Ongoing support and optimization
- No long term contracts
```

---

## Revised FAQ Approach

### ❌ Old FAQ (Too Specific):

**Q: How much time will our team need to invest?**
A: About 2 hours monthly after setup for strategy alignment and reporting review. We handle all day to day execution and management.

### ✅ New FAQ (Realistic):

**Q: How involved does our team need to be?**
A: Your involvement varies depending on the solution we design together. We handle the technical work, but you will need to provide input on your processes and approve the approach that works best for your practice.

---

## Language Patterns to Adopt

### Discovery Focused:
- "We start with a discovery process"
- "During discovery, we assess your needs"
- "We understand your specific situation"
- "Tailored to your practice"

### Conditional Language:
- "Depending on your current tools"
- "This can include..."
- "Commonly includes..."
- "Typically involves..."
- "Solutions vary based on..."

### Outcome Focused (Not Feature Focused):
- "Streamline your onboarding process"
- "Reduce time spent on manual tasks"
- "Create consistent client experiences"
- "Improve operational efficiency"

### Integration Language:
- "Work with your existing tools"
- "Integrate with what you already use"
- "Built around your current technology stack"
- "Fill the gaps where automation delivers value"

---

## Core Message Principles

### 1. Lead with Consultation
Every page should emphasize that we start by understanding their unique situation.

### 2. Acknowledge Variability
Make it clear that solutions are customized and vary by firm.

### 3. Focus on Outcomes, Not Features
Talk about what they will achieve, not a checklist of features.

### 4. Be Honest About Involvement
Don't promise "2 hours monthly" when involvement truly varies.

### 5. No Overpromising
If we don't offer real time ROI dashboards or 24/7 support, don't mention it.

---

## Proof Points: How to Handle

### ❌ Don't Use Specific Metrics for Every Page:
> "427% average ROI"
> "10 to 15 hours saved per week"
> "90 days to positive ROI"

### ✅ Do Use General Outcome Language:
> "Significant time savings on administrative tasks"
> "Faster turnaround from prospect to paying client"
> "Improved efficiency in client setup processes"

### When You CAN Use Metrics:
Only use specific metrics if:
1. They come from actual client case studies
2. They are presented as "Client X achieved..." not "You will get..."
3. They are clearly positioned as examples, not guarantees

---

## Template Updates Needed

For all 6 templates, we need to update:

### 1. Solution Section
- Remove specific deliverable lists
- Add consultative language
- Focus on customization

### 2. What's Included Section
- Change "What You Get" to "What's Typically Included"
- Add "Solutions are customized to each firm, but commonly include:"
- Keep list general and conditional

### 3. Results Section
- Change "Results" to "What Firms Experience"
- Use outcome language, not specific metrics
- Frame as "typically see" not "you will get"

### 4. FAQ Section
- Remove specific time commitments
- Add "varies based on your situation" language
- Be honest about involvement and timeline

---

## Example: Before & After

### BEFORE (Too Specific):
> "We build and manage your client onboarding automation from start to finish. You invest just 2 hours monthly while we handle all execution, optimization, and reporting. You get automated welcome sequences, document requests, engagement letters, payment processing, and a monthly performance dashboard with real time ROI tracking."

### AFTER (Consultative):
> "We build and manage your client onboarding automation from start to finish. Our done for you approach means we handle the strategy, implementation, and ongoing optimization based on your specific practice needs and technology environment. Your system is customized for your firm and can include automated welcome sequences, document collection workflows, engagement letter delivery, and integration with your existing practice management software."

---

## How to Talk About Tools

### ✅ DO: Position as Tool-Agnostic Consultants

**We use many different tools depending on the situation:**
- GoHighLevel for marketing automation
- Double (formerly Keeper) for bookkeeping workflows
- LedgerDocs for document management
- Karbon for practice management
- And many others based on client needs

**Key messaging:**
- "We assess your current tech stack during discovery"
- "We work with what you already have where possible"
- "We recommend best in class tools when they will deliver clear value"
- "We handle all setup, configuration, and integration regardless of which tools we use"

### ❌ DON'T: Position Against Tools You Actually Use

**Bad example:**
> "Unlike GoHighLevel which requires DIY setup..."

**Good example:**
> "We actually use GoHighLevel and other powerful platforms as part of our solutions. The difference is we handle all the setup, configuration, and ongoing management for you."

### Sample Tool FAQ Responses:

**Q: What tools do you use?**
A: We use a variety of best in class tools depending on your needs and existing technology stack. This can include GoHighLevel for marketing automation, Karbon for practice management, Double for bookkeeping workflows, LedgerDocs for document management, and others. We assess your current tools during discovery and recommend the right combination for your specific situation.

**Q: Do we have to switch all our tools?**
A: No. We start by assessing what you already use and design solutions that integrate with your current technology. We only recommend new tools when they will deliver clear value and fill specific gaps in your automation needs.

---

## Apply These Principles to All 251 Pages

Every page across all 6 categories should:
1. Lead with discovery and consultation
2. Use conditional language ("can include", "typically", "often")
3. Acknowledge customization needs
4. Avoid specific time or feature commitments
5. Focus on outcomes over feature lists
6. Be realistic about involvement and timeline
7. Position as tool-agnostic consultants who use the right tools for each situation

---

## Key Takeaway

**We are consultants who design custom solutions, not vendors selling a fixed product.**

The content should reflect that we:
- Assess each firm's unique situation
- Design solutions tailored to their needs
- Work with their existing technology
- Recommend best in class tools when appropriate
- Handle all implementation regardless of tools used
- Provide ongoing support and optimization
- Deliver results that vary based on their context

This builds trust by setting realistic expectations rather than overpromising with a one size fits all approach.
