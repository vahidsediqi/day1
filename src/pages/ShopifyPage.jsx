import ServiceLayout from '../components/ServiceLayout'

export default function ShopifyPage() {
  return (
    <ServiceLayout
      badge="Shopify"
      accentColor="#f59e0b"
      accentBg="rgba(245,158,11,0.12)"
      title="Build a Shopify Store That"
      highlight="Sells on Autopilot"
      subtitle="From store audits and conversion rate optimisation to full-funnel marketing automation — we turn your Shopify store into a high-performance revenue machine that grows while you sleep."
      heroIcon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75z" />
        </svg>
      }
      stats={[
        { value: '10x', label: 'Avg. Revenue Growth for Clients' },
        { value: '85+', label: 'Shopify Stores Optimised' },
        { value: '40%', label: 'Avg. Conversion Rate Lift' },
        { value: 'Partner', label: 'Official Shopify Partner' },
      ]}
      features={[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25z" />
            </svg>
          ),
          title: 'Store Audit & CRO',
          desc: 'We analyse every touchpoint of your customer journey — from landing page to checkout — identifying friction points, trust gaps, and conversion killers. Our data-driven CRO strategy lifts your conversion rate so the same traffic generates significantly more revenue.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
          ),
          title: 'Theme Optimisation',
          desc: 'Your theme is the face of your brand. We optimise or custom-build Shopify themes for blazing page speed, mobile-first UX, accessibility, and conversion-focused design — ensuring every visitor experiences your store at its best across all devices.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0z" />
            </svg>
          ),
          title: 'App Stack Setup',
          desc: 'The right apps can dramatically accelerate your store\'s growth — the wrong ones slow it down and drain your margin. We audit, recommend, and configure the optimal Shopify app stack for reviews, upsells, subscriptions, loyalty, and automation.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          ),
          title: 'Email & SMS Marketing',
          desc: 'We build and automate high-converting email and SMS flows — welcome series, abandoned cart recovery, post-purchase sequences, and win-back campaigns — using Klaviyo or your preferred platform to generate recurring revenue from your existing customer base.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
            </svg>
          ),
          title: 'Paid Ads Integration',
          desc: 'We integrate your Shopify store seamlessly with Google Ads, Meta Ads, and TikTok Ads — setting up pixel tracking, product catalogue syncing, dynamic retargeting, and performance campaigns that bring buyers directly to your highest-converting product pages.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
            </svg>
          ),
          title: 'Analytics & Reporting',
          desc: 'We implement GA4, Shopify Analytics, and custom dashboards that give you complete clarity on revenue, customer acquisition cost, lifetime value, and marketing ROI — so every business decision is backed by accurate, real-time data.',
        },
      ]}
      process={[
        {
          title: 'Store Audit',
          desc: 'We start with a deep audit of your Shopify store — analysing store speed, UX, checkout flow, product page performance, email automations, app stack efficiency, and current marketing channels — to identify the highest-impact opportunities for growth.',
        },
        {
          title: 'Redesign & Optimise',
          desc: 'We implement CRO recommendations, optimise or rebuild your theme, streamline your app stack, and reconfigure your store architecture for maximum conversions. Every change is backed by data and tested for measurable impact.',
        },
        {
          title: 'Marketing Setup',
          desc: 'We build your email and SMS automation flows, integrate paid ad platforms, configure tracking pixels, and set up your analytics stack — creating a full-funnel marketing engine that captures, nurtures, and converts customers automatically.',
        },
        {
          title: 'Scale',
          desc: 'With a solid foundation in place, we scale aggressively — increasing ad budgets into proven audiences, expanding email segmentation, running A/B tests on key pages, and uncovering new revenue streams to compound your store\'s monthly growth.',
        },
      ]}
      faq={[
        {
          q: 'Can you work with my existing Shopify store, or do I need to start fresh?',
          a: 'We work with both — existing stores and new builds. For existing stores, we start with a thorough audit to identify what\'s working and what\'s holding you back. Most of our clients see significant revenue improvements simply from optimising their current store without a full rebuild.',
        },
        {
          q: 'What does Conversion Rate Optimisation actually mean for Shopify?',
          a: 'CRO is the process of improving your store so a higher percentage of visitors make a purchase. For a Shopify store, this includes optimising product pages, improving page load speed, simplifying the checkout process, adding social proof, and creating compelling offers — all of which can dramatically increase revenue without increasing your ad spend.',
        },
        {
          q: 'Do you build custom Shopify themes or use templates?',
          a: 'Both, depending on your needs and budget. For most stores, optimising a well-chosen premium theme delivers excellent results quickly. For brands that need a completely bespoke experience, we design and develop custom Shopify themes built specifically for your brand and conversion goals.',
        },
        {
          q: 'Which email marketing platform do you use for Shopify?',
          a: 'We primarily work with Klaviyo, which is the gold standard for Shopify email and SMS marketing. We also work with Omnisend, Mailchimp, and Shopify Email depending on your budget and requirements. Klaviyo\'s deep Shopify integration enables highly personalised automations that consistently outperform generic email tools.',
        },
        {
          q: 'How long does it take to see revenue improvements?',
          a: 'CRO improvements and email automation typically show measurable results within the first 30–60 days. Paid ads integration and scaling can drive revenue increases within the first 2–4 weeks. The most significant gains compound over 3–6 months as we gather data, test, and refine every element of your growth strategy.',
        },
      ]}
    />
  )
}
