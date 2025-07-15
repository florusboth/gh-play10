[![codecov](https://codecov.io/github/florusboth/gh-play10/graph/badge.svg?token=JHXKTYNLN5)](https://codecov.io/github/florusboth/gh-play10)
[![CodeQL](https://github.com/florusboth/gh-play10/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/florusboth/gh-play10/actions/workflows/github-code-scanning/codeql)
[![CI](https://github.com/florusboth/gh-play10/actions/workflows/ci.yaml/badge.svg)](https://github.com/florusboth/gh-play10/actions/workflows/ci.yaml)
[![Deploy](https://github.com/florusboth/gh-play10/actions/workflows/deploy.yaml/badge.svg)](https://github.com/florusboth/gh-play10/actions/workflows/deploy.yaml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## My Notes

```bash
npm i
npm run lint
npm run typecheck
npm run format
npm run test
npm run test:e2e
# npx playwright install --with-deps
sudo apt-get install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
npx playwright install
npm run test:e2e
npm i next@latest react@latest react-dom@latest
npm run build
npm run test:e2e
npx playwright install
sudo apt-get install libflite1
npx playwright install
npm run test:e2e
```

## Changesets

Create a new branch.
When finished, run

```bash
npx changeset
```

Push the branch.
