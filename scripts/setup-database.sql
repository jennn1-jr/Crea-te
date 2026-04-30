-- Create Crea'Te Database
CREATE TABLE IF NOT EXISTS projects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  problem TEXT,
  solution TEXT,
  positioningStatement VARCHAR(500),
  targetMarket TEXT,
  budget INT,
  timeline VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS team_members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  nim VARCHAR(20),
  role VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(20),
  photo_url VARCHAR(500),
  bio TEXT,
  responsibilities TEXT,
  github_url VARCHAR(255),
  instagram_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  tier VARCHAR(50),
  price INT,
  description TEXT,
  features TEXT,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255),
  phone VARCHAR(20),
  address TEXT,
  instagram VARCHAR(100),
  tiktok_url VARCHAR(255),
  whatsapp_url VARCHAR(255),
  city VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Crea'Te Project Data (SESUAI PROPOSAL)
INSERT INTO projects (name, description, category, problem, solution, positioningStatement, targetMarket, budget, timeline) VALUES
(
  'Crea\'Te - Aksesori Handmade dari Limbah Kain Perca',
  'Kerajinan Boneka dan Aksesoris Karakter dari Kain Daur Ulang dengan Custom Art. Platform yang menggabungkan kreativitas seni, personalisasi produk, serta kepedulian terhadap lingkungan melalui konsep upcycling limbah kain perca menjadi aksesori handmade modular 2-in-1 (gantungan kunci dan boneka).',
  'Industri Kreatif & Sustainability',
  'Limbah tekstil dan busana terus meningkat dan seringkali berakhir di Tempat Pembuangan Akhir (TPA) tanpa dimanfaatkan. Sisa kain perca dari penjahit dan konveksi tidak termanfaatkan. Generasi Z mencari produk unik, personal, dan ramah lingkungan, namun produsen massal hanya menawarkan aksesoris plastik dengan eksklusivitas rendah.',
  'Mengolah limbah kain perca melalui konsep upcycling menjadi aksesori handmade modular 2-in-1 dengan lukisan manual custom art, teknik sasak artistik pada tepian, dan detail benang 3D berlapis. Kerjasama dengan pengrajin lokal dan konveksi untuk bahan baku limbah kain. Sistem pre-order untuk eksklusivitas dan mencegah stok berlebih.',
  'Your Personality, Hand-Painted on Fabric. Wearable art eksklusif dari limbah perca dengan teknik lukis tangan dan sentuhan artistik unik yang personal untuk setiap pembeli.',
  'Pelajar dan mahasiswa Gen Z (usia 15-25 tahun), penggemar fandom/anime/seni yang memiliki kesadaran lingkungan, mencari merchandise personal dan unik, aktif di TikTok dan Instagram.',
  1500000,
  '6 bulan'
);

-- Insert Team Members Data (SESUAI PROPOSAL CREA'TE)
INSERT INTO team_members (name, nim, role, email, phone, photo_url, bio, responsibilities) VALUES
(
  'Mia Audina Ika Aprilani',
  '25051204344',
  'Lead Designer',
  '25051204344@mhs.unesa.ac.id',
  '081230594669',
  '/team/mia.jpg',
  'Pemimpin kreatif yang menggambar custom art karakter pada kain dengan detail dan ekspresi akurat.',
  'Menggambar custom art karakter, merancang inovasi desain produk, mengelola database inventori dan pesanan.'
),
(
  'Jenar Aditiya Bagaskara',
  '25051204347',
  'Manajer Pemasaran & Keuangan',
  'jenar@create.arts',
  '081234567890',
  '/team/jenar.jpg',
  'Mengelola strategi pemasaran digital dan operasional keuangan Crea\'Te.',
  'Mengelola media sosial (TikTok, Instagram, WhatsApp), menyusun laporan arus kas, mengatur jadwal pre-order dan promosi.'
),
(
  'Muhammad Noor Abizar',
  '25051204351',
  'Manajer Produksi',
  'noor@create.arts',
  '082345678901',
  '/team/noor.jpg',
  'Bertanggung jawab atas kelancaran dan kualitas proses produksi setiap produk.',
  'Mengelola proses produksi: pemotongan pola, teknik sasak, pengisian dakron, pemasangan ring, quality control, dan packaging.'
);

-- Insert Crea'Te Product Tiers (SESUAI PROPOSAL)
INSERT INTO products (name, tier, price, description, features, image_url) VALUES
(
  'Boneka Custom Karakter - Basic Tier',
  'Basic',
  30000,
  'Boneka gantungan kunci dengan lukisan custom karakter fokus bagian wajah hingga leher dan pundak.',
  'Lukisan wajah custom dengan tinta tekstil, teknik sasak di pinggiran kain, detail benang 3D untuk rambut, modular 2-in-1 (gantungan kunci + boneka), dari kain daur ulang',
  '/products/basic.jpg'
),
(
  'Boneka Custom Karakter - Medium Tier',
  'Medium',
  37500,
  'Boneka gantungan kunci dengan lukisan karakter setengah badan atau full body dengan desain sederhana namun detail.',
  'Lukisan setengah badan/full body custom, desain sederhana dengan detail bagus, teknik sasak artistik di pinggiran, benang tebal berlapis 3D, modular 2-in-1, upcycled fabric',
  '/products/medium.jpg'
),
(
  'Boneka Custom Karakter - Premium Tier',
  'Premium',
  45000,
  'Boneka gantungan kunci dengan lukisan karakter full body dengan detail kompleks dan ekspresi wajah akurat sesuai referensi.',
  'Lukisan full body dengan detail kompleks, akurasi ilustrasi dan ekspresi wajah tinggi, teknik sasak premium, benang 3D detail rambut berlapis, modular design luxury, 100% eco-friendly kain perca',
  '/products/premium.jpg'
);

-- Insert Contact Info (SESUAI PROPOSAL CREA'TE)
INSERT INTO contacts (email, phone, address, instagram, city, tiktok_url, whatsapp_url) VALUES
(
  'createartsh@gmail.com',
  '081230594669',
  'Jalan Wide Raya, RT 02/RW 01, Ds. Sidowayah, Kec. Panekan, Magetan',
  '@create.arts',
  'Magetan',
  'https://www.tiktok.com/@createartss',
  'https://wa.me/6281230594669'
);
