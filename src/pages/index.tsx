import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
