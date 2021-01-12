import { ParsedUrlQuery } from "querystring";

import { GetServerSideProps } from "next";

import { Div } from "@components/primitives/Div";
import { PostsController } from "@controllers/posts";
import { PostData } from "@controllers/posts/types";
import { Identifier } from "@controllers/types";

export interface Params {
  id: string;
}

export interface Props {
  id?: Identifier;
  post: Partial<PostData>;
}

export default function BlogPost(props: Props): JSX.Element {
  return (
    <Div>
      Post {props.post.id} {props.post.metadata?.author}
    </Div>
  );
}

export const getServerSideProps: GetServerSideProps<Props, Params & ParsedUrlQuery> = async ({
  params
}) => {
  const post = params?.id ? (await PostsController.get(params?.id)) ?? {} : {};

  return {
    props: {
      id: params?.id,
      post
    }
  };
};
