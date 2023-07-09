import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { GlobalError } from '@/features/GlobalError';
import { Recipe } from '@/features/Recipe';
import { ErrorBoundary } from '@/functions/ErrorBoundary';

const Page = () => {
  const router = useRouter();

  if (!router.query.id) return null;

  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <ErrorBoundary fallbackUi={<GlobalError />}>
          <Recipe recipeId={router.query.id as string} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default Page;
