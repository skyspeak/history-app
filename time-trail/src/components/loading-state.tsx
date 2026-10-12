import { Skeleton } from "@/components/ui/skeleton";

export function LoadingState({ label = "Opening the trail…" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="mx-auto w-full max-w-6xl space-y-6 px-4 py-10 sm:px-6"
    >
      <p className="sr-only">{label}</p>
      <Skeleton className="h-10 w-48 rounded-xl bg-[color:var(--trail-moss)]/20" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-2xl border border-[color:var(--trail-ink)]/10 bg-white/50 p-4"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Skeleton className="h-36 w-full rounded-xl bg-[color:var(--trail-moss)]/15" />
            <Skeleton className="h-6 w-3/4 rounded-md bg-[color:var(--trail-moss)]/20" />
            <Skeleton className="h-4 w-full rounded-md bg-[color:var(--trail-moss)]/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
