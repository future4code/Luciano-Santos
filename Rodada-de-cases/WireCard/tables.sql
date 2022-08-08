CREATE TABLE IF NOT EXISTS Buyer (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(40) NOT NULL,
    CPF VARCHAR(14) NOT NULL
);

CREATE TABLE IF NOT EXISTS Card (
    id VARCHAR(255) PRIMARY KEY,
    card_holder_name VARCHAR(60) NOT NULL,
    card_number VARCHAR(19) NOT NULL,
    card_expiration_date VARCHAR(5) NOT NULL,
    card_CVV VARCHAR(3) NOT NULL,
    buyer_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES Buyer(id)
);

CREATE TABLE IF NOT EXISTS Payment (
    id VARCHAR(255) PRIMARY KEY,
    amount FLOAT NOT NULL,
    type ENUM('Credit Card', 'Boleto') NOT NULL,
    buyer_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES Buyer(id)
);

DESCRIBE Buyer;
DESCRIBE Card;
DESCRIBE Payment;

DROP TABLE Buyer;
DROP TABLE Card;
DROP TABLE Payment;