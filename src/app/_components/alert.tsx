import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-indigo-900 border-indigo-800 text-white": preview,
        "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 border-indigo-100 dark:border-slate-700": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-purple-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              Read more technical articles at{" "}
              <a
                href="https://undefinedbehaviorexception.dev"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline duration-200 transition-colors"
              >
                undefinedbehaviorexception.dev
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
