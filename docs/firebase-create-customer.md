以下のコードを追記することでユーザーが認証された際にStripeにカスタマーを作成した上でカスタマーIDをFirebase（Firestore）に保存することができます。

```ts:index.ts
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();
const fns = functions.region("asia-northeast1");

// 省略

export const createCustomer = fns.auth.user().onCreate(async (user) => {
  const customer = await stripe.customers.create({
    metadata: {
      name: user.displayName,
      email: user.email,
      firebaseUID: user.uid,
    },
  });

  return db.doc(`customers/${user.uid}`).set({
    stripeId: customer.id,
  });
});
```

記述が終わったら関数をデプロイします。デプロイの前にFirebaseのプランをBlazeにする必要があります。管理コンソール左下からプランをアップグレードできます。

![](/docs/images/2022-01-29-15-14-27.png)

アップグレードが終わったら**functionsディレクトリで**以下のコマンドを使って関数をデプロイします。

```bash
firebase deploy --only functions
```