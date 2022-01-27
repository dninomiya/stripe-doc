商品一覧を表示させます。

```tsx:components/product-list.tsx
import { User } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';

type Interval = 'month' | 'year' | 'week' | 'day';

type Price = {
  id: string;
  description: string;
  unit_amount: number;
  active: boolean;
  type: 'recurring' | 'one_time';
  recurring: {
    interval: Interval;
    interval_count: number;
  };
};

type Product = {
  id: string;
  active: boolean;
  name: string;
  prices: Price[];
};

type Props = {
  user: User;
};

const ProductList = ({ user }: Props) => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const ref = collection(db, 'products');
    const q = query(ref, where('active', '==', true));
    getDocs(q).then(async (snap) => {
      const promises = snap.docs.map(async (doc) => {
        const product = {
          ...(doc.data() as Product),
          id: doc.id,
        };
        const priceRef = collection(db, doc.ref.path, 'prices');
        const priceSnap = await getDocs(priceRef);
        product.prices = priceSnap.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          } as Price;
        });

        return product as Product;
      });

      setProducts(await Promise.all(promises));
    });
  }, []);

  const getIntervalLabel = (interval: Interval) => {
    return {
      day: '日',
      month: 'か月',
      year: '年',
      week: '週間',
    }[interval];
  };

  return (
    <div>
      {products
        ?.filter((product) => product.active)
        .map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            {product.prices
              .filter((price) => price.active && price.type === 'recurring')
              .map((price) => (
                <div key={price.id}>
                  {price.recurring.interval_count}
                  {getIntervalLabel(price.recurring.interval)}ごとに
                  {price.unit_amount.toLocaleString()}円
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default ProductList;
```

```tsx:pages/index.tsx
// この行を追加
{user && <ProductList user={user}></ProductList>}
```

[参考](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md#list-available-products-and-prices)