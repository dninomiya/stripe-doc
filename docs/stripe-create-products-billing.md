[商品と価格を作成](https://stripe.com/docs/billing/manage-prices)してください。

メタデータに `firebaseRole` というキーで値を登録することでサブスクリプションに加入中にFirebaseの認証ユーザーに `stripeRole` というキーで[カスタムクレーム](https://firebase.google.cn/docs/auth/admin/custom-claims?hl=ja)が付与されます。カスタムクレームの値を使って表示するコンテンツや機能の制限を制御します。

[サブスクリプションのアップセル](https://stripe.com/docs/payments/checkout/upsells)を使うと長期プランにアップグレードするためのオプションを顧客に提示することができます。