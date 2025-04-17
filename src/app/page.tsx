import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Alert from "@/app/_components/alert";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <>
      <Alert />
      <main className="min-h-screen">
        <Container>
          <Intro />
          <div className="relative mb-32">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 dark:opacity-20 blur rounded-lg"></div>
            <div className="relative">
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            </div>
          </div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </main>
    </>
  );
}
