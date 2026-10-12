"use client";

"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ErrorState({
  title = "The trail got foggy",
  message = "Something went wrong loading this page. Try again in a moment.",
  onRetry,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 py-16 text-center animate-in fade-in duration-500"
    >
      <div className="flex size-16 items-center justify-center rounded-full bg-[color:var(--trail-clay)]/15 text-[color:var(--trail-clay)]">
        <AlertTriangle className="size-8" aria-hidden />
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--trail-ink)]">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-[color:var(--trail-ink)]/75">
        {message}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {onRetry ? (
          <Button
            size="lg"
            className="min-h-12 rounded-xl px-6 text-base"
            onClick={onRetry}
          >
            <RefreshCw className="size-5" aria-hidden />
            Try again
          </Button>
        ) : null}
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "min-h-12 rounded-xl px-6 text-base"
          )}
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
