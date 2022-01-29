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
          'firebase-create-web-app',
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
        nextjs: ['nextjs-auth', 'nextjs-list-items'],
      },
    },
    {
      title: '商品の購入',
      tool: {
        nextjs: ['nextjs-checkout-payments'],
      },
    },
    {
      title: '購入した商品の表示',
      tool: {
        nextjs: ['nextjs-purchase-history'],
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
  billing: [
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
          'firebase-create-web-app',
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
        stripe: ['stripe-create-products-billing', 'stripe-create-tax'],
        nextjs: ['nextjs-auth', 'nextjs-list-items-billing'],
      },
    },
    {
      title: 'サブスクリプションの開始',
      tool: {
        nextjs: ['nextjs-checkout-billing'],
      },
    },
    {
      title: '契約状態の確認',
      tool: {
        nextjs: ['nextjs-display-role'],
      },
    },
    {
      title: '支払い方法の管理',
      tool: {
        stripe: ['stripe-customer-portal-customize-billing'],
        nextjs: ['nextjs-customer-portal-open'],
      },
    },
  ],
  connect: [
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
          'firebase-create-web-app',
          'firebase-create-firestore',
          'firebase-authentication',
          'firebase-initialize',
          'firebase-install-stripe',
        ],
      },
    },
    {
      title: 'カスタマーの作成',
      tool: {
        nextjs: ['nextjs-auth-connect'],
        firebase: ['firebase-create-customer'],
      },
    },
    {
      title: '商品の作成と表示',
      tool: {
        stripe: ['stripe-create-products-billing', 'stripe-create-tax'],
        nextjs: ['nextjs-list-items-billing'],
      },
    },
    {
      title: '販売アカウントの作成',
      tool: {
        stripe: ['stripe-connect-settings'],
        nextjs: ['nextjs-create-connect-account'],
        firebase: ['firebase-create-connect-account'],
      },
    },
    {
      title: '商品の購入',
      tool: {
        nextjs: ['nextjs-checkout-payments', 'nextjs-checkout-billing'],
      },
    },
    {
      title: '購入結果の表示',
      tool: {
        nextjs: ['nextjs-display-role', 'nextjs-purchase-history'],
      },
    },
    {
      title: '支払い方法の管理',
      tool: {
        stripe: ['stripe-customer-portal-customize-billing'],
        nextjs: ['nextjs-customer-portal-open'],
      },
    },
  ],
};
