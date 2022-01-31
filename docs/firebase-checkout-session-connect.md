以下のコードを追加してチェックアウトセッションを作成します。

```tsx:functions/index.tsx 
export const createCheckoutSession = fns.https.onCall(async (_, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "ログインが必要です");
  }

  const customerSnap = await db.doc(`customers/${context.auth.uid}`).get();
  const customer = customerSnap.data()?.stripeId as string;

  const accountSnap = await db.doc(`stripeAccounts/${context.auth.uid}`).get();
  const account = accountSnap.data()?.stripeAccountId as string;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer,
    line_items: [
      {
        price: "price_1KLKQPHKPHgsaXXhIwTCqN8N",
        tax_rates: ["txr_1KLKRBHKPHgsaXXh3RsYP1bW"],
        quantity: 1,
      },
    ],
    cancel_url: "http://localhost:3000",
    success_url: "http://localhost:3000",
    payment_intent_data: {
      setup_future_usage: "off_session",
      application_fee_amount: 300,
      transfer_data: {
        destination: account,
      },
    },
  });

  return session.url;
});
```

[Stripe のドキュメント: 支払いを受け付ける](https://stripe.com/docs/payments/accept-a-payment?integration=checkout)