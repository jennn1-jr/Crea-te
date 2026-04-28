-- Update Products Table dengan data yang benar sesuai hardcoded data
-- Script ini meng-update database untuk match dengan products-section.tsx

-- Pertama hapus data lama
TRUNCATE TABLE products;

-- Insert data yang benar (Produk baru, belum ada yang beli)
INSERT INTO products (name, tier, price, price_min, price_max, description, features, created_at) VALUES

-- Basic Tier
(
  'Boneka Karakter Basic',
  'Basic',
  '30000',
  '30000',
  '30000',
  'Gantungan kunci mini dengan desain karakter standar',
  'Gantungan kunci mini,Desain karakter standar,Kain perca polos,1 warna tinta tekstil,Packaging sederhana',
  NOW()
),

-- Medium Tier
(
  'Boneka Karakter Medium',
  'Medium',
  NULL,
  '35000',
  '40000',
  'Boneka gantungan kunci 2-in-1 dengan custom karakter pilihan',
  'Boneka gantungan kunci 2-in-1,Custom karakter pilihan,Kain perca bermotif,2-3 warna tinta tekstil,Detail benang 3D rambut,Teknik sasak pinggiran,Packaging premium',
  NOW()
),

-- Premium Tier
(
  'Boneka Karakter Premium',
  'Premium',
  '45000',
  '45000',
  '45000',
  'Boneka gantungan kunci full custom dengan design eksklusif dan nama personal',
  'Boneka gantungan kunci 2-in-1 full custom,Desain eksklusif + nama personal,Kain premium pilihan konveksi,Multi-warna tinta tekstil,Detail benang 3D rambut premium,Teknik sasak + hiasan tambahan,Gantungan logam premium,Packaging gift box eksklusif,Kartu ucapan handmade',
  NOW()
);

-- Verify hasil update
SELECT * FROM products ORDER BY 
  CASE tier 
    WHEN 'Basic' THEN 1 
    WHEN 'Medium' THEN 2 
    WHEN 'Premium' THEN 3 
  END;
