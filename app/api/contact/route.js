import { query } from '@/lib/db';

export async function GET() {
  try {
    const results = await query('SELECT * FROM contacts LIMIT 1');
    return Response.json(results[0] || {});
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to fetch contact' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const {
      email,
      phone,
      address,
      city,
      tiktok_url,
      whatsapp_url,
    } = body;

    await query(
      `UPDATE contacts 
       SET email = ?, phone = ?, address = ?, instagram = ?, city = ?, tiktok_url = ?, whatsapp_url = ?
       WHERE id = 1`,
      [email, phone, address, instagram, city, tiktok_url, whatsapp_url]
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to update contact' }, { status: 500 });
  }
}
