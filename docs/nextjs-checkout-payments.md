コンポーネント内に[チェックアウト](https://stripe.com/jp/payments/checkout#:~:text=Stripe%20Checkout%20%E3%81%AF%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%AE,%E5%8F%97%E3%81%91%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82)へのリダイレクトメソッドを作成します。

```tsx:components/product-list.tsx
import { addDoc, collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';

// 省略

  const redirectToCheckout = async (priceId: string) => {
    const collectionRef = collection(
      db,
      `customers/${user.uid}/checkout_sessions`
    );
    const docRef = await addDoc(collectionRef, {
      mode: 'payment',
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
```

購入ボタンを追加します。

```tsx:components/product-list.tsx
<div>
  {price.description || '通常'} -{' '}
  {price.unit_amount.toLocaleString()}円
  <button onClick={() => redirectToCheckout(price.id)}>購入</button> {/* 追加 */}
</div>
```

上記をクリックすることで Stripe チェックアウト が開始されます。

[Run Payments with Stripe: README](https://stripe.com/jp/payments/checkout#:~:text=Stripe%20Checkout%20%E3%81%AF%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%AE,%E5%8F%97%E3%81%91%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82)

:::warning
Cloud Functionsは動作が遅いためチェックアウトの開始に数秒待つ必要があります。実際にはローディングアニメーションを実装するなどして待機中だとわかるUIにしましょう。
:::