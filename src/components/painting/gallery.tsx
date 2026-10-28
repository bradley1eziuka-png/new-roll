import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

const GALLERY = [
  {
    src: IMAGES.hero,
    alt: "A ranch home with dark gray siding, white garage doors, and a mature landscape",
    label: "Exterior",
  },
  {
    src: IMAGES.galleryNavyKitchen,
    alt: "A kitchen with white upper cabinets and a navy painted island and lower cabinets",
    label: "Cabinets",
  },
  {
    src: IMAGES.galleryLivingRoom,
    alt: "A freshly painted living room with vaulted ceilings, large windows, and a deep accent wall",
    label: "Interior",
  },
  {
    src: IMAGES.galleryCabin,
    alt: "A home with dark painted log-style siding, white trim, and a matching painted deck and steps",
    label: "Exterior & Deck",
  },
  {
    src: IMAGES.galleryDiningRoom,
    alt: "A dining room with a dark painted accent wall and soft gray walls",
    label: "Interior",
  },
  {
    src: IMAGES.galleryDarkKitchen,
    alt: "A kitchen with white upper cabinets, dark painted lower cabinets, and a butcher block island",
    label: "Cabinets",
  },
  {
    src: IMAGES.deck,
    alt: "A wood deck with railings and lattice skirting, freshly stained in a warm reddish-brown",
    label: "Deck Staining",
  },
  {
    src: IMAGES.galleryRanch,
    alt: "A ranch home with freshly painted gray siding and a green front door",
    label: "Exterior",
  },
];

export function Gallery() {
  return (
    <section id="our-work" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="See What a Fresh Coat Can Do"
          description="Take a look at painting projects completed by Roll With It Painting."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {GALLERY.map((item) => (
            <figure
              key={item.alt}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
