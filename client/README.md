Технологии: rtk, rtk query, next.js, sass, framer-motion, npm
Пишем по **FSD**

# Кратко о **FSD**: 
Есть папка **application** в этой папке представлена основное что используется в приложении для его отображения.

В папке **pages** находятся страницы и элементы которые представлены только на этой странице остальное, переиспользуемое находится в папке widgets

В папке **widgets** могут находиться отдельные элементы бизнес-логики вместе с их ua API и так далее.

В папке **futures** представлены фичи которые нельзя отнести к определённой части приложения например слайдер его api, ui и тому подобное

Дальше идёт папка **entities** в ней представлены все сущности и относящиеся к ним UI, API, типы и так далее.

В папке **shared** находятся все переиспользуемые компоненты хуки и так далее

Выше я описал слои внутри слоя находится слайс например User а внутри слайса юзер находятся сегменты например api, ui и так далее

Также внутри слайса должен находиться индекс файл из которого импортируется всё что нужно использовать вне этого слайса.
Например нам нужно использовать компонент User Items на странице Main мы экспортируем его из index.ts (внутри features/user/index.ts)

Также важно помнить о том что в слове ниже не может использоваться ничего из слоя выше
Например в слое shared мы не можем использовать компонент User item из features 

Пояснение архитектуры FSD: https://www.youtube.com/watch?v=O4SDx-aZY5U

Здесь есть пример сущности users под rtk q






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
