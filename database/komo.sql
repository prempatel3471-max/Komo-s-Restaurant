CREATE DATABASE IF NOT EXISTS komo_restaurant CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE komo_restaurant;

CREATE TABLE IF NOT EXISTS menu_items (
    id INT PRIMARY KEY,
    name VARCHAR(180) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(80) NOT NULL,
    is_available TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS orders (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(40) NOT NULL UNIQUE,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    order_type ENUM('Dine-In','Takeaway','Delivery') NOT NULL,
    table_number VARCHAR(30) NULL,
    delivery_address TEXT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    gst DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(40) NOT NULL DEFAULT 'Pending Payment',
    payment_status VARCHAR(30) NOT NULL DEFAULT 'Pending',
    paid_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_orders_status (status),
    INDEX idx_orders_payment (payment_status),
    INDEX idx_orders_created (created_at)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS order_items (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT UNSIGNED NOT NULL,
    menu_item_id INT NOT NULL,
    item_name VARCHAR(180) NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    line_total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    INDEX idx_order_items_order (order_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS payments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT UNSIGNED NOT NULL,
    transaction_id VARCHAR(80) NOT NULL UNIQUE,
    payment_method ENUM('UPI','Card','Cash') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'Paid',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_payments_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    INDEX idx_payments_order (order_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS reservations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    reservation_number VARCHAR(40) NOT NULL UNIQUE,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    guests INT NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_reservations_date (reservation_date),
    INDEX idx_reservations_status (status)
) ENGINE=InnoDB;

INSERT INTO menu_items (id, name, price, category) VALUES
(1, 'Truffle Edamame Chestnut Dumplings', 550, 'sushi-dimsum'),
(2, 'Hunan Veggie Stuffed Dumplings', 550, 'sushi-dimsum'),
(3, 'Teriyaki Tempura Sushi', 600, 'sushi-dimsum'),
(4, 'Thai Pav Bhaji Ki Chaat', 350, 'chaats'),
(5, 'Palak Patte Ki Chaat', 500, 'chaats'),
(6, 'Paneer Makhna Khatta Pyaz', 500, 'paneer'),
(7, 'Delhi Style Butter Masala', 500, 'paneer'),
(8, 'Paneer Tikka Kalimirch Masala', 520, 'paneer'),
(9, 'Corn Palak Masala', 520, 'veggies'),
(10, 'Spicy Kaju Curry', 520, 'veggies'),
(11, 'Three Cheese Mushroom Pizza', 590, 'pizza'),
(12, 'Spaghetti Marinara', 550, 'pizza'),
(13, 'Sriracha Paneer Tikka Pizza', 590, 'pizza'),
(14, 'Fiery Dragon Plate Sizzler', 750, 'global'),
(15, 'Paneer Shawarma Platter', 650, 'global'),
(16, 'Stuffed Chur Chur Naan', 100, 'breads'),
(17, 'Cheese Chilli Garlic Naan', 200, 'breads'),
(18, 'Three Fruit Fizz', 270, 'soups-beverages'),
(19, 'Passion Fruit Mint Mojito', 270, 'soups-beverages')
ON DUPLICATE KEY UPDATE name=VALUES(name), price=VALUES(price), category=VALUES(category);
