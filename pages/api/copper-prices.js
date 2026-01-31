import { fetchAllMetalPrices } from '../../utils/copperPriceService';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching real copper prices...');
    
    // Use our copper price service to get real data
    const metalPrices = await fetchAllMetalPrices();
    
    console.log(`Returning ${metalPrices.length} metal price records`);
    console.log(`Copper price: $${metalPrices[0]?.price} from ${metalPrices[0]?.source}`);
    
    res.status(200).json(metalPrices);
    
  } catch (error) {
    console.error('Error in copper prices API:', error);
    
    // Fallback to basic mock data
    const fallbackPrices = [
      {
        metal_name: "Copper",
        pgm_name: "Copper",
        price: 4.12,
        price_change: 0.05,
        price_change_percent: 1.23,
        last_updated: new Date().toISOString(),
        source: "Fallback Data",
        error: "API temporarily unavailable"
      }
    ];
    
    res.status(200).json(fallbackPrices);
  }
}