import Link from "next/link";
import { DiscoverShelf } from "@/components/discover-shelf";
import { buttonVariants } from "@/components/ui/button";
import { allStoriesChronological } from "@/data/content";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const stories = allStoriesChronological();

  return (
    <div className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 trail-hero" aria-hidden />
        <div className="absolute inset-0 trail-dots opacity-40" aria-hidden />
        <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-16 sm:min-h-[78vh] sm:px-6 sm:pb-20">
          <div className="max-w-2xl space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <p className="font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-white drop-shadow sm:text-7xl">
              Time Trail
            </p>
            <h1 className="max-w-xl text-2xl font-semibold leading-snug text-white/95 sm:text-3xl">
              Walk through history one short story at a time.
            </h1>
            <p className="max-w-lg text-lg text-white/85">
              Made for kids ages 7–12. Big buttons. Real history. Tiny quizzes.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#shelf"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "min-h-12 rounded-xl bg-[color:var(--trail-sun)] px-6 text-base font-bold text-[color:var(--trail-ink)] hover:bg-[color:var(--trail-sun)]/90"
                )}
              >
                Start exploring
              </Link>
              <Link
                href="/timeline"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "min-h-12 rounded-xl border-white/40 bg-white/15 px-6 text-base font-bold text-white backdrop-blur-sm hover:bg-white/25 hover:text-white"
                )}
              >
                See the timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="shelf" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {stories.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[color:var(--trail-ink)]/20 bg-white/60 px-6 py-16 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--trail-ink)]">
              Shelf is empty
            </h2>
            <p className="mt-2 text-lg text-[color:var(--trail-ink)]/70">
              New history stories will land here soon.
            </p>
          </div>
        ) : (
          <DiscoverShelf stories={stories} />
        )}
      </div>
    </div>
  );
}
