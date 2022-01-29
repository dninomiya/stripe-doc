事前に[確認情報入力用のリンク生成関数をデプロイ](?id=firebase-required-verification-information)してください。

以下のコードを追記して確認情報入力ページに遷移します。

```tsx:components/stripe-account.tsx
// 追加
const redirectStripeAccountForm = async () => {
    const callable = httpsCallable(fns, 'getStripeAccountFormLink');
    const { data } = await callable();
    window.location.assign(data as string);
  };

// 変更
{!stripeAccount?.valid && (
  <button onClick={redirectStripeAccountForm}>
    販売者情報を登録してください
  </button>
)}
```