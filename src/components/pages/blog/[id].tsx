import { GetServerSideProps } from "next";

import { Div } from "@components/primitives/Div";
import { PostsController } from "src/controllers/posts";
import { PostData } from "src/controllers/posts/types";

type Params = {
  id: string;
};

interface Props {
  id?: string;
  post: Partial<PostData>;
}

export default function Post(props: Props): JSX.Element {
  return (
    <Div>
      Post {props.post.id} {props.post.metadata?.author}
    </Div>
  );
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  const post = params?.id ? (await PostsController.get(params?.id)) ?? {} : {};

  return {
    props: {
      id: params?.id,
      post
    }
  };
};
