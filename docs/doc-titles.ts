export const DOC_TITLES = {
  'firebase-authentication': 'Firebase Authentication の有効化',
  'firebase-create-firestore': 'Cloud Firestore データベースを作成',
  'firebase-create-project': 'Firebaseプロジェクトを作成',
  'firebase-install-stripe': 'Stripe Node.js Library のインストール',
  'firebase-initialize': 'Firebaseプロジェクトの初期化',
  'firebase-create-connect-account': 'Connectアカウント作成関数を作成',
  'firebase-rebuild-extension': '署名シークレットの設定',
  'firebase-security-rule': 'Cloud Firestore セキュリティルールを設定',
  'firebase-install-stripe-extension':
    'Run Payments with Stripe 拡張機能をインストール',
  'nextjs-list-items': '商品一覧の表示',
  'nextjs-setup': 'アプリケーションを作成',
  'stripe-create-account': 'アカウントを作成',
  'stripe-create-api-key': '制限付きAPIキーを作成',
  'stripe-create-products': '商品と価格を作成',
  'stripe-create-tax': '税率を作成',
  'stripe-create-webhook': 'Webhookを作成',
  'stripe-customer-portal-customize': 'カスタマーポータルの設定',
  'nextjs-customer-portal-open': 'カスタマーポータルを開く',
  'nextjs-checkout-payments': '支払いを開始',
  'nextjs-checkout-connect': '商品の購入',
  'nextjs-firebase-initialize': 'Firebaseの初期化',
  'firebase-create-web-app': 'アプリの登録',
  'nextjs-purchase-history': '購入履歴の表示',
  'nextjs-express-dashboard': 'ダッシュボードの表示',
  'firebase-express-dashboard': 'ダッシュボードリンク生成',
  'firebase-checkout-session-connect': 'チェックアウトセッションの作成',
  'nextjs-auth': 'ログイン/ログアウトの実装',
  'stripe-create-products-billing': '商品と価格を作成',
  'nextjs-list-items-billing': 'プラン一覧の表示',
  'nextjs-checkout-billing': 'プランの購入',
  'nextjs-display-role': '権限の表示',
  'stripe-customer-portal-customize-billing': 'カスタマーポータルの設定',
  'nextjs-create-connect-account': 'Connectアカウントの作成関数の実行',
  'stripe-connect-settings': 'Connectの設定',
  'firebase-create-customer': 'カスタマー作成トリガーの実装',
  'nextjs-auth-connect': 'ログイン機能の実装',
  'nextjs-required-verification-information': '確認情報の入力',
  'stripe-connect-account-webhook': 'Stripe Connect用Webhookの作成',
  'nextjs-list-items-connect': '商品の表示',
  'firebase-required-verification-information':
    '確認情報入力用リンクとトリガー関数を作成',
};

export type DocId = keyof typeof DOC_TITLES;

export const getDocTitle = (id: DocId) => {
  return DOC_TITLES[id];
};
