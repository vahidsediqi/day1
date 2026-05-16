import ServiceLayout from '../components/ServiceLayout'

export default function GoogleAdsPage() {
  return (
    <ServiceLayout
      badge="Google Ads"
      accentColor="#3b82f6"
      accentBg="rgba(59,130,246,0.12)"
      title="Turn Every Euro Into"
      highlight="Maximum Revenue"
      subtitle="ROI-driven Google Ads management that turns your ad spend into predictable, scalable revenue — with full transparency, zero waste, and measurable results from day one."
      heroIcon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 0v9.75m0 0 3.75-3.75M12 12l-3.75-3.75" />
        </svg>
      }
      stats={[
        { value: '11x', label: 'Max ROAS Achieved' },
        { value: '€50M+', label: 'Ad Spend Managed' },
        { value: '80+', label: 'Active PPC Clients' },
        { value: '35%', label: 'Avg. CPA Reduction' },
      ]}
      features={[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
          ),
          title: 'Campaign Strategy',
          desc: 'We analyse your market, competitors, and customer journey to craft a Google Ads strategy built around your specific revenue goals — choosing the right campaign types, bidding strategies, and audience targeting from the start.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
            </svg>
          ),
          title: 'Search Ads',
          desc: 'Capture demand at the exact moment people search for your products or services. We write compelling ad copy, build tightly themed ad groups, and manage bids relentlessly to maximise clicks that convert.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
            </svg>
          ),
          title: 'Shopping Ads',
          desc: 'Showcase your products directly in Google Search with rich images, prices, and ratings. We optimise your product feed, structure Shopping campaigns for peak ROAS, and manage bidding at the product level.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          ),
          title: 'Display & Remarketing',
          desc: 'Re-engage visitors who left without converting and build brand awareness across millions of websites, apps, and YouTube. We design audience segments and creative strategies that bring warm prospects back to buy.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          ),
          title: 'Performance Max',
          desc: 'Unlock Google\'s most powerful AI-driven campaign type. We set up and optimise Performance Max campaigns with the right asset groups, audience signals, and conversion goals to drive results across all Google channels simultaneously.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
            </svg>
          ),
          title: 'Conversion Tracking',
          desc: 'Accurate data is everything in paid search. We implement server-side and enhanced conversion tracking via Google Tag Manager, ensuring every lead, sale, and phone call is attributed correctly so we optimise on real revenue.',
        },
      ]}
      process={[
        {
          title: 'Account Audit',
          desc: 'We conduct a thorough audit of your existing Google Ads account (or analyse your market from scratch) to identify wasted spend, missed opportunities, and a clear benchmark for improvement.',
        },
        {
          title: 'Build & Configure',
          desc: 'We restructure or build your campaigns from the ground up — tightly themed ad groups, compelling ad copy, precise keyword lists, audience targeting, and full conversion tracking implementation.',
        },
        {
          title: 'Launch',
          desc: 'Campaigns go live with close monitoring in the first 72 hours. We watch every metric — impression share, CTR, Quality Scores, and conversion rates — making immediate adjustments as data flows in.',
        },
        {
          title: 'Optimise & Scale',
          desc: 'Weekly optimisation cycles cover bid adjustments, negative keyword expansion, ad copy testing, and audience refinements. As performance stabilises, we scale budget into proven winners to maximise your ROAS.',
        },
      ]}
      faq={[
        {
          q: 'How much budget do I need to run Google Ads effectively?',
          a: 'We typically recommend a minimum monthly ad spend of €1,000–€2,000 for most service businesses, and €3,000+ for e-commerce. This ensures enough data to optimise effectively. Our management fee is separate from your ad spend, which goes directly to Google.',
        },
        {
          q: 'How quickly will I see results from Google Ads?',
          a: 'Unlike SEO, Google Ads can drive traffic and conversions from day one. You should expect to see meaningful data within the first 2–4 weeks, with campaigns reaching their performance peak after 60–90 days of optimisation.',
        },
        {
          q: 'Do you manage Google Ads for e-commerce or lead generation?',
          a: 'Both. We have dedicated specialists for e-commerce (Shopping, Performance Max, ROAS optimisation) and lead generation (Search, call-only ads, lead form extensions). We tailor the strategy to your specific business model.',
        },
        {
          q: 'What makes your Google Ads management different?',
          a: 'We focus exclusively on revenue metrics — not vanity clicks. Every decision is tied to your cost per acquisition and return on ad spend. You get a dedicated account manager, weekly updates, and full access to your account at all times.',
        },
        {
          q: 'Can you take over my existing Google Ads account?',
          a: 'Absolutely. We take over accounts regularly. We start with a full audit to understand current performance, pause wasted spend immediately, and rebuild campaigns to our proven structure — typically recovering significant efficiency within the first month.',
        },
      ]}
    />
  )
}
