```tsx:components/purchase-list.tsx
import { User } from 'firebase/auth';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';

type Purchase = {
  id: string;
  status?: 'succeeded';
  created: number;
  items: {
    description: string;
    price: {
      id: string;
      nickname: string;
      unit_amount: number;
    };
  }[];
};

type Props = {
  user: User;
};

const PurchaseList = ({ user }: Props) => {
  const [purchases, setPurchases] = useState<Purchase[]>();

  useEffect(() => {
    const ref = collection(db, `customers/${user.uid}/payments`);
    const q = query(
      ref,
      where('status', '==', 'succeeded'),
      orderBy('created', 'desc')
    );

    return onSnapshot(q, (result) => {
      setPurchases(result.docs.map((doc) => doc.data() as Purchase));
    });
  }, []);

  return (
    <div>
      <h2>購入履歴</h2>

      <ul>
        {purchases?.map((purchase) => {
          const price = purchase.items[0].price;
          return (
            <li key={purchase.id}>
              <span>{purchase.items[0].description}</span>
              <span>{price.unit_amount.toLocaleString()}円</span>
              <span>{purchase.created}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PurchaseList;
```

```tsx:pages/index.tsx
import PurchaseList from '../components/purchase-list';

// 省略

{user && <PurchaseList user={user}></PurchaseList>}
```