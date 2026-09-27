"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { Story } from "@/data/content";

export function StoryQuiz({ story }: { story: Story }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const total = story.quiz.length;
  const question = story.quiz[index];
  const progress = useMemo(
    () => ((done ? total : index) / total) * 100,
    [done, index, total]
  );

  if (!question && !done) {
    return null;
  }

  function choose(choiceIndex: number) {
    if (selected !== null || !question) return;
    setSelected(choiceIndex);
    if (choiceIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <section
        aria-labelledby="quiz-done"
        className="rounded-2xl border border-[color:var(--trail-ink)]/10 bg-white/85 p-5 sm:p-6 animate-in zoom-in-95 duration-400"
      >
        <h2
          id="quiz-done"
          className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--trail-ink)]"
        >
          Trail checkpoint complete!
        </h2>
        <p className="mt-2 text-lg text-[color:var(--trail-ink)]/75">
          You got {score} out of {total} questions right.
        </p>
        <Progress value={100} className="mt-4 h-3" />
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg" className="min-h-12 rounded-xl px-6 text-base" onClick={restart}>
            Try quiz again
          </Button>
          <Link
            href="/timeline"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-h-12 rounded-xl px-6 text-base"
            )}
          >
            Back to timeline
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "min-h-12 rounded-xl px-6 text-base"
            )}
          >
            More stories
          </Link>
        </div>
      </section>
    );
  }

  const isCorrect = selected === question.correctIndex;

  return (
    <section
      aria-labelledby="quiz-heading"
      className="rounded-2xl border border-[color:var(--trail-ink)]/10 bg-white/85 p-5 sm:p-6"
    >
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[color:var(--trail-moss)]">
            Quick quiz
          </p>
          <h2
            id="quiz-heading"
            className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--trail-ink)] sm:text-3xl"
          >
            Question {index + 1} of {total}
          </h2>
        </div>
        <p className="text-sm font-semibold text-[color:var(--trail-ink)]/60">
          Score {score}
        </p>
      </div>
      <Progress value={progress} className="mt-4 h-3" />

      <p className="mt-5 text-xl font-semibold leading-snug text-[color:var(--trail-ink)]">
        {question.question}
      </p>

      <ul className="mt-4 grid gap-3">
        {question.choices.map((choice, choiceIndex) => {
          const chosen = selected === choiceIndex;
          const revealCorrect =
            selected !== null && choiceIndex === question.correctIndex;
          const revealWrong =
            chosen && choiceIndex !== question.correctIndex;

          return (
            <li key={choice}>
              <button
                type="button"
                onClick={() => choose(choiceIndex)}
                disabled={selected !== null}
                className={cn(
                  "flex w-full min-h-14 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-lg font-medium transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--trail-sun)]",
                  selected === null &&
                    "border-[color:var(--trail-ink)]/15 bg-[color:var(--trail-sky)]/40 hover:border-[color:var(--trail-moss)] hover:bg-[color:var(--trail-moss)]/10",
                  revealCorrect &&
                    "border-[color:var(--trail-moss)] bg-[color:var(--trail-moss)]/15 text-[color:var(--trail-ink)]",
                  revealWrong &&
                    "border-[color:var(--trail-clay)] bg-[color:var(--trail-clay)]/10 text-[color:var(--trail-ink)]",
                  selected !== null &&
                    !revealCorrect &&
                    !revealWrong &&
                    "border-[color:var(--trail-ink)]/10 bg-white/50 opacity-70"
                )}
              >
                <span>{choice}</span>
                {revealCorrect ? (
                  <CheckCircle2 className="size-6 shrink-0 text-[color:var(--trail-moss)]" />
                ) : null}
                {revealWrong ? (
                  <XCircle className="size-6 shrink-0 text-[color:var(--trail-clay)]" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {selected !== null ? (
        <div className="mt-5 space-y-4 animate-in fade-in duration-300">
          <p
            className={cn(
              "rounded-xl px-4 py-3 text-base",
              isCorrect
                ? "bg-[color:var(--trail-moss)]/15 text-[color:var(--trail-ink)]"
                : "bg-[color:var(--trail-clay)]/10 text-[color:var(--trail-ink)]"
            )}
          >
            <span className="font-bold">{isCorrect ? "Yes!" : "Not quite."}</span>{" "}
            {question.explain}
          </p>
          <Button
            size="lg"
            className="min-h-12 rounded-xl px-6 text-base"
            onClick={next}
          >
            {index + 1 >= total ? "See my score" : "Next question"}
          </Button>
        </div>
      ) : null}
    </section>
  );
}
