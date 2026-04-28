-- Create Gallery Table untuk Portfolio
CREATE TABLE IF NOT EXISTS gallery (
  id INT PRIMARY KEY AUTO_INCREMENT,
  src VARCHAR(255) NOT NULL,
  alt TEXT NOT NULL,
  caption VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Gallery Items (Hardcoded data dari GallerySection)
INSERT INTO gallery (src, alt, caption, category, created_at) VALUES
('assets/basic-1.jpg', 'Custom Boneka Gantungan Kunci - Basic Tier', 'Custom Boneka Gantungan Kunci', 'Basic', NOW()),
('assets/medium-1.jpg', 'Boneka Gantungan Kunci Medium - Custom Art', 'Medium Tier - Custom Art', 'Medium', NOW()),
('assets/premium.jpg', 'Premium Boneka Full Custom', 'Premium Tier - Full Custom', 'Premium', NOW()),
('assets/proses-1.jpg', 'Detail Lukisan Tangan pada Kain', 'Detail Lukisan Tangan', 'Proses', NOW()),
('assets/proses-2.jpg', 'Teknik Sasak Pinggiran Kain', 'Teknik Sasak Artistik', 'Proses', NOW()),
('assets/premium-2.jpg', 'Packaging Gift Box Eksklusif', 'Packaging Gift Box', 'Premium', NOW());

-- Verify
SELECT * FROM gallery ORDER BY created_at DESC;
