import type { Metadata } from "next"
import { MainShell } from "@/components/layout/main-shell"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"
import type { ContentBlock } from "@/lib/blog-posts/types"

const canonical = "https://linkedo.co.uk/blog/meta-ads-vs-google-ads"
const metaTitle = "Meta Ads vs Google Ads for UK Small Businesses"
const metaDescription = "Google Ads reaches people already searching; Meta Ads finds new buyers on Facebook and Instagram. See which to start with and how to track both."
const heroImage = "/blog/meta-ads-vs-google-ads/meta-ads-vs-google-ads-featured.webp"
const heroAlt = "Small-business owner comparing paid advertising options"
const postTitle = "Meta Ads vs Google Ads: Which Should a UK Small Business Choose First?"

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical },
  openGraph: { type: "article", url: canonical, title: metaTitle, description: metaDescription, images: [{ url: heroImage, width: 1200, height: 630, alt: heroAlt }] },
  twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: [heroImage] },
}

const articleMarkdown = "# Meta Ads vs Google Ads: Which Should a UK Small Business Choose First?\n\nNeither platform wins outright. Google Ads shows your business to people who are already searching for what you offer. Meta Ads shows it to people on Facebook and Instagram who may not be looking yet.\n\nSo the better first choice depends on how your customers find you today. If they type your service into Google when they need it, start with Google Ads.\n\nIf your offer is visual, new or something people decide on after seeing it, Meta Ads is often the better place to begin.\n\nWhichever you pick, set up conversion tracking and a landing page that matches the ad before you spend. Then add the second channel once you can see what the first one is doing.\n\n## Short answer: which to choose first\n\nBefore comparing features, answer three questions about your own business. They rarely take long, and they usually point clearly one way.\n\n- **Would a customer type this into Google today?** If someone with the problem would search \"emergency plumber near me\" or \"accountant for sole traders\", there is demand to capture. That leans towards Google Ads.\n- **Does your offer look better than it sounds?** Cakes, garden rooms, salon work and furniture sell through pictures. That leans towards Meta Ads.\n- **Can you measure an enquiry, call or sale?** If not, fix that first. Neither channel can be judged fairly without it.\n\nTwo quick checks help as well. Ask your last ten customers how they found you, and search your main service plus your town on your phone.\n\nIf ads and local listings already fill the page, people are searching. If you only see forums and directories, demand may be thin, or customers may describe the service in different words.\n\n## What Google Ads is for (search intent)\n\nGoogle Ads is built around intent. Someone types a need or a question, and your ad can appear at the moment they want an answer.\n\nThat makes it strong for services people look for when a problem appears. A burst pipe, a failed MOT or a missed tax deadline are not things people wait to discover on social media.\n\nSearch is only one part of the platform, though. [Google's own guidance on choosing a campaign type](https://support.google.com/google-ads/answer/2567043?hl=en-GB) explains that the right campaign depends on your advertising goal, and the options go well beyond text ads on the results page.\n\n### The Google campaign types you will hear about\n\n- **Search:** text ads on Google results, triggered by the terms people search for.\n- **Shopping:** product listings with images, run from a product feed in Google Merchant Center.\n- **Display:** image ads on websites and apps, often used to remind past visitors.\n- **YouTube:** video ads for awareness or for action.\n- **Performance Max:** one goal-based campaign that can reach across Google's channels.\n\nLinkedo's [Google Ads management service](https://linkedo.co.uk/google-ads) covers all five. Even so, we recommend a mix during an initial audit rather than launching every type at once. For many service businesses, a tightly built Search campaign is the sensible first step.\n\nGoogle Ads is also different from organic search. Paid ads stop when the budget stops, while [SEO](https://linkedo.co.uk/seo) builds visibility over time. If you are weighing those two, our guide on [whether to start with PPC or SEO](https://linkedo.co.uk/blog/ppc-or-seo-first-birmingham) covers that choice.\n\n## What Meta Ads is for (discovery on Facebook and Instagram)\n\nMeta Ads is the advertising side of Facebook and Instagram. Campaigns are built in Meta Ads Manager and can appear in feeds, Stories, Reels and other Meta placements.\n\nThe big difference is timing. People are scrolling, not searching, so your ad has to earn attention before it can earn a click. That is why Meta suits offers people did not know they wanted until they saw them.\n\nInstead of choosing keywords, you choose an objective and an audience. Meta then shows the ad to people it predicts are likely to take that action.\n\n### Objectives that matter for small businesses\n\n- **Leads:** an instant form inside Facebook or Instagram, or a click through to your landing page.\n- **Sales:** for online shops, with purchases tracked through to checkout.\n- **Traffic and awareness:** to introduce a new business, offer or location.\n- **Retargeting:** to reach people who visited your website or engaged with your page.\n\nLinkedo's [paid Meta Ads service](https://linkedo.co.uk/meta-ads) builds each campaign in Ads Manager around one clear objective, rather than spreading a small budget across several. It covers paid Facebook and Instagram advertising only, not organic posting.\n\n## When Google Ads is usually the better first step\n\nStart with Google Ads when demand already exists and the customer is close to acting. Typical signs include:\n\n- People search for your service by name, often with \"near me\" or a town.\n- The need is urgent or problem-driven, such as repairs, recovery or emergency call-outs.\n- Customers compare a few providers and choose one quickly.\n- You sell products people search for by name, brand or model, where Shopping can help.\n- You serve a clear area and want calls from people inside it.\n\nUrgent services are the clearest case. Nobody scrolls Instagram hoping to find a locksmith; they search when the door will not open. If your phone rings most when something breaks, Google is where that moment happens.\n\nSearch campaigns also need regular care. Reviewing the search terms that triggered your ads, and adding negative keywords for irrelevant ones, stops budget leaking to people who were never going to buy.\n\nPlan the account properly before launch. Our [checklist for choosing a Google Ads agency in Manchester](https://linkedo.co.uk/blog/google-ads-agency-manchester-checklist) lists the questions to ask anyone managing your account, and they apply wherever you are based.\n\n## When Meta Ads is usually the better first step\n\nStart with Meta Ads when people are not searching yet, or when seeing the product does the selling. Typical signs include:\n\n- Your offer is visual: food, interiors, beauty, events, gifts or home improvements.\n- It is new, so few people know to search for it.\n- You want local awareness for an opening, a seasonal offer or a new location.\n- The purchase is planned rather than urgent, so there is time to build interest.\n- You already get website visitors who leave without enquiring.\n\nPicture a garden room builder. Few people search for one until they have seen one in a neighbour's garden or on their phone. A strong photo or short video in the feed can start that thought long before any search happens.\n\nMeta also needs a different kind of preparation: good images or short videos, with enough variety to test.\n\nIf you are choosing outside help, our guide to [what to look for in a Meta Ads agency in Birmingham](https://linkedo.co.uk/blog/social-media-agency-birmingham-guide) covers the questions worth asking.\n\n## Adding the second channel\n\nThe two platforms often work best together, but not necessarily from day one. Starting with one lets you learn what a lead is worth and what your landing page needs, without splitting a modest budget.\n\nA common pattern is Google first, then Meta retargeting. Searchers who clicked but did not call can see a reminder on Facebook or Instagram. The reverse works too: Meta builds awareness, and some of those people later search for you by name.\n\nKeep the message consistent across both. If a Meta ad promises a free quote, the Google ad and the landing page should say the same, so people recognise you when they come back.\n\nIf you are planning a wider mix, our [small-business guide to digital marketing in the West Midlands](https://linkedo.co.uk/blog/digital-marketing-west-midlands-small-business-guide) shows how paid ads sit alongside SEO and your website.\n\n## Tracking, landing pages and measuring both\n\nMost disappointing ad results trace back to two things. Tracking does not record enquiries properly, or the landing page does not match the ad. Both problems apply on either platform.\n\n### Set up conversion tracking first\n\nOn Google, conversion tracking records the actions that matter, such as form submissions, calls and purchases, so campaigns can optimise towards them. Agree which actions count before launch, and check each one records once, not twice.\n\nOn Meta, the Meta Pixel reports actions on your website, while the [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api) sends events from your server. Meta's developer documentation explains that a shared event ID lets it remove duplicates when both send the same action.\n\nRecheck tracking whenever your website, forms or cookie banner change. Those updates can quietly stop events from recording, and the ads then optimise towards the wrong signal.\n\n### Match the landing page to the click\n\nA Google visitor and a Meta visitor arrive in different frames of mind. The searcher wants proof that you do the job, cover their area and can be reached quickly. Put the service, the area and the phone number near the top.\n\nThe Meta visitor was interrupted mid-scroll and knows less. They need the ad's look carried through, a plain explanation of the offer and a short form. Many open links inside the Facebook or Instagram app, so test the page on a phone, inside the app.\n\nIf your site is not built for either, our [web development team](https://linkedo.co.uk/web-development) can create focused landing pages for paid traffic.\n\n### Tag your links so you can compare\n\nGoogle Ads clicks are usually identified through auto-tagging. Meta ad clicks, however, can blend in with ordinary social visits in your analytics unless you label them. Our [UTM builder](https://linkedo.co.uk/utm-builder) creates tagged links for your Meta ads.\n\nThen compare like with like: cost per genuine enquiry or sale, not clicks or likes. A cheap click that never calls is not cheaper than a pricier one that books a job.\n\n## How Linkedo can help\n\nLinkedo manages both paid channels, so we can look at how your customers search and buy before recommending where to start. If you already run an account, we can review it first.\n\n- **Google Ads:** planning, building and managing Search, plus Shopping, Display, YouTube and Performance Max where they fit the goal. You keep ownership of the account and its data.\n- **Meta Ads:** paid Facebook and Instagram campaigns built in Ads Manager, with Meta Pixel and Conversions API checks and reports on budget, ads and audiences.\n- **Tracking and landing pages:** agreeing what counts as a conversion, checking it records correctly and improving the pages your ads point to.\n\nLinkedo's Meta work is paid advertising only. We do not provide organic posting, content calendars or community management.\n\n## Frequently asked questions\n\n### What is the difference between Meta Ads and Google Ads?\n\nGoogle Ads mainly reaches people while they search, so it captures demand that already exists. Meta Ads reaches people on Facebook and Instagram while they browse, so it is better at creating interest. Both can drive leads and sales.\n\n### Are Meta Ads the same as Facebook Ads?\n\nBroadly, yes. Facebook's parent company is now called Meta, and Facebook ads are run through Meta Ads Manager. One campaign can appear on Facebook, Instagram and other Meta placements.\n\n### Can I run Meta Ads and Google Ads at the same time?\n\nYes, and many businesses do. With a modest budget, it is often wiser to start with one, get tracking right, then add the other, for example by retargeting website visitors on Meta.\n\n### Do I need a big budget to start?\n\nThere is no single right figure; it depends on your market, area and goals. With Linkedo, the budget is agreed on a call, and ad spend is kept separate from management fees.\n\n### How do I know which channel is working?\n\nTrack real conversions on both platforms, such as calls, form submissions or purchases. Then compare the cost of each genuine enquiry or sale. Tag your Meta links so your analytics shows them separately.\n\n### Does Linkedo manage organic social media as well as ads?\n\nNo. Linkedo provides paid Meta Ads on Facebook and Instagram only. We do not offer organic posting, content calendars or community management.\n\n## Ready to choose a paid channel?\n\nWhether your customers are in Birmingham, Bristol, Manchester, Newcastle or elsewhere in the UK, the first question is the same. Are they searching for you, or do they need to see you first?\n\nTell us how your customers find you, and we will help you decide where to start. Call Linkedo on **+44 7927 969991** or [get in touch through our contact page](https://linkedo.co.uk/contact)."
const faqItems = [["What is the difference between Meta Ads and Google Ads?","Google Ads mainly reaches people while they search, so it captures demand that already exists. Meta Ads reaches people on Facebook and Instagram while they browse, so it is better at creating interest. Both can drive leads and sales."],["Are Meta Ads the same as Facebook Ads?","Broadly, yes. Facebook's parent company is now called Meta, and Facebook ads are run through Meta Ads Manager. One campaign can appear on Facebook, Instagram and other Meta placements."],["Can I run Meta Ads and Google Ads at the same time?","Yes, and many businesses do. With a modest budget, it is often wiser to start with one, get tracking right, then add the other, for example by retargeting website visitors on Meta."],["Do I need a big budget to start?","There is no single right figure; it depends on your market, area and goals. With Linkedo, the budget is agreed on a call, and ad spend is kept separate from management fees."],["How do I know which channel is working?","Track real conversions on both platforms, such as calls, form submissions or purchases. Then compare the cost of each genuine enquiry or sale. Tag your Meta links so your analytics shows them separately."],["Does Linkedo manage organic social media as well as ads?","No. Linkedo provides paid Meta Ads on Facebook and Instagram only. We do not offer organic posting, content calendars or community management."]]
const faqSchema = faqItems.map(([name, answer]) => ({
  "@type": "Question",
  name: name.replace(/^\d+\.\s*/, ""),
  acceptedAnswer: { "@type": "Answer", text: answer },
}))
const schemas = [
  {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: postTitle, description: metaDescription,
    image: "https://linkedo.co.uk" + heroImage,
    datePublished: "2026-11-27", dateModified: "2026-11-27",
    author: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk/" },
    publisher: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk/" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    url: canonical, inLanguage: "en-GB",
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchema },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
      { "@type": "ListItem", position: 3, name: postTitle, item: canonical },
    ],
  },
]
const imagesByText: Record<string, { type: "image"; src: string; alt: string }> = {
  "Google Ads is built around intent. Someone types a need or a question, and your ad can appear at the moment they want an answer.": {
    "type": "image",
    "src": "/blog/meta-ads-vs-google-ads/google-search-intent-notebook.webp",
    "alt": "Notes for a service someone would search for"
  },
  "Meta Ads is the advertising side of Facebook and Instagram. Campaigns are built in Meta Ads Manager and can appear in feeds, Stories, Reels and other Meta placements.": {
    "type": "image",
    "src": "/blog/meta-ads-vs-google-ads/facebook-instagram-creative-desk.webp",
    "alt": "Visual creative being prepared for social ads"
  },
  "Match the landing page to the click": {
    "type": "image",
    "src": "/blog/meta-ads-vs-google-ads/ads-tracking-landing-page-review.webp",
    "alt": "Checking a landing page before running ads"
  }
}
function parseArticle(markdown: string): ContentBlock[] {
  const lines = markdown.split("\n")
  const blocks: ContentBlock[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }
    if (line.startsWith("# ")) { i++; continue }
    if (line.startsWith("## ")) {
      const heading = line.slice(3)
      blocks.push({ type: "h2", text: heading })
      i++; continue
    }
    if (line.startsWith("### ")) { const heading = line.slice(4); blocks.push({ type: "h3", text: heading }); if (imagesByText[heading]) blocks.push(imagesByText[heading]); i++; continue }
    if (line.startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("- ")) { items.push(lines[i].trim().slice(2)); i++ }
      blocks.push({ type: "ul", items }); continue
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) { items.push(lines[i].trim().replace(/^\d+\. /, "")); i++ }
      blocks.push({ type: "ol", items }); continue
    }
    const paragraph = [line]; i++
    while (i < lines.length) {
      const next = lines[i].trim()
      if (!next || next.startsWith("#") || next.startsWith("- ") || /^\d+\. /.test(next)) break
      paragraph.push(next); i++
    }
    const paragraphText = paragraph.join(" ")
    blocks.push({ type: "p", text: paragraphText })
    if (imagesByText[paragraphText]) blocks.push(imagesByText[paragraphText])
  }
  return blocks
}
const post = { title: postTitle, content: parseArticle(articleMarkdown) }

export default function MetaAdsVsGoogleAdsPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={schemas} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} className="mb-6" />
          <header className="mb-8 md:mb-12">
            <Chip variant="primary" className="mb-4">Marketing</Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">{post.title}</h1>
          </header>
          <div className="rounded-xl overflow-hidden mb-10 md:mb-12 border border-border bg-muted">
            <img src={heroImage} alt={heroAlt} className="w-full h-auto aspect-video object-cover" />
          </div>
          <div className="prose prose-invert max-w-none">{renderContentBlocks(post.content)}</div>
        </article>
      </div>
    </MainShell>
  )
}
