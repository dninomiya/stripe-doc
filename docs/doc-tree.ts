import { DocId } from './doc-titles';

export const TOOLS = ['stripe', 'nextjs', 'firebase'] as const;
export const DOC_TYPES = ['payments', 'billing', 'connect'] as const;
export type DocType = typeof DOC_TYPES[number];

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
        nextjs: ['nextjs-setup', 'nextjs-firebase-initialize'],
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
      title: '商品の購入',
      tool: {
        nextjs: ['nextjs-checkout-payments'],
        firebase: ['firebase-install-stripe', 'firebase-event-handler'],
      },
    },
    {
      title: '支払い方法の管理',
      tool: {
        stripe: ['stripe-customer-portal-customize'],
        nextjs: ['nextjs-customer-portal-open'],
      },
    },
  ],
  billing: [],
  connect: [],
};
