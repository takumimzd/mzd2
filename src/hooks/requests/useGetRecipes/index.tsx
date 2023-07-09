import { useFetch } from '@/hooks/useFetch';
import { RecipeWithUser } from '@/pages/api/recipes';

export const useGetRecipes = () => {
  const { data } = useFetch<RecipeWithUser[]>({ url: 'http://localhost:3000/api/recipes' });

  return { data };
};
