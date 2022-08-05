CREATE TABLE IF NOT EXISTS Card (   
    id VARCHAR(255) PRIMARY KEY,
    card_holder_name VARCHAR(255) NOT NULL,
    card_number VARCHAR(255) NOT NULL,
    card_expiration_date VARCHAR(255) NOT NULL,
    card_CVV INT NOT NULL
);