import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrismPlus, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(markdown);
  
  return result.toString();
}
