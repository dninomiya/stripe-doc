以下のコードで商品を表示してください。

```tsx:components/product-list.tsx 
import React from 'react';

const ProductList = () => {
  return (
    <div>
      <h2>チケット</h2>
      <p>1,500円</p>
      <button>購入</button>
    </div>
  );
};

export default ProductList;
```

上記コンポーネントをトップページで使用します。

```tsx:pages/index.tsx
{user && <ProductList />}
```

今回は静的に実装していますが、実際にはStripeダッシュボードの商品管理操作をWebhookでキャッチしてFirestoreに反映させてください。

静的に実装する場合、Stripeの商品情報を手作業で同期し続ける必要がありリスクが高まります。