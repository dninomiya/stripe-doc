import type { NextPage } from 'next';
import Head from 'next/head';
import TutorialKit from '../components/tutorial-kit';
import ExternalLink from '../components/external-link';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title="サブスクリプション" />

      <TutorialKit
        videoURL="https://xxx"
        type="billing"
        title="サブスクリプション"
        description={
          <p>
            Netflixのような継続支払いサービスは
            <ExternalLink href="https://stripe.com/jp/billing">
              Stripe Billing
            </ExternalLink>
            で実現できます。
          </p>
        }
        scenes={[
          'オンラインサロン',
          'eラーニング',
          'ファンクラブ',
          'メールマガジン購読',
          'SaaS',
          '有料機能のアンロック',
        ]}
        demo={{
          title: 'Next.js と Firebase',
          description: (
            <>
              現在最もホットなWebアプリ開発フレームワークである{' '}
              <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>{' '}
              とGoogleがサポートする{' '}
              <ExternalLink href="https://firebase.google.com/?hl=ja">
                Firebase
              </ExternalLink>{' '}
              を組み合わせると驚くほど簡単に決済機能を実装することができます。{' '}
              <ExternalLink href="https://firebase.google.com/products/extensions/stripe-firestore-stripe-payments?hl=ja">
                FirebaseのStripe拡張機能
              </ExternalLink>{' '}
              を使うことで実装の大部分が不要になります。チュートリアルに沿ってデモアプリを実装してみましょう。
            </>
          ),
        }}
      />
    </div>
  );
};

export default Home;
