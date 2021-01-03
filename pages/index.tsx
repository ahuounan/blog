import { GetServerSideProps } from 'next';

import { TabPageLayout } from 'components/layouts/TabPageLayout';
import { Background } from 'components/patterns/Background';
import { Navbar } from 'components/patterns/Navbar';
import Text from 'components/patterns/Text';
import { Div } from 'components/primitives/Div';

interface Props {
  text: string;
}

export default function Home(props: Props): JSX.Element {
  const { text } = props;

  return (
    <TabPageLayout
      title="Home"
      header={<Text type="heading">Home</Text>}
      background={<Background />}
      body={<Div>{text}</Div>}
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
