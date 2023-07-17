import { useRecipe } from './hooks';
import { Presentation } from './presentations/presentation';

type Props = {
  recipeId: string;
};

export const Recipe = ({ recipeId }: Props) => {
  const { recipe, ingredients, steps } = useRecipe({ recipeId });
  return (
    <Presentation
      recipeImage={recipe.imageUrl}
      recipeName={recipe.name}
      recipeDescription={recipe.description}
    />
  );
};
