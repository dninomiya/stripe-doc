StripeダッシュボードからWebhookを作成します。WebhookのURLはFirebaseコンソールの拡張機能管理画面にある[[この拡張機能の動作]](https://console.firebase.google.com/project/_/extensions/instances/firestore-stripe-payments?tab=details)に記載されています。

受け取るイベントは以下を設定してください。

- product.created
- product.updated
- product.deleted
- price.created
- price.updated
- price.deleted
- checkout.session.completed
- customer.subscription.created
- customer.subscription.updated
- customer.subscription.deleted
- payment_intent.processing
- payment_intent.succeeded
- payment_intent.canceled
- payment_intent.payment_failed
- tax_rate.created (optional)
- tax_rate.updated (optional)

請求書情報をFirestoreに同期したい場合以下も設定してください。

- invoice.paid
- invoice.payment_succeeded
- invoice.payment_failed
- invoice.upcoming
- invoice.marked_uncollectible
- invoice.payment_action_required

Webhook作成後に生成される署名シークレットは拡張機能で使用します。

![](/docs/images/2022-01-22-14-42-02.png)

[Run Payments with Stripe: README](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md#configure-stripe-webhooks)