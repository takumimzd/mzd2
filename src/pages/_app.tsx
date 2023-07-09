import '@/styles/reset.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Header } from '@/components/Header';
import CSR from '@/functions/CSR/CSR';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Me</title>
        <meta name='description' content='introduction' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <CSR>
          <Header />
          <Component {...pageProps} />
        </CSR>
      </MantineProvider>
    </React.StrictMode>
  );
}
