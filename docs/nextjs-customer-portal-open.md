:::info
事前に「[カスタマーポータルの設定](?id=stripe-customer-portal-customize)」を完了してください。
:::

[カスタマーポータル](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal)はStripeが用意するページで、顧客はその中で決済方法の保存や変更ができます。

カスタマーポータルのURLはセキュリティの観点から固定ではないため、都度一時的なURLをStripeにリクエストしてからリダイレクトする必要があります。

以下のコードでカスタマーポータルに遷移することができます。

```tsx:components/customer-portal.tsx
import { httpsCallable, HttpsCallableResult } from 'firebase/functions';
import React from 'react';
import { fns } from '../lib/firebase';

const CustomerPortal = () => {
  const openCustomerPortal = async () => {
    const callable = httpsCallable(
      fns,
      'ext-firestore-stripe-payments-createPortalLink'
    );

    const { data } = (await callable({
      returnUrl: window.location.origin,
    })) as HttpsCallableResult<{
      url: string;
    }>;

    window.location.assign(data.url);
  };

  return (
    <div>
      <button onClick={openCustomerPortal}>支払い情報の管理</button>
    </div>
  );
};

export default CustomerPortal;
```

```tsx:pages/index.tsx
import CustomerPortal from '../components/customer-portal';

// 省略

{user && <CustomerPortal />}
```

:::warning
Cloud Functionsは動作が遅いためポータルURLの取得を数秒待つ必要があります。実際にはローディングアニメーションを実装するなどして待機中だとわかるUIにしましょう。
:::