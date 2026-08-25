// Service page content model. Each entry renders a full SEO-optimized page
// at /services/[slug]. Keep copy specific to Watertown / Northern NY.

export type FAQ = { q: string; a: string };

export type ContentBlock = {
  h2: string;
  body: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  season: "winter" | "summer" | "year-round";
  audience: "commercial" | "residential" | "both";
  navLabel: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  // Page content
  h1: string;
  heroKicker: string;
  heroSubhead: string;
  intro: string[];
  highlights: { title: string; desc: string }[];
  blocks: ContentBlock[];
  faqs: FAQ[];
  related: string[]; // slugs
};

export const services: Service[] = [
  {
    slug: "commercial-snow-plowing",
    season: "winter",
    audience: "commercial",
    navLabel: "Commercial Snow Plowing",
    metaTitle:
      "Commercial Snow Plowing in Watertown, NY | Lakeside Outdoor Services",
    metaDescription:
      "Reliable commercial snow plowing for Watertown & Northern NY businesses. Parking lots, industrial sites & retail cleared before you open. Seasonal contracts, 24/7 response, fully insured. Call (315) 777-1809.",
    h1: "Commercial Snow Plowing in Watertown & Northern New York",
    heroKicker: "Commercial Snow Management",
    heroSubhead:
      "Digitally dispatched trucks and professional crews keep your parking lots, entrances, and access roads open all winter, so your business never loses a day to the snow.",
    intro: [
      "In Northern New York, snow isn't an occasional inconvenience, it's a season-long operating condition. Watertown averages well over 100 inches of snow a year, and Fort Drum's lake-effect belt can bury a parking lot overnight. For a commercial property, that means real exposure: customers who can't park, employees who can't get to work, deliveries that don't arrive, and slip-and-fall liability the moment your lot ices over.",
      "Lakeside Outdoor Services has kept Watertown-area businesses open through winter since 2010. We build seasonal snow plowing programs around your property, your peak hours, and your risk, then execute them with digitally dispatched trucks, around-the-clock storm coverage, and documented service so you always know your site was handled.",
    ],
    highlights: [
      {
        title: "Cleared before you open",
        desc: "We plow to your schedule with early-morning clearing, so lots and entrances are ready before your first customer or shift arrives.",
      },
      {
        title: "Seasonal contracts, predictable cost",
        desc: "Lock in a flat seasonal rate so a heavy winter never blows up your facilities budget. Per-push options also available.",
      },
      {
        title: "24/7 storm response",
        desc: "Our crews run priority routes continuously through the storm, so we're clearing your site during and after every event, not waiting for a phone call.",
      },
      {
        title: "Fully insured & documented",
        desc: "Certificates of insurance on file and service logs for every visit, the paper trail your GL carrier and risk manager want.",
      },
    ],
    blocks: [
      {
        h2: "Snow plowing built around how your business actually runs",
        body: [
          "No two commercial sites plow the same way. A medical office needs a clear, salted entrance before the 7am rush and an ADA-accessible path to every door. A retail plaza needs lanes and cart corrals open without windrows blocking storefronts. An industrial or distribution site needs dock approaches and truck lanes wide enough for 53-foot trailers at any hour.",
          "We map your property before the first snowfall (entrances, fire lanes, hydrants, drainage, snow-stacking zones, and priority routes) so our crews execute the same plan every storm. That's how we clear consistently, protect your pavement and landscaping, and avoid the guesswork that leads to missed areas.",
        ],
        bullets: [
          "Retail plazas, shopping centers & HOAs",
          "Medical, dental & professional office parks",
          "Industrial parks, warehouses & Fort Drum-area facilities",
          "Banks, credit unions & liability-sensitive sites",
          "Restaurants, gas stations & small commercial storefronts",
          "Apartment complexes & property-management portfolios",
        ],
      },
      {
        h2: "A concentrated route means faster response",
        body: [
          "We deliberately serve a tight geographic footprint in and around Watertown and Fort Drum. That's not a limitation, it's the whole strategy. A concentrated route means our trucks reach your property faster, cycle back sooner during long storms, and aren't stretched thin across three counties when the lake-effect really hits.",
          "When a storm stalls over the region and dumps a foot overnight, the difference between a plow company that's 8 minutes away and one that's 40 minutes away is whether your lot is open at 7am.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer seasonal snow plowing contracts for commercial properties?",
        a: "Yes. Most commercial clients choose a seasonal contract with a flat monthly or seasonal rate, which makes budgeting predictable regardless of how much it snows. We also offer per-push and per-event pricing. We'll walk your site and recommend the structure that fits your risk and cash flow.",
      },
      {
        q: "Do you wait for a certain amount of snow before you plow?",
        a: "No. We don't wait for accumulation to reach a set trigger depth. During a storm our crews run assigned priority routes continuously, plowing through the event and cycling back as it keeps falling. High-traffic and liability-sensitive sites like medical offices and banks are prioritized so they stay clear and safe throughout, with no phone call required.",
      },
      {
        q: "How early can our parking lot be cleared?",
        a: "We schedule clearing around your open time. For most businesses that means lots and entrances are plowed and salted before staff and customers arrive. Early-morning and overnight clearing are standard for us.",
      },
      {
        q: "Are you insured, and can you provide a certificate of insurance?",
        a: "Yes. Lakeside Outdoor Services is fully insured and we provide certificates of insurance to any commercial client or property manager who requires one on file.",
      },
    ],
    related: ["salting-de-icing", "snow-removal", "snow-plowing"],
  },
  {
    slug: "snow-plowing",
    season: "winter",
    audience: "both",
    navLabel: "Snow Plowing",
    metaTitle:
      "Snow Plowing in Watertown, NY | Residential & Commercial | Lakeside",
    metaDescription:
      "Dependable snow plowing in Watertown & Northern NY. Driveways and parking lots cleared on time by professional local crews. Seasonal & per-storm options. Call (315) 777-1809 for a free estimate.",
    h1: "Snow Plowing in Watertown, NY",
    heroKicker: "Residential & Commercial",
    heroSubhead:
      "On-time, reliable plowing from a trusted local crew that's been clearing Northern New York driveways and lots since 2010.",
    intro: [
      "When you live or run a business in Watertown, snow plowing isn't a luxury, it's how you get out of your driveway and how your customers get into your lot. What separates a good plow company from a frustrating one is simple: do they show up on time, every storm, and do they treat your property with care?",
      "That's the standard Lakeside Outdoor Services has held since 2010. Careful, responsible drivers. Digitally dispatched trucks. A commitment to clearing your driveway or parking lot as fast as possible during and after every snowstorm, because we serve a concentrated area around Watertown and Fort Drum, not the whole North Country.",
    ],
    highlights: [
      {
        title: "On-time, every storm",
        desc: "Our crews run priority routes continuously through the storm, clearing your property during and after it snows, so you never have to call.",
      },
      {
        title: "Careful with your property",
        desc: "Professional drivers who protect your pavement, edges, and landscaping, with no torn-up lawns in spring.",
      },
      {
        title: "Seasonal or per-storm",
        desc: "Choose a set-and-forget seasonal contract or pay per plow. Whatever fits your winter.",
      },
      {
        title: "Local & fast",
        desc: "A tight Watertown-area route means we reach you quickly, even in a big lake-effect event.",
      },
    ],
    blocks: [
      {
        h2: "Residential driveways and commercial lots, no job too big or small",
        body: [
          "From a single residential driveway to a multi-acre commercial parking lot, our crews are equipped to handle it. We'll clear your driveway to the pavement, open up parking areas and walk paths, and pile snow where it won't block sightlines or refreeze across your access.",
          "For homeowners who want good service and don't want to think about it, a seasonal contract means your driveway is simply handled all winter. For businesses, see our dedicated commercial snow plowing program built around your hours and liability.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you plow residential driveways in Watertown?",
        a: "Yes. We plow residential driveways throughout Watertown, Fort Drum, and the surrounding communities. Most homeowners choose a seasonal contract so their driveway is cleared automatically after every storm.",
      },
      {
        q: "How quickly will my driveway be plowed after it snows?",
        a: "Because we keep a concentrated route around Watertown, our response times are fast. We don't wait for a set amount of snow to fall. Our crews run priority routes continuously during and after the storm, prioritizing getting you out for work and getting businesses open on time.",
      },
      {
        q: "Do you offer per-storm plowing or only seasonal contracts?",
        a: "Both. You can lock in a seasonal rate for worry-free winter service, or pay per plow. We'll help you pick what makes sense for your property and budget.",
      },
    ],
    related: ["commercial-snow-plowing", "salting-de-icing", "snow-removal"],
  },
  {
    slug: "snow-removal",
    season: "winter",
    audience: "both",
    navLabel: "Snow Removal & Hauling",
    metaTitle:
      "Snow Removal & Hauling in Watertown, NY | Lakeside Outdoor Services",
    metaDescription:
      "Snow removal and hauling for Watertown & Northern NY. When lots run out of room to push, we relocate and haul snow off-site. Commercial & residential. Call (315) 777-1809.",
    h1: "Snow Removal & Hauling in Watertown, NY",
    heroKicker: "When Plowing Isn't Enough",
    heroSubhead:
      "In a Northern New York winter, lots fill up fast. When there's nowhere left to push, we relocate, stack, or haul the snow away entirely.",
    intro: [
      "Plowing moves snow to the edges of your property. But in a Watertown winter, where the total can stack up storm after storm, those edges fill up. Snow piles swallow parking spaces, block sightlines at exits, and melt-refreeze into hazards across your lot.",
      "Snow removal is the next step: physically relocating snow with loaders and, when the piles are simply too big for the site, hauling it off entirely. It's how commercial properties recover lost parking spaces and stay safe deep into a heavy season.",
    ],
    highlights: [
      {
        title: "Recover lost parking",
        desc: "Reclaim spaces buried by weeks of pushed snow, critical for retail and medical during peak season.",
      },
      {
        title: "Loader relocation & hauling",
        desc: "We stack snow in designated zones or truck it off-site when your property is out of room.",
      },
      {
        title: "Sightline & safety",
        desc: "Clear the piles blocking your exits and fire lanes before they become an accident or a code issue.",
      },
      {
        title: "On-call or scheduled",
        desc: "Add hauling to a seasonal program, or call us in after a major event.",
      },
    ],
    blocks: [
      {
        h2: "Built for how much it really snows here",
        body: [
          "A single lake-effect band can drop more snow in a day than many regions see in a month. By mid-winter, a commercial lot that's only ever been plowed can lose 20–30% of its usable parking to snow piles. Snow removal and hauling solve what plowing alone can't, and we scope it into commercial programs for properties where space is tight.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between snow plowing and snow removal?",
        a: "Plowing pushes snow to the edges of your property. Snow removal physically relocates those piles, stacking them elsewhere with loaders or hauling them off-site entirely, when the property runs out of room. Heavy Northern NY winters usually require both.",
      },
      {
        q: "Do you haul snow off commercial properties?",
        a: "Yes. When your lot's snow-stacking areas are full, we can load and haul snow off-site so you recover parking and keep exits and fire lanes clear. This is commonly added to commercial seasonal programs.",
      },
    ],
    related: ["commercial-snow-plowing", "salting-de-icing", "snow-plowing"],
  },
  {
    slug: "salting-de-icing",
    season: "winter",
    audience: "both",
    navLabel: "Salting & De-Icing",
    metaTitle:
      "Salting & De-Icing in Watertown, NY | Commercial & Residential | Lakeside",
    metaDescription:
      "Commercial & residential salting and de-icing in Watertown & Northern NY. Reduce slip-and-fall liability with reliable ice control. Seasonal & on-demand. Call (315) 777-1809.",
    h1: "Salting & De-Icing in Watertown, NY",
    heroKicker: "Ice Control & Liability Protection",
    heroSubhead:
      "A plowed lot can still be a sheet of ice. Our salting and de-icing keeps your surfaces safe, and protects your business from slip-and-fall claims.",
    intro: [
      "For a commercial property, ice is the real liability. A single slip-and-fall in an icy parking lot or on an unsalted walkway can turn into an insurance claim, a lawsuit, and a serious hit to your reputation. Plowing clears the snow. Salting and de-icing is what actually makes your surfaces safe to walk and drive on.",
      "Lakeside Outdoor Services provides seasonal and on-demand salting and de-icing across Watertown and the surrounding NNY area, for both commercial and residential properties. We treat lots, entrances, walkways, and ADA-access paths so the people using your property stay on their feet.",
    ],
    highlights: [
      {
        title: "Slip-and-fall protection",
        desc: "Documented ice-control service is one of the strongest defenses against premises-liability claims.",
      },
      {
        title: "Entrances & walkways",
        desc: "We treat the high-risk zones, doorways, ADA ramps, sidewalks, and lot approaches, not just the driving lanes.",
      },
      {
        title: "Seasonal or on-demand",
        desc: "Bundle ice control into a seasonal contract or call us when a freeze-thaw event glazes your property.",
      },
      {
        title: "Right material, right rate",
        desc: "We apply the appropriate de-icing material for the temperature and surface to get results without waste.",
      },
    ],
    blocks: [
      {
        h2: "Why ice control matters more than most owners realize",
        body: [
          "Northern New York's freeze-thaw cycles are relentless. Snow melts during the day, refreezes overnight, and turns a perfectly plowed lot into black ice by morning. That's the exact scenario behind most winter slip-and-fall claims, and the reason liability-sensitive properties like medical offices, banks, and retail centers treat salting as non-negotiable.",
          "We build ice control into commercial programs with proactive freeze-event monitoring and documented applications, so you have a record that your property was treated. For homeowners who simply want a safe driveway and walk, on-demand and seasonal options are available too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer both seasonal and on-demand salting?",
        a: "Yes. Commercial clients typically bundle salting into a seasonal contract with proactive freeze-event treatment and documented applications. On-demand salting is available for one-off freeze events or as-needed treatment for both commercial and residential properties.",
      },
      {
        q: "Can salting service help protect my business from liability?",
        a: "Ice control significantly reduces slip-and-fall risk, and documented, consistent service is one of the strongest defenses if a premises-liability claim is ever filed. We keep service records for commercial ice-control clients for exactly this reason.",
      },
      {
        q: "Do you salt walkways and entrances or just parking lots?",
        a: "Both. We treat the highest-risk pedestrian zones (entrances, sidewalks, and ADA-access ramps) along with driving lanes and parking areas. Foot-traffic areas are where most slip-and-fall incidents happen.",
      },
    ],
    related: ["commercial-snow-plowing", "snow-plowing", "snow-removal"],
  },
  {
    slug: "lawn-mowing-maintenance",
    season: "summer",
    audience: "both",
    navLabel: "Lawn Mowing & Maintenance",
    metaTitle:
      "Lawn Mowing & Maintenance in Watertown, NY | Commercial & Residential",
    metaDescription:
      "Professional lawn mowing and maintenance in Watertown & Northern NY. Crisp, reliable weekly service for commercial properties and quality-focused homeowners. Call (315) 777-1809.",
    h1: "Lawn Mowing & Maintenance in Watertown, NY",
    heroKicker: "Grounds Care & Curb Appeal",
    heroSubhead:
      "Sharp, consistent lawn care that keeps your property looking cared-for all season, for businesses that value their image and homeowners who want it done right.",
    intro: [
      "A well-kept lawn does quiet, constant work for you. For a business, it's the first impression every customer forms before they reach your door. For a homeowner who takes pride in their property, it's the difference between a yard that's merely cut and one that's genuinely cared for.",
      "Lakeside Outdoor Services provides professional lawn mowing and maintenance for commercial and residential properties across Watertown and Northern New York. Reliable schedules, clean edges, and crews that treat your property like it matters, because it does.",
    ],
    highlights: [
      {
        title: "Reliable weekly service",
        desc: "A consistent schedule you can count on, your property is handled the same day, every week.",
      },
      {
        title: "Clean, detailed finish",
        desc: "Mowing, trimming, and blowing clippings off walks and drives so the whole property looks sharp.",
      },
      {
        title: "Edging as needed",
        desc: "Crisp edges along walks, beds, and drives throughout the season for a defined, professional look.",
      },
      {
        title: "Commercial-grade consistency",
        desc: "Uniform stripes and tidy grounds that reinforce your brand every time someone visits.",
      },
    ],
    blocks: [
      {
        h2: "What's included in our lawn maintenance",
        body: [
          "Our standard service is built to keep your property looking its best with no hassle on your end.",
        ],
        bullets: [
          "Mow and trim of the entire lawn area",
          "Blowing of clippings off walkways and driveways",
          "Edging done as needed throughout the season",
          "Clippings mulched as natural fertilizer (bagging available on request)",
          "Trimming of hedges and shrubs to your specifications",
          "Optional fertilization & aeration programs",
        ],
      },
      {
        h2: "For commercial properties that live on their image",
        body: [
          "Retail centers, offices, apartment complexes, and restaurants are judged on their grounds before anyone reads a sign. We keep commercial properties uniformly maintained on a dependable schedule so your curb appeal is never the thing that costs you a customer. Ask about bundling summer grounds care with winter snow management for seamless year-round coverage under one trusted local vendor.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer weekly lawn mowing contracts?",
        a: "Yes. Most residential and commercial clients are on a consistent weekly schedule so their property stays sharp all season. We'll set a service day and handle the rest.",
      },
      {
        q: "Do you mulch or bag grass clippings?",
        a: "We generally mulch clippings because they act as a natural fertilizer that feeds your lawn. If you'd prefer clippings bagged and removed, we're happy to do that on request.",
      },
      {
        q: "Can you handle both my lawn care and snow plowing?",
        a: "Absolutely, and many clients prefer it. Using one trusted local company for summer grounds care and winter snow management means seamless year-round coverage and a single point of contact you can rely on.",
      },
    ],
    related: [
      "commercial-landscaping-hub",
      "landscape-design-installation",
      "spring-fall-cleanups",
    ],
  },
  {
    slug: "landscape-design-installation",
    season: "summer",
    audience: "both",
    navLabel: "Landscape Design & Install",
    metaTitle:
      "Landscape Design & Installation in Watertown, NY | Lakeside Outdoor Services",
    metaDescription:
      "Custom landscape design and installation in Watertown & Northern NY. Beds, plantings, grading, and hardscape features that add value and curb appeal. Call (315) 777-1809.",
    h1: "Landscape Design & Installation in Watertown, NY",
    heroKicker: "Custom Landscapes",
    heroSubhead:
      "Thoughtful landscape design and clean installation that adds lasting value and curb appeal to your Northern New York property.",
    intro: [
      "Great landscaping is an investment that pays you back, in curb appeal, in property value, and in how much you enjoy being outside. Whether you're refreshing tired beds, starting from bare ground on a new build, or reworking a commercial frontage, the design has to fit the property, the climate, and how you actually use the space.",
      "Lakeside Outdoor Services designs and installs custom landscapes across Watertown and Northern New York, plantings and beds built to thrive in our climate, installed cleanly, and maintainable for the long run.",
    ],
    highlights: [
      {
        title: "Design that fits your property",
        desc: "Layouts built around your site, sun, drainage, and how you use the space, not a template.",
      },
      {
        title: "Climate-appropriate plantings",
        desc: "Trees, shrubs, and perennials chosen to thrive through Northern NY winters and summers.",
      },
      {
        title: "Clean, durable installation",
        desc: "Proper bed prep, grading, and planting so your landscape establishes strong and lasts.",
      },
      {
        title: "Value & curb appeal",
        desc: "Smart landscaping is one of the highest-return improvements you can make to a property.",
      },
    ],
    blocks: [
      {
        h2: "From concept to finished landscape",
        body: [
          "We start by understanding what you want the space to do, then design around your property's real conditions: sun, soil, drainage, and maintenance appetite. From there we handle the install: bed shaping, soil and grading prep, plant placement, mulching, and cleanup.",
        ],
        bullets: [
          "Custom landscape design & planning",
          "New bed creation and renovation of existing beds",
          "Tree, shrub, and perennial planting",
          "Mulch and decorative stone installation",
          "Grading and soil preparation",
          "Commercial frontage and entrance landscaping",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you design landscapes or just install them?",
        a: "Both. We handle the full process, from a custom design that fits your property and climate through to a clean, durable installation. We also execute installs from plans you already have.",
      },
      {
        q: "Do you do commercial landscaping installations?",
        a: "Yes. We design and install landscaping for commercial frontages, entrances, and grounds, and we can maintain them year-round afterward. See our commercial landscaping page for details.",
      },
    ],
    related: [
      "residential-landscaping-hub",
      "lawn-mowing-maintenance",
      "topsoil-gravel-grading",
    ],
  },
  {
    slug: "property-maintenance",
    season: "year-round",
    audience: "both",
    navLabel: "Property Maintenance",
    metaTitle:
      "Property Maintenance in Watertown, NY | Year-Round Grounds Care",
    metaDescription:
      "Year-round property maintenance in Watertown & Northern NY. One trusted local company for landscaping, cleanups, snow, and grounds care. Commercial & residential. Call (315) 777-1809.",
    h1: "Property Maintenance in Watertown, NY",
    heroKicker: "Year-Round Grounds Care",
    heroSubhead:
      "One trusted local company handling your property through every season, so your grounds always look cared-for and you have a single number to call.",
    intro: [
      "The properties that always look good aren't lucky, they're maintained. Property maintenance is the ongoing, all-season care that keeps a home or commercial site consistently sharp: mowing and trimming in summer, cleanups in spring and fall, plowing and salting in winter, and the steady upkeep in between.",
      "Lakeside Outdoor Services is built to be that single, reliable partner for property owners and managers across Watertown and Northern New York. One local company, one point of contact, and a property that's handled 12 months a year.",
    ],
    highlights: [
      {
        title: "One vendor, all seasons",
        desc: "Summer grounds care and winter snow management under one trusted local company.",
      },
      {
        title: "A single point of contact",
        desc: "No juggling three vendors. One call reaches the crew that already knows your property.",
      },
      {
        title: "Consistent, proactive care",
        desc: "We stay ahead of your property's needs season to season instead of reacting to problems.",
      },
      {
        title: "Great for property managers",
        desc: "Reliable service and documentation for multi-property and commercial portfolios.",
      },
    ],
    blocks: [
      {
        h2: "What year-round property maintenance covers",
        body: [
          "We tailor a maintenance program to your property. A typical year-round scope includes:",
        ],
        bullets: [
          "Weekly lawn mowing, trimming, and edging in season",
          "Hedge and shrub trimming to your specifications",
          "Spring and fall cleanups",
          "Mulching and bed upkeep",
          "Fertilization and aeration programs",
          "Winter snow plowing, salting, and de-icing",
        ],
      },
      {
        h2: "Ideal for busy owners and property managers",
        body: [
          "If you own a business, manage multiple properties, or simply have better things to do than coordinate seasonal contractors, a year-round maintenance program takes it off your plate entirely. You get consistent results, predictable service, and a local team that knows your property inside and out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use one company for both summer landscaping and winter snow?",
        a: "Yes, that's exactly what our year-round property maintenance program is built for. One trusted local company handles mowing, cleanups, and grounds care in the warm months and snow plowing, salting, and de-icing in winter, with a single point of contact.",
      },
      {
        q: "Do you work with property management companies?",
        a: "Yes. We serve property managers and multi-property portfolios with reliable, documented service across Watertown and the surrounding area. We're happy to provide certificates of insurance and service records.",
      },
    ],
    related: [
      "lawn-mowing-maintenance",
      "spring-fall-cleanups",
      "commercial-landscaping-hub",
    ],
  },
  {
    slug: "spring-fall-cleanups",
    season: "year-round",
    audience: "both",
    navLabel: "Spring & Fall Cleanups",
    metaTitle:
      "Spring & Fall Cleanups in Watertown, NY | Lakeside Outdoor Services",
    metaDescription:
      "Spring and fall yard cleanups in Watertown & Northern NY. Leaf removal, bed cleanup, and seasonal prep for commercial and residential properties. Call (315) 777-1809.",
    h1: "Spring & Fall Cleanups in Watertown, NY",
    heroKicker: "Seasonal Property Prep",
    heroSubhead:
      "Get your property season-ready. We clear the debris, refresh the beds, and set your landscape up to thrive, or to rest for winter.",
    intro: [
      "The change of seasons in Northern New York leaves a mess. Spring reveals a winter's worth of downed branches, matted leaves, and tired beds. Fall drops a relentless blanket of leaves that will smother your lawn if it sits. Seasonal cleanups reset your property at both ends and set up everything that comes next.",
      "Lakeside Outdoor Services provides thorough spring and fall cleanups for residential and commercial properties across Watertown and the surrounding area, so your grounds start the growing season strong and head into winter clean.",
    ],
    highlights: [
      {
        title: "Spring wake-up",
        desc: "Clear winter debris, cut back perennials, refresh beds, and prep your lawn for a strong start.",
      },
      {
        title: "Fall leaf removal",
        desc: "Get leaves off the lawn before they mat and smother the grass over winter.",
      },
      {
        title: "Beds & borders refreshed",
        desc: "Edging, weeding, and cleanup that make the whole property look intentional.",
      },
      {
        title: "Commercial & residential",
        desc: "From single yards to full commercial grounds, cleaned up on schedule.",
      },
    ],
    blocks: [
      {
        h2: "Why seasonal cleanups matter",
        body: [
          "Leaves left on a lawn through winter block light and trap moisture, leading to disease and dead patches you'll be fighting all next season. Winter debris left in spring gets in the way of healthy new growth. A proper cleanup at each transition protects the investment you've made in your landscape and keeps the property looking cared-for year-round.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's included in a fall cleanup?",
        a: "Fall cleanups typically include leaf removal from lawns and beds, cutting back perennials, clearing debris, and general property tidy-up to prepare your landscape for winter. We scope each cleanup to the property.",
      },
      {
        q: "When should I schedule spring and fall cleanups?",
        a: "Spring cleanups are best as the snow clears and before the growing season kicks off; fall cleanups are best once most leaves are down but before the first lasting snow. Reach out early, these are our busiest windows and schedules fill up.",
      },
    ],
    related: [
      "property-maintenance",
      "lawn-mowing-maintenance",
      "landscape-design-installation",
    ],
  },
  {
    slug: "topsoil-gravel-grading",
    season: "summer",
    audience: "both",
    navLabel: "Top Soil, Gravel & Grading",
    metaTitle:
      "Top Soil, Gravel & Grading in Watertown, NY | Lakeside Outdoor Services",
    metaDescription:
      "Top soil, gravel delivery, and grading in Watertown & Northern NY. Build healthy beds, fix drainage, and prep driveways and sites. Call (315) 777-1809.",
    h1: "Top Soil, Gravel & Grading in Watertown, NY",
    heroKicker: "Groundwork & Materials",
    heroSubhead:
      "The foundation under every good landscape and driveway. We supply, place, and grade top soil and gravel to build it right.",
    intro: [
      "Healthy lawns and lasting driveways start below the surface. Poor soil starves new plantings; poor grading pools water where you don't want it; a driveway without a proper gravel base rutts and washes out. Getting the groundwork right is what makes everything on top of it last.",
      "Lakeside Outdoor Services supplies and places top soil and gravel and provides grading across Watertown and Northern New York, for new beds and lawns, driveways, drainage correction, and site prep.",
    ],
    highlights: [
      {
        title: "Quality top soil",
        desc: "Screened top soil to build healthy beds and establish strong new lawns.",
      },
      {
        title: "Gravel supply & placement",
        desc: "Driveway and base gravel delivered and placed to the right depth and grade.",
      },
      {
        title: "Grading & drainage",
        desc: "Correct grading to move water away from structures and eliminate low, wet spots.",
      },
      {
        title: "Site & bed prep",
        desc: "The groundwork that sets up a successful planting, lawn, or hardscape.",
      },
    ],
    blocks: [
      {
        h2: "Groundwork done right",
        body: [
          "Whether you're establishing a new lawn, building planting beds, refreshing a gravel driveway, or fixing a drainage problem, we bring in the right material and grade it to do its job. Good groundwork is invisible when it's done well, and impossible to ignore when it isn't.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you deliver and place top soil and gravel, or just deliver?",
        a: "We supply and place. We'll bring in screened top soil or the right gravel for your project and grade it to the proper depth and slope, for beds, lawns, driveways, and drainage work.",
      },
      {
        q: "Can you fix drainage problems with grading?",
        a: "Often, yes. Many wet spots and pooling issues come down to grade. We assess how water moves across your property and regrade to direct it away from structures and out of the areas where it's causing problems.",
      },
    ],
    related: [
      "landscape-design-installation",
      "property-maintenance",
      "lawn-mowing-maintenance",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
