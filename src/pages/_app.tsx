import '@/styles/reset.css';
import { Container, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Footer } from '@/components/Footer';
import { GlobalError } from '@/features/GlobalError';
import { ErrorBoundary } from '@/functions/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Me</title>
        <meta name='description' content='introduction' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ErrorBoundary fallbackUi={<GlobalError />}>
          <Container maw='1200px' py='xl'>
            <Component {...pageProps} />
          </Container>
          <Footer />
        </ErrorBoundary>
      </MantineProvider>
    </React.StrictMode>
  );
}
