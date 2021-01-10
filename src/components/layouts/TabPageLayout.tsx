import { OuNanSealScript } from '@components/icons/OuNanSealScript';
import { PageLayout } from '@components/layouts/PageLayout';
import { Div } from '@components/primitives/Div';
import { CSSProp } from '@stitches.config';

interface Props {
  title: string;
  background?: JSX.Element | null;
  navbar?: JSX.Element | null;
  body?: JSX.Element | null;
}

export function TabPageLayout(props: Props): JSX.Element {
  const { title, background, navbar, body } = props;

  return (
    <PageLayout title={title}>
      <Div css={styles.backgroundContainer}>{background}</Div>
      <Div css={styles.contentContainer}>
        <Div css={styles.navbarContainer} as="header">
          {navbar}
        </Div>
        <Div css={styles.bodyContainer} as="main">
          {body}
        </Div>
        <Div css={styles.watermarkContainer} as="picture">
          <OuNanSealScript css={styles.watermark} fill="rgba(0, 0, 0, 0.15)" />
        </Div>
      </Div>
    </PageLayout>
  );
}

const styles: Record<string, CSSProp> = {
  backgroundContainer: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
    zIndex: -1
  },
  navbarContainer: {
    width: '100%',
    zIndex: 1
  },
  bodyContainer: {
    width: '100%'
  },
  contentContainer: {
    maxWidth: '100vw',
    width: 'max(80vh, 500px)',
    minWidth: 320,
    minHeight: 'max(100vh, 320px)',
    margin: '0 auto',
    padding: '$3 5vw 8vh 5vw',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: '$paperWhite',
    boxShadow: '0px 10px 15px -5px rgba(0,0,0,0.75)',
    position: 'relative',
    zIndex: 1
  },
  watermarkContainer: {
    position: 'fixed',
    maxWidth: '100vw',
    width: 'max(80vh, 500px)',
    minWidth: 320,
    minHeight: 'max(100vh, 500px)',
    maxHeight: '100%',
    margin: '0 auto',
    top: 0,
    left: 0,
    right: 0,
    height: '100vh',
    zIndex: 0
  },
  watermark: {
    position: 'absolute',
    height: '30rem',
    width: '10rem',
    maxHeight: '80vh',
    zIndex: 0,
    bottom: '8vh',
    right: '5vw'
  }
};
