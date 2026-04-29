CREATE TABLE IF NOT EXISTS flyers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  subtitle TEXT,
  `order` INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT 'Flyers table ready' as status;
