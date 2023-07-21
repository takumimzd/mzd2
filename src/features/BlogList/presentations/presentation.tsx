import { Container, SimpleGrid } from '@mantine/core';
import { BlogItem } from '@/features/BlogList/presentations/BlogItem';

export type Props = {
  blogs: {
    id: number;
    title: string;
    date: string;
    image: string;
    url: string;
  }[];
};

export const BlogListPresentation = ({ blogs }: Props) => {
  return (
    <Container maw='1200px' py='xl' px={0}>
      <SimpleGrid spacing='xl' style={{}} cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={blog.url} target='_blank'>
              <BlogItem image={blog.image} title={blog.title} date={blog.date} />
            </a>
          </li>
        ))}
      </SimpleGrid>
    </Container>
  );
};
