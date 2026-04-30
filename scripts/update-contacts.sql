-- Update contacts table with correct data
-- Run this if your database already exists

-- Update contact with correct email
UPDATE contacts 
SET 
  email = 'createartsh@gmail.com',
  phone = '081230594669',
  address = 'Jalan Wide Raya, RT 02/RW 01, Ds. Sidowayah, Kec. Panekan, Magetan',
  city = 'Magetan',
  tiktok_url = 'https://www.tiktok.com/@createartss',
  whatsapp_url = 'https://wa.me/6281230594669'
WHERE id = 1;

-- If no row exists, insert it
INSERT INTO contacts (email, phone, address, instagram, city, tiktok_url, whatsapp_url)
SELECT 
  'createartsh@gmail.com',
  '081230594669',
  'Jalan Wide Raya, RT 02/RW 01, Ds. Sidowayah, Kec. Panekan, Magetan',
  'Magetan',
  'https://www.tiktok.com/@createartss',
  'https://wa.me/6281230594669'
WHERE NOT EXISTS (SELECT 1 FROM contacts WHERE id = 1);

