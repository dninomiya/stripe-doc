import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableColorScheme={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
