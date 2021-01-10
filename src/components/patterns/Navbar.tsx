import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Text } from '@components/primitives/Text';
import { Separator } from '@components/primitives/Separator';
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
    <Div as="nav" css={styles.container}>
      <Button css={styles.logo} onClick={() => router.push('/')}>
        <Logo />
      </Button>
      <Div css={styles.right}>
        {routes.map(({ path, label }, index) => (
          <Fragment key={path}>
            <NavbarSection key={path} isActive={router.pathname === path}>
              <Link href={path} passHref>
                <Text css={styles.text} type="body" as="a">
                  {label}
                </Text>
              </Link>
            </NavbarSection>
            {index !== routes.length - 1 && <Separator orientation="vertical" decorative />}
          </Fragment>
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
    width: '100%',
    zIndex: 1
  },
  right: {
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    height: '$2',
    width: '100%'
  },
  logo: {
    hoverFdbk: '$transparent',
    borderRadius: '$0',
    paddingRight: '$0'
  }
};

const NavbarSection = styled('span', {
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  padding: '0 $0',
  borderRadius: '$0',
  hoverFdbk: '$transparent',
  ':first-child': {
    marginLeft: '-$0'
  },
  ':last-child': {
    marginRight: '-$0'
  },
  variants: {
    isActive: {
      true: {
        textDecoration: 'underline'
      }
    }
  }
});
