import { Suspense } from 'react';
import { RecipeList } from '@/features/RecipeList';

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <RecipeList />
      </Suspense>
    </div>
  );
};

export default Page;
