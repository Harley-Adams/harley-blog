import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
        Undefined<br />
        Behavior<br />
        Exception
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 dark:text-slate-300">
        A technical blog by{" "}
        <span className="font-bold">
          {CMS_NAME}
        </span>{" "}
        on software engineering, systems programming, and tech.
      </h4>
    </section>
  );
}
