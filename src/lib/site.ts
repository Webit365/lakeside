// Central source of truth for business info (NAP), navigation, and SEO.
// Update values here and they propagate across the whole site + schema.

export const site = {
  legalName: "Lakeside Outdoor Services",
  brand: "Lakeside Outdoor Services",
  shortBrand: "Lakeside NNY",
  tagline: "Commercial & Residential Landscaping and Snow Management",
  foundedYear: 2010,
  // Primary live domain (www). Non-www 308-redirects here, so canonicals,
  // OG, sitemap, robots, and schema all use www to match the served host.
  url: "https://www.lakesidenny.com",
  phone: {
    display: "(315) 777-1809",
    href: "tel:+13157771809",
    e164: "+13157771809",
    contactName: "Dave",
  },
  email: "dave@lakesidenny.com",
  address: {
    street: "1040 Bradley Street",
    city: "Watertown",
    state: "NY",
    stateFull: "New York",
    zip: "13601",
    country: "US",
    // Approx coordinates for Watertown, NY, refine with exact GBP coords if desired.
    lat: 43.9748,
    lng: -75.9108,
  },
  hours: {
    // Snow ops run 24/7 in winter; office hours below for schema.
    display: "Mon–Fri 7am–6pm · 24/7 Snow Response in Winter",
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
      { days: ["Saturday"], opens: "08:00", closes: "16:00" },
    ],
  },
  social: {
    // Real profile URLs, feed the schema "sameAs" for brand/local SEO.
    google: "https://share.google/MpPIihNKRbfvtMunV", // Google Business Profile share link
    facebook: "https://www.facebook.com/lakesideoutdoorservices/",
    instagram: "",
  },
  rating: {
    // Real aggregate from the public Google Business Profile (verified 2026-08).
    // Keep in sync with the live Google listing so schema aggregateRating matches.
    value: 4.3,
    count: 50,
  },
} as const;

export const serviceAreas = [
  "Watertown",
  "Fort Drum",
  "Evans Mills",
  "Black River",
  "Adams",
  "Carthage",
  "Clayton",
  "Cape Vincent",
  "Alexandria Bay",
  "Wellesley Island",
  "Sackets Harbor",
  "Brownville",
  "Calcium",
  "Dexter",
  "The Thousand Islands",
] as const;

export const primaryArea = "Watertown & Northern New York";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Commercial",
    href: "/commercial-landscaping-watertown-ny",
    children: [
      {
        label: "Commercial Landscaping",
        href: "/commercial-landscaping-watertown-ny",
        desc: "Year-round grounds care for your property",
      },
      {
        label: "Commercial Snow Plowing",
        href: "/services/commercial-snow-plowing",
        desc: "Lots cleared before your doors open",
      },
      {
        label: "Commercial Salting & De-Icing",
        href: "/services/salting-de-icing",
        desc: "Slip-and-fall liability protection",
      },
      {
        label: "Commercial Lawn Maintenance",
        href: "/services/lawn-mowing-maintenance",
        desc: "Crisp, professional curb appeal",
      },
    ],
  },
  {
    label: "Residential",
    href: "/residential-landscaping-watertown-ny",
    children: [
      {
        label: "Residential Landscaping",
        href: "/residential-landscaping-watertown-ny",
        desc: "Design, install & seasonal care",
      },
      {
        label: "Lawn Mowing & Maintenance",
        href: "/services/lawn-mowing-maintenance",
        desc: "Reliable weekly service",
      },
      {
        label: "Residential Snow Plowing",
        href: "/services/snow-plowing",
        desc: "Driveways cleared, on time",
      },
      {
        label: "Spring & Fall Cleanups",
        href: "/services/spring-fall-cleanups",
        desc: "Get your property season-ready",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Snow Plowing", href: "/services/snow-plowing" },
      { label: "Snow Removal & Hauling", href: "/services/snow-removal" },
      { label: "Salting & De-Icing", href: "/services/salting-de-icing" },
      { label: "Lawn Mowing & Maintenance", href: "/services/lawn-mowing-maintenance" },
      { label: "Landscape Design & Install", href: "/services/landscape-design-installation" },
      { label: "Property Maintenance", href: "/services/property-maintenance" },
      { label: "Spring & Fall Cleanups", href: "/services/spring-fall-cleanups" },
      { label: "Top Soil, Gravel & Grading", href: "/services/topsoil-gravel-grading" },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
];
