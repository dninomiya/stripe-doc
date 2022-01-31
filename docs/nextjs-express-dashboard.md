:::info
事前に「[ダッシュボードリンク生成](?id=firebase-express-dashboard)」を完了してください。
:::

以下のコードを追加してダッシュボードへのリダイレクトを実装します。

```tsx:components/stripe-account.tsx 
// メソッドを追加
const redirectToDashboard = async () => {
  const callable = httpsCallable(fns, 'getDashboardLink');
  const { data } = await callable();
  location.assign(data as string);
};

// 省略

// レンダーに追加
{stripeAccount?.valid && (
  <div>
    <button onClick={redirectToDashboard}>ダッシュボードを開く</button>
  </div>
)}
```

クリックするとConnectアカウントのダッシュボードに遷移し、販売者が自分の収益を確認することができます。

セキュリティの観点からこのURLは有効期限つきの一時的なものになります。ダッシュボードにアクセスする際にはこのメソッドを介して都度StripeにダッシュボードのURLをリクエストする必要があります。