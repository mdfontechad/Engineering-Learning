import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

async function runMigrations() {
  const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost:5432/tiendacontrol';
  const sql = postgres(dbUrl, { max: 1 });
  const db = drizzle(sql);

  console.log('Running database migrations...');
  await migrate(db, { migrationsFolder: './migrations' });
  console.log('Migrations completed successfully.');
  await sql.end();
}

runMigrations().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});