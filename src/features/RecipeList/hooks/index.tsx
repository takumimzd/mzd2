import { useGetRecipes } from '@/hooks/requests/useGetRecipes';

export const useRecipeList = () => {
  const { data: response } = useGetRecipes();

  return { recipeWithUser: response.data };
};
