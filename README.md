# Stripe クイックスタートガイド 🇯🇵

https://flock-team.github.io/stripe-doc/

Stripe クイックスタートガイド は Stripe を素早く導入するためのインタラクティブなチュートリアルです。動画やテキストを参考にしながらステップバイステップで実装の進めることができます。Stripe クイックスタートガイドは非公式のオープンソースプロジェクトです。
## コントリビュート

このドキュメントはオープンソースです。自由にPull Requestを送ってください。要望や不具合、不正確な情報の報告はIssueでお願いします。

### 開発方法

Next.js と Tailwind CSS を使っています。

```bash:ターミナル
npm install
npm run dev
```
### ドキュメントの追加、修正

1. [ドキュメントのIDとタイトルを定義](https://github.com/flock-team/stripe-doc/blob/main/docs/doc-titles.ts)
2. IDをファイル名にしてドキュメント(md)を[docs](https://github.com/flock-team/stripe-doc/tree/main/docs)に作成
3. [ドキュメントを任意のステップに掲載](https://github.com/flock-team/stripe-doc/blob/main/docs/doc-tree.ts)

### 動画の圧縮

動画は以下の設定で圧縮してから追加してください。16:9のアスペクト比を推奨します。

```bash:ターミナル
ffmpeg -i demo.mov -crf 30 -vf scale=1280:-1 -r 30 output.mp4
```

### リリース

mainブランチにマージされると自動的にGitHub Pagesにリリースされます。

## コントリビューター

- [nino](https://twitter.com/d151005) - owner