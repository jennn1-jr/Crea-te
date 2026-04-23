import { query } from '@/lib/db';

export async function GET() {
  try {
    const results = await query('SELECT * FROM projects LIMIT 1');
    return Response.json(results[0] || {});
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}
