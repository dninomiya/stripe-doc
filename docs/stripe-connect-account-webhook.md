:::info
事前に「[確認情報入力用リンクとトリガー関数を作成](?id=firebase-required-verification-information)」を完了してください。
:::

StripeダッシュボードからWebhookを作成します。以下のイベントを購読してください、

- account.updated
- checkout.session.completed

作成が終わったらWebhook作成後に生成される署名シークレットを[トリガー関数](?id=firebase-required-verification-information) の署名シークレットに反映して再デプロイしてください。