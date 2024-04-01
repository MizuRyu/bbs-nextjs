このドキュメントは、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) を使用して構築された [Next.js](https://nextjs.org/) プロジェクトに関するものです。

### 技術構成

- **main**

```
  Lang: Next.js
  BaaS: SupaBase
    DB: PostgreSQL
   ORM: Prisma
   CSS: TailwindCSS
```

- **details**

```
  Form: useForm
Schema: Zod
UI Lib: shadcn/ui
```

## はじめに

まず、開発サーバーを起動します:

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

## 画面について

### HOME 画面

- 投稿された記事の一覧が表示される
  ![appHome](/assets/app_home.png)

### Create Post

- 記事を投稿する画面
  ![appCreatePost](/assets/app_create_post.png)

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて、結果を確認します。

`app/page.tsx を変更することでページの編集を開始できます。ファイルを編集すると、ページは自動的に更新されます。

このプロジェクトでは、`next/font` を使用して、カスタム Google フォントである Inter を自動的に最適化し、読み込んでいます。

## 詳しく学ぶ

Next.js についてもっと学ぶには、以下のリソースをご覧ください:

- [Next.js ドキュメント](https://nextjs.org/docs) - Next.js の機能と API について学びます。
- [Next.js を学ぶ](https://nextjs.org/learn) - 対話式の Next.js チュートリアルです。

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - をチェックしてフィードバックや貢献してください。

## Vercel にデプロイする

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
