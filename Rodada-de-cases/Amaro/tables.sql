CREATE TABLE IF NOT EXISTS Products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    price FLOAT NOT NULL,
    tags VARCHAR(255) NOT NUll
);

DROP TABLE Products;