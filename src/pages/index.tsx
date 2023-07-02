import { useGetApiRecipesRecipeIdSteps } from '@/apis';

export default function Home() {
  const { data: response } = useGetApiRecipesRecipeIdSteps(1);

  if (!response) return null;
  console.log(response.data);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
