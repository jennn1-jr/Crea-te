-- Update contacts table with correct data from hardcoded frontend
-- Run this if your database already exists (migration)

-- 1. Add new columns if not exist
ALTER TABLE contacts 
  ADD COLUMN IF NOT EXISTS tiktok_url VARCHAR(255) AFTER instagram,
  ADD COLUMN IF NOT EXISTS whatsapp_url VARCHAR(255) AFTER tiktok_url;

-- 2. Update with correct data (source of truth = hardcoded frontend values)
UPDATE contacts 
SET 
  email = '25051204344@mhs.unesa.ac.id',
  phone = '081230594669',
  address: "Jalan Wide Raya, RT 02/RW 01, Ds. Sidowayah, Kec. Panekan, Magetan",
  city: "Magetan",
  tiktok_url = 'https://www.tiktok.com/@createartss',
  whatsapp_url = 'https://wa.me/6281230594669'
WHERE id = 1;

-- If no row exists, insert it
INSERT INTO contacts (email, phone, address, instagram, city, tiktok_url, whatsapp_url)
SELECT 
  '25051204344@mhs.unesa.ac.id',
  '081230594669',
  'Jalan Wide Raya, RT 02/RW 01, Ds. Sidowayah, Kec. Panekan, Magetan',
  'Magetan',
  'https://www.tiktok.com/@createartss',
  'https://wa.me/6281230594669'
WHERE NOT EXISTS (SELECT 1 FROM contacts WHERE id = 1);

