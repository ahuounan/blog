import { Button } from '@components/primitives/Button';
import { Div } from '@components/primitives/Div';
import { CSSProp } from 'stitches.config';

interface Props {
  title?: string;
  children?: JSX.Element | string;
  onClick?: () => void;
}
export function IconPostLayout(props: Props): JSX.Element {
  const { children, onClick } = props;
  const Component = onClick ? Button : Div;

  return (
    <Component css={styles.container} onClick={onClick}>
      <Div css={styles.body}>{children}</Div>
    </Component>
  );
}

const styles: Record<string, CSSProp> = {
  container: {
    padding: '$1',
    margin: 0,
    width: '100%',
    position: 'relative',
    background: 'transparent',
    textAlign: 'left',
    zIndex: 2
  },
  body: {
    position: 'relative',
    background: 'inherit',
    zIndex: 2
  }
};
