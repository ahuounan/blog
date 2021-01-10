import Head from 'next/head';

interface Props {
  title?: string;
  children?: Array<JSX.Element | null>;
}

export function PageLayout(props: Props): JSX.Element {
  const { title = '', children } = props;

  return (
    <>
      <Head>
        <title>Alan Hu | {title}</title>
      </Head>
      {children}
    </>
  );
}
