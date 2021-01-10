import { Text } from '@components/primitives/Text';
import { Div } from '@components/primitives/Div';
import { Separator } from '@components/primitives/Separator';
import { CSSProp } from 'stitches.config';

interface Props {
  title: string;
  children?: JSX.Element;
}
export function SectionLayout(props: Props): JSX.Element {
  const { children, title } = props;

  return (
    <Div as="section" css={styles.container}>
      <Text css={styles.header} as="h1" type="heading">
        {title}
      </Text>
      <Separator css={styles.separator} orientation="horizontal" decorative />
      {children}
    </Div>
  );
}

const styles: Record<string, CSSProp> = {
  container: {
    padding: '$1 0',
    margin: '$1 0',
    width: '100%',
    position: 'relative',
    background: 'transparent',
    textAlign: 'left',
    zIndex: 2
  },
  header: {
    position: 'relative',
    zIndex: 2,
    background:
      'linear-gradient(90deg, rgba(251, 245, 245, 1) 90%, rgba(251, 245, 245, 0.8) 95%, rgba(251,245,245,0) 100%)',
    display: 'inline-block',
    padding: '0 $0',
    marginLeft: '-$0',
    marginBottom: 0
  },
  separator: {
    position: 'absolute',
    top: '2rem'
  }
};
