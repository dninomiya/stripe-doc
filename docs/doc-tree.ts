export const TOOLS = ['stripe', 'nextjs', 'firebase'] as const;
export const DOC_TYPES = ['payments', 'billing', 'connect'] as const;
export type DocType = typeof DOC_TYPES[number];
export type Doc = {
  title: string;
  tool: string;
  step: number;
  id: number;
  type: DocType;
  videoURL?: string;
};

export const DOC_TREE: {
  [key in typeof DOC_TYPES[number]]: {
    title: string;
    tool: {
      [toolName in typeof TOOLS[number]]?: {
        title: string;
        videoURL?: string;
      }[];
    };
  }[];
} = {
  payments: [
    {
      title: '環境構築',
      tool: {
        stripe: [
          {
            title: 'アカウントを作成',
            videoURL: '',
          },
          {
            title: '制限付きAPIキーを作成',
            videoURL: '',
          },
          {
            title: 'Webhookを作成',
            videoURL: '',
          },
        ],
        nextjs: [
          {
            title: 'アカウントを作成',
            videoURL: '',
          },
          {
            title: '制限付きAPIキーを作成',
            videoURL: '',
          },
          {
            title: 'Webhookを作成',
            videoURL: '',
          },
        ],
        firebase: [
          {
            title: 'Firebaseプロジェクトを作成',
            videoURL: '',
          },
          {
            title: 'Cloud Firestore データベースを作成',
            videoURL: '',
          },
          {
            title: 'Firebase Authentication の有効化',
            videoURL: '',
          },
          {
            title: 'Blazeプランにアップグレード',
            videoURL: '',
          },
          {
            title: 'Run Payments with Stripe 拡張機能をインストール',
            videoURL: '',
          },
          {
            title: 'Cloud Firestore セキュリティルールを設定',
            videoURL: '',
          },
          {
            title: 'Stripe webhook secret を使って拡張機能を再構成',
            videoURL: '',
          },
        ],
      },
    },
    {
      title: '商品の作成と表示',
      tool: {
        stripe: [
          {
            title: '商品と価格を作成',
            videoURL: '',
          },
          {
            title: '税率を作成',
            videoURL: '',
          },
          {
            title: 'Taxによる税率設定の自動化（オプション）',
            videoURL: '',
          },
        ],
        nextjs: [
          {
            title: '商品一覧の表示',
            videoURL: '',
          },
        ],
      },
    },
    {
      title: 'フルフィルメントの実装',
      tool: {
        firebase: [
          {
            title: 'Stripe CLI のインストール',
            videoURL: '',
          },
          {
            title: 'イベントハンドラ（HTTPリクエスト関数の作成）',
            videoURL: '',
          },
          {
            title: 'フルフィルメントの実装',
            videoURL: '',
          },
        ],
      },
    },
    {
      title: '商品の購入',
      tool: {
        stripe: [
          {
            title: 'カスタマーポータルのカスタマイズ',
            videoURL: '',
          },
        ],
        nextjs: [
          {
            title: 'カスタマーポータルを開く',
            videoURL: '',
          },
        ],
      },
    },
  ],
  billing: [],
  connect: [],
};
