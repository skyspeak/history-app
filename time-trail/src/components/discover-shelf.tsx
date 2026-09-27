import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getEra, type Story } from "@/data/content";
import { cn } from "@/lib/utils";

export function DiscoverShelf({
  stories,
  title = "Story shelf",
  subtitle = "Pick a story. Read a little. Then try the quiz.",
}: {
  stories: Story[];
  title?: string;
  subtitle?: string;
}) {
  if (stories.length === 0) {
    return null;
  }

  return (
    <section className="space-y-5" aria-labelledby="shelf-heading">
      <div className="max-w-2xl">
        <h2
          id="shelf-heading"
          className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--trail-ink)] sm:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-2 text-lg text-[color:var(--trail-ink)]/70">{subtitle}</p>
      </div>

      <div className="relative">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {stories.map((story, index) => {
            const era = getEra(story.eraId);
            return (
              <li
                key={story.slug}
                className="w-[85%] shrink-0 snap-start sm:w-[70%] md:w-auto animate-in fade-in slide-in-from-bottom-2 duration-500"
                style={{ animationDelay: `${index * 70}ms`, animationFillMode: "both" }}
              >
                <Link
                  href={`/story/${story.slug}`}
                  className={cn(
                    "group flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[color:var(--trail-ink)]/10 bg-white/80 shadow-[0_12px_30px_-18px_rgba(28,44,34,0.45)] transition duration-300",
                    "hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(28,44,34,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--trail-sun)]"
                  )}
                >
                  <div
                    className="relative flex h-36 items-end p-4 text-white"
                    style={{ background: story.heroGradient }}
                  >
                    <span
                      className="absolute right-4 top-4 text-4xl opacity-80 transition-transform duration-500 group-hover:scale-110"
                      aria-hidden
                    >
                      {story.icon}
                    </span>
                    <Badge className="border-0 bg-black/25 text-white backdrop-blur-sm">
                      {era.name}
                    </Badge>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--trail-moss)]">
                        {story.yearLabel}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl leading-tight text-[color:var(--trail-ink)]">
                        {story.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-[color:var(--trail-ink)]/75">
                      {story.blurb}
                    </p>
                    <p className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--trail-ink)]/60">
                      <Clock className="size-4" aria-hidden />
                      About {story.minutes} minutes
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
