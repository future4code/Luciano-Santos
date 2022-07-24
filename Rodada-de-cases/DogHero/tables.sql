CREATE TABLE IF NOT EXISTS DogWalking (
    id VARCHAR(255) PRIMARY KEY,
    status ENUM("FINALIZADO", "EM ANDAMENTO", "AGENDADO") DEFAULT "AGENDADO",
    schedule_date DATE NOT NULL,
    price FLOAT NOT NULL,
    duration ENUM("30", "60") NOT NULL,
    latitude INT NOT NULL,
    longitude INT NOT NULL,
    pets INT NOT NULL,
    start_time FLOAT NOT NULL,
    end_time FLOAT NOT NULL
);

DESCRIBE DogWalking;
DROP TABLE DogWalking;