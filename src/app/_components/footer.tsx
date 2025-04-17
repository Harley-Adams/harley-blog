import Container from "@/app/_components/container";
import { CMS_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 dark:border-slate-700">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 dark:text-slate-300">
            Personal blog by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{CMS_NAME}</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/harley-adams"
              className="mx-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/harleyadams"
              className="mx-3 font-bold hover:underline dark:text-slate-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/harleyadams"
              className="mx-3 font-bold hover:underline dark:text-slate-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="py-6 text-center text-sm dark:text-slate-400">
          © {new Date().getFullYear()} {CMS_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
