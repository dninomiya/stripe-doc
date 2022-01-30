初期化したFirebaseプロジェクトの中に `functions` ディレクトリがあるので**そこに移動した上で**以下のコマンドを実行します。

```bash:ターミナル
npm install stripe
```

これにより Cloud Functions で Stripe の機能にアクセスできるようになります。Stripeにアクセスするにはシークレットキーが必要なので、Stripeダッシュボードからシークレットキーを取得してCloud Functionsの環境変数に設定します。

```bash:ターミナル
firebase functions:config:set stripe.key=シークレットキー
```

最後に以下のコードを `index.ts` に加えてStripeの準備は完了です。

```ts:index.ts
import Stripe from "stripe";

const stripe = new Stripe(functions.config().stripe.key, {
  apiVersion: "2020-08-27",
});
```