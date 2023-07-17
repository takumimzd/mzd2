import { Container, Title } from '@mantine/core';
import { BlogList } from '@/features/BlogList';
import { GlobalError } from '@/features/GlobalError';
import { ErrorBoundary } from '@/functions/ErrorBoundary';

const Page = () => {
  return (
    <ErrorBoundary fallbackUi={<GlobalError />}>
      <Container maw='1200px' py='xl'>
        <Title order={2} pl='lg'>
          Blogs
        </Title>
        <BlogList />
      </Container>
    </ErrorBoundary>
  );
};

export default Page;
