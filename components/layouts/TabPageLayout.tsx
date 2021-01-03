import { PageLayout } from 'components/layouts/PageLayout';
import { Div } from 'components/primitives/Div';
import { CSSProp } from 'stitches.config';

interface Props {
  title: string;
  background?: JSX.Element | null;
  header?: JSX.Element | null;
  navbar?: JSX.Element | null;
  body?: JSX.Element | null;
}

export function TabPageLayout(props: Props): JSX.Element {
  const { title, background, header, navbar, body } = props;

  return (
    <PageLayout title={title}>
      <Div css={styles.backgroundContainer}>{background}</Div>
      <Div css={styles.contentContainer}>
        <Div css={styles.navbarContainer}>{navbar}</Div>
        <Div css={styles.headerContainer}>{header}</Div>
        <Div css={styles.bodyContainer}>{body}</Div>
      </Div>
    </PageLayout>
  );
}

const styles: Record<string, CSSProp> = {
  backgroundContainer: {
    minHeight: '100vh',
    minWidth: '100vw',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1
  },
  contentContainer: {
    maxWidth: 1000,
    minWidth: 320,
    height: '100%',
    width: '100vw',
    padding: '$2 5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'white'
  },
  navbarContainer: {
    width: '100%'
  },
  headerContainer: {
    marginTop: '$3',
    textAlign: 'left'
  },
  bodyContainer: {}
};
