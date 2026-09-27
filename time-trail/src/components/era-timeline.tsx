import Link from "next/link";
import { eras, storiesByEra } from "@/data/content";

export function EraTimeline() {
  return (
    <section aria-labelledby="timeline-heading" className="space-y-8">
      <div className="max-w-2xl">
        <h1
          id="timeline-heading"
          className="font-[family-name:var(--font-display)] text-4xl text-[color:var(--trail-ink)] sm:text-5xl"
        >
          Era timeline
        </h1>
        <p className="mt-3 text-lg text-[color:var(--trail-ink)]/70">
          Walk the trail from ancient cities to the Moon. Tap any stop to read.
        </p>
      </div>

      <ol className="relative space-y-0 pl-2 sm:pl-4">
        <div
          className="absolute bottom-4 left-[1.35rem] top-4 w-1 rounded-full bg-[color:var(--trail-moss)]/25 sm:left-[1.85rem]"
          aria-hidden
        />
        {eras.map((era, eraIndex) => {
          const eraStories = storiesByEra(era.id);
          return (
            <li
              key={era.id}
              className="relative pb-10 animate-in fade-in slide-in-from-left-2 duration-500"
              style={{ animationDelay: `${eraIndex * 90}ms`, animationFillMode: "both" }}
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="relative z-10 flex w-10 shrink-0 justify-center sm:w-12">
                  <span
                    className="mt-2 size-5 rounded-full border-4 border-white shadow-md animate-pulse"
                    style={{ backgroundColor: era.color }}
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="rounded-2xl border border-[color:var(--trail-ink)]/10 p-4 sm:p-5"
                    style={{ backgroundColor: era.soft }}
                  >
                    <p className="text-sm font-bold uppercase tracking-wide" style={{ color: era.color }}>
                      {era.range}
                    </p>
                    <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[color:var(--trail-ink)] sm:text-3xl">
                      {era.name}
                    </h2>
                    <p className="mt-2 text-base text-[color:var(--trail-ink)]/75">
                      {era.summary}
                    </p>
                  </div>

                  {eraStories.length === 0 ? (
                    <p className="mt-3 text-base text-[color:var(--trail-ink)]/60">
                      No stories here yet. Check back soon.
                    </p>
                  ) : (
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                      {eraStories.map((story) => (
                        <li key={story.slug}>
                          <Link
                            href={`/story/${story.slug}`}
                            className="flex min-h-16 items-center gap-3 rounded-xl border border-[color:var(--trail-ink)]/10 bg-white/80 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-[color:var(--trail-moss)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--trail-sun)]"
                          >
                            <span
                              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-xl text-white"
                              style={{ background: story.heroGradient }}
                              aria-hidden
                            >
                              {story.icon}
                            </span>
                            <span>
                              <span className="block font-semibold text-[color:var(--trail-ink)]">
                                {story.shortTitle}
                              </span>
                              <span className="block text-sm text-[color:var(--trail-ink)]/65">
                                {story.yearLabel}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
