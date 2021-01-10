import { Div } from '@components/primitives/Div';
import { CSSProp } from 'stitches.config';

export function Background(): JSX.Element {
  return <Div css={styles.background} />;
}

const styles: Record<string, CSSProp> = {
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '$background'
  }
};
