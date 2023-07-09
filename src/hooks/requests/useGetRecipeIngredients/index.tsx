import { RecipeIngredient } from '@prisma/client';
import { useFetch } from '@/hooks/useFetch';

type Args = {
  recipeId: string;
};

export const useGetRecipeIngredients = ({ recipeId }: Args) => {
  const { data } = useFetch<RecipeIngredient[]>({
    url: `/api/recipes/${recipeId}/ingredients`,
  });

  return { data };
};
