import { GetServerSideProps } from 'next';

import { PostLayout } from '@components/layouts/PostLayout';
import { SectionLayout } from '@components/layouts/SectionLayout';
import { TabPageLayout } from '@components/layouts/TabPageLayout';
import { Background } from '@components/patterns/Background';
import { Navbar } from '@components/patterns/Navbar';

interface Props {
  text: string;
}

export default function Lab(props: Props): JSX.Element {
  const { text } = props;

  return (
    <TabPageLayout
      background={<Background />}
      title="Lab"
      body={
        <SectionLayout title="Lab">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].map(n => (
            <PostLayout key={n} title={`Post ${n}`}>
              lorem imuspt
            </PostLayout>
          ))}
        </SectionLayout>
      }
      navbar={<Navbar />}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      text: 'yo'
    }
  };
};
