import type { NextPage } from 'next';
import TutorialKit from '../components/tutorial-kit';
import ExternalLink from '../components/external-link';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title="商品の販売" />

      <TutorialKit
        type="payments"
        title="商品の販売"
        description={
          <p>
            Amazonのようなショッピングサイトは
            <ExternalLink href="https://stripe.com/jp/payments">
              Stripe Payments
            </ExternalLink>
            で実現できます。
          </p>
        }
        scenes={[
          'ショッピングサイト',
          '有料コンテンツの販売',
          'グッズ販売',
          'チケット販売',
          '有料機能のアンロック',
          '投げ銭',
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
