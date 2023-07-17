import { BlogList } from '@/features/BlogList';
import { GlobalError } from '@/features/GlobalError';
import { ErrorBoundary } from '@/functions/ErrorBoundary';

const Page = () => {
  return (
    <div>
      <ErrorBoundary fallbackUi={<GlobalError />}>
        <BlogList />
      </ErrorBoundary>
    </div>
  );
};

export default Page;
