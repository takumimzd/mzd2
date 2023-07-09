import { Recipe } from '@prisma/client';
import { useFetch } from '@/hooks/useFetch';

type Args = {
  recipeId: string;
};

export const useGetRecipe = ({ recipeId }: Args) => {
  const { data } = useFetch<Recipe>({ url: `/api/recipes/${recipeId}` });

  return { data };
};
