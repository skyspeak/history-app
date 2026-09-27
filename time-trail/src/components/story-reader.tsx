import Link from "next/link";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { StoryQuiz } from "@/components/story-quiz";
import { buttonVariants } from "@/components/ui/button";
import { getEra, type Story } from "@/data/content";
import { cn } from "@/lib/utils";

export function StoryReader({ story }: { story: Story }) {
  const era = getEra(story.eraId);

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <Link
        href="/timeline"
        className={cn(
          buttonVariants({ variant: "ghost", size: "lg" }),
          "min-h-11 -ml-2 rounded-xl px-3 text-base text-[color:var(--trail-ink)]"
        )}
      >
        <ArrowLeft className="size-5" aria-hidden />
        Timeline
      </Link>

      <header className="overflow-hidden rounded-3xl text-white shadow-[0_20px_50px_-28px_rgba(20,40,30,0.55)] animate-in fade-in zoom-in-95 duration-500">
        <div
          className="relative min-h-[240px] px-6 py-10 sm:min-h-[300px] sm:px-10 sm:py-14"
          style={{ background: story.heroGradient }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-30 trail-dots" aria-hidden />
          <div className="relative max-w-xl space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-0 bg-black/25 text-white backdrop-blur-sm">
                {era.name}
              </Badge>
              <Badge className="border-0 bg-black/25 text-white backdrop-blur-sm">
                {story.yearLabel}
              </Badge>
            </div>
            <p className="text-5xl opacity-90" aria-hidden>
              {story.icon}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
              {story.title}
            </h1>
            <p className="text-lg text-white/90">{story.blurb}</p>
          </div>
        </div>
      </header>

      <div className="space-y-5 text-lg leading-relaxed text-[color:var(--trail-ink)]/90">
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <aside className="flex gap-3 rounded-2xl border border-[color:var(--trail-sun)]/40 bg-[color:var(--trail-sun)]/20 p-4 sm:p-5">
        <Lightbulb
          className="mt-0.5 size-6 shrink-0 text-[color:var(--trail-clay)]"
          aria-hidden
        />
        <div>
          <p className="font-bold text-[color:var(--trail-ink)]">Fun fact</p>
          <p className="mt-1 text-base leading-relaxed text-[color:var(--trail-ink)]/80">
            {story.funFact}
          </p>
        </div>
      </aside>

      <Separator className="bg-[color:var(--trail-ink)]/10" />

      <StoryQuiz story={story} />
    </article>
  );
}
