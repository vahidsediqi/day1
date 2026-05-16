import ServiceLayout from '../components/ServiceLayout'

export default function GoogleMerchantPage() {
  return (
    <ServiceLayout
      badge="Google Merchant"
      accentColor="#10b981"
      accentBg="rgba(16,185,129,0.12)"
      title="Get Your Products in Front of"
      highlight="Millions of Buyers"
      subtitle="Expert Google Merchant Center management and Google Shopping optimisation that puts your products in front of high-intent buyers — driving more clicks, more sales, and stronger ROAS every month."
      heroIcon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
        </svg>
      }
      stats={[
        { value: '3x', label: 'Avg. ROAS for Shopping Campaigns' },
        { value: '200%', label: 'Avg. Product Visibility Increase' },
        { value: '60+', label: 'E-Commerce Clients Served' },
        { value: '48hr', label: 'Avg. Feed Setup Time' },
      ]}
      features={[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          ),
          title: 'Feed Setup & Optimisation',
          desc: 'We build and optimise your Google Merchant Center product feed from the ground up — structuring titles, descriptions, categories, GTINs, and custom labels to maximise product eligibility and Shopping ad quality scores.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
            </svg>
          ),
          title: 'Shopping Campaign Management',
          desc: 'We design and manage Standard Shopping and Performance Max campaigns structured for maximum ROAS — segmenting by product category, margin, and performance to ensure your best-sellers get the budget they deserve.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
            </svg>
          ),
          title: 'Product Listing Ads',
          desc: 'Your products appear with rich images, prices, store name, and ratings at the very top of Google Search results. We craft product listing strategies that dominate the Shopping carousel and drive qualified purchase-intent traffic.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          ),
          title: 'Performance Max Shopping',
          desc: 'We leverage Google\'s AI-powered Performance Max campaigns with expert asset group structuring, precise audience signals, and smart bidding strategies — unlocking visibility across Search, Shopping, Display, YouTube, and Gmail simultaneously.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          ),
          title: 'Feed Error Resolution',
          desc: 'Disapproved products mean lost revenue. We diagnose and resolve all Merchant Center policy violations, feed errors, and account suspensions — getting your products approved and live as quickly as possible.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          ),
          title: 'Competitor Analysis',
          desc: 'We monitor competitor pricing, product positioning, and Shopping ad strategies using advanced tools — enabling you to outbid strategically, price competitively, and position your products to win the click every time.',
        },
      ]}
      process={[
        {
          title: 'Feed Audit',
          desc: 'We conduct a thorough audit of your Merchant Center account and product feed — identifying disapprovals, missing attributes, optimisation gaps, and structural issues preventing your products from reaching their full Shopping potential.',
        },
        {
          title: 'Optimise Feed & Account',
          desc: 'We rebuild or optimise your product feed with keyword-rich titles, accurate categorisation, complete attributes, and supplemental feeds where needed. Your Merchant Center account is configured for maximum product eligibility and performance.',
        },
        {
          title: 'Launch Campaigns',
          desc: 'Shopping and Performance Max campaigns are structured, budgeted, and launched with the right bidding strategies from day one. We set up accurate conversion tracking and implement product-level bid segmentation for immediate efficiency.',
        },
        {
          title: 'Scale',
          desc: 'We analyse performance data weekly, expanding into high-performing product segments, refining audience signals, testing new campaign structures, and scaling budgets into proven winners — compounding your Shopping revenue month after month.',
        },
      ]}
      faq={[
        {
          q: 'What is Google Merchant Center and why do I need it?',
          a: 'Google Merchant Center is the platform that stores your product data and feeds it into Google Shopping ads, free product listings, and Performance Max campaigns. Without a properly set-up and optimised Merchant Center account, your products simply won\'t appear in Shopping results — making it essential for any e-commerce business.',
        },
        {
          q: 'My products keep getting disapproved — can you fix that?',
          a: 'Yes. Product disapprovals are one of the most common issues we resolve for new clients. Our team diagnoses the root cause — whether it\'s policy violations, mismatched data, landing page issues, or image quality — and systematically fixes each one to get your full catalogue live and generating revenue.',
        },
        {
          q: 'How is Google Shopping different from regular Google Search Ads?',
          a: 'Google Shopping ads are product-based rather than keyword-based. They display your product image, title, price, and store name directly in search results and on the Shopping tab. They typically generate higher purchase intent clicks because buyers can see the product and price before clicking, resulting in stronger conversion rates for e-commerce.',
        },
        {
          q: 'Do you work with Shopify, WooCommerce, and other platforms?',
          a: 'Absolutely. We have experience with all major e-commerce platforms including Shopify, WooCommerce, Magento, PrestaShop, and custom solutions. We handle the technical integration between your store and Google Merchant Center so your product data stays accurate and up to date automatically.',
        },
        {
          q: 'How quickly can you get my Shopping campaigns live?',
          a: 'For most stores, we can set up the Merchant Center account, optimise the product feed, and launch initial campaigns within 48 hours. Full optimisation and scaling typically takes 30–60 days as performance data accumulates and we refine bidding and campaign structure.',
        },
      ]}
    />
  )
}
