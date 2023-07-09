import { Suspense } from 'react';
import { RecipeList } from '@/features/RecipeList';
import { Loading } from '@/features/RecipeList/presentations/loading';

const Page = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <RecipeList />
      </Suspense>
    </div>
  );
};

export default Page;
