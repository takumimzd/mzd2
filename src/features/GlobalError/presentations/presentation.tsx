import { Title, Text, Container } from '@mantine/core';
import { useStyles } from './useStyles';

export const Presentation = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>500</div>
      <Title className={classes.title}>Something bad just happened...</Title>
      <Text color='dimmed' size='lg' align='center' className={classes.description}>
        Our servers could not handle your request. our development team was already notified. Try
        refreshing the page.
      </Text>
    </Container>
  );
};
