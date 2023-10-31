This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and draws inspiration from [Ixartz](https://github.com/ixartz).

Acknowledge: [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate/tree/main) from Ixartz.

## Boilerplate for Next JS 14+, Tailwind CSS 3 and TypeScript

This ia a boilerplate and starter pack for Next.js with App Router support, Tailwind CSS and TypeScript that focuses on developer experience. It comes with ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library and Commitlint.

Clone this project and use it to your advantage by extending the features such as Authentication with [Clerk](https://clerk.com/), Database with DrizzleORM, Transactional Emails with [Resend](https://resend.com/) and [Supabase](https://supabase.com/).

### Features

Developer experience first:

- Next.js with App Router support.
- Type checking with TypeScript.
- Integrate with Tailwind CSS and [Shadcn/ui](https://ui.shadcn.com/).
- Strict Mode for TypeScript and React 18.
- Type-safe environment variables with T3 Env.
- Validation library with Zod.
- Linter with [ESLint](https://eslint.org/) (default NextJS, NextJS Core Web Vitals, and Tailwind CSS).
- Code Formatter with [Prettier](https://prettier.io/).
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files.
- Lint git commit with Commitlint
- Write standard compliant commit messages with Commitizen.
- Unit Testing with Jest and React Testing Library.
- Integration and E2E Testing with Playwright.
- Run tests on pull requests with Github Actions.
- Automatic changelog generation with Semantic Release.
- Absolute Imports using `@` prefix.
- Visual testing with Percy (optional).
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer).

### Getting Started

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

#### Commit Message Format

The project mandates adherence to the [Conventional Commits](https://www.conventionalcommits.org/). This means that all your commit messages must be formatted according to the specification. To assist you in committing these messages, the project utilizes [Commitizen](https://github.com/commitizen/cz-cli), an interactive command-line interface (CLI) that provides guidance during the commit process. To use it, run the following command:

```bash
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a CHANGELOG file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

#### Testing

All tests are co-located with the source code inside the same directory.

#### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```bash
npx plawright install  # Only for the first time in a new environment.
npm run test:e2e
```

Using [Percy](https://www.browserstack.com/docs/percy/integrate/playwright) is not mandatory, so feel free to update `.github/workflows/CI.yml` as needed. In case you decide to utilize Percy, be sure to configure the `PERCY_TOKEN` environment variable.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
