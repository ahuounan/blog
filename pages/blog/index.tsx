import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { TabPageLayout } from 'components/layouts/TabPageLayout';
import { Background } from 'components/patterns/Background';
import { Navbar } from 'components/patterns/Navbar';
import Text from 'components/patterns/Text';
import { Div } from 'components/primitives/Div';
import { PostsController } from 'controllers/posts';
import { PostData } from 'controllers/posts/types';

interface Props {
  posts: PostData[];
}

export default function Blog(props: Props): JSX.Element {
  return (
    <TabPageLayout
      title="Blog"
      header={<Text type="heading">Blog</Text>}
      background={<Background />}
      body={
        <Div>
          {props.posts.map(post => (
            <Div key={post.id}>
              <Link href={`/blog/${post.id}`}>{`Post ${post.id}`}</Link>
            </Div>
          ))}
        </Div>
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
