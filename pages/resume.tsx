import { GetServerSideProps } from 'next';

import { TabPageLayout } from 'components/layouts/TabPageLayout';
import { Background } from 'components/patterns/Background';
import { Navbar } from 'components/patterns/Navbar';
import Text from 'components/patterns/Text';
import { Div } from 'components/primitives/Div';

interface Props {
  text: string;
}

export default function Resume(props: Props): JSX.Element {
  const { text } = props;

  return (
    <TabPageLayout
      title="Resume"
      header={<Text type="heading">Resume</Text>}
      body={<Div>{text}</Div>}
      background={<Background />}
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
