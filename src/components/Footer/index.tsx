import { Container, Group, ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandInstagram, IconBrandGithub } from '@tabler/icons-react';
import { useStyles } from './useStyles';

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} noWrap>
          <ActionIcon size='lg'>
            <IconBrandTwitter size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandGithub size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandInstagram size='1.05rem' stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
