CREATE DATABASE IF NOT EXISTS formulators_lab;
USE formulators_lab;

CREATE TABLE IF NOT EXISTS formulators (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    focus_area VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);