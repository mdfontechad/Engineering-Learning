import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index.js';

export function createDbClient(databaseUrl: string) {
  const queryClient = postgres(databaseUrl);
  const db = drizzle(queryClient, { schema });
  return { db, queryClient };
}

export type Database = ReturnType<typeof createDbClient>['db'];