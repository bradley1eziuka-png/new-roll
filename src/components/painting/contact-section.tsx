import { ArrowRight, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// The homepage "Contact" section — a confident call-to-call block that points
// to the estimate form in the hero. The form itself lives in the hero so the
// page never shows two identical forms.
export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Prefer to Talk It Through?"
          description="Call us, or request a free estimate online."
        />

        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-secondary/50 p-8 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Call Roll With It Painting
          </p>
          <a
            href={BUSINESS_PHONE_TEL}
            className="mt-3 flex items-center justify-center gap-3 font-display text-3xl font-semibold tracking-tight text-primary transition-colors hover:text-accent"
          >
            <Phone className="size-7 text-accent" />
            {BUSINESS_PHONE}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Serving Northwest Indiana. Tell us about your project and we'll help you plan the next
            steps.
          </p>
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
            Get a Free Estimate
            <ArrowRight className="size-4" />
          </a>
          <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "lg" })}>
            <Phone className="size-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
