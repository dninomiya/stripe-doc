以下のコードを追加してダッシュボードのリンクを生成します。

```tsx:functions/index.tsx 
export const getDashboardLink = fns.https.onCall(async (_, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "ログインが必要です");
  }

  const accountSnap = await db.doc(`stripeAccounts/${context.auth.uid}`).get();
  const account = accountSnap.data()?.stripeAccountId as string;

  const link = await stripe.accounts.createLoginLink(account);
  return link.url;
});
```

実装後、デプロイを行います。

```bash:ターミナル
firebase deploy --only functions
```