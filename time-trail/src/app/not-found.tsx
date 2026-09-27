import { EmptyState } from "@/components/empty-state";

export default function NotFound() {
  return (
    <EmptyState
      title="That path is missing"
      message="We could not find this story or page. Pick another stop on the trail."
      actionHref="/"
      actionLabel="Back to Discover"
    />
  );
}
