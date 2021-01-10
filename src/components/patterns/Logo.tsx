import { Hu } from '@components/icons/Hu';
import { Div } from '@components/primitives/Div';
import { Text } from '@components/primitives/Text';
import { CSSProp } from '@stitches.config';

export function Logo(): JSX.Element {
  return (
    <Div css={styles.container}>
      <Hu />
      <Text as="h1" type="subHeading" css={styles.name}>
        Alan Hu
      </Text>
    </Div>
  );
}

const styles: Record<string, CSSProp> = {
  container: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: 0
  },
  name: {
    marginLeft: '$0',
    textAlign: 'left'
  }
};
