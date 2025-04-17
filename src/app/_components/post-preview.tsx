import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="transition-all duration-200 p-4 hover:bg-gray-50 dark:hover:bg-slate-800/50 rounded-lg -mx-4">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug font-bold">
        <Link href={`/posts/${slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 text-gray-500 dark:text-slate-400">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 dark:text-slate-300">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
