import { useRecipeList } from './hooks';
import { RecipeListPresentation, Props } from './presentations';

export const RecipeList = () => {
  const { recipeWithUser } = useRecipeList();

  const recipeWithUserProps: Props['recipeWithUser'] = recipeWithUser.map((recipe) => ({
    recipeId: recipe.id,
    recipeTitle: recipe.name,
    recipeImage: recipe.imageUrl,
    userName: recipe.user.name,
    userImage: recipe.user.name,
  }));

  return <RecipeListPresentation recipeWithUser={recipeWithUserProps} />;
};
