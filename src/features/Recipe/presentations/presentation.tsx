import { Container, Grid, SimpleGrid, Text, Title, BackgroundImage } from '@mantine/core';
import { useStyles } from './useStyle';

type Props = {
  recipeImage: string;
  recipeName: string;
  recipeDescription: string;
};

export const Presentation = ({ recipeImage, recipeName, recipeDescription }: Props) => {
  const { classes } = useStyles();

  return (
    <Container my='md' maw={800}>
      <SimpleGrid cols={1} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <BackgroundImage src={recipeImage} className={classes.mainImage} radius='md'>
          <Title className={classes.title} order={3}>
            {recipeName}
          </Title>
        </BackgroundImage>
        <Grid gutter='md'>
          <Grid.Col>
            <div className={classes.secondaryColumn}>
              <Text fz='sm'>{recipeDescription}</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={classes.secondaryColumn}>aaa</div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={classes.secondaryColumn}>aaa</div>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
