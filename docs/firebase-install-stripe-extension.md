:::info
事前に「[制限付きAPIキー](?id=stripe-create-api-key)」を完了してください。
:::

[Run Payments with Stripe 拡張機能](https://firebase.google.com/products/extensions/stripe-firestore-stripe-payments?hl=ja)をインストールしてください。その過程で Blaze プランにアップグレードする必要があります。

クレジットカード登録が必要ですが [無料枠](https://firebase.google.com/pricing?hl=ja) があるため多くのアクセスがないかぎり課金されることはありません。

| 設定項目                              | 値                                                             |
| ------------------------------------- | -------------------------------------------------------------- |
| Cloud Functions deployment location   | **asia-northeast1(Tokyo)** もしくは **asia-northeast2(Osaka)** |
| Stripe API key with restricted access | [制限付きAPIキー](?id=stripe-create-api-key)                   |

上記以外はデフォルトのままで構いません。各設定方法の概要は[拡張機能のREADME](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/README.md#note-from-firebase)を参照してください。