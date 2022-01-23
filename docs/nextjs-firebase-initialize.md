[SDKをインストールしてFirebaseを初期化](https://firebase.google.com/docs/web/setup?hl=ja#add-sdks-initialize)してください。

```bash:ターミナル
npm install firebase
```

```ts:lib/firebsae.ts
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```