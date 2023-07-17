import { createStyles, Card, Avatar, Text, rem, Title, Container, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

type Props = {
  image: string;
  avatar: string;
  name: string;
  job: string;
};

export const Presentation = ({ image, avatar, name, job }: Props) => {
  const { classes } = useStyles();

  return (
    <Card withBorder padding='xl' radius='md' className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar src={avatar} size={80} radius={80} mx='auto' mt={-30} className={classes.avatar} />
      <Text ta='center' fz='lg' fw={500} mt='sm'>
        {name}
      </Text>
      <Text ta='center' fz='sm' c='dimmed'>
        {job}
      </Text>
      <Container fz='sm' c='dimmed' display='flex' style={{ justifyContent: 'center' }}>
        <ActionIcon
          component='a'
          href='https://twitter.com/BzZOl7YEHVgN5SS'
          target='_blank'
          size='lg'
        >
          <IconBrandTwitter size='1.05rem' stroke={1.5} />
        </ActionIcon>
        <ActionIcon component='a' href='https://github.com/takumimzd' target='_blank' size='lg'>
          <IconBrandGithub size='1.05rem' stroke={1.5} />
        </ActionIcon>
      </Container>
      <Container mt='md' mx={0}>
        <Container mt='md'>
          <Title order={5}>Frontend</Title>
          <Text ta='start' fz='sm' c='dimmed'>
            Javascript / Typescript / React.js / Next.js
          </Text>
        </Container>
        <Container mt='md'>
          <Title order={5}>Backend</Title>
          <Text ta='start' fz='sm' c='dimmed'>
            Ruby / RubyOnRails
          </Text>
        </Container>
        <Container mt='md'>
          <Title order={5}>Infrastructure</Title>
          <Text ta='start' fz='sm' c='dimmed'>
            AWS(AWS Certified Solutions Architect - Associate - 2022/10/31)
          </Text>
        </Container>
      </Container>
    </Card>
  );
};
