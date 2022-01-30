事前に[確認情報入力用リンクとトリガー関数を作成](?id=firebase-required-verification-information)を完了してください。

以下のコードを追記して確認情報入力ページに遷移します。

```tsx:components/stripe-account.tsx
// 追加
const redirectStripeAccountForm = async () => {
    const callable = httpsCallable(fns, 'getStripeAccountFormLink');
    const { data } = await callable(stripeAccount?.stripeAccountId);
    window.location.assign(data as string);
  };

// 変更
{stripeAccount && !stripeAccount.valid ? (
  <button onClick={redirectStripeAccountForm}>
    販売者情報を登録してください
  </button>
) : (
  <p>確認情報の登録が完了しています✅</p>
)}
```

遷移後は画面に沿ってテスト用の情報を適宜入力してください。途中Stripeアカウントでログインするシーンがあるので既存のStripeアカウントでログインしてください。実際のユーザーはここでStripeアカウントを作成することになります。

電話番号は `0000000000` を使用してください。