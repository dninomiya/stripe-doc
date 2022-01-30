事前に[Connectアカウント作成関数をデプロイ](?id=firebase-create-connect-account)してください。

Connectアカウント表示用コンポーネントを作成します。

```tsx:components/stripe-account.tsx
import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import React, { useEffect, useState } from 'react';
import { db, fns } from '../lib/firebase';

type StripeAccount = {
  stripeAccountId: string;
  valid: boolean;
};

type Props = {
  user: User;
};

const StripeAccount = ({ user }: Props) => {
  const [stripeAccount, setStripeAccount] = useState<StripeAccount | null>(
    null
  );

  useEffect(() => {
    getStripeAccount().then((account) => setStripeAccount(account));
  }, []);

  const getStripeAccount = async () => {
    const ref = doc(db, `stripeAccounts/${user.uid}`);
    const snap = await getDoc(ref);
    return snap.data() as StripeAccount;
  };

  const createStripeAccount = async () => {
    const callable = httpsCallable(fns, 'createStripeAccount');
    try {
      await callable();
      setStripeAccount(await getStripeAccount());
    } catch (error) {
      alert('販売アカウントの作成に失敗しました');
    }
  };

  return (
    <div>
      {!stripeAccount && (
        <div>
          <button onClick={createStripeAccount}>販売をはじめる</button>
        </div>
      )}
      {stripeAccount && (
        <p>ConnectアカウントID: {stripeAccount.stripeAccountId}</p>
      )}
      {stripeAccount && !stripeAccount.valid && <button>販売者情報を登録してください</button>}
    </div>
  );
};

export default StripeAccount;
```

コンポーネントをトップページに実装します。

```tsx:pages/index.tsx
// 追加
{user && <StripeAccount user={user} />}
```

表示されるボタンをクリックしてConnectアカウントのIDが表示されたら完了です。まだ販売できる状態ではないため、[必要な確認情報](https://stripe.com/docs/connect/required-verification-information#US-full-individual--transfer)を入力する必要があります。