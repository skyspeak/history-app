import Link from "next/link";
import { Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  message,
  actionHref = "/",
  actionLabel = "Back to Discover",
}: {
  title: string;
  message: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div
      role="status"
      className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 py-16 text-center animate-in fade-in duration-500"
    >
      <div className="flex size-16 items-center justify-center rounded-full bg-[color:var(--trail-moss)]/15 text-[color:var(--trail-moss)]">
        <Compass className="size-8" aria-hidden />
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--trail-ink)]">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-[color:var(--trail-ink)]/75">
        {message}
      </p>
      <Link
        href={actionHref}
        className={cn(
          buttonVariants({ size: "lg" }),
          "min-h-12 rounded-xl px-6 text-base"
        )}
      >
        {actionLabel}
      </Link>
    </div>
  );
}
