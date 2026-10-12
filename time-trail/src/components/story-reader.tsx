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
    <article className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <Link
        href="/timeline"
        className={cn(
          buttonVariants({ variant: "ghost", size: "lg" }),
          "min-h-11 -ml-2 touch-manipulation rounded-xl px-3 text-base text-[color:var(--trail-ink)]"
        )}
      >
        <ArrowLeft className="size-5" aria-hidden />
        Timeline
      </Link>

      <header className="overflow-hidden rounded-2xl text-white shadow-[0_20px_50px_-28px_rgba(20,40,30,0.55)] animate-in fade-in zoom-in-95 duration-500 sm:rounded-3xl">
        <div
          className="relative min-h-[200px] px-5 py-8 sm:min-h-[300px] sm:px-10 sm:py-14"
          style={{ background: story.heroGradient }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-30 trail-dots" aria-hidden />
          <div className="relative max-w-xl space-y-3 sm:space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-0 bg-black/25 text-white backdrop-blur-sm">
                {era.name}
              </Badge>
              <Badge className="border-0 bg-black/25 text-white backdrop-blur-sm">
                {story.yearLabel}
              </Badge>
            </div>
            <p className="text-4xl opacity-90 sm:text-5xl" aria-hidden>
              {story.icon}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-5xl">
              {story.title}
            </h1>
            <p className="text-base text-white/90 sm:text-lg">{story.blurb}</p>
          </div>
        </div>
      </header>

      <div className="space-y-4 text-base leading-relaxed text-[color:var(--trail-ink)]/90 sm:space-y-5 sm:text-lg">
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
