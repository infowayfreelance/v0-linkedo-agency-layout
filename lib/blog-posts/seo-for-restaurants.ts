export const restaurantSeoFaqs = [
  {
    "@type": "Question",
    "name": "Is restaurant SEO just about Google Business Profile, or do I still need a website?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You need both. The profile helps people find your restaurant in Maps and local results. Your website gives them a full menu, accurate details and a direct way to book or order."
    }
  },
  {
    "@type": "Question",
    "name": "What category should a restaurant choose on Google Business Profile?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Choose the most specific primary category that accurately describes the restaurant's main business. Add other categories only when they genuinely apply. Do not use categories as a list of keywords."
    }
  },
  {
    "@type": "Question",
    "name": "How often should a restaurant add new photos or update its hours?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Update hours whenever they change, including bank holidays and one-off closures. Refresh photos when the venue, menu or food presentation changes. Google does not set a fixed photo quota."
    }
  },
  {
    "@type": "Question",
    "name": "Can I add “best pizza in Bristol” to my Google Business name?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Use the restaurant's real-world trading name. Put cuisine and location details in the appropriate profile fields and website copy, not in a keyword-stuffed business name."
    }
  },
  {
    "@type": "Question",
    "name": "Should I put my full menu on my website, on Google, or both?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Keep a readable menu on your website and link to it from the Business Profile. Use any menu features available in the profile as an additional route, and keep the information consistent."
    }
  },
  {
    "@type": "Question",
    "name": "Do restaurant reviews affect local rankings?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google says reviews can contribute to prominence, and genuine reviews can help customers make a decision. Never buy reviews or offer rewards for them, and do not promise a particular rating or ranking result."
    }
  },
  {
    "@type": "Question",
    "name": "Can a UK agency help a Bristol restaurant with local SEO if it is not based in Bristol?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Much of the work can be done remotely: improving the profile, website, menu information and local search content. The agency still needs to understand the restaurant's actual location, customers and service."
    }
  }
]

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

export const restaurantSeoPost = {
  slug: "seo-for-restaurants",
  title: "SEO for Restaurants: A Practical UK Local SEO Guide (Including Bristol)",
  excerpt: "A practical local SEO guide for UK restaurants: Google Business Profile, menus, reviews and your website, with a Bristol worked example.",
  category: "SEO",
  date: "2026-11-20",
  readTime: "9 min read",
  image: "/blog/seo-for-restaurants-featured.webp",
  author: { name: "Junaid Mazhar", role: "SEO Director", avatar: "/team/junaid-mazhar.webp" },
  content: parseRestaurantArticle("# SEO for Restaurants: A Practical UK Local SEO Guide (Including Bristol)\n\nA restaurant can serve excellent food and still be hard to find when someone nearby searches for somewhere to eat. They might type a cuisine and a town, look for somewhere “near me”, or check which places are open before making a decision. Restaurant SEO helps your business appear for relevant searches and gives people the information they need to choose you.\n\nFor most independent restaurants, the starting point is local SEO rather than a large national content campaign. That means keeping your Google Business Profile accurate, making your menu and practical details easy to find on your website, and earning genuine mentions and reviews. This guide explains how to approach those jobs in a sensible order, with a Bristol example that can be adapted to other UK towns and cities.\n\n## Short answer: what restaurant SEO actually means\n\nRestaurant SEO is the work of helping search engines understand your restaurant and helping potential diners find useful, accurate information about it. For a single-site restaurant, local visibility is usually central: Google Maps, the local pack and searches that combine a cuisine with a place.\n\nThe work is not just adding keywords to a page. It includes a complete Business Profile, a crawlable menu, correct opening hours, a clear address and phone number, a simple booking or ordering route, and useful information about the food and experience you offer.\n\nYou cannot pay Google to move your restaurant higher in unpaid local results. You can, however, make your information clearer, keep it current and give diners a better experience when they reach your website.\n\n## How Google decides local restaurant results\n\nGoogle describes three main factors for local results: **relevance, distance and prominence**. Its guidance on [how local results work](https://support.google.com/business/answer/7091?hl=en) explains these in plain terms.\n\n**Relevance** is how closely your Business Profile matches what someone searched for. Accurate categories, a useful description, current hours and details about your cuisine help explain what kind of restaurant you are. A profile that only says “Restaurant” may give less context than one with the most specific category that genuinely fits.\n\n**Distance** is how far your restaurant is from the searcher or the location included in the query. A person searching in Clifton may see a different set of places from someone searching in Bedminster. That is normal. Checking a ranking from your own phone does not show what every diner sees.\n\n**Prominence** is how well known a business is. Google says this can include information from across the web, such as links and reviews. Genuine reviews and relevant local mentions can contribute to how established a restaurant appears, but there is no guaranteed review count or shortcut to the top of Maps.\n\nThese factors work together. You can improve the accuracy and relevance of your information, but you cannot control a searcher's location or promise a particular position.\n\n## Your Google Business Profile: a practical checklist\n\nFor a restaurant with a physical dining location, the Google Business Profile is often one of the first places a potential customer sees. Treat it as a live information page, not a one-off setup task.\n\n1. **Claim and verify the profile.** Make sure the restaurant owner or an authorised manager controls it. Keep access with the business rather than leaving it only with a former agency or employee.\n2. **Use the real trading name.** Google's [business representation guidelines](https://support.google.com/business/answer/3038177?hl=en) say the name should match how the business is represented in the real world. Do not add phrases such as “best pizza”, a list of dishes or extra town names to try to rank for more searches.\n3. **Use one profile for each real location.** If a restaurant group has several premises, each genuine location should have its own accurate profile. Do not create duplicate listings for the same dining room.\n4. **Choose the most specific accurate category.** Select the primary category that best describes the main business, such as an Italian restaurant or Indian restaurant where appropriate. Add other categories only when they describe services the venue really provides.\n5. **Keep opening hours current.** Set normal hours and update special hours for bank holidays, seasonal changes, private events and one-off closures. Incorrect hours can send a diner to a closed door.\n6. **Check contact details.** The restaurant name, address and phone number should agree across the profile and website. Make sure the phone number is monitored during the hours shown.\n7. **Add menu and booking links.** Link to the page where people can read the menu, reserve a table or place an order. Check these links after changing your website or booking provider.\n8. **Use attributes carefully.** Add details such as outdoor seating, accessibility or parking only when they are accurate for that location. Do not guess or add features just because a competitor has them.\n9. **Keep photos current.** Show the real entrance, dining space, food and other details that help people recognise the venue. Replace outdated images when the restaurant changes. Google does not set a required photo quota; accuracy and usefulness matter more than chasing a number.\n10. **Review the profile regularly.** Check that user suggestions, menu links, hours and contact details have not become inaccurate. Update the profile when the business changes.\n\nThe guiding rule is simple: represent the restaurant as it is. A profile filled with accurate details is more useful to diners than one written to fit every possible keyword.\n\n## Reviews: how to ask and how to respond\n\nReviews can help a potential customer decide whether a restaurant suits them. They can also contribute to prominence in local search, but they should be earned through real customer experiences rather than treated as a ranking target.\n\nAsk customers neutrally after a visit. You can share a direct review link or a QR code, but do not offer a free meal, discount or other reward in exchange for a review. Do not ask only people you believe will leave a positive comment, write reviews for customers, or pressure staff and friends to post as diners.\n\nReply to feedback in a calm and professional way. Thank people for specific positive comments. If a diner raises a problem, acknowledge the concern and offer an appropriate way to discuss it privately. Avoid sharing personal details or arguing in public.\n\nGoogle's [guidance on getting more reviews](https://support.google.com/business/answer/3474122?hl=en) explains the importance of genuine contributions and prohibits incentives for reviews. There is no rating promise here: the aim is to make it easy for real customers to share an honest experience.\n\n## What your restaurant website needs to do\n\nA Business Profile is important, but it does not replace a useful website. Your website gives diners and search engines a stable place to find the full menu, understand the venue and complete the next step.\n\nStart with a menu that can be read as normal page text. A PDF can be offered as an extra, but do not make it the only way to see what you serve. Search engines and visitors should be able to read dish names, descriptions and relevant dietary information without opening a social media account or zooming into a photograph.\n\nMake the practical details easy to find: address, opening hours, phone number and directions. Keep them consistent with the Business Profile. If hours vary by day or season, explain that clearly. If the restaurant has more than one location, make each address and its details distinct.\n\nGive people a clear route to book a table, order food or contact the restaurant. Test the process on a mobile phone. Remove unnecessary steps and make sure buttons work. A page can attract visitors but still lose bookings if the next action is hard to understand. Linkedo's guide to [SEO conversion rate](https://linkedo.co.uk/blog/seo-conversion-rate) explains how to think about the path from a website visit to an enquiry or booking.\n\nCreate separate pages only when they serve a real purpose. A restaurant with two genuine venues may need a page for each address. A single venue does not need dozens of near-identical neighbourhood pages with only the place name changed.\n\n## A Bristol example: match the page to the real restaurant\n\nImagine an independent restaurant in Clifton. Potential diners might search for “Italian restaurant Bristol”, “Italian restaurant Clifton”, “Italian near me” or “Italian open now”. These searches show different needs: a city-wide choice, a nearby option, or somewhere open at that moment.\n\nThe restaurant should make its real address, cuisine, opening hours and menu easy to understand. Its Business Profile should point to the correct menu and booking page. Its website should explain where the venue is and how to get there. If it genuinely serves a particular neighbourhood, that can be described naturally; it should not claim to be in areas where it has no premises.\n\nDistance affects what different searchers see. Someone in Clifton may receive a closer set of results than someone in Bedminster, even if both search for Italian food in Bristol. That is why a single manual search cannot prove how the restaurant ranks across the city.\n\nA neighbourhood page is useful when it describes a real venue or provides genuinely helpful local information. It is not useful to create a page for every Bristol district just to repeat a keyword. Linkedo's [Bristol page](https://linkedo.co.uk/bristol) explains its work in the area, while the same local SEO principles apply to restaurants elsewhere in the UK.\n\n## Menus, categories and restaurant structured data\n\nKeep the menu on your website and link to it from your Business Profile. Update both when dishes, prices, availability or dietary details change. The profile category should reflect the restaurant's real offer; adding unrelated categories will not make the venue a better match.\n\nStructured data is code that describes information already present on a page. It can help search engines interpret details about a restaurant, but it is not a ranking trick and does not guarantee a special search display. Google's [Local Business structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business) recommends using the most specific type that fits. For a restaurant, that is the Restaurant type.\n\nDepending on what is visible and accurate, the markup may describe the restaurant's name, address, telephone number, website, cuisine, menu and opening hours. The structured data must match the page and the real business. Do not add made-up ratings, reviews, opening times or menu details. If you cannot maintain a property accurately, leave it out.\n\nStructured data supports clear information; it does not replace it. A complete menu, accurate profile and working booking route are still the foundations.\n\n## Frequently asked questions\n\n**Is restaurant SEO just about Google Business Profile, or do I still need a website?**\n\nYou need both. The profile helps people find your restaurant in Maps and local results. Your website gives them a full menu, accurate details and a direct way to book or order.\n\n**What category should a restaurant choose on Google Business Profile?**\n\nChoose the most specific primary category that accurately describes the restaurant's main business. Add other categories only when they genuinely apply. Do not use categories as a list of keywords.\n\n**How often should a restaurant add new photos or update its hours?**\n\nUpdate hours whenever they change, including bank holidays and one-off closures. Refresh photos when the venue, menu or food presentation changes. Google does not set a fixed photo quota.\n\n**Can I add “best pizza in Bristol” to my Google Business name?**\n\nNo. Use the restaurant's real-world trading name. Put cuisine and location details in the appropriate profile fields and website copy, not in a keyword-stuffed business name.\n\n**Should I put my full menu on my website, on Google, or both?**\n\nKeep a readable menu on your website and link to it from the Business Profile. Use any menu features available in the profile as an additional route, and keep the information consistent.\n\n**Do restaurant reviews affect local rankings?**\n\nGoogle says reviews can contribute to prominence, and genuine reviews can help customers make a decision. Never buy reviews or offer rewards for them, and do not promise a particular rating or ranking result.\n\n**Can a UK agency help a Bristol restaurant with local SEO if it is not based in Bristol?**\n\nYes. Much of the work can be done remotely: improving the profile, website, menu information and local search content. The agency still needs to understand the restaurant's actual location, customers and service.\n\n## Getting started\n\nBegin with the basics: claim the correct Business Profile, check the name and categories, update hours, make the menu readable on your website and test the booking route on a phone. Then review the information whenever the restaurant changes.\n\nIf you would like help, Linkedo provides [SEO services](https://linkedo.co.uk/seo) and can support restaurants in [Bristol](https://linkedo.co.uk/bristol) and across the UK. Call +44 7927 969991 or use the [contact page](https://linkedo.co.uk/contact). Linkedo is available 24 hours a day, 7 days a week. You can find more practical advice on the [Linkedo blog](https://linkedo.co.uk/blog)."),
}
