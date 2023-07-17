import { Skeleton, Container, SimpleGrid } from '@mantine/core';
export const BlogListLoading = () => (
  <Container py='xl'>
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
      {[...Array(9)].map((_, i) => (
        <li key={i}>
          <Skeleton height={296} visible />
        </li>
      ))}
    </SimpleGrid>
  </Container>
);
