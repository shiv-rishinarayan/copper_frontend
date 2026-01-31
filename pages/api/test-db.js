import { query } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Testing database connection...');
    
    // Test press releases table
    const pressResult = await query(`
      SELECT COUNT(*) as press_count FROM api_app_pressreleases
    `);
    
    // Test stock news table
    const stockResult = await query(`
      SELECT COUNT(*) as stock_count FROM api_app_stocknews
    `);
    
    // Test stock metrics table
    const metricsResult = await query(`
      SELECT COUNT(*) as metrics_count FROM api_app_stockmetrics
    `);

    const stats = {
      database_connected: true,
      press_releases_count: pressResult.rows[0].press_count,
      stock_news_count: stockResult.rows[0].stock_count,
      stock_metrics_count: metricsResult.rows[0].metrics_count,
      timestamp: new Date().toISOString()
    };

    console.log('Database stats:', stats);
    res.status(200).json(stats);
    
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ 
      database_connected: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}