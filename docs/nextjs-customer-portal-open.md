以下のコードでカスタマーポータルに遷移することができます。事前に[カスタマーポータルの設定](?id=stripe-customer-portal-customize)をすませておきましょう。

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