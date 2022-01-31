:::info
事前に 「[アプリの登録](?id=firebase-create-web-app)」 を完了してください。
:::

```bash:ターミナル
npm install firebase
```

登録したアプリの設定情報を使ってFirebaseを初期化します。

```ts:lib/firebsae.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  // 登録したアプリの設定
});

export const db = getFirestore(app);
export const fns = getFunctions(app, 'asia-northeast1');
export const auth = getFunctions(app);
```