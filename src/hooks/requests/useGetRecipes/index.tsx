import { useFetch } from '@/hooks/useFetch';
import { RecipeWithUser } from '@/pages/api/recipes';

export const useGetRecipes = () => {
  const { data } = useFetch<RecipeWithUser[]>({ url: '/api/recipes' });

  return { data };
};
