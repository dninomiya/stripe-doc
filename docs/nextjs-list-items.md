商品一覧を表示させます。

```tsx:コンポーネント
const PriceList = () => {
  const [prices, setPrices] = useState();

  useEffect(() => {
    db.collection('${param:PRODUCTS_COLLECTION}')
      .where('active', '==', true)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(async function (doc) {
          const priceSnap = await doc.ref.collection('prices').get();
          const datas = priceSnap.docs.map((doc) => doc.data());
          setPrices(datas);
        });
      });
  }, [])

  if (!prices) {
    return null;
  }

  return (
    <div>
      {prices.map(price => <div>{price.name} {price.amount}円</div>)}
    </div>
  )
}
```

[参考](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md#list-available-products-and-prices)