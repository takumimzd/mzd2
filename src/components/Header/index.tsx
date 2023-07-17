import { Header as MantineHeader, Container, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStyles } from './useStyle';

const LINKS = [{ link: '/', label: 'Home' } as const] as const;

export const Header = () => {
  const { classes, cx } = useStyles();
  const router = useRouter();

  const items = LINKS.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: router.pathname === link.link })}
    >
      {link.label}
    </Link>
  ));

  return (
    <MantineHeader height={60} mb={50} className={classes.header}>
      <Container className={classes.headerContainer}>
        <Group spacing={5}>{items}</Group>
      </Container>
    </MantineHeader>
  );
};
