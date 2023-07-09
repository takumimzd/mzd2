import { Suspense } from 'react';
import { GlobalError } from '@/features/GlobalError';
import { RecipeList } from '@/features/RecipeList';
import { Loading } from '@/features/RecipeList/presentations/loading';
import { ErrorBoundary } from '@/functions/ErrorBoundary';

const Page = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallbackUi={<GlobalError />}>
          <RecipeList />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default Page;
