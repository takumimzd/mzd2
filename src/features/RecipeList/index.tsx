import { useRecipeList } from './hooks';
import { Presentation, Props } from './presentations/presentation';

export const RecipeList = () => {
  const { recipeWithUser } = useRecipeList();

  const recipeWithUserProps: Props['recipeWithUser'] = recipeWithUser.map((recipe) => ({
    recipeId: recipe.id,
    recipeTitle: recipe.name,
    recipeImage: recipe.imageUrl,
    userName: recipe.user.name,
    userImage: recipe.user.name,
  }));

  return <Presentation recipeWithUser={recipeWithUserProps} />;
};
