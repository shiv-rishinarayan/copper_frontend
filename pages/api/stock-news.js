import { query } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching stock news from database...');
    
    // Query to fetch stock news from our database
    const result = await query(`
      SELECT 
        id,
        ticker,
        company_name,
        exchange,
        yahoo_ticker,
        title,
        summary,
        date,
        image_url,
        url,
        provider,
        created_at,
        updated_at
      FROM api_app_stocknews 
      ORDER BY created_at DESC
      LIMIT 50
    `);

    console.log(`Found ${result.rows.length} stock news records`);

    // Transform the data to match frontend expectations
    const stockNews = result.rows.map(row => ({
      id: row.id,
      ticker: row.ticker,
      company_name: row.company_name,
      exchange: row.exchange,
      yahoo_ticker: row.yahoo_ticker,
      title: row.title,
      summary: row.summary,
      date: row.date,
      image_url: row.image_url,
      url: row.url,
      provider: row.provider,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));

    res.status(200).json(stockNews);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch stock news', 
      error: error.message 
    });
  }
}