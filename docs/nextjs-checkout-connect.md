事前に[チェックアウトセッションの作成関数をデプロイ](?id=firebase-checkout-session-connect)してください。

以下のコードを追加して購入ボタンを有効にします。

```tsx:components/product-list.tsx 
import React from 'react';
// 追加
import { httpsCallable } from 'firebase/functions';
import { fns } from '../lib/firebase';

const ProductList = () => {
  // 追加
  const startCheckout = async () => {
    const callable = httpsCallable(fns, 'createCheckoutSession');
    const { data } = await callable();
    window.location.assign(data as string);
  };

  return (
    <div>
      <h2>チケット</h2>
      <p>1500円</p>
      {/* 追加 */}
      <button onClick={startCheckout}>購入</button>
    </div>
  );
};

export default ProductList;
```

購入ボタンをクリックするとチェックアウトセッションが開始されます。