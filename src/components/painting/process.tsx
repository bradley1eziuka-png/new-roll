import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description: "Share what you'd like painted and the result you're after.",
  },
  {
    number: "02",
    title: "Go Over the Details",
    description: "We'll talk through the space, the timeline, and any questions you have.",
  },
  {
    number: "03",
    title: "Get the Work Done",
    description: "With a clear plan in place, the project moves forward from prep to finish.",
  },
];

export function Process() {
  return (
    <section className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="From First Call to Finished Project"
          description="Three straightforward steps, with a free estimate to start."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
            aria-hidden
          />
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <span className="flex size-14 items-center justify-center rounded-full border-2 border-accent bg-background font-display text-xl font-semibold text-accent shadow-sm">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
