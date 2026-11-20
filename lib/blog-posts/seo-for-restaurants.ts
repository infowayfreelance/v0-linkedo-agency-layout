import type { ContentBlock } from "./types"

function parseRestaurantArticle(markdown: string): ContentBlock[] {
  const lines = markdown.split("\n")
  const blocks: ContentBlock[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }
    if (line.startsWith("## ")) {
      const heading = line.slice(3)
      blocks.push({ type: "h2", text: heading })
      const imageByHeading: Record<string, { src: string; alt: string }> = {
        "How Google decides local restaurant results": { src: "/blog/restaurant-local-pack-phone.webp", alt: "Smartphone showing local restaurant search results in Google Maps" },
        "What your restaurant website still needs to do": { src: "/blog/restaurant-website-menu.webp", alt: "Restaurant website showing a menu and booking information" },
        "A Bristol worked example": { src: "/blog/bristol-restaurant-neighbourhood.webp", alt: "Restaurant neighbourhood in Bristol showing local streets and dining venues" },
      }
      if (imageByHeading[heading]) blocks.push({ type: "image", ...imageByHeading[heading] })
      i++; continue
    }
    if (line.startsWith("### ")) { blocks.push({ type: "h3", text: line.slice(4) }); i++; continue }
    if (/^\d+\. /.test(line) || line.startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && (/^\d+\. /.test(lines[i].trim()) || lines[i].trim().startsWith("- "))) {
        items.push(lines[i].trim().replace(/^(?:\d+\. |[-] )/, "")); i++
      }
      blocks.push({ type: "ul", items }); continue
    }
    if (line.startsWith("|")) {
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(lines[i].trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim())); i++
      }
      const clean = rows.filter(row => !row.every(c => /^:?-{2,}:?$/.test(c)))
      if (clean.length) blocks.push({ type: "table", headers: clean[0], rows: clean.slice(1) })
      continue
    }
    const para = [line]; i++
    while (i < lines.length) {
      const next = lines[i].trim()
      if (!next || next.startsWith("## ") || next.startsWith("### ") || next.startsWith("- ") || /^\d+\. /.test(next) || next.startsWith("|")) break
      para.push(next); i++
    }
    blocks.push({ type: "p", text: para.join(" ") })
  }
  return blocks
}

export const restaurantSeoFaqs = [
  {
    "@type": "Question",
    "name": "Is restaurant SEO just about Google Business Profile, or do I still need a website?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You need both. The profile is usually the main listing in Maps and the local pack, but the website is where you publish a crawlable menu, a booking or order path, and a consistent name, address and phone number."
    }
  },
  {
    "@type": "Question",
    "name": "What category should a restaurant choose on Google Business Profile?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Choose the most specific primary category that describes your core business, and only extra categories that are genuinely true. Google asks for the fewest categories that do that job, and not to use categories only as keywords."
    }
  },
  {
    "@type": "Question",
    "name": "How often should a restaurant add new photos or update its hours?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Update hours whenever they change, including bank holidays and one-off closures, and do it before diners are likely to search. Add photos often enough that the profile still shows the current room, food and exterior. There is no official quota."
    }
  },
  {
    "@type": "Question",
    "name": "Can I add \"best pizza in Bristol\" to my Google Business name?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. The name must match your real-world trading name. Google does not permit unnecessary information such as marketing taglines or extra location phrases in the name, and that can lead to suspension. Put location and cuisine in the category, address and description instead."
    }
  },
  {
    "@type": "Question",
    "name": "Should I put my full menu on my website, on Google, or both?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Both, and keep them consistent. The website should host a crawlable menu; the Business Profile should link to it and use the menu features available to you."
    }
  },
  {
    "@type": "Question",
    "name": "Do restaurant reviews affect local rankings?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "They can form part of prominence. Google says more reviews and positive ratings can help local ranking. That is not a reason to pay for reviews or to chase a promised rating. Ask genuinely, and reply to what you receive."
    }
  },
  {
    "@type": "Question",
    "name": "Can a UK agency help a Bristol restaurant with local SEO if it is not based in Bristol?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. An agency does not need a Bristol office to work on a restaurant's profile, website and local search. What matters is an understanding of how local results work, of the actual location and customers, and of the work that will be done. Linkedo can support restaurants in Bristol and in other UK cities, and is available 24/7."
    }
  }
]

export const restaurantSeoPost = {
  slug: "seo-for-restaurants",
  title: "SEO for Restaurants: A Practical UK Local SEO Guide (Including Bristol)",
  excerpt: "A practical local SEO guide for UK restaurants: Google Business Profile, menus, reviews and your website, with a Bristol worked example.",
  category: "SEO",
  date: "2026-11-20",
  readTime: "9 min read",
  image: "/blog/seo-for-restaurants-featured.webp",
  author: { name: "Junaid Mazhar", role: "SEO Director", avatar: "/team/junaid-mazhar.webp" },
  content: parseRestaurantArticle("Independent restaurants in the UK often want the same thing from Google: to appear when someone nearby looks for a cuisine, a neighbourhood, or a table \"near me\". For most single-site restaurants, that work is local SEO — Maps and the local pack — rather than a national content programme.\n\nThis guide is a practical checklist for restaurant SEO in the UK. It starts with how Google describes local results, then covers your Google Business Profile, reviews, what your website still needs to do, and a short, accurate note on restaurant structured data. Bristol is the worked example, because searches such as \"Italian restaurant Bristol\" are typical of the way diners look for a table, but the same steps apply in other UK cities.\n\nIt is not a ranked list of restaurants or agencies, and it does not invent traffic, review or ranking results. The aim is to help you put accurate information in front of people who are already looking for a place to eat.\n\n## Short answer: what restaurant SEO actually is in 2026\n\nFor most single-site restaurants, restaurant SEO is local SEO. When someone searches on a phone for \"Italian restaurant\", Google tries to show nearby places they might actually visit. That example comes from Google's own help on [how local results work](https://support.google.com/business/answer/7091?hl=en). The same pattern holds for \"near me\", \"open now\", and city or neighbourhood searches.\n\nWhat you can influence is how clearly your restaurant is represented: a complete, accurate Google Business Profile, genuine reviews, and a website that publishes your menu, hours, location and a way to book or order. What you cannot do is buy a place in the local pack. Google states that there is no way to request or pay for a better local ranking.\n\nA national blog programme can still help a group or a destination restaurant, but it is not the starting point for a neighbourhood kitchen that wants to be found by people already in the area.\n\n## How Google decides local restaurant results\n\nGoogle says local results are mainly based on three factors: relevance, distance and prominence. The same help page also uses the word \"popularity\" for that third factor. None of these is a score you can purchase, and Google does not publish the exact weighting.\n\n**Relevance** is how well your Business Profile matches the search. A complete profile — the right category, a clear description, accurate hours and attributes — helps Google understand that you are an Italian restaurant, a vegan cafe or a fish-and-chip shop, rather than a generic \"Restaurant\".\n\n**Distance** is how far the restaurant is from the person searching. If they do not share a location, Google uses what it knows about where they are. Two people searching \"Italian restaurant\" on opposite sides of Bristol can see different local packs, and both can be correct. Checking your own ranking from the pass can be misleading.\n\n**Prominence** is how well known the business is. Google says this can include how many websites link to you and how many reviews you have, and that more reviews and positive ratings can help local ranking. Collect genuine reviews over time; do not treat any volume as a promised ticket into the pack.\n\nSome cuisine and \"near me\" searches may also show an AI-generated overview. Clear, accurate information on your profile and website still matters. For a wider explanation, see Linkedo's guide to [what AI SEO is](https://linkedo.co.uk/blog/what-is-ai-seo).\n\n## Your Google Business Profile checklist\n\nFor a restaurant that people visit in person, the Business Profile is usually the most important listing you control. Work through this in order, and keep it accurate as things change.\n\n1. **Claim and verify the profile.** Google says a verified profile is more likely to show up in search results, because it confirms you are authorised to represent the business.\n2. **Use your real-world name.** [Google's guidelines for representing your business](https://support.google.com/business/answer/3038177?hl=en) require the name to match what is used consistently on your storefront, website and stationery. Do not add marketing lines or extra location phrases. \"Best pizza in Bristol\" does not belong in the name. Unnecessary information is not permitted and can lead to suspension.\n3. **Keep one profile per location.** A second listing for the same dining room causes problems on Maps and Search. If you have two restaurants, each address needs its own profile.\n4. **Choose a specific primary category.** Google asks you to pick the fewest categories that describe your core business, and not to use categories only as keywords. \"Italian restaurant\" or \"Indian restaurant\" is more useful than a vague \"Restaurant\" if that is what you actually are. Add further categories only when they are genuinely true — for example a cocktail bar, if you really run one.\n5. **Keep hours accurate, including bank holidays.** Google specifically mentions special hours. Mark a closure or a one-off late sitting before diners are likely to search.\n6. **Keep name, address and phone consistent.** The details on the profile should match the website and any other listings you control.\n7. **Add menu and booking or order links.** If you take reservations or offer delivery, use the fields meant for those actions. Google does not allow links in the business description itself.\n8. **Fill in attributes only when they are true.** Parking, outdoor seating, wheelchair access or Wi-Fi help relevance and help diners. Guesswork does not.\n9. **Add current photos and videos.** Google recommends photos and videos so customers can see what you offer. Show the room, the food and the exterior as they are now. There is no official photo quota; stale pictures of a finished refurbishment are more of a problem than a missing count.\n\n## Reviews: how to ask, how to reply, what not to do\n\nReviews are part of prominence, and they also help someone decide whether to book. Google's [tips on getting reviews](https://support.google.com/business/answer/3474122?hl=en) are plain: contributions must reflect a genuine experience. Offering incentives — free or discounted food or drink, or any other benefit — in exchange for posting, changing or removing a review is treated as fake and misleading content and is strictly prohibited.\n\nYou can remind customers after a visit, including with a Google review link or a QR code. Keep the request neutral. Do not ask only tables that seemed pleased, and do not write reviews on a customer's behalf.\n\nReply to reviews, including critical ones. Google notes that helpful replies show you value feedback, and that a mix of positive and negative comments often feels more trustworthy. Keep replies professional, short and specific. Do not use a reply to offer a deal, and do not argue in public about a diner's character. If a review appears to break Google's rules, flag it rather than waging a comment war.\n\nNone of this comes with a promised rating or a target number of reviews.\n\n## What your restaurant website still needs to do\n\nA strong Business Profile does not replace a website. The site is where you can publish a full, crawlable menu, explain how booking works, and give Google and diners a stable page for your name, address, hours and phone number.\n\nAt a minimum, a restaurant website should include:\n\n- A menu that can be read in the browser, not only a PDF, a social post or a photograph of a chalkboard. If the menu changes often, date it and keep it updated.\n- Accurate opening hours, including seasonal or Sunday changes.\n- The same name, address and phone number as the Business Profile, easy to find on a phone.\n- A clear path to reserve a table or place an order, without forcing someone to hunt through several pages.\n- Pages that work well on a small screen. Many \"near me\" searches happen on a phone, on the way to, or already in, the area.\n\nIf visits arrive but bookings do not, the issue may be the path from the page to the reservation, not only visibility. Linkedo's guide to [SEO and conversion rate](https://linkedo.co.uk/blog/seo-conversion-rate) covers that step.\n\nLocal mentions and links can support prominence when they are genuine — a listing, a real write-up or a neighbourhood page that refers to you accurately. There is no honest volume target to buy.\n\n## A Bristol worked example\n\nImagine an independent Italian restaurant in Clifton. A diner might search \"Italian restaurant Bristol\", \"Italian restaurant Clifton\", \"Italian near me\" or \"Italian open now\". Those queries are not the same, and they do not always produce the same results.\n\nBecause distance is measured from the searcher, someone in Clifton will often see a tighter, closer set of places than someone searching from Bedminster or from the other side of the city, even when both type \"Italian restaurant\". City-wide searches still matter, but they are only part of the picture. Neighbourhood names (Clifton, Gloucester Road, Bedminster and others that genuinely describe where you are) and \"open now\" change what Google is trying to match.\n\nThe profile and the website should describe the real location clearly: the address, the area you actually serve, the hours for that dining room, and the cuisine you actually cook. A Clifton restaurant does not need a thin page for every Bristol neighbourhood it does not occupy. Neighbourhood pages are useful only when they describe a real site.\n\nIf you run more than one restaurant, each address needs its own Business Profile, with its own hours, photos and reviews. Linkedo works with businesses in [Bristol](https://linkedo.co.uk/bristol) and, where a group has sites in more than one city, through its [locations](https://linkedo.co.uk/locations) pages. This example is a walk-through of the search behaviour, not a ranking claim for any particular restaurant.\n\n## Menu, categories and a short note on restaurant schema\n\nPut the full menu on your website, and link that same menu from your Business Profile. Keeping both up to date avoids the familiar problem of a diner arriving for a dish you stopped serving last month. Categories on the profile should match the cuisine on the menu; do not pick extra categories just to appear for more searches.\n\nStructured data can support the same facts in a form Google can parse. It is not a ranking hack, and Google does not guarantee that markup will produce a special result. [Google's local business structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) asks you to use the most specific type you can — for a restaurant, that is `Restaurant`. Required properties include `name` and `address`. Recommended properties for food businesses include `menu` (a full URL of the menu page), `openingHoursSpecification`, `servesCuisine`, `telephone` and `url`.\n\nThe markup should match what is visible on the page. If you are not comfortable editing it, a developer can add it; the content of the menu and hours still comes first.\n\n## Frequently asked questions\n\n**Is restaurant SEO just about Google Business Profile, or do I still need a website?**\n\nYou need both. The profile is usually the main listing in Maps and the local pack, but the website is where you publish a crawlable menu, a booking or order path, and a consistent name, address and phone number.\n\n**What category should a restaurant choose on Google Business Profile?**\n\nChoose the most specific primary category that describes your core business, and only extra categories that are genuinely true. Google asks for the fewest categories that do that job, and not to use categories only as keywords.\n\n**How often should a restaurant add new photos or update its hours?**\n\nUpdate hours whenever they change, including bank holidays and one-off closures, and do it before diners are likely to search. Add photos often enough that the profile still shows the current room, food and exterior. There is no official quota.\n\n**Can I add \"best pizza in Bristol\" to my Google Business name?**\n\nNo. The name must match your real-world trading name. Google does not permit unnecessary information such as marketing taglines or extra location phrases in the name, and that can lead to suspension. Put location and cuisine in the category, address and description instead.\n\n**Should I put my full menu on my website, on Google, or both?**\n\nBoth, and keep them consistent. The website should host a crawlable menu; the Business Profile should link to it and use the menu features available to you.\n\n**Do restaurant reviews affect local rankings?**\n\nThey can form part of prominence. Google says more reviews and positive ratings can help local ranking. That is not a reason to pay for reviews or to chase a promised rating. Ask genuinely, and reply to what you receive.\n\n**Can a UK agency help a Bristol restaurant with local SEO if it is not based in Bristol?**\n\nYes. An agency does not need a Bristol office to work on a restaurant's profile, website and local search. What matters is an understanding of how local results work, of the actual location and customers, and of the work that will be done. Linkedo can support restaurants in Bristol and in other UK cities, and is available 24/7.\n\n## Getting started\n\nIf you run a restaurant in Bristol or elsewhere in the UK, start with the profile, the reviews policy and a website that publishes what diners need. If you want help with that work, Linkedo provides [SEO services](https://linkedo.co.uk/seo) and works with businesses in [Bristol](https://linkedo.co.uk/bristol). Call +44 7927 969991, or use the [contact](https://linkedo.co.uk/contact) page. Support is available 24/7.\n\nFurther practical guides are on the [Linkedo blog](https://linkedo.co.uk/blog). There are no ranking guarantees; the useful starting point is accurate information, in the right places, for people already looking for a table.\n```"),
}
