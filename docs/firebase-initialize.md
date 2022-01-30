注意: 事前に [Firebase CLI のインストール](https://firebase.google.com/docs/cli?hl=ja#install_the_firebase_cli) が必要です。

まずはFirebaseにログインします。以下のコマンドによってブラウザが立ち上がるのでログインしてください。

```bash:ターミナル
firebsae login
```

次に以下のコマンドでFirebaseプロジェクトを初期化します。

```bash:ターミナル
firebase init
```

Cloud Functionsにチェック（スペースキー）を入れてエンターで進みます。 `Use an existing project` で作成したFirebaseプロジェクトを選択します。

言語は `TypeScript` を推奨します。ESLintも導入したいので、それ以降エンターを重ねて項目を `Yes` として進めてください。

最終的にインストールが終われば Firebaseプロジェクトの初期化は完了です。