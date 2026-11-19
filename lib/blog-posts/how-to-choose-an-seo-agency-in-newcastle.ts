import type { ContentBlock } from "./types"

function parseMarkdown(markdown: string): ContentBlock[] {
  const lines = markdown.split("\n")
  const blocks: ContentBlock[] = []
  let index = 0
  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) { index++; continue }
    if (line.startsWith("# ")) { index++; continue }
    if (line.startsWith("## ")) {
      const heading = line.slice(3)
      blocks.push({ type: "h2", text: heading })
      const imageByHeading: Record<string, { src: string; alt: string }> = {
        "Local SEO vs national SEO on Tyneside": {
          src: "/blog/newcastle-local-seo-phone.webp",
          alt: "Smartphone showing local search results for Newcastle businesses",
        },
        "10 questions to ask before you hire": {
          src: "/blog/seo-agency-checklist-meeting.webp",
          alt: "Business owners reviewing a checklist during an SEO agency meeting",
        },
        "What good reporting includes": {
          src: "/blog/seo-reporting-dashboard.webp",
          alt: "SEO reporting dashboard showing organic search performance",
        },
      }
      if (imageByHeading[heading]) blocks.push({ type: "image", ...imageByHeading[heading] })
      index++; continue
    }
    if (line.startsWith("### ")) { blocks.push({ type: "h3", text: line.slice(4) }); index++; continue }
    if (line.startsWith("- ") || /^\d+\. /.test(line)) {
      const items: string[] = []
      while (index < lines.length && (lines[index].trim().startsWith("- ") || /^\d+\. /.test(lines[index].trim()))) {
        items.push(lines[index].trim().startsWith("- ") ? lines[index].trim().slice(2) : lines[index].trim())
        index++
      }
      blocks.push({ type: "ul", items }); continue
    }
    if (line.startsWith("|")) {
      const tableLines: string[] = []
      while (index < lines.length && lines[index].trim().startsWith("|")) { tableLines.push(lines[index].trim()); index++ }
      const rows = tableLines.map(row => row.replace(/^\|/, "").replace(/\|$/, "").split("|").map(cell => cell.trim()))
        .filter(row => !row.every(cell => /^:?-{2,}:?$/.test(cell)))
      if (rows.length) blocks.push({ type: "table", headers: rows[0], rows: rows.slice(1) })
      continue
    }
    if (line.startsWith("> ")) {
      blocks.push({ type: "p", text: line.slice(2) }); index++; continue
    }
    const paragraph = [line]
    index++
    while (index < lines.length) {
      const next = lines[index].trim()
      if (!next || next.startsWith("## ") || next.startsWith("### ") || next.startsWith("- ") || /^\d+\. /.test(next) || next.startsWith("|")) break
      paragraph.push(next); index++
    }
    blocks.push({ type: "p", text: paragraph.join(" ") })
  }
  return blocks
}

export const newcastleSeoAgencyFaqs = [
  {
    "@type": "Question",
    "name": "Is a remote UK SEO agency OK for a Newcastle business?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. An agency does not need a physical office in Newcastle to support a local business. What matters is its understanding of your target market, ability to research local search behaviour and quality of communication. A remote agency can work with businesses across Newcastle, Gateshead and other parts of the UK."
    }
  },
  {
    "@type": "Question",
    "name": "What questions should I ask before hiring an SEO agency?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ask about its strategy, initial audit, keyword research, monthly deliverables, local SEO methods and reporting. You should also understand who manages your account, how progress is measured and what happens when the agreement ends."
    }
  },
  {
    "@type": "Question",
    "name": "How long does SEO take to show results?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There is no universal timeframe. Results depend on your website's condition, competition, content quality, technical issues and the work required. Ask the agency what it plans to address first and how it will monitor progress. Be cautious of anyone promising a fixed result by a specific date."
    }
  },
  {
    "@type": "Question",
    "name": "Can an agency guarantee first-page rankings?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No responsible agency can guarantee specific Google rankings. Search results depend on many factors, and Google controls its own ranking systems. An agency can complete agreed work and improve your website, but it cannot guarantee a particular position."
    }
  },
  {
    "@type": "Question",
    "name": "Should my Newcastle business focus on local SEO or national SEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It depends on your customers. Businesses serving Newcastle, Gateshead and nearby areas may prioritise local SEO. Companies selling products or services throughout the UK may need national SEO. Some businesses benefit from combining both approaches."
    }
  },
  {
    "@type": "Question",
    "name": "Should I pay for SEO only or choose a full retainer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SEO-only support may suit businesses where organic search is the main priority. A wider marketing retainer may be appropriate if you also need website development, paid advertising, branding or social media support. Choose services based on your actual requirements."
    }
  },
  {
    "@type": "Question",
    "name": "Who owns my Analytics, Search Console and Google Business Profile logins?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your business should own these accounts and retain administrative control. An agency should receive the access it needs to complete its work. Use business-controlled email addresses and make sure access can be changed when the relationship ends."
    }
  }
]

export const newcastleSeoAgencyPost = {
  slug: "how-to-choose-an-seo-agency-in-newcastle",
  title: "How to Choose an SEO Agency in Newcastle and Gateshead: A Practical UK Checklist",
  excerpt: "A practical checklist for Newcastle and Gateshead businesses choosing an SEO agency: questions to ask, red flags, reporting, contracts and local SEO.",
  category: "SEO",
  date: "2026-11-20",
  readTime: "10 min read",
  image: "/blog/how-to-choose-seo-agency-newcastle-featured.webp",
  author: {
    name: "Junaid Mazhar",
    role: "SEO Director",
    avatar: "/team/junaid-mazhar.webp",
  },
  content: parseMarkdown("Choosing an SEO agency is an important decision for any business that wants to improve its visibility on Google and attract relevant customers. Whether you operate in Newcastle, serve customers across Gateshead or sell products throughout the UK, the right SEO support can help your website reach people searching for your services.\n\nHowever, choosing an agency can be difficult. Many providers promise better rankings and more traffic, but not every proposal explains how the work will be completed.\n\nBefore signing an agreement, you need to understand what an agency offers, how it measures progress and whether its approach suits your business.\n\nThis guide provides a practical checklist for Newcastle and Gateshead businesses. It covers local SEO, important questions, warning signs, reporting and contracts to help you make an informed decision.\n\n## Why \"best SEO agency in Newcastle\" is the wrong first question\n\nSearching for the best SEO agency in Newcastle is a reasonable starting point, but search rankings alone should not determine your choice.\n\nAn agency appearing prominently in Google does not automatically understand your industry, customers or commercial goals.\n\n### Ranking highly does not automatically mean an agency is right for you\n\nAn agency might rank well for its own keywords but lack experience in your particular industry.\n\nFor example, a local tradesperson needs a different strategy from an online retailer selling products throughout the UK.\n\nLook beyond rankings. Consider whether the agency understands your business and can explain how it will approach your website.\n\n### Understand what your business actually needs\n\nBefore contacting agencies, identify your main priorities. You might want more local enquiries, better visibility for service pages, improved technical SEO or stronger national search visibility.\n\nYour objectives will help you identify providers offering relevant services rather than generic monthly packages.\n\n### Look beyond marketing claims\n\nAsk agencies to explain their methods, responsibilities and expected deliverables.\n\nBe cautious of impressive promises that lack supporting evidence. A responsible provider should be honest about what it can control and what depends on search engine decisions.\n\n## What a good SEO brief looks like for Newcastle and Gateshead\n\nYou do not need a complicated document to approach an SEO agency. A short, clear brief can help potential providers understand your requirements and prepare relevant proposals.\n\n### Explain your business and services\n\nDescribe what your business offers, who your customers are and where you provide services.\n\nInclude your main products or services, target audience, service locations and commercial priorities.\n\nFor example, a plumbing business covering Newcastle and Gateshead has different requirements from an online shop selling nationally.\n\n### Describe your current SEO position\n\nProvide details about your existing website, its platform and any known problems.\n\nMention issues such as indexing difficulties, slow pages, outdated content or declining organic visibility.\n\nIf you already use Google Analytics and Google Search Console, explain whether the accounts are configured and accessible.\n\nThe agency should carry out its own investigation rather than expecting you to diagnose everything.\n\n### Define what success means\n\nDo not make rankings your only measure of success.\n\nThink about the outcomes that matter to your business, including relevant enquiries, telephone calls, bookings, purchases and qualified leads.\n\nClear objectives make it easier to assess whether SEO activity is supporting your business.\n\n## Local SEO vs national SEO on Tyneside\n\nNewcastle and Gateshead businesses do not all need the same SEO strategy. The right approach depends on where their customers are and how they deliver their services.\n\nExplore Linkedo's [Newcastle SEO services](/newcastle) for more information about local SEO support.\n\n### When local SEO makes more sense\n\nLocal SEO is important for businesses that depend on customers within a particular area.\n\nExamples include tradespeople, restaurants, independent shops, professional services and vehicle service providers.\n\nA local strategy may include improving location pages, maintaining accurate Google Business Profile information and creating useful content that answers local customer needs.\n\n### When national SEO is more appropriate\n\nBusinesses serving customers throughout the UK may need a broader strategy.\n\nOnline retailers, software providers and specialist consultancies often focus on national keyword research, product or service pages, technical improvements and useful content.\n\n### Why location pages need genuine value\n\nSeparate pages for Newcastle, Gateshead and surrounding areas can help when each page provides useful, relevant information.\n\nHowever, simply replacing a town name across several nearly identical pages is not a strong strategy.\n\nLocation pages should explain relevant services and coverage without inventing local offices or addresses. Their purpose should be to help customers, not just target additional place names.\n\n## 10 questions to ask before you hire\n\nBefore choosing an agency, arrange a conversation and use these questions to understand its approach.\n\n### 1. How will you approach SEO for my business?\n\nLook for a strategy based on your services, customers, website and competitors rather than a generic package.\n\n### 2. What will your initial SEO audit cover?\n\nAsk whether it includes technical SEO, indexing, content, website structure, internal links and backlinks.\n\n### 3. How will you research keywords?\n\nThe agency should consider search intent, relevance and commercial value, not just search volume.\n\n### 4. How will you improve local visibility?\n\nAsk about location pages, Google Business Profile and local search opportunities.\n\n### 5. Who will work on my account?\n\nFind out whether work is completed in-house or outsourced and who will be your main contact.\n\n### 6. What work will you complete each month?\n\nRequest clear deliverables covering activities such as technical improvements, content optimisation and performance monitoring.\n\n### 7. How will you measure progress?\n\nAsk about organic clicks, impressions, search queries, enquiries and conversions.\n\n### 8. How often will you communicate?\n\nAgree on reporting frequency, meetings and how you can contact the team.\n\n### 9. What happens if I end the agreement?\n\nCheck cancellation terms, notice periods, account access and the handover process.\n\n### 10. Can you explain your methods clearly?\n\nA suitable agency should explain its work in plain English without hiding behind technical jargon.\n\n## Red flags when choosing an SEO agency\n\nUnderstanding common warning signs can help you avoid unsuitable providers.\n\n### Guaranteed first-page rankings\n\nNo agency can control Google's ranking decisions.\n\nBe cautious of guaranteed first-page positions, specific rankings or guaranteed traffic improvements. A responsible provider can work towards agreed objectives but cannot promise Google's decisions.\n\n### Unclear link-building methods\n\nBacklinks can support SEO, but the methods used to acquire them matter.\n\nAsk how the agency evaluates websites and decides whether links are relevant. Be cautious of bulk link packages and manipulative practices.\n\n### No clear deliverables\n\nIf an agency cannot explain what it will actually do, you may struggle to assess its value.\n\nRequest a written breakdown of planned activities, responsibilities and reporting.\n\n### No access to your own accounts\n\nYour business should retain ownership and administrative control of its website, domain, Google Analytics, Search Console and Google Business Profile.\n\nAgencies should receive appropriate access to complete their work, not take permanent ownership of your digital assets.\n\n### Pressure to sign immediately\n\nBe careful with artificial deadlines, unclear agreements and pressure to commit before reviewing the terms.\n\nTake time to compare proposals and ask questions.\n\n## How to compare two or three proposals\n\nOnce you have spoken to potential agencies, compare their proposals carefully. A professional-looking presentation does not necessarily mean the SEO strategy is suitable.\n\nYou can also read Linkedo's related guides on [choosing an SEO agency in Birmingham](/blog/how-to-choose-an-seo-agency-in-birmingham) and [choosing an SEO agency in Leicester](/blog/how-to-choose-an-seo-agency-in-leicester).\n\n### Compare the proposed work\n\nCheck whether each proposal includes the activities your business needs:\n\n- Initial SEO audit and keyword research.\n- Technical SEO improvements.\n- Content planning and optimisation.\n- Local SEO, where relevant.\n- Relevant link acquisition.\n- Ongoing performance monitoring.\n\nLook at whether the proposed work addresses the problems identified in your brief.\n\n### Compare communication and accountability\n\nCheck who manages your account, how often you receive updates and who is responsible for completing the work.\n\nYou should know how to contact the agency and who will answer questions about your campaign.\n\n### Compare contract terms\n\nReview minimum commitments, notice periods, cancellation arrangements, additional charges and ownership of completed work.\n\nConfirm that you retain access to your website and marketing accounts.\n\n### Use a simple comparison table\n\n| Area | Proposal A | Proposal B | Proposal C |\n|---|---|---|---|\n| Initial SEO audit | | | |\n| Technical SEO | | | |\n| Content work | | | |\n| Local SEO | | | |\n| Reporting | | | |\n| Contract terms | | | |\n| Account ownership | | | |\n\nThe strongest proposal is not necessarily the cheapest or longest. Prioritise a suitable strategy, clear deliverables and realistic expectations.\n\n## What good reporting includes\n\nSEO reporting should explain what is happening on your website and whether the work supports your business goals.\n\nA report containing charts without explanations is unlikely to help you make decisions.\n\n### Organic search performance\n\nA useful report should include information from Google Search Console, such as:\n\n- Organic clicks and impressions.\n- Search queries.\n- Average search positions.\n- Pages receiving organic visibility.\n\nThese measurements help explain how your website performs in Google Search.\n\n### Technical and content progress\n\nReports should explain completed work, including technical fixes, indexing improvements, content updates, new landing pages and internal linking changes.\n\nThe agency should describe what changed and why it matters.\n\n### Business results\n\nWhere tracking is properly configured, reporting should connect organic search activity with business outcomes.\n\nThese may include telephone enquiries, contact form submissions, bookings and purchases.\n\nRead Linkedo's guide to [SEO conversion rates](/blog/seo-conversion-rate) to understand how website activity can relate to business performance.\n\n### Clear next steps\n\nEvery useful report should explain what has been completed, what still needs attention and what the agency plans to do next.\n\nThis makes it easier to understand whether the agreed strategy is being followed.\n\n## Frequently asked questions\n\n### Is a remote UK SEO agency OK for a Newcastle business?\n\nYes. An agency does not need a physical office in Newcastle to support a local business.\n\nWhat matters is its understanding of your target market, ability to research local search behaviour and quality of communication.\n\nA remote agency can work with businesses across Newcastle, Gateshead and other parts of the UK.\n\n### What questions should I ask before hiring an SEO agency?\n\nAsk about its strategy, initial audit, keyword research, monthly deliverables, local SEO methods and reporting.\n\nYou should also understand who manages your account, how progress is measured and what happens when the agreement ends.\n\n### How long does SEO take to show results?\n\nThere is no universal timeframe. Results depend on your website's condition, competition, content quality, technical issues and the work required.\n\nAsk the agency what it plans to address first and how it will monitor progress. Be cautious of anyone promising a fixed result by a specific date.\n\n### Can an agency guarantee first-page rankings?\n\nNo responsible agency can guarantee specific Google rankings.\n\nSearch results depend on many factors, and Google controls its own ranking systems. An agency can complete agreed work and improve your website, but it cannot guarantee a particular position.\n\n### Should my Newcastle business focus on local SEO or national SEO?\n\nIt depends on your customers.\n\nBusinesses serving Newcastle, Gateshead and nearby areas may prioritise local SEO. Companies selling products or services throughout the UK may need national SEO.\n\nSome businesses benefit from combining both approaches.\n\n### Should I pay for SEO only or choose a full retainer?\n\nSEO-only support may suit businesses where organic search is the main priority.\n\nA wider marketing retainer may be appropriate if you also need website development, paid advertising, branding or social media support.\n\nChoose services based on your actual requirements.\n\n### Who owns my Analytics, Search Console and Google Business Profile logins?\n\nYour business should own these accounts and retain administrative control.\n\nAn agency should receive the access it needs to complete its work. Use business-controlled email addresses and make sure access can be changed when the relationship ends.\n\n## Getting started: Choose an SEO partner with a clear plan\n\nChoosing an SEO agency in Newcastle or Gateshead should start with understanding your business needs, not believing the biggest promises.\n\nPrepare a short brief, speak to suitable providers and compare their strategies, deliverables, communication and contract terms.\n\nLook for an agency that explains its methods clearly, respects your ownership of digital assets and measures progress against meaningful business objectives.\n\nAt Linkedo, we provide SEO support based on business requirements, website performance and search visibility. Whether you want to improve local visibility in Newcastle and Gateshead or reach customers across a wider market, the starting point is understanding what your business needs.\n\nExplore our [SEO services](/seo), learn more about our [Newcastle SEO services](/newcastle), or [get in touch with Linkedo](/contact) to discuss your requirements.\n\nA clear strategy and an honest working relationship are good foundations for making SEO a useful part of your business growth."),
}
