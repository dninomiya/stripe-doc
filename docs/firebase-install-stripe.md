初期化したFirebaseプロジェクトの中に `functions` ディレクトリがあるので**そこに移動した上で**以下のコマンドを実行します。

```bash:ターミナル
npm install stripe
```

これにより Cloud Functions で Stripe の機能にアクセスできるようになります。Stripeにアクセスするにはシークレットキーが必要なので、Stripeダッシュボードからシークレットキーを取得して[Cloud Functionsの環境変数](https://firebase.google.com/docs/functions/config-env?hl=ja)に設定します。

```bash:ターミナル
firebase functions:config:set stripe.key=シークレットキー
```

:::warning
シークレットキーを使うとStripeアカウントに対し無制限に変更を加えることができます。シークレットキーが外部に漏れないよう、今回のように環境変数を使うなどしてコードに直接記述しないようにしましょう。
:::

最後に以下のコードを `index.ts` に加えてStripeの準備は完了です。

```ts:index.ts
import Stripe from "stripe";

const stripe = new Stripe(functions.config().stripe.key, {
  apiVersion: "2020-08-27",
});
```