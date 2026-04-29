-- Populate 4 promo flyers
TRUNCATE TABLE flyers;

INSERT INTO flyers (image_url, title, subtitle, `order`) VALUES
('/assets/basic.jpg', 'Basic Tier Promo', 'Simple yet stylish starter pack', 1),
('/assets/medium.jpg', 'Medium Tier', 'Add personality with more details', 2),
('/assets/premium.jpg', 'Premium Tier', 'Full custom luxury experience', 3),
('/assets/packaging.jpg', 'Ready to Gift', 'Premium packaging included', 4);

SELECT * FROM flyers ORDER BY `order`;
