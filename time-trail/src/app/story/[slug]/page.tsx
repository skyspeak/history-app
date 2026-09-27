import { notFound } from "next/navigation";
import { StoryReader } from "@/components/story-reader";
import { getStory, stories } from "@/data/content";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <StoryReader story={story} />
    </div>
  );
}
