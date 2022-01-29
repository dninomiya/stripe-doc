チェックアウトURLを生成するメソッドを作成し、ボタンを追加します。

```tsx:components/product-list.tsx
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

// 省略

const redirectToCheckout = async (priceId: string) => {
  const collectionRef = collection(
    db,
    `customers/${user.uid}/checkout_sessions`
  );
  const docRef = await addDoc(collectionRef, {
    billing_address_collection: 'auto',
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    line_items: [
      {
        price: priceId,
        tax_rates: ['税率のID'],
        quantity: 1,
      },
    ],
  });

  onSnapshot(docRef, (snap) => {
    const { error, url } = snap.data() as {
      url: string;
      error: Error;
    };

    if (error) {
      alert(`An error occured: ${error.message}`);
    }

    if (url) {
      window.location.assign(url);
    }
  });
};

// 省略

<div>
  <div key={price.id}>
    {price.recurring.interval_count}
    {getIntervalLabel(price.recurring.interval)}ごとに
    {price.unit_amount.toLocaleString()}円

    {/* 追加 */}
    <button onClick={() => redirectToCheckout(price.id)}>開始</button>
  </div>
</div>
```