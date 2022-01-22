[[ルール]タブ](https://console.firebase.google.com/u/0/project/_/firestore/rules?hl=ja)で以下のルールを設定してください。

```plane:セキュリティルール
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /${param:CUSTOMERS_COLLECTION}/{uid} {
      allow read: if request.auth.uid == uid;

      match /checkout_sessions/{id} {
        allow read, write: if request.auth.uid == uid;
      }
      match /subscriptions/{id} {
        allow read: if request.auth.uid == uid;
      }
      match /payments/{id} {
        allow read: if request.auth.uid == uid;
      }
    }

    match /${param:PRODUCTS_COLLECTION}/{id} {
      allow read: if true;

      match /prices/{id} {
        allow read: if true;
      }

      match /tax_rates/{id} {
        allow read: if true;
      }
    }
  }
}
```

[参考](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md#set-your-cloud-firestore-security-rules)