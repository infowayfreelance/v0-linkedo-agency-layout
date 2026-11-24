BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

MODE: AUTOMATED (Hamza 12 Nov + 16 Nov: local build/test first, then PR base main, merge when green, deploy live, verify live). Automatic Vercel preview on a feature-branch PR is fine; do NOT change Vercel settings or promote a preview yourself. Merge and deploy live without waiting for Hamza.

Repo: infowayfreelance/v0-linkedo-agency-layout
Branch from main: onpage-blog-outline-generator
PR base: main

Page ONLY: https://linkedo.co.uk/blog-outline-generator
Scope: copy, metadata, JSON-LD, internal links. No design, layout, nav, footer, image or tool-logic changes. FAQ uses the same accordion as /meta-title-generator with forceMount (answers in the server HTML).

Brand: "Linkedo" only. No "Ltd", "UK-registered", "London-based", testimonials, ratings, invented numbers or speed claims ("in seconds", "instantly"). British spelling. Don't name the AI model or provider. Footer and 24/7 hours untouched.

Critical: open the outline generator code (page + API route) first and confirm what the output contains, the exact input labels, any limit or sign-in, whether input is stored or sent to a third-party AI, and copy/export. Align the copy, FAQ and featureList to the code and tell me the result.

Full Day-6 brief follows next. Implement every section: title (37→56) and meta + OG, copy clean-up, 4 new H2s (how to use, search intent and content type, what this generator won't do, from outline to published post), FAQ of 8 with answers in the HTML, WebApplication + FAQPage 8 + BreadcrumbList, internal links. Push, PR base=main, merge when green, deploy live.

Report back: live URL, PR number, merge SHA, the code-check result, and the brief's verify checklist.

========== FULL DAY-6 BRIEF ==========

BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

# On-page brief: linkedo.co.uk/blog-outline-generator (Day 6, 24 Nov 2026)

**For:** ChatGPT, in the linkedo.co.uk "Website work" chat. **MODE: AUTOMATED** (Hamza 12 Nov + 16 Nov): local build and test first, then PR base main, merge when green, deploy live, verify live yourself. An automatic Vercel preview on the feature-branch PR is fine. Do NOT change Vercel settings or promote a preview yourself. Merge and deploy live without waiting for Hamza. **Report back: live URL, PR number, merge SHA**, the code-check result and the verify checklist (section 8).
**Repo:** infowayfreelance/v0-linkedo-agency-layout · branch from main: `onpage-blog-outline-generator` · PR base: main.
**Scope:** copy, metadata, JSON-LD and internal links on this tool page only. **No design, layout, nav, footer, image or tool-logic changes.** Reuse the page's existing section, card, list and step components, and the FAQ accordion used on /meta-title-generator and /seo (with `forceMount` so answers are in the server HTML). White-hat only.
**Page:** https://linkedo.co.uk/blog-outline-generator
**Status in queue:** row #6, not done (first on-page pass). Thin (**290 words**, only 3 H2s: "How to Structure Great Blog Posts", "Continue Creating", "Need Professional Content?"), **no FAQ, no FAQPage, no page-level schema (no WebApplication) and no BreadcrumbList** (only the sitewide Organization/ProfessionalService/WebSite blocks), unsupported speed wording ("Generate a structured outline **in seconds**", meta "**instantly**"), US spelling ("customize", "organize"), and nothing that explains the tool's own options (search intent, content type, word count, tone) or what an outline can't do.

## Brand rules (Linkedo, Hamza 12 Nov)
- Name **"Linkedo" only**. No "Ltd", no "UK-registered", no "London-based" wording, **no testimonials**.
- Opening hours stay **24/7** (don't touch the Organization block's hours).
- **No invented stats**, user counts, ratings, speed claims ("instantly", "in seconds"), years in business, awards or £ figures.
- Agency site: this free tool should be genuinely useful on its own and then lead naturally to Linkedo's SEO/content help ("Explore Content Services" → /seo, "Book a Strategy Call" → /contact). British spelling. Leave the footer (including the address) alone.
- **Code check before writing** (report the result): open the page component and the API route behind "Generate Outline" and confirm (a) what the output contains (title? H2/H3? notes per section? FAQ ideas? word targets?), (b) that every input listed in the FAQ and featureList exists with the exact labels used here, (c) whether there's any usage limit or sign-in, (d) whether the text a user types is stored or sent to a third-party AI service, and (e) whether the result can be copied or exported. **Change the copy, FAQ and featureList to match the code** (keep the JSON-LD identical to the visible FAQ), and if input is sent to a third-party AI service, add one honest sentence to the "What this generator won't do" list. **Do not name the AI model or provider.**

## Why this page (GSC first)
- GSC (16 Nov export, Web, 3 months 15 Aug–14 Nov 2026, `/workspace/gsc-onpage-2026-11-16/linkedo.co.uk/Pages.csv`): **/blog-outline-generator: 0 clicks, 34 impressions, avg pos ~54.9.** Page 6, no clicks: nothing to protect, so title, meta and copy can change; URL and H1 stay. It's the next "not done" core page after /consulting (Day 5).
- No query containing "outline" appears in Queries.csv (the page is too thin to be matched yet). Competitors in the UK results target **"free blog outline generator"** and **"blog post outline generator"**, so the title keeps that head term and adds "SEO blog posts".
- Live page (24 Nov fetch): 290 words, H1 "Free Blog Outline Generator", 3 H2s, Organization + ProfessionalService + WebSite only, 20 internal links (nav/footer + 2 related-tool cards). Inputs on the page: Blog Topic, Primary Keyword, Secondary Keywords (optional), Search Intent (Auto Detect / Informational / Commercial / Transactional / Navigational), Content Type (How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial, Beginner Guide), Target Audience (optional), Desired Word Count (800–2,500+), Tone (Professional, Simple, Friendly, Expert, Conversational). Extract: `/workspace/onpage-daily/2026-11-24/competitors/_own-pages/linkedo_co_uk_blog_outline_generator.txt`.

## Competitors checked (web search "free blog outline generator", UK, 24 Nov 2026)
| Competitor | Title (chars) | Words | Schema | What they have that we don't |
|---|---|---|---|---|
| [SEOBrain – Blog Outline Generator](https://seobrain.io/tools/blog-outline-generator/) | Free Blog Outline Generator - Write Faster, Rank Higher \| SEOBrain (66) | 1,722 | WebPage, Article, BreadcrumbList | **"How the blog outline maker works"**, **"Works across content types"**, **"When you need a structure — and when you need more than one" (outline vs content brief)**, FAQ section (not marked up) |
| [AIclicks – Content Outline Generator](https://aiclicks.io/tools/content-outline-generator) | Free Content Outline Generator — AI-Structured Article Briefs \| AIclicks (72) | 1,906 | SoftwareApplication | "What is a content outline generator?", "How to use", what you can do with the outline, links to related tools (meta title generator) |
| [Outrank – Blog Outline Generator](https://www.outrank.so/tools/blog-outline-generator) | Free Blog Outline Generator: Create SEO Outlines \| Outrank (58) | 638 | SoftwareApplication, HowTo, **FAQPage (6)** | 3-step how-it-works; FAQs "What is a blog outline generator?", "Can I customise the outline?", "What makes a good blog outline?", "Can I use the outlines for commercial content?" |
| [Automyc – Blog title and outline generator](https://automyc.com/tools/blog-outline-generator) | Blog title and outline generator \| Automyc (42) | 262 | WebApplication, **FAQPage (5)**, BreadcrumbList | **Honest limit: "This creates an outline, not a researched article. Verify facts and add your own evidence while writing."**; says where inputs are stored |
Extracts: `/workspace/onpage-daily/2026-11-24/competitors/linkedo/`. (Competitor claims such as "unlimited", "in seconds" or "based on top-ranking content" are theirs; **don't copy them**.)

**Gap summary:** the two strong competitors (1,700–1,900 words) explain what an outline generator is, how to use each option, which content type to pick, and when an outline isn't enough; three of four mark up a WebApplication/SoftwareApplication and two have FAQPage. Linkedo's tool has **more options than most of them** (intent, 7 content types, audience, word count, 5 tones) but the page explains none of them, has no FAQ or tool schema, and makes a speed claim. Fix: explain the options, add an honest limits block with Google's helpful-content guidance, an 8-question FAQ, WebApplication + FAQPage + BreadcrumbList, and links to the two meta tools and /seo.

## 1. Title, meta, H1
| Element | Current | New |
|---|---|---|
| Title | Free Blog Outline Generator \| Linkedo (37) | **Free Blog Outline Generator for SEO Blog Posts \| Linkedo** (56) |
| Meta description | Generate structured blog outlines instantly with our free AI tool. Create well-organised content frameworks to maximise engagement and SEO. (139) | **Free blog outline generator: enter a topic, keyword, search intent, content type and tone to get a structured H2/H3 outline you can edit and write from.** (152) |
| H1 | Free Blog Outline Generator | No change (keep the single H1) |
Update og:title / og:description / twitter:title / twitter:description to match, and the WebApplication `description` (section 5). Canonical is already self-referencing; keep it.

## 2. Edit existing copy (text only, same components)
- Hero line "Generate a structured outline in seconds." → **"Plan the structure of your post before you write a word."**
- Hero sub-line "Enter a topic and keywords to get a ready-to-use outline with clear headings, subheadings, and SEO guidance." → **"Enter a topic and keyword, choose the search intent, content type, audience, length and tone, and get an outline with clear headings and subheadings to write from."** (keep "SEO guidance" only if the code check shows the output includes notes per section).
- "How to Structure Great Blog Posts" list: "Use H2 and H3 headers to organize content logically" → **"Use H2 and H3 headings to organise content logically"**; "Consider adding FAQs for featured snippet opportunities" → **"Add a short FAQ when readers have common follow-up questions"** (no promise of snippets or rich results).
- Pro Tip: "…then customize it based on your unique expertise…" → **"…then customise it based on your own expertise and audience. Add first-hand experience, examples and sources so the post offers something readers can't get elsewhere."**
- "Need Professional Content?" text: "Let our content experts create high-quality blog posts that drive traffic and conversions." → **"Prefer to hand over the writing? Our team can plan and write blog content as part of our SEO services."** (keep the "Explore Content Services" button → /seo).

## 3. New sections (existing section components; insert in this order after "How to Structure Great Blog Posts" / the Pro Tip and before "Continue Creating")

**H2: How to Use the Blog Outline Generator**
1. **Add your topic and primary keyword.** Use the phrase a reader would actually type, such as "how to choose an accountant for a small business". Add secondary keywords only if they belong in the same post.
2. **Choose the search intent.** Leave it on Auto Detect, or pick Informational, Commercial, Transactional or Navigational if you already know what the reader wants (see below).
3. **Pick a content type.** How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial or Beginner Guide.
4. **Set the audience, length and tone.** Tell it who you're writing for, choose a desired word count from 800 to 2,500+ words, and pick a tone from Professional, Simple, Friendly, Expert or Conversational.
5. **Generate, then edit.** Click Generate Outline, then remove, merge or reorder sections until the plan matches what you know about the topic.

**H2: Choosing the Right Search Intent and Content Type**
The same keyword can need a very different post depending on why someone searches it. Before you generate, search the keyword yourself and look at what already appears on the first page.
- **Informational** ("what is…", "how to…"): the reader wants to learn. A How-To Guide, Tutorial, Beginner Guide or Ultimate Guide usually fits.
- **Commercial** ("best…", "… vs …", "… reviews"): the reader is comparing options. A Comparison or Listicle is usually the right shape.
- **Transactional** ("hire…", "buy…", "… near me"): the reader is ready to act. A blog post is often the wrong format here; a service or product page may serve them better.
- **Navigational** (a brand or product name): the reader wants a specific site or page. Only write for this if the brand is yours.
A Case Study suits any intent when you have real results and a real client story you're allowed to share.

**H2: What This Generator Won't Do**
An outline is a plan, not a finished article. This tool:
- doesn't check facts or find sources for you; add your own evidence and cite it;
- can't add your experience, opinions or examples, which are what make a post worth reading;
- doesn't know your other pages, so add internal links yourself;
- doesn't guarantee rankings, and the word count setting is a guide, not a target. Google says it has [no preferred word count](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
Google's guidance on [creating helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and on [using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) applies whichever tools you use: write for your readers first, and make sure the finished post adds something of value.
*(Add the storage / third-party AI sentence here only if the code check says it applies. Edit any bullet the code contradicts.)*

**H2: From Outline to Published Post**
Once the outline is right:
1. Answer the main question early, in plain language, then use the sections to go deeper.
2. Write each section for the reader, not for the keyword; use the keyword naturally where it fits.
3. Link to related pages on your own site where they genuinely help the reader.
4. Write a clear title tag and meta description with our [Meta Title Generator](/meta-title-generator) and [Meta Description Generator](/meta-description-generator).
5. Read it through once more and cut anything that doesn't help the reader.
If you'd rather someone else handled planning and writing, see our [SEO services](/seo) or browse more [free SEO tools](/free-ai-tools-online).

## 4. FAQs (exact text; new "Blog Outline Generator FAQs" section before "Need Professional Content?", same accordion as /meta-title-generator, **all 8 answers in the server HTML** via `forceMount`; panels may start collapsed). Q2, Q3, Q4 and Q7 must match the code check; reword them if the code says otherwise and keep the JSON-LD identical
1. **What is a blog outline generator?** A blog outline generator turns a topic and keyword into a suggested structure for a post: a working title, the main sections (H2s), the points under each one (H3s) and notes on what to cover. You still write the post; the outline helps you decide what goes where before you start.
2. **How do I use the Linkedo blog outline generator?** Enter your blog topic and primary keyword, add any secondary keywords, then choose the search intent (or leave it on Auto Detect), the content type, your target audience, a desired word count and a tone. Click Generate Outline, read the result and edit it to fit what you know about the subject.
3. **What does the search intent option change?** It tells the generator what the reader is trying to do. Informational posts explain or teach, commercial posts help people compare options, transactional posts support someone ready to act, and navigational intent is for people looking for a specific brand or page. Auto Detect lets the tool choose from your topic and keyword.
4. **Which content types can I choose?** How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial and Beginner Guide. Each one produces a different shape of outline, so pick the format that matches what people searching for your keyword expect to see.
5. **Is the outline ready to publish?** No. It's a plan, not an article. Check every heading against what your readers need, add your own experience, examples and sources, and cut anything that doesn't belong. Google's guidance asks for content written for people first, whichever tools you use to produce it.
6. **Does the word count option guarantee a length Google prefers?** No. The word count setting only helps the outline suggest a sensible number of sections. Google says it has no preferred word count, so write as much as the topic needs to answer the reader fully, and no more.
7. **Is the blog outline generator free?** Yes, the tool is free to use on this page.
8. **Can Linkedo write the blog posts for me?** Yes. If you'd rather hand over the writing, our team can plan and write blog content as part of our SEO services. Book a strategy call to talk through your topics and goals.

In Q8 link "SEO services" → /seo and "Book a strategy call" → /contact.

**FAQ markup pattern (answers present in the raw HTML; reuse the existing accordion component and classes, this only shows the required structure):**
```html
<section id="faq">
  <details>
    <summary><h3>What is a blog outline generator?</h3></summary>
    <p>A blog outline generator turns a topic and keyword into a suggested structure for a post: a working title, the main sections (H2s), the points under each one (H3s) and notes on what to cover. You still write the post; the outline helps you decide what goes where before you start.</p>
  </details>
  <details>
    <summary><h3>How do I use the Linkedo blog outline generator?</h3></summary>
    <p>Enter your blog topic and primary keyword, add any secondary keywords, then choose the search intent (or leave it on Auto Detect), the content type, your target audience, a desired word count and a tone. Click Generate Outline, read the result and edit it to fit what you know about the subject.</p>
  </details>
  <details>
    <summary><h3>What does the search intent option change?</h3></summary>
    <p>It tells the generator what the reader is trying to do. Informational posts explain or teach, commercial posts help people compare options, transactional posts support someone ready to act, and navigational intent is for people looking for a specific brand or page. Auto Detect lets the tool choose from your topic and keyword.</p>
  </details>
  <details>
    <summary><h3>Which content types can I choose?</h3></summary>
    <p>How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial and Beginner Guide. Each one produces a different shape of outline, so pick the format that matches what people searching for your keyword expect to see.</p>
  </details>
  <details>
    <summary><h3>Is the outline ready to publish?</h3></summary>
    <p>No. It&#x27;s a plan, not an article. Check every heading against what your readers need, add your own experience, examples and sources, and cut anything that doesn&#x27;t belong. Google&#x27;s guidance asks for content written for people first, whichever tools you use to produce it.</p>
  </details>
  <details>
    <summary><h3>Does the word count option guarantee a length Google prefers?</h3></summary>
    <p>No. The word count setting only helps the outline suggest a sensible number of sections. Google says it has no preferred word count, so write as much as the topic needs to answer the reader fully, and no more.</p>
  </details>
  <details>
    <summary><h3>Is the blog outline generator free?</h3></summary>
    <p>Yes, the tool is free to use on this page.</p>
  </details>
  <details>
    <summary><h3>Can Linkedo write the blog posts for me?</h3></summary>
    <p>Yes. If you&#x27;d rather hand over the writing, our team can plan and write blog content as part of our SEO services. Book a strategy call to talk through your topics and goals.</p>
  </details>
</section>
```

## 5. Schema (JSON-LD), this page only
**WebApplication** (new; the page has none). Keep `featureList` only for features the code check confirms:
```json
{
 "@context": "https://schema.org",
 "@type": "WebApplication",
 "@id": "https://linkedo.co.uk/blog-outline-generator#app",
 "name": "Free Blog Outline Generator",
 "url": "https://linkedo.co.uk/blog-outline-generator",
 "description": "Free blog outline generator: enter a topic, keyword, search intent, content type and tone to get a structured H2/H3 outline you can edit and write from.",
 "applicationCategory": "BusinessApplication",
 "operatingSystem": "Any",
 "isAccessibleForFree": true,
 "featureList": [
  "Blog topic, primary keyword and optional secondary keywords",
  "Search intent: auto detect, informational, commercial, transactional or navigational",
  "Content types: how-to guide, listicle, comparison, ultimate guide, case study, tutorial, beginner guide",
  "Target audience, desired word count and tone options",
  "Structured outline with H2 and H3 headings"
 ],
 "offers": {
  "@type": "Offer",
  "price": "0",
  "priceCurrency": "GBP"
 },
 "provider": {
  "@id": "https://linkedo.co.uk/#organization"
 }
}
```

**FAQPage** (new; must match the 8 visible Q&As word for word):
```json
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": "https://linkedo.co.uk/blog-outline-generator#faq",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What is a blog outline generator?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "A blog outline generator turns a topic and keyword into a suggested structure for a post: a working title, the main sections (H2s), the points under each one (H3s) and notes on what to cover. You still write the post; the outline helps you decide what goes where before you start."
   }
  },
  {
   "@type": "Question",
   "name": "How do I use the Linkedo blog outline generator?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Enter your blog topic and primary keyword, add any secondary keywords, then choose the search intent (or leave it on Auto Detect), the content type, your target audience, a desired word count and a tone. Click Generate Outline, read the result and edit it to fit what you know about the subject."
   }
  },
  {
   "@type": "Question",
   "name": "What does the search intent option change?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "It tells the generator what the reader is trying to do. Informational posts explain or teach, commercial posts help people compare options, transactional posts support someone ready to act, and navigational intent is for people looking for a specific brand or page. Auto Detect lets the tool choose from your topic and keyword."
   }
  },
  {
   "@type": "Question",
   "name": "Which content types can I choose?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial and Beginner Guide. Each one produces a different shape of outline, so pick the format that matches what people searching for your keyword expect to see."
   }
  },
  {
   "@type": "Question",
   "name": "Is the outline ready to publish?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "No. It's a plan, not an article. Check every heading against what your readers need, add your own experience, examples and sources, and cut anything that doesn't belong. Google's guidance asks for content written for people first, whichever tools you use to produce it."
   }
  },
  {
   "@type": "Question",
   "name": "Does the word count option guarantee a length Google prefers?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "No. The word count setting only helps the outline suggest a sensible number of sections. Google says it has no preferred word count, so write as much as the topic needs to answer the reader fully, and no more."
   }
  },
  {
   "@type": "Question",
   "name": "Is the blog outline generator free?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, the tool is free to use on this page."
   }
  },
  {
   "@type": "Question",
   "name": "Can Linkedo write the blog posts for me?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. If you'd rather hand over the writing, our team can plan and write blog content as part of our SEO services. Book a strategy call to talk through your topics and goals."
   }
  }
 ]
}
```

**BreadcrumbList** (new; Home › Free AI Tools › Blog Outline Generator):
```json
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
  {
   "@type": "ListItem",
   "position": 1,
   "name": "Home",
   "item": "https://linkedo.co.uk"
  },
  {
   "@type": "ListItem",
   "position": 2,
   "name": "Free AI Tools",
   "item": "https://linkedo.co.uk/free-ai-tools-online"
  },
  {
   "@type": "ListItem",
   "position": 3,
   "name": "Blog Outline Generator",
   "item": "https://linkedo.co.uk/blog-outline-generator"
  }
 ]
}
```

Don't touch the sitewide Organization / ProfessionalService / WebSite blocks (hours stay 24/7). No AggregateRating, no Review markup.

## 6. Internal links (body copy, natural anchors)
- "Meta Title Generator" → /meta-title-generator and "Meta Description Generator" → /meta-description-generator (section 3, step 4 of "From Outline to Published Post")
- "SEO services" → /seo (section 3 and FAQ 8) · "free SEO tools" → /free-ai-tools-online (section 3) · "Book a strategy call" → /contact (FAQ 8)
- External: [Google – creating helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and [Google – using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).
- Keep existing links (related tool cards, "View All Tools", "Explore Content Services"). All targets are in the live sitemap and returned 200 on 24 Nov.

## 7. Do NOT touch
- Tool form, inputs, options, generator logic, layout, nav, footer (including the address), images, the related-tool cards.
- No "Ltd", "UK-registered", "London-based", testimonials, ratings, user counts, speed claims or invented numbers. Don't name the AI model or provider.
- Don't change other pages: /meta-title-generator (Day 3), /consulting (Day 5), /seo (Day 4), /google-ads (Day 2), /london/seo (Day 1), /meta-description-generator, /utm-builder.
- URL stays `/blog-outline-generator`. No redirects.

## 8. Verify after deploy (report back)
1. https://linkedo.co.uk/blog-outline-generator returns 200 with a self-referencing canonical. Report the **live URL, PR number and merge SHA**, and the code-check result from the brand rules.
2. Rendered `<title>`, meta and og tags match section 1 exactly; exactly one H1 ("Free Blog Outline Generator").
3. The 4 new H2s and the FAQ section are visible; word count roughly 1,000+; "in seconds", "instantly", "customize" and "organize" no longer appear.
4. **All 8 FAQ answers are in the raw HTML**: `curl -s https://linkedo.co.uk/blog-outline-generator | grep -c "Google says it has no preferred word count"` ≥ 1 and grep finds "How-To Guide, Listicle, Comparison".
5. Rich Results Test / schema validator: one WebApplication (price 0 GBP), FAQPage (8) and BreadcrumbList (3 levels), all valid.
6. `grep -iE "Ltd|UK-registered|London-based|testimonial|£"` on the page body finds nothing new (footer address untouched).
7. The tool still generates an outline; new internal links and both Google links return 200.
