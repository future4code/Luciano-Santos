import { BaseDataBase } from "./BaseDataBase";

// Implementar erro.

export class Migrations extends BaseDataBase {
   public createTables() {
      Migrations
         .connection
         .raw(`
         CREATE TABLE IF NOT EXISTS labook_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         );

         CREATE TABLE IF NOT EXISTS labook_posts(
            id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            liked ENUM("true", "false") DEFAULT "false",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
         );

         CREATE TABLE IF NOT EXISTS labook_friendships(
            requesting_user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (requesting_user_id) REFERENCES labook_users (id),
            receiving_user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (receiving_user_id) REFERENCES labook_users (id)
         );
         `)
         .then(() => console.log("Tabelas criadas!"))
         .catch(() => console.log("Implementar erro!"));
   };
};

const connection = new Migrations();

connection.createTables();