import { Home, Layers, MessagesSquare, Sparkles } from "lucide-react";

import { SectionHeading } from "./section-heading";

const REASONS = [
  {
    icon: Layers,
    title: "The Prep Matters",
    description:
      "Smooth surfaces, careful preparation, and attention to the areas that make or break a finished paint job.",
  },
  {
    icon: MessagesSquare,
    title: "You'll Know What's Going On",
    description:
      "Clear conversations about the work, the timeline, and what to expect along the way.",
  },
  {
    icon: Home,
    title: "Respect for Your Home",
    description:
      "Your home isn't just another job site. We treat your space with care from start to finish.",
  },
  {
    icon: Sparkles,
    title: "The Little Details Matter",
    description:
      "Sharp paint lines, even coverage, and carefully finished edges. It's the small details that bring the whole project together.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Good Painting Starts Before the First Coat"
          description="A great paint job isn't just about the final color. It's about the preparation, the details, and how your home is treated throughout the project."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
