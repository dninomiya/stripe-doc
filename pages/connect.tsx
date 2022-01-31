import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ExternalLink from '../components/external-link';
import TutorialKit from '../components/tutorial-kit';

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title="マーケットプレイス" />

      <TutorialKit
        type="connect"
        title="マーケットプレイス"
        description={
          <p>
            メルカリのようなユーザー間の売買サービスは
            <ExternalLink href="https://stripe.com/jp/connect">
              Stripe Connect
            </ExternalLink>
            で実現できます。
          </p>
        }
        scenes={['フリーマーケット', 'オンラインサロン', 'クラウドソーシング']}
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
              を組み合わせると驚くほど簡単に決済機能を実装することができます。チュートリアルに沿ってデモアプリを実装してみましょう。
            </>
          ),
        }}
      />
    </div>
  );
};

export default Home;
