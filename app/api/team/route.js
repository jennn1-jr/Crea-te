import { query } from '@/lib/db'

export async function GET() {
  try {
    const results = await query('SELECT * FROM team_members', [])
    return Response.json(results)
  } catch (error) {
    console.error('[API] Database error:', error)
    return Response.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    )
  }
}