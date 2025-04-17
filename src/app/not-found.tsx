import Link from 'next/link';
import Container from '@/app/_components/container';

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-slate-200">
          Undefined Behavior Detected
        </h2>
        <p className="text-lg mb-8 max-w-xl dark:text-slate-300">
          The page you're looking for doesn't exist or has been moved to another URL. This is truly undefined behavior!
        </p>
        <Link 
          href="/" 
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}