import Head from "next/head";

import { ChildProp } from "libs/types";

interface Props {
  title?: string;
  children?: ChildProp;
}

export function PageLayout(props: Props): JSX.Element {
  const { title = "", children } = props;

  return (
    <>
      <Head>
        <title>Alan Hu | {title}</title>
      </Head>
      {children}
    </>
  );
}
