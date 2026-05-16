import ServiceLayout from '../components/ServiceLayout'

export default function SEOPage() {
  return (
    <ServiceLayout
      badge="SEO"
      accentColor="#8b5cf6"
      accentBg="rgba(139,92,246,0.12)"
      title="Dominate Google &"
      highlight="10X Organic Traffic"
      subtitle="Data-driven SEO strategies that rank your business at the top of Google, drive qualified organic traffic, and compound your growth month after month."
      heroIcon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
      }
      stats={[
        { value: '400%', label: 'Avg. Organic Traffic Increase' },
        { value: '3–6mo', label: 'Time to First-Page Rankings' },
        { value: '120+', label: 'SEO Clients Served' },
        { value: '98%', label: 'Client Retention Rate' },
      ]}
      features={[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          ),
          title: 'Technical SEO Audit',
          desc: 'We crawl your entire website to uncover hidden issues — broken links, slow pages, crawl errors, duplicate content, and indexation problems — then fix them systematically to lay a solid technical foundation.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          ),
          title: 'Keyword Research & Strategy',
          desc: 'We identify the exact search terms your ideal customers use, analyse intent and competition, and build a keyword map that targets high-value opportunities at every stage of the buying funnel.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
            </svg>
          ),
          title: 'On-Page Optimisation',
          desc: 'From title tags and meta descriptions to header hierarchy, internal linking, and schema markup — we optimise every on-page element so Google fully understands and rewards your content.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          ),
          title: 'Link Building',
          desc: 'We earn high-authority backlinks from relevant, trusted websites through white-hat outreach and digital PR campaigns — building the domain authority that propels your pages to the top of search results.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          ),
          title: 'Content Strategy',
          desc: 'We develop an editorial calendar of SEO-optimised content — blog posts, landing pages, and pillar articles — that attracts organic traffic, earns links naturally, and converts visitors into leads.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
            </svg>
          ),
          title: 'Local SEO',
          desc: 'Dominate the local map pack and geo-targeted searches. We optimise your Google Business Profile, build local citations, and implement location-specific strategies to bring customers through your door.',
        },
      ]}
      process={[
        {
          title: 'Deep SEO Audit',
          desc: 'We perform a comprehensive audit of your website covering technical health, current rankings, backlink profile, and competitor landscape to pinpoint exactly where growth opportunities lie.',
        },
        {
          title: 'Custom Strategy',
          desc: 'Based on audit findings, we build a prioritised roadmap tailored to your industry, goals, and budget — covering keywords, content, technical fixes, and link acquisition.',
        },
        {
          title: 'Implementation',
          desc: 'Our team executes every element of the strategy — on-page optimisations, technical fixes, content creation, and outreach — with full transparency and regular progress updates.',
        },
        {
          title: 'Monitor & Scale',
          desc: 'We track rankings, traffic, and conversions weekly, report monthly, and continuously refine our approach to compound your results and outpace the competition.',
        },
      ]}
      faq={[
        {
          q: 'How long does SEO take to show results?',
          a: 'Most clients see meaningful ranking improvements within 3–6 months, with significant organic traffic gains by month 6–12. SEO is a long-term investment — the earlier you start, the greater the compounding advantage over competitors.',
        },
        {
          q: 'Do you guarantee first-page Google rankings?',
          a: 'No ethical SEO agency can guarantee specific rankings, as Google\'s algorithm is complex and constantly evolving. What we do guarantee is a data-driven strategy, full transparency, and a track record of delivering 400%+ traffic increases for our clients.',
        },
        {
          q: 'Will my rankings drop if I stop SEO?',
          a: 'Organic rankings are built on your domain\'s authority, content quality, and backlink profile — they don\'t disappear overnight. However, competitors are always investing, so pausing SEO means slowly losing ground over time. We\'ll advise a maintenance strategy when you\'re ready.',
        },
        {
          q: 'Do you work with e-commerce websites?',
          a: 'Absolutely. E-commerce SEO is one of our core specialisms. We optimise product pages, category pages, and site architecture for maximum visibility across Google Shopping and organic search.',
        },
        {
          q: 'How do you measure SEO success?',
          a: 'We track keyword rankings, organic traffic, impressions, click-through rate, leads and conversions from organic channels, and ROI. Monthly reports show exactly what\'s happening and why, with no vanity metrics.',
        },
      ]}
    />
  )
}
