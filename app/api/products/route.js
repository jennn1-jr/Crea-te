import { query } from '@/lib/db';

// Color configs untuk setiap tier
const tierColors = {
  'Basic': {
    color: 'from-[oklch(0.66_0.07_140)] to-[oklch(0.60_0.09_135)]',
    textColor: 'text-[oklch(0.40_0.06_140)]',
    bgLight: 'bg-[oklch(0.66_0.07_140/0.08)]',
    borderHover: 'hover:border-[oklch(0.66_0.07_140/0.5)]',
    shadowColor: 'hover:shadow-[oklch(0.66_0.07_140/0.15)]'
  },
  'Medium': {
    color: 'from-[oklch(0.68_0.13_55)] to-[oklch(0.62_0.15_48)]',
    textColor: 'text-[oklch(0.45_0.10_50)]',
    bgLight: 'bg-[oklch(0.68_0.13_55/0.08)]',
    borderHover: 'hover:border-[oklch(0.68_0.13_55/0.5)]',
    shadowColor: 'hover:shadow-[oklch(0.68_0.13_55/0.15)]'
  },
  'Premium': {
    color: 'from-[oklch(0.58_0.15_40)] to-[oklch(0.50_0.17_35)]',
    textColor: 'text-[oklch(0.35_0.10_38)]',
    bgLight: 'bg-[oklch(0.58_0.15_40/0.08)]',
    borderHover: 'hover:border-[oklch(0.58_0.15_40/0.5)]',
    shadowColor: 'hover:shadow-[oklch(0.58_0.15_40/0.15)]'
  }
};

export async function GET() {
  try {
    const results = await query(`
      SELECT 
        id,
        name,
        tier,
        price,
        price_min,
        price_max,
        description,
        features,
        created_at
      FROM products 
      ORDER BY 
        CASE tier 
          WHEN 'Basic' THEN 1 
          WHEN 'Medium' THEN 2 
          WHEN 'Premium' THEN 3 
        END ASC
    `);

    // Format data untuk frontend
    const products = results.map(product => ({
      id: product.id,
      name: product.name,
      tier: product.tier,
      price: product.price,
      priceMin: product.price_min,
      priceMax: product.price_max,
      description: product.description,
      icon: 'Sparkles', // Default icon untuk semua tier
      features: product.features ? product.features.split(',').map(f => f.trim()) : [],
      popular: false, // Default false untuk produk baru
      ...tierColors[product.tier] || tierColors['Basic']
    }));

    return Response.json(products);
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
