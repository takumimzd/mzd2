import { Container } from '@mantine/core';
import { BlogList } from '@/features/BlogList';
import { GlobalError } from '@/features/GlobalError';
import { ProfileCard } from '@/features/ProfileCard';
import { ErrorBoundary } from '@/functions/ErrorBoundary';

const Page = () => {
  return (
    <ErrorBoundary fallbackUi={<GlobalError />}>
      <Container maw='1200px' pt='xs' pb='xl'>
        <Container maw='1200px'>
          <ProfileCard />
        </Container>
        <Container maw='1200px' mt='xl'>
          <BlogList />
        </Container>
      </Container>
    </ErrorBoundary>
  );
};

export default Page;
