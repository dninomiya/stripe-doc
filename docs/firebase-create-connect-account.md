以下のコードを追記してデプロイしてください。WEBアプリから以下の関数を実行すると販売アカウントを作成することができます。

```ts
export const createStripeAccount = fns.https.onCall(async (_, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "ログインが必要です");
  }

  const user = await auth.getUser(context.auth.uid);

  const account = await stripe.accounts.create({
    type: "express",
    country: "JP",
    email: user.email,
    business_type: "individual",
    company: {
      name: user.displayName,
    },
    business_profile: {
      url: "https://flock-team.github.io/stripe-doc",
    },
  });

  return db.doc(`stripeAccounts/${user.uid}`).set({
    stripeAccountId: account.id,
  });
});
```