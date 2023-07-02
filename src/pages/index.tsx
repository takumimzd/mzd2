import Head from 'next/head';
import useSWR from 'swr';

export default function Home() {
  const fetcher = async () => {
    return (await fetch('/api/recipes')).json();
  };
  const { data } = useSWR('/api/recipes', fetcher);

  if (!data) return null;
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
