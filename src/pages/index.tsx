import Head from 'next/head';
import { useGetApiRecipes } from '@/apis';

export default function Home() {
  const { data: response } = useGetApiRecipes();

  if (!response) return null;
  return (
    <>
      <Head>
        <title>Me</title>
        <meta name='description' content='introduction' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
    </>
  );
}
