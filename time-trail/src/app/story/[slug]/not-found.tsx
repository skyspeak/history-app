import { EmptyState } from "@/components/empty-state";

export default function StoryNotFound() {
  return (
    <EmptyState
      title="Story not on the shelf"
      message="That story slug is not in our curated collection yet."
      actionHref="/"
      actionLabel="Browse stories"
    />
  );
}
