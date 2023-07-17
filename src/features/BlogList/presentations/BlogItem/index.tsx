import { Card as MantineCard, Image, Group, Text, Card } from '@mantine/core';
import { useStyles } from './useStyle';

type Props = {
  image: string;
  title: string;
  date: string;
};

export const BlogItem = ({ image, title, date }: Props) => {
  const { classes } = useStyles();

  return (
    <MantineCard withBorder padding='lg' radius='md' className={classes.card}>
      <MantineCard.Section mb='sm'>
        <Image src={image} alt={title} height={180} />
      </MantineCard.Section>
      <Text fw={700} className={classes.title} mt='xs'>
        {title}
      </Text>
      <Card.Section className={classes.footer}>
        <Group position='apart'>
          <Text fz='xs' c='dimmed'>
            {date}
          </Text>
        </Group>
      </Card.Section>
    </MantineCard>
  );
};
