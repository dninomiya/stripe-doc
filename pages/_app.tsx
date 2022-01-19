import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableColorScheme={false}>
      <Head>
        <link
          rel="icon"
          href={`${
            process.env.GITHUB_ACTIONS ? '/stripe-doc' : ''
          }/favicon.ico`}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
