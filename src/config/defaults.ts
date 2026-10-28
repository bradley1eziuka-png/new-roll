// ───────────────────────────────────────────────────────────────────────────
// Default (universal) copy for the master template. Nothing here is specific
// to one business. Any field can be overridden per client in
// site.config.json → content. Do not add business facts, licenses, years in
// business, ratings, or reviews here.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  hero: {
    eyebrow: "Professional Painting Services",
    tagline: "Beautiful Finishes. Lasting Impressions.",
    subheadline:
      "Professional interior and exterior painting services designed to refresh your space, enhance curb appeal, and bring your vision to life.",
  },
  about: {
    eyebrow: "Confidence",
    title: "Feel Confident About Your Next Painting Project",
    body: "Choosing someone to work on your home or business is an important decision. A clear conversation, an understanding of your goals, and attention to the details can help you move forward with confidence.",
    badgeTitle: "Craftsmanship",
    badgeText: "in every detail",
  },
  faqs: [
    {
      q: "How do I get started with a painting project?",
      a: "Start by sharing what you'd like to paint and the look you're hoping to achieve. A quick conversation about your space, your goals, and your timeline is the best first step — from there, the details fall into place.",
    },
    {
      q: "Can I request an estimate?",
      a: "Yes. You can request a free estimate using the form on this page or by calling us directly. Share a few details about your project and we'll take it from there.",
    },
    {
      q: "What should I consider when choosing paint colors?",
      a: "Think about the lighting in the room, the existing finishes and furnishings, and the mood you want to create. Sampling colors in your own space before deciding can help you feel confident in your choice.",
    },
    {
      q: "How should I prepare for a painting project?",
      a: "Where possible, clear the area of furniture and wall hangings, and let us know about any specific concerns upfront. We'll handle the preparation and keep you informed along the way.",
    },
    {
      q: "Can I discuss both interior and exterior painting?",
      a: "Absolutely. Whether you're refreshing a single room, repainting an exterior, or planning work across several areas, we're happy to talk through your options together.",
    },
  ],
  footerBlurb:
    "Professional interior, exterior, and commercial painting. Beautiful finishes, careful preparation, and attention to detail — designed to refresh, protect, and transform your space.",
  finalCta: {
    title: "Ready to Give Your Space a Fresh New Look?",
    body: "Whether you're planning a small refresh or a larger transformation, the first step is a conversation.",
  },
  seo: {
    description:
      "Professional interior, exterior, and commercial painting. Beautiful finishes, careful preparation, and attention to detail. Request a free estimate today.",
  },
} as const;

export const DEFAULT_IMAGES = {
  hero: "/images/hero-exterior-garage-home.jpg",
  interior: "/images/interior-living-room.jpg",
  exterior: "/images/exterior-ranch-home.jpg",
  cabinet: "/images/cabinets-navy-island-kitchen.jpg",
  deck: "/images/deck-stained-wood.jpg",
  trust: "/images/exterior-dark-cabin-deck.jpg",
  galleryLivingRoom: "/images/interior-living-room.jpg",
  galleryDiningRoom: "/images/interior-dining-room.jpg",
  galleryRanch: "/images/exterior-ranch-home.jpg",
  galleryNavyKitchen: "/images/cabinets-navy-island-kitchen.jpg",
  galleryDarkKitchen: "/images/cabinets-dark-kitchen.jpg",
  galleryCabin: "/images/exterior-dark-cabin-deck.jpg",
} as const;
