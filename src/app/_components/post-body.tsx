import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`${markdownStyles["markdown"]} p-6 md:p-8 bg-white dark:bg-slate-900 rounded-lg shadow-sm dark:shadow-indigo-900/5 border border-gray-100 dark:border-slate-800`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
