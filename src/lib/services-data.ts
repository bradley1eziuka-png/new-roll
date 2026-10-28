// ───────────────────────────────────────────────────────────────────────────
// Service content for Roll With It Painting.
//
// Every service page is generated from this single source of truth so all
// six pages share one voice, layout, and visual system. Only photographs of
// the client's real projects are used; a service with no photo gets a
// non-photographic treatment (heroImage left undefined). No years in
// business, licenses, warranties, ratings, or guarantees are claimed here.
//
// To hide a service, remove its key from site.config.json → services.enabled.
// Its page then returns 404 and it disappears from the nav, footer,
// homepage, and form dropdown.
// ───────────────────────────────────────────────────────────────────────────

import { Building2, Droplets, type LucideIcon } from "lucide-react";

import { siteConfig, type ServiceKey } from "@/config";
import { IMAGES } from "./site-images";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };
export type GalleryItem = { src: string; alt: string; label: string };

export interface ServiceConfig {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  explanation: { title: string; body: string };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  // Extra project photos for this service. The first is shown beside the
  // explanation; the rest only render as a grid when there are two or more.
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  // Optional: with no real photo, cards and heroes use a dark brand panel.
  heroImage?: string;
  heroAlt?: string;
  icon?: LucideIcon;
}

const SHARED_PROCESS: ServiceStep[] = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description: "Share what you'd like painted and the result you're after.",
  },
  {
    number: "02",
    title: "Go Over the Details",
    description: "We'll talk through the space, the timeline, and your questions.",
  },
  {
    number: "03",
    title: "Get the Work Done",
    description: "With a clear plan in place, the project moves forward from prep to finish.",
  },
];

const BASE_SERVICES = {
  interior: {
    slug: "interior-painting",
    path: "/services/interior-painting",
    title: "Interior Painting",
    eyebrow: "Interior Painting",
    shortDescription:
      "Tired walls, scuffed trim, or a room that needs something different? We'll handle the prep and painting so you can enjoy a space that feels new again.",
    explanation: {
      title: "A Room That Feels New Again",
      body: "A fresh coat changes how a room looks and how it feels to be in it. We start with careful preparation, then paint walls, ceilings, trim, and doors with clean lines and even coverage. The goal is simple: a finish that looks good up close, not just from across the room.",
    },
    benefits: [
      {
        title: "Prep That Shows",
        description:
          "Smooth surfaces and careful preparation make the difference between a paint job and a good one.",
      },
      {
        title: "Sharp Lines, Even Coverage",
        description: "Clean edges at the trim, ceiling, and corners, with a consistent finish.",
      },
      {
        title: "Respect for Your Home",
        description: "We treat your space with care from the first day to the last.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryDiningRoom,
        alt: "A dining room with a dark painted accent wall and soft gray walls",
        label: "Dining Room",
      },
    ],
    faqs: [
      {
        q: "Do I need to move my furniture?",
        a: "Clearing the room helps the work go smoothly. Tell us what's in the space and we'll talk through what needs to move.",
      },
      {
        q: "How long will an interior project take?",
        a: "It depends on the size and scope. We'll go over the timeline with you before work begins.",
      },
    ],
    heroImage: IMAGES.interior,
    heroAlt:
      "A freshly painted living room with vaulted ceilings, large windows, and a deep accent wall",
  },

  exterior: {
    slug: "exterior-painting",
    path: "/services/exterior-painting",
    title: "Exterior Painting",
    eyebrow: "Exterior Painting",
    shortDescription:
      "Faded siding, worn trim, or peeling paint? Give your home a fresh look with careful preparation and a finish made to stand up to Indiana weather.",
    explanation: {
      title: "Built for Indiana Weather",
      body: "Sun, rain, and winter take a toll on exterior paint. A good exterior job starts with cleaning and surface prep, so the new finish has something solid to hold onto. From siding to trim to garage doors, we aim for a clean, even look that improves your home's curb appeal.",
    },
    benefits: [
      {
        title: "Fresh Curb Appeal",
        description:
          "New color on siding and trim can change how your whole home looks from the street.",
      },
      {
        title: "Prep Before Paint",
        description:
          "Cleaning and surface prep come first, because paint is only as good as what's under it.",
      },
      {
        title: "Clean, Finished Edges",
        description: "Careful work around windows, doors, and trim keeps the lines sharp.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.hero,
        alt: "A ranch home with dark gray siding, white garage doors, and a mature landscape",
        label: "Gray Siding, White Garage Doors",
      },
    ],
    faqs: [
      {
        q: "When is the best time to paint an exterior?",
        a: "Weather and temperature matter for exterior paint. We'll talk through timing so your project is done under the right conditions.",
      },
      {
        q: "How should I prepare the outside of my home?",
        a: "We handle the cleaning and prep. Just let us know about any problem areas up front.",
      },
    ],
    heroImage: IMAGES.exterior,
    heroAlt: "A ranch home with freshly painted gray siding and a green front door",
  },

  cabinet: {
    slug: "cabinet-painting",
    path: "/services/cabinet-painting",
    title: "Cabinet Painting",
    eyebrow: "Cabinet Painting",
    shortDescription:
      "Love your kitchen layout but not the cabinets? A fresh painted finish can completely change the room without replacing everything.",
    explanation: {
      title: "Same Kitchen, New Look",
      body: "If the layout works but the cabinets look dated, paint can change the whole room. The key is the prep: cleaning, sanding, and priming so the new finish goes on smooth and holds up to daily use. Two-tone looks, like light uppers with dark lowers or an island in a bold color, are one way to make a kitchen feel completely different.",
    },
    benefits: [
      {
        title: "A New Look, Same Layout",
        description: "Update the kitchen without tearing out cabinets that still work for you.",
      },
      {
        title: "Color That Fits",
        description: "Pick a finish that works with your counters, walls, and floors.",
      },
      {
        title: "A Smooth, Even Finish",
        description: "Proper cleaning, sanding, and priming help the paint go on clean.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryDarkKitchen,
        alt: "A kitchen with white upper cabinets, dark painted lower cabinets, and a butcher block island",
        label: "Two-Tone Kitchen",
      },
    ],
    faqs: [
      {
        q: "Can my existing cabinets be painted?",
        a: "Many cabinets can be refinished with the right prep. We'll look at yours and tell you what to expect.",
      },
      {
        q: "How long until I can use my kitchen again?",
        a: "Drying and cure times depend on the finish. We'll set clear expectations before work begins.",
      },
    ],
    heroImage: IMAGES.cabinet,
    heroAlt: "A kitchen with white upper cabinets and a navy painted island and lower cabinets",
  },

  pressureWashing: {
    slug: "pressure-washing",
    path: "/services/pressure-washing",
    title: "Pressure Washing",
    eyebrow: "Pressure Washing",
    icon: Droplets,
    shortDescription:
      "Dirt and buildup can make even a well-kept property look tired. Pressure washing helps clean up exterior surfaces and prepare them for painting or staining.",
    explanation: {
      title: "Clean Surfaces, Better Results",
      body: "Exterior surfaces collect dirt and buildup over time, and it shows. Pressure washing cleans them up on its own, and it's also the right first step before painting or staining, since new finishes hold better on a clean surface. If you're planning exterior work, ask us to include it.",
    },
    benefits: [
      {
        title: "A Cleaner Look",
        description: "Wash away dirt and buildup that make a property look worn.",
      },
      {
        title: "Ready for Paint or Stain",
        description: "A clean surface gives a new finish a better start.",
      },
      {
        title: "Pairs With Other Work",
        description: "Add it to an exterior painting or deck staining project in one plan.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [],
    faqs: [
      {
        q: "What can be pressure washed?",
        a: "Tell us what you'd like cleaned up and we'll talk through what makes sense for that surface.",
      },
      {
        q: "Should I pressure wash before painting or staining?",
        a: "Cleaning first usually gives a better result. We can include it as part of your painting or staining project.",
      },
    ],
  },

  deckStaining: {
    slug: "deck-staining",
    path: "/services/deck-staining",
    title: "Deck Staining",
    eyebrow: "Deck Staining",
    shortDescription:
      "Bring out the natural character of your deck while helping protect the wood from sun, rain, and everyday wear.",
    explanation: {
      title: "Protect the Wood You Walk On",
      body: "A deck takes more weather than almost any other part of your home. Stain brings back the color and grain of the wood and helps protect it from sun, rain, and daily use. A clean, even coat makes the whole outdoor space look cared for.",
    },
    benefits: [
      {
        title: "Brings Out the Wood",
        description: "Stain highlights the natural grain and color of your deck.",
      },
      {
        title: "Added Protection",
        description: "A good finish helps shield the wood from sun, moisture, and wear.",
      },
      {
        title: "Better Outdoor Space",
        description: "A refreshed deck makes your whole backyard feel more inviting.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryCabin,
        alt: "A dark painted deck with matching railings and steps beside a home with dark siding",
        label: "Painted Deck and Steps",
      },
    ],
    faqs: [
      {
        q: "What's the difference between stain and paint?",
        a: "Stain soaks into the wood and shows off the grain, while paint forms a film on the surface. We'll help you pick what fits your deck and the look you want.",
      },
      {
        q: "How often should a deck be refinished?",
        a: "It depends on sun, weather, and wear. We can look at your deck and tell you what it needs.",
      },
    ],
    heroImage: IMAGES.deck,
    heroAlt:
      "A wood deck with railings and lattice skirting, freshly stained in a warm reddish-brown",
  },

  commercial: {
    slug: "commercial-painting",
    path: "/services/commercial-painting",
    title: "Commercial Painting",
    eyebrow: "Commercial Painting",
    icon: Building2,
    shortDescription:
      "Your business needs to look its best without unnecessary disruption. We work with commercial property owners to plan painting projects around their needs.",
    explanation: {
      title: "Painting Planned Around Your Business",
      body: "Whether it's an office, a storefront, or a shared space, the look of your property says something about your business. We work with commercial property owners to plan the scope and timing, so the painting gets done without getting in the way of your day.",
    },
    benefits: [
      {
        title: "A Professional Look",
        description: "A clean, updated finish makes a good impression on customers and staff.",
      },
      {
        title: "Planned Around You",
        description: "Talk to us about timing so the work fits how your business runs.",
      },
      {
        title: "Consistent Results",
        description:
          "A uniform finish across rooms and common areas keeps the space looking cohesive.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [],
    faqs: [
      {
        q: "Can you work around our business hours?",
        a: "We can talk through scheduling options so the work fits around how you run your business.",
      },
      {
        q: "Can you handle a project with several rooms or areas?",
        a: "Tell us about the property and what needs painting, and we'll plan the project with you.",
      },
    ],
  },
} satisfies Record<ServiceKey, ServiceConfig>;

// Apply per-client title/description overrides from site.config.json.
export const SERVICES = Object.fromEntries(
  Object.entries(BASE_SERVICES).map(([key, base]) => {
    const o = siteConfig.services.overrides[key as ServiceKey] ?? {};
    return [
      key,
      {
        ...base,
        ...(o.title ? { title: o.title } : {}),
        ...(o.shortDescription ? { shortDescription: o.shortDescription } : {}),
      },
    ];
  }),
) as Record<ServiceKey, ServiceConfig>;

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

// Ordered list for the header dropdown, footer links, and the home services grid.
// Only services enabled in site.config.json appear.
export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);
