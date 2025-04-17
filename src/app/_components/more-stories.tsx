import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { SectionSeparator } from "./section-separator";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <SectionSeparator />
      <h2 className="mb-12 text-4xl md:text-5xl font-bold tracking-tighter leading-tight dark:text-slate-200">
        More Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
