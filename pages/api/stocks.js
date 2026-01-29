const { query } = require('../../lib/database');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching stock data from database...');
    
    const result = await query(`
      SELECT 
        ticker,
        company_name,
        stock_type,
        exchange,
        domiciled,
        mine_location,
        primary_resource,
        market_cap,
        last_price,
        intraday_percentage,
        volume,
        ytd_percentage,
        week_52_low,
        week_52_high
      FROM api_app_stockmetrics 
      ORDER BY company_name ASC
    `);

    const stockData = result.rows.map(row => ({
      ticker: row.ticker,
      company_name: row.company_name,
      stock_type: row.stock_type || 'N/A',
      exchange: row.exchange || 'N/A',
      domiciled: row.domiciled || 'N/A',
      mine_location: row.mine_location || 'N/A',
      primary_resource: row.primary_resource || 'N/A',
      market_cap: row.market_cap || 'N/A',
      last_price: row.last_price || 'N/A',
      intraday_percentage: row.intraday_percentage || '0.00%',
      volume: row.volume || 'N/A',
      ytd_percentage: row.ytd_percentage || '0.00%',
      week_52_low: row.week_52_low || 'N/A',
      week_52_high: row.week_52_high || 'N/A'
    }));

    console.log(`✅ Successfully fetched ${stockData.length} stocks`);
    res.status(200).json(stockData);
    
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch stock data', 
      error: error.message 
    });
  }
}