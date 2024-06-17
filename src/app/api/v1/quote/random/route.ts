import { db } from '@/db/index';
import { sql } from 'drizzle-orm';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET() {
  const quote = await db.query.quotes.findFirst({
    orderBy: sql`RAND()`,
  });
  if (!quote) return new Response('Error', { status: 500 });

  return new Response(JSON.stringify(quote));
}
