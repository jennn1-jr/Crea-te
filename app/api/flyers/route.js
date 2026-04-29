import { query } from '@/lib/db';

export async function GET() {
  try {
    const results = await query(`
      SELECT id, image_url, title, subtitle 
      FROM flyers 
      ORDER BY \`order\` ASC, id ASC
    `);

    return Response.json(results);
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to fetch flyers' }, { status: 500 });
  }
}
