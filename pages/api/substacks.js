import { query } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching substacks from database...');
    
    // Query to fetch substacks from our database
    const result = await query(`
      SELECT 
        id,
        title,
        url,
        content,
        subtitle,
        image_url,
        date,
        created_at,
        updated_at
      FROM api_app_coppersubstack 
      ORDER BY created_at DESC
      LIMIT 20
    `);

    console.log(`Found ${result.rows.length} substack records`);

    // Transform the data to match frontend expectations
    const substacks = result.rows.map(row => ({
      id: row.id,
      title: row.title,
      url: row.url,
      content: row.content,
      subtitle: row.subtitle,
      image_url: row.image_url,
      date: row.date,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));

    res.status(200).json(substacks);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch substacks', 
      error: error.message 
    });
  }
}