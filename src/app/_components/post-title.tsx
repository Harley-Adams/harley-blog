import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left text-gray-900 dark:text-transparent dark:bg-clip-text bg-gradient-to-br dark:from-indigo-500 dark:to-purple-600">
      {children}
    </h1>
  );
}
