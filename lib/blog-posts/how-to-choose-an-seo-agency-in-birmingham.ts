import type { ContentBlock } from "./types"

function parseMarkdown(markdown: string): ContentBlock[] {
  const lines = markdown.split("\n")
  const blocks: ContentBlock[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) {
      index += 1
      continue
    }
    if (line.startsWith("# ")) {
      index += 1
      continue
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) })
      index += 1
      continue
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4) })
      index += 1
      continue
    }
    if (line.startsWith("- ")) {
      const items: string[] = []
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2))
        index += 1
      }
      blocks.push({ type: "ul", items })
      continue
    }
    if (line.startsWith("|")) {
      const tableLines: string[] = []
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index].trim())
        index += 1
      }
      const rows = tableLines
        .map((row) => row.replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()))
        .filter((row) => !row.every((cell) => /^:?-{2,}:?$/.test(cell)))
      if (rows.length > 0) {
        blocks.push({ type: "table", headers: rows[0], rows: rows.slice(1) })
      }
      continue
    }

    const paragraph = [line]
    index += 1
    while (index < lines.length) {
      const next = lines[index].trim()
      if (!next || next.startsWith("## ") || next.startsWith("### ") || next.startsWith("- ") || next.startsWith("|")) {
        break
      }
      paragraph.push(next)
      index += 1
    }
    blocks.push({ type: "p", text: paragraph.join(" ") })
  }

  return blocks
}

export const birminghamSeoAgencyPost = {
  slug: "how-to-choose-an-seo-agency-in-birmingham",
  title: "How to Choose an SEO Agency in Birmingham: A Practical UK Checklist",
  excerpt:
    "This guide explains how to choose an SEO agency in Birmingham. It covers the checks to run, the questions to ask, the red flags to avoid and what honest pricing looks like.",
  category: "SEO",
  date: "2026-11-12",
  readTime: "7 min read",
  image: "/seo-analytics-dashboard.png",
  content: parseMarkdown(String.raw`Last updated: 12 November 2026

Search for "SEO agency Birmingham" and the results blur together. Several of the pages we checked in November 2026 were directories, and some covered Birmingham, Alabama. A wrong pick costs you months and a monthly retainer.

This guide explains how to choose an SEO agency in Birmingham. It covers the checks to run, the questions to ask, the red flags to avoid and what honest pricing looks like.

## How to Choose an SEO Agency in Birmingham: Five Checks in Brief

To choose an SEO agency in Birmingham, check five things: fit, proof, method, reporting and terms.

- **Fit:** the agency has worked with businesses like yours, in markets like yours.
- **Proof:** it shows past work and explains how it measured the results.
- **Method:** it follows Google's guidelines and tells you what it will change.
- **Reporting:** its reports link work to enquiries, calls or sales, not only rankings.
- **Terms:** it writes down the scope, price, access and notice period.

The sections below show how to test each one. Linkedo wrote this guide and sells SEO services, so hold Linkedo to every check in it.

## Start With What Your Business Needs From SEO

Write down your goal before you compare agencies, because local and national goals need different work.

A plumber serving Erdington needs calls from nearby searches. An online shop selling across the UK needs national product visibility. Those goals lead to different work and different budgets.

Two proposals can both promise better visibility. One may include the website work. The other may leave that job to you. Write the same brief for every agency you speak to. Include your website, the jobs or sales you want more of, the areas you serve and how customers usually get in touch. Then ask each agency what it would tackle first.

For many service firms, SEO for small businesses in Birmingham starts with local search. Local SEO Birmingham work usually centres on your Google Business Profile, your service and location pages, and genuine reviews.

[Google's guide to hiring an SEO](https://developers.google.com/search/docs/beginner/do-i-need-seo) says a small local business can probably do much of the work itself. That does not make an agency pointless. It means you should decide which jobs you want to hand over, and why.

You also share the market with many other businesses. [Birmingham City Council's 2024 business count](https://www.birmingham.gov.uk/download/downloads/id/8449/birmingham_business_count_update_2017.pdf), based on ONS data, lists 37,245 enterprises in the city in March 2024.

Many sit in other sectors, so ask any agency to name the competitors you actually face for your searches.

## Does an SEO Agency Need a Birmingham Base?

An SEO agency does not need a Birmingham base, but it should show experience in markets like yours.

Google's hiring advice asks about an SEO's experience in your industry, your country and your city. Treat those as three separate questions. Ask for examples that match each one.

First, check which Birmingham you are reading about. Our searches for this guide returned pages about Birmingham, Alabama, plus directories and listicles. Add "UK" to your search and confirm the agency works with UK businesses.

Next, test any claim of a Birmingham office. Google says a rented mailing address where nobody works [is not eligible for a Business Profile](https://support.google.com/business/answer/3038177).

Google lets a co-working office qualify only with clear signage, customer visits and the business's own staff during business hours. Ask where the team sits, and whether the address passes those tests.

A missing street address is not a red flag on its own. Google tells service-area businesses to hide their address from customers. An address that fails the tests above is the real warning sign.

Linkedo is a UK digital marketing agency, London-based and remote. It serves businesses across the UK, including Birmingham, and does not list a Birmingham address on its site.

If you want regular in-person meetings, a Birmingham-based agency may suit you better. If video calls work for you, test proof and method first, and read [how Linkedo works with Birmingham businesses remotely](https://linkedo.co.uk/birmingham).

## What Proof Should an SEO Agency Show You?

An SEO agency should show past work with a baseline, a time frame and a result measured in enquiries, calls or sales.

- **Baseline and dates:** where the site started, and over what period the result happened.
- **The right metric:** leads or sales, not only visits or rankings.
- **The actions:** what the agency changed, in plain language.
- **The people:** whether the team that did the work will work on your account.
- **A reference:** a client you can speak to, or anonymised data if the agency cannot name the client.

Treat screenshots without dates, baselines or client names with caution. Ask the agency to explain what drove the change.

Also ask for one finding from your own website. Ask the agency to show you a page it would improve, and to explain why. If an important service page gets clicks but few enquiries, ask how it would check the mobile layout, the enquiry form and the searches that bring people to that page.

## Questions to Ask an SEO Agency Before You Hire

Ask every agency the same six questions and compare the answers side by side.

| Question | A good answer | A warning sign |
|---|---|---|
| Can you show similar work? | Past work in a comparable market, with how you measured results | Screenshots with no context or numbers |
| What happens in the first month? | An audit, a prioritised fix list and a plan | "We will start with links" |
| How will you report? | Enquiries, calls and sales alongside rankings | A rankings PDF and nothing else |
| Who does the work? | Named people and one main contact | A pitch team that disappears after signing |
| What access do you need? | Read-only Search Console access for the audit | Full admin access before any work starts |
| What are the terms? | Written scope, price and notice period | A long lock-in with no review point |

Ask who will write or edit pages, who will make technical changes and who will approve them. If your web developer needs to handle a fix, ask whether the agency will write the instructions and check the work afterwards.

Google's list adds more. Ask whether the agency follows Google Search Essentials, how long it has traded, and whether it will share every change it makes. A good agency also asks about your competitors.

## Red Flags When Choosing an SEO Agency

Walk away from any agency that guarantees a number-one ranking, because no one can guarantee that on Google.

- **Guaranteed rankings** or "page one in 30 days".
- **Unsolicited emails** offering to fix your site. Google advises treating them like spam.
- **A "special relationship" with Google** or a "priority submit". Google lists both as red flags.
- **Secrecy** or vague answers about what the agency will change.
- **Link schemes**, such as bulk links or paid placements.
- **A request that you link to the agency.** Google says you should never have to.
- **False business addresses**, or a proposal that relies on a made-up location.

Google says you remain responsible for the actions of any company you hire. Keep your Google accounts in your own name, and give an agency the lowest access it needs for the job.

## How to Judge AI Search and GEO Claims

Judge AI search claims by checking whether the advice matches Google's own guidance on its generative AI features.

Google's hiring advice tells you to check an SEO's recommendations against official documentation before you make major changes. For AEO or GEO services, it says to check that the advice matches Google's guidance.

Google also says it does not endorse third-party SEO tools, and it warns against any tool that claims Google approved it. Ask which tools the agency uses and what each one measures.

Ask the agency to cite the source for each recommendation. If the answer is a secret technique, look elsewhere.

## How Much Does SEO Cost for Small Businesses in Birmingham?

We found no independent Birmingham price benchmark, so compare what each quote includes, not only the headline figure.

UK buyer guides published in 2026 disagree widely. Their ranges for small-business SEO run from roughly £800 to £3,000 a month, and the three we read in full gave no clear method for their figures.

A wide spread usually signals different scope. Ask how many hours a month the price buys, who does the work and what you receive each month. Compare every quote on the same points, in writing.

| Ask about | What to get in writing |
|---|---|
| Website changes | Which pages the agency will edit and who will put those changes live. |
| Content | Who will write and approve it, and whether publishing is included. |
| Local SEO | Which profile and website updates the agency will handle. |
| Fees | What the regular fee includes, which tasks need a separate quote, and whether you will need to pay a developer separately. |
| Ending the agreement | How much notice you need to give and what work and account access you keep. |

Linkedo's [published SEO pricing](https://linkedo.co.uk/pricing) is £399 a month, covering a technical SEO audit, on-page optimisation, keyword research and strategy, and monthly performance reporting. Linkedo bills only SEO monthly, and its pricing page states there are no long-term lock-in contracts.

That figure sits below the ranges in those guides, so ask exactly what any plan covers and what it leaves out, ours included. [Linkedo's SEO services](https://linkedo.co.uk/seo) show the kinds of work a plan can cover, from an initial audit to keyword research and page changes.

## What Local SEO in Birmingham Should Include

Local SEO in Birmingham should cover your Google Business Profile, your location and service pages, and your reviews.

Ask how the agency will set up your Business Profile. Google says a service-area business with no storefront can hold one profile and should hide its address.

The right address depends on how you serve customers. A garage in Digbeth that takes bookings at its premises has different profile needs from a mobile tyre fitter who visits drivers and never serves them at the business address. Ask the agency what address customers should see in each case, and why. Ask it to explain this before it proposes a new profile or address change.

Ask where the agency checks your visibility when it shows you a Maps ranking. One result from one location tells you very little about the rest of Birmingham.

Ask how it will define your service area. Google advises that a service area generally stays within about two hours' driving time of your base.

Ask to see a sample location page. If it only swaps the town name, it adds little for readers. A page about Moseley, Kings Heath or Solihull should say something true about the work you do there.

Ask how the agency gets reviews. Only genuine reviews from real customers belong on your profile.

## What Your First 90 Days Should Include

Your first 90 days should deliver an audit, a prioritised fix list and a first report that ties work to enquiries.

- **Month one:** an audit, access set-up and agreed priorities.
- **Month two:** the first technical, on-page and Business Profile fixes.
- **Month three:** a report linking the work to calls, enquiries or sales, and a revised plan.

Google says an audit should give realistic estimates of the improvement and the work involved. Ranking gains can take longer than 90 days, and no agency controls Google. Agree on an early review to check which changes the agency has made and whether tracking works.

## How to Check an SEO Agency's Enquiry Reports

An agency's reports should connect search work to enquiries you can act on. Search Console clicks can show that people found your site. Your enquiry records can help you see which calls or forms led to a quote or booking.

Before you rely on the first report, submit a test enquiry. Check that the form reaches your inbox, and ask the agency to show the event in Google Analytics.

If the report includes phone activity, ask whether it counts taps on a phone number or calls someone answered. Agree how you will record enquiries that fit your services and area. A call from outside your coverage may still count as a call, even if you cannot take the job.

## Frequently Asked Questions

### Is SEO worth it for small businesses in Birmingham?

SEO can be worth it when customers search for your services and you have a clear way to handle enquiries. Ask which service or area the agency would start with, and how you will measure progress.

### How much does an SEO agency cost in Birmingham?

We found no independent Birmingham benchmark. UK guides quote roughly £800 to £3,000 a month for small-business SEO, with weak sourcing. Compare scope and deliverables, not price alone. Ask whether the quote covers the audit, website changes, content, local SEO and reporting, and whether you will need to pay a developer separately.

### How long does SEO take to work?

SEO takes months, and no agency controls Google's rankings. Ask for a first-90-days plan and a list of what you will see each month. Treat promises of fast number-one rankings as a red flag.

### Do I need an SEO agency based in Birmingham?

No. Proof in similar markets and a method that follows Google's guidelines matter more than a postcode. Check any claimed Birmingham office, and choose a local agency if in-person meetings matter to you. Ask how the agency learns where your customers search, and how often you will speak to the person doing the work.

### Can an SEO agency guarantee first-page rankings?

No. Google says no one can guarantee a number-one ranking. Walk away from any agency that does.

### What access should an SEO agency need?

For an audit, give read-only access to Google Search Console. Google advises against write access at that stage. For day-to-day Business Profile work, you can invite an agency as a manager and keep ownership with your business. Check who controls Search Console, analytics and your Business Profile before work starts. Keep your accounts in your own name throughout.

## A Simple Way to Shortlist

Shortlist three agencies, send each the same brief and compare their answers using the six questions above.

Linkedo lists its hours as 24 hours a day, 7 days a week, and offers a free strategy call on its Birmingham page. Ask Linkedo the same questions you ask everyone else.`),
}
