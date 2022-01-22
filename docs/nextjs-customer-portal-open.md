以下のコードでカスタマーポータルに遷移することができます。

```tsx:コンポーネント
const functionRef = firebase
  .app()
  .functions('${param:LOCATION}')
  .httpsCallable('${function:createPortalLink.name}');

const { data } = await functionRef({
  returnUrl: window.location.origin,
});

// カスタマーポータルに遷移
window.location.assign(data.url);
```