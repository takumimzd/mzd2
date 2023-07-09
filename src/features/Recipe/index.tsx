import { useRecipe } from './hooks';
import { Presentation } from './presentations/presentation';

type Props = {
  recipeId: string;
};

export const Recipe = ({ recipeId }: Props) => {
  const { recipe, ingredients, steps } = useRecipe({ recipeId });
  console.log({ recipe: recipe, ingredients, steps });
  return <Presentation />;
};
