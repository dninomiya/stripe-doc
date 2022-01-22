価格IDを使ってチェックアウトに移行できます。

```tsx:コンポーネント
const startCheckout = (price: string) => {
  const docRef = await db
    .collection('${param:CUSTOMERS_COLLECTION}')
    .doc(currentUser.uid)
    .collection("checkout_sessions")
    .add({
      mode: "payment",
      price,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

  docRef.onSnapshot((snap) => {
    const { error, url } = snap.data();
    if (error) {
      alert(`An error occured: ${error.message}`);
    }
    if (url) {
      // チェックアウト画面へ移動
      window.location.assign(url);
    }
  });
}
```