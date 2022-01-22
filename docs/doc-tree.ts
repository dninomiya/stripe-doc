import { DocId } from './doc-titles';

export const TOOLS = ['stripe', 'nextjs', 'firebase'] as const;
export const DOC_TYPES = ['payments', 'billing', 'connect'] as const;
export type DocType = typeof DOC_TYPES[number];
export type Doc = {
  title: string;
  tool: string;
  step: number;
  id: number;
  type: DocType;
};

export const DOC_TREE: {
  [key in typeof DOC_TYPES[number]]: {
    title: string;
    tool: {
      [toolName in typeof TOOLS[number]]?: DocId[];
    };
  }[];
} = {
  payments: [
    {
      title: '環境構築',
      tool: {
        stripe: [
          'stripe-create-account',
          'stripe-create-api-key',
          'stripe-create-webhook',
        ],
        nextjs: ['nextjs-setup'],
        firebase: [
          'firebase-create-project',
          'firebase-create-firestore',
          'firebase-authentication',
          'firebase-install-stripe-extension',
          'firebase-security-rule',
          'firebase-rebuild-extension',
        ],
      },
    },
    {
      title: '商品の作成と表示',
      tool: {
        stripe: ['stripe-create-products', 'stripe-create-tax'],
        nextjs: ['nextjs-list-items'],
      },
    },
    {
      title: 'フルフィルメントの実装',
      tool: {
        firebase: ['firebase-install-stripe', 'firebase-event-handler'],
      },
    },
    {
      title: '商品の購入',
      tool: {
        stripe: ['stripe-customer-portal-customize'],
        nextjs: ['nextjs-customer-portal-open'],
      },
    },
  ],
  billing: [],
  connect: [],
};
