import { Suspense } from 'react';
import { BlogList } from '@/features/BlogList';
import { BlogListLoading } from '@/features/BlogList/presentations/loading';
import { GlobalError } from '@/features/GlobalError';
import { ErrorBoundary } from '@/functions/ErrorBoundary';

const Page = () => {
  return (
    <div>
      <Suspense fallback={<BlogListLoading />}>
        <ErrorBoundary fallbackUi={<GlobalError />}>
          <BlogList />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default Page;
