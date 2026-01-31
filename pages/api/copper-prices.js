export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Mock data for copper and precious metals prices
    // This would typically come from a real-time pricing API or database
    const metalPrices = [
      {
        metal_name: "Copper",
        pgm_name: "Copper",
        price: 4.12,
        price_change: 0.05,
        price_change_percent: 1.23,
        last_updated: new Date().toISOString()
      },
      {
        metal_name: "Platinum",
        pgm_name: "Platinum", 
        price: 945.50,
        price_change: -12.30,
        price_change_percent: -1.28,
        last_updated: new Date().toISOString()
      },
      {
        metal_name: "Palladium",
        pgm_name: "Palladium",
        price: 1024.75,
        price_change: 8.25,
        price_change_percent: 0.81,
        last_updated: new Date().toISOString()
      },
      {
        metal_name: "Gold",
        pgm_name: "Gold",
        price: 2045.80,
        price_change: -5.20,
        price_change_percent: -0.25,
        last_updated: new Date().toISOString()
      },
      {
        metal_name: "Silver",
        pgm_name: "Silver",
        price: 24.67,
        price_change: 0.15,
        price_change_percent: 0.61,
        last_updated: new Date().toISOString()
      },
      {
        metal_name: "Rhodium",
        pgm_name: "Rhodium",
        price: 4850.00,
        price_change: -25.00,
        price_change_percent: -0.51,
        last_updated: new Date().toISOString()
      }
    ];

    console.log(`Returning ${metalPrices.length} metal price records`);
    res.status(200).json(metalPrices);
  } catch (error) {
    console.error('Error fetching metal prices:', error);
    res.status(500).json({ 
      message: 'Failed to fetch metal prices', 
      error: error.message 
    });
  }
}