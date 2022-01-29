以下の関数を追加してデプロイします。

```ts:functions/index.ts
// 追加
export const getStripeAccountFormLink = fns.https
    .onCall(async (account) => {
      const accountLink = await stripe.accountLinks.create({
        account,
        refresh_url: "http://localhost:3000",
        return_url: "http://localhost:3000",
        type: "account_onboarding",
      });

      return accountLink.url;
    });

export const handleStripeWebhook = fns.https
    .onRequest(async (req, res) => {
      const sig = req.headers["stripe-signature"];

      let event;

      try {
        event = stripe.webhooks.constructEvent(
            req.rawBody,
            sig as string,
            endpointSecret);
      } catch (err) {
        res.status(400).send(`Webhook Error: ${(err as Error).message}`);
        return;
      }

      switch (event.type) {
        case "account.updated": {
          const account = event.data.object as Stripe.Account;
          const accountSnap = await db.collection("stripeAccounts")
              .where("stripeAccountId", "==", account.id).get();

          if (!accountSnap.empty) {
            const accountRef = accountSnap.docs[0].ref;
            accountRef.update({
              valid: account.charges_enabled,
            });
          }
          break;
        }
      }

      res.status(200).send("success");
    });
```

```bash
firebase deploy --only functions
```