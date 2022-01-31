```tsx:pages/index.tsx
const [role, setRole] = useState<string>();

useEffect(() => {
  // 省略
 onAuthStateChanged(auth, (firebaseUser) => {
    setUser(firebaseUser);
    getCustomClaimRole(); // 追加
  });
}, [])

const getCustomClaimRole = async () => {
  await auth.currentUser?.getIdToken(true);
  const decodedToken = await auth.currentUser?.getIdTokenResult();
  setRole(decodedToken?.claims.stripeRole as string);
};

// 省略

// 追加
<p>{role === 'premium' ? 'プレミアムプラン' : 'フリープラン'}</p>
```