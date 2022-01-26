[SDKをインストールしてFirebaseを初期化](https://firebase.google.com/docs/web/setup?hl=ja#add-sdks-initialize)してください。

```bash:ターミナル
npm install firebase
```

[登録したアプリ](?id=firebase-create-web-app)の設定情報を使ってFirebaseを初期化します。

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