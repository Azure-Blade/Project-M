import { defineConfig } from 'drizzle-kit';

// TODO: Make these values into ENV variables
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    database: 'project-m',
  },
});
