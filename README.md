# Nuxt 3 Task Management Application

This is a Nuxt 3 application for task management. It uses Supabase for the backend and Drizzle ORM for database operations.

## Live Demo

You can view a live demo of this application at: [https://nuxt-task-manager.vercel.app](https://nuxt-task-manager.vercel.app)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- pnpm (v6 or later)
- PostgreSQL database (You can use Supabase for this)

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```bash
   pnpm install
   ```

3. Set up your environment variables:
   - Copy the `.env.example` file to `.env`
   - Fill in the required environment variables, especially the `DATABASE_URL`

4. Set up the database:
   ```bash
   pnpm run db:generate
   pnpm run db:migrate
   pnpm run db:seed
   ```

## Seed Data

The application comes with a seeding script to populate your database with initial data. This is useful for testing and development purposes. To generate seed data:

1. Ensure your database is set up and the `DATABASE_URL` is correctly configured in your `.env` file.
2. Run the seeding script:
   ```bash
   pnpm run db:seed
   ```

This script will create a set of sample tasks with various statuses and due dates. You can modify the seeding logic in the `server/seed.ts` file to customize the generated data.

## Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Available Scripts

- `pnpm run dev`: Start the development server
- `pnpm run build`: Build the application for production
- `pnpm run generate`: Generate static files
- `pnpm run preview`: Preview the production build
- `pnpm run db:generate`: Generate database migrations
- `pnpm run db:migrate`: Apply database migrations
- `pnpm run db:studio`: Open Drizzle Studio for database management
- `pnpm run db:seed`: Seed the database with initial data

## Project Structure

- `components/`: Vue components
- `pages/`: Application pages and routes
- `server/`: Server-side code and API routes
- `stores/`: Pinia stores for state management
- `lib/`: Utility functions and helpers
- `assets/`: Static assets like CSS files
- `public/`: Public files
- `drizzle/`: Database migration files

## Technologies Used

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Supabase](https://supabase.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)

## Deployment

This application is deployed on Vercel. For detailed deployment instructions or to deploy to other platforms, refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

For more information on working with Nuxt 3, check out the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction).
