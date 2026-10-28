import { Paintbrush } from "lucide-react";

import { cn } from "@/lib/utils";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Business logo mark. With no logo set in site.config.json → branding.logo,
// the master paintbrush mark is shown.
export function Logo({ className }: { className?: string }) {
  if (LOGO.src) {
    return (
      <img
        src={LOGO.src}
        alt={LOGO.alt || `${BUSINESS_NAME} logo`}
        className={cn("h-10 w-auto max-w-[9rem] shrink-0 object-contain", className)}
      />
    );
  }
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary shadow-sm",
        className,
      )}
    >
      <Paintbrush className="size-5" />
    </span>
  );
}
