import { query } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching press releases from database...');
    
    // Query to fetch press releases from our database
    const result = await query(`
      SELECT 
        id,
        ticker,
        company_name,
        title,
        date,
        url,
        content,
        created_at,
        updated_at
      FROM api_app_pressreleases 
      ORDER BY created_at DESC
      LIMIT 20
    `);

    console.log(`Found ${result.rows.length} press release records`);

    // Transform the data to match frontend expectations
    const pressReleases = result.rows.map(row => ({
      id: row.id,
      ticker: row.ticker,
      company_name: row.company_name,
      title: row.title,
      date: row.date,
      url: row.url,
      content: row.content,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));

    res.status(200).json(pressReleases);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch press releases', 
      error: error.message 
    });
  }
}