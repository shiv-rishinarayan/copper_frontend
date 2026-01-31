import { query } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching most followed stocks from database...');
    
    // Query to fetch most followed stocks from our database
    const result = await query(`
      SELECT 
        id,
        name,
        ticker,
        open_price,
        close_price,
        intraday_percentage,
        current_price,
        intraday_change,
        seven_day_change,
        seven_day_percentage,
        volume,
        country,
        stock_exchange,
        stock_type
      FROM api_app_mostfollowedstocks 
      ORDER BY volume DESC
      LIMIT 50
    `);

    console.log(`Found ${result.rows.length} most followed stock records`);

    // Transform the data to match frontend expectations
    const stocks = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      ticker: row.ticker,
      open_price: row.open_price,
      close_price: row.close_price,
      intraday_percentage: row.intraday_percentage,
      current_price: row.current_price,
      intraday_change: row.intraday_change,
      seven_day_change: row.seven_day_change,
      seven_day_percentage: row.seven_day_percentage,
      volume: row.volume,
      country: row.country,
      stock_exchange: row.stock_exchange,
      stock_type: row.stock_type
    }));

    res.status(200).json(stocks);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch most followed stocks', 
      error: error.message 
    });
  }
}