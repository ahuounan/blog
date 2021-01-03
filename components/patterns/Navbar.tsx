import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from 'components/patterns/Text';
import { CSSProp, styled } from 'stitches.config';

import { Button } from '../primitives/Button';
import { Div } from '../primitives/Div';

import { Logo } from './Logo';

const routes = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/resume',
    label: 'Resume'
  },
  {
    path: '/blog',
    label: 'Blog'
  },
  {
    path: '/lab',
    label: 'Lab'
  },
  {
    path: '/contact',
    label: 'Contact'
  }
];

export function Navbar(): JSX.Element {
  const router = useRouter();

  return (
    <Div css={styles.container}>
      <Button onClick={() => router.push('/')}>
        <Logo />
      </Button>
      <Div css={styles.right}>
        {routes.map(({ path, label }, index) => (
          <>
            <NavbarSection key={path} isActive={router.pathname === path}>
              <Link href={path} passHref>
                <Text type="body" as="a">
                  {label}
                </Text>
              </Link>
            </NavbarSection>
            {index !== routes.length - 1 && <StyledSeparator orientation="vertical" decorative />}
          </>
        ))}
      </Div>
    </Div>
  );
}

const styles: Record<string, CSSProp> = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  right: {
    display: 'flex',
    marginTop: '$0'
  }
};

const NavbarSection = styled('span', {
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  variants: {
    isActive: {
      true: {
        textDecoration: 'underline'
      }
    }
  }
});

const StyledSeparator = styled(Separator.Root, {
  background:
    'linear-gradient(180deg, rgba(61,61,61,0.5) 0%, rgba(0,0,0,1) 50%, rgba(61,61,61,0.5) 100%)',
  width: 1,
  borderRadius: '30%',
  height: '$2',
  margin: '0 $1'
});
