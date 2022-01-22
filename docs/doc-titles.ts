export const DOC_TITLES = {
  'firebase-authentication': 'Firebase Authentication の有効化',
  'firebase-create-firestore': 'Cloud Firestore データベースを作成',
  'firebase-create-project': 'Firebaseプロジェクトを作成',
  'firebase-install-stripe':
    'Stripe Node.js Library のインストールFirebaseプロジェクトを作成',
  'firebase-rebuild-extension':
    'Stripe webhook secret を使って拡張機能を再構成',
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
  'firebase-event-handler': 'イベントハンドラ（HTTPリクエスト関数の作成）',
  'stripe-customer-portal-customize': 'カスタマーポータルのカスタマイズ',
  'nextjs-customer-portal-open': 'カスタマーポータルを開く',
  'nextjs-checkout-payments': '支払いを開始する',
};

export type DocId = keyof typeof DOC_TITLES;

export const getDocTitle = (id: DocId) => {
  return DOC_TITLES[id];
};
