import { useGetRecipe } from '@/hooks/requests/useGetRecipe';
import { useGetRecipeIngredients } from '@/hooks/requests/useGetRecipeIngredients';
import { useGetRecipeSteps } from '@/hooks/requests/useGetRecipeSteps';

type Args = {
  recipeId: string;
};

export const useRecipe = ({ recipeId }: Args) => {
  const { data: recipe } = useGetRecipe({ recipeId });
  const { data: ingredients } = useGetRecipeIngredients({ recipeId });
  const { data: steps } = useGetRecipeSteps({ recipeId });

  return { recipe: recipe.data, ingredients: ingredients.data, steps: steps.data };
};
