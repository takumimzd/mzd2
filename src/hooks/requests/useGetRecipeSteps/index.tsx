import { RecipeStep } from '@prisma/client';
import { useFetch } from '@/hooks/useFetch';

type Args = {
  recipeId: string;
};

export const useGetRecipeSteps = ({ recipeId }: Args) => {
  const { data } = useFetch<RecipeStep[]>({
    url: `/api/recipes/${recipeId}/steps`,
  });

  return { data };
};
