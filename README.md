## コントリビュート

このドキュメントはオープンソースです。自由にPull Requestを送ってください。

- [コミットメッセージガイドライン](https://gist.github.com/brianclements/841ea7bffdb01346392c#:~:text=The%20header%20is%20mandatory%20and,to%20an%20issue%20if%20any.)

### 動画の圧縮

動画は以下の設定で圧縮してから追加してください。16:9のアスペクト比を推奨します。

```bash
ffmpeg -i demo.mov -crf 30 -vf scale=1280:-1 output.mp4
```

## コントリビューター

- [nino](https://twitter.com/d151005)