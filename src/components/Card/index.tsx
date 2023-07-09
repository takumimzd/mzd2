import { Card as MantineCard, Image, Group, Text, Avatar } from '@mantine/core';
import { useStyles } from './useStyle';

type Props = {
  image: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
};

export const Card = ({ image, title, author }: Props) => {
  const { classes } = useStyles();

  return (
    <MantineCard withBorder padding='lg' radius='md' className={classes.card}>
      <MantineCard.Section mb='sm'>
        <Image src={image} alt={title} height={180} />
      </MantineCard.Section>
      <Text fw={700} className={classes.title} mt='xs'>
        {title}
      </Text>
      <Group mt='lg'>
        <Avatar src={author.image} radius='sm' />
        <div>
          <Text fw={500}>{author.name}</Text>
        </div>
      </Group>
    </MantineCard>
  );
};
