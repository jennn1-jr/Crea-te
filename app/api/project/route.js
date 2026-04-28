import { query } from '@/lib/db';

export async function GET(request) {
  try {
    // Get category from query params: /api/project?category=Premium
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let sql = 'SELECT id, src, alt, caption, category, created_at FROM gallery ORDER BY created_at DESC';
    let params = [];
    
    // If category filter provided, add WHERE clause with parameterized query
    if (category) {
      sql = 'SELECT id, src, alt, caption, category, created_at FROM gallery WHERE category = ? ORDER BY created_at DESC';
      params = [category];
    }

    const results = await query(sql, params);
    
    // Return array of gallery items
    return Response.json(results || []);
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
  }
}
