import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { PostLayout } from "@components/layouts/PostLayout";
import { SectionLayout } from "@components/layouts/SectionLayout";
import { TabPageLayout } from "@components/layouts/TabPageLayout";
import { Background } from "@components/patterns/Background";
import { Navbar } from "@components/patterns/Navbar";
import { PostsController } from "src/controllers/posts";
import { PostData } from "src/controllers/posts/types";

export interface Props {
  posts: PostData[];
}

export default function Blog(props: Props): JSX.Element {
  const router = useRouter();
  const navigate = id => {
    router.push(`/blog/${id}`);
  };

  return (
    <TabPageLayout
      title="Blog"
      background={<Background />}
      body={
        <SectionLayout title="Blog">
          <>
            {props.posts.map(post => (
              <PostLayout
                onClick={() => {
                  navigate(post.id);
                }}
                key={post.id}
                title={post.title}>
                {post.content.slice(200) + "..."}
              </PostLayout>
            ))}
          </>
        </SectionLayout>
      }
      navbar={<Navbar />}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const posts = (await PostsController.getAll()) ?? [];

  return {
    props: {
      posts
    }
  };
};
