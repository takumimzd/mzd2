import { Container, SimpleGrid } from '@mantine/core';
import { Card } from '@/components/Card';

export type Props = {
  blogs: {
    id: number;
    title: string;
    image: string;
    url: string;
  }[];
};

export const BlogListPresentation = ({ blogs }: Props) => {
  return (
    <Container maw='1200px' py='xl'>
      <SimpleGrid spacing='xl' cols={4} breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={blog.url} target='_blank'>
              <Card image={blog.image} title={blog.title} />
            </a>
          </li>
        ))}
      </SimpleGrid>
    </Container>
  );
};
