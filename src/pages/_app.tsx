import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Me</title>
        <meta name='description' content='introduction' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          revalidateIfStale: false,
          revalidateOnMount: false,
        }}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </SWRConfig>
    </React.StrictMode>
  );
}
