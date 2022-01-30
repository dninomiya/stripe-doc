import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const SITE_TITLE = 'Stripeビギナーズガイド';
const SITE_URL = 'https://flock-team.github.io/stripe-doc';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableColorScheme={false}>
      <Head>
        <link
          rel="icon"
          href={`${
            process.env.NODE_ENV === 'production' ? '/stripe-doc' : ''
          }/favicon.ico`}
        />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          url: 'https://flock-team.github.io/stripe-doc/',
          site_name: SITE_TITLE,
          images: [
            {
              url: SITE_URL + '/ogp.png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        titleTemplate={`%s | ${SITE_TITLE}`}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
