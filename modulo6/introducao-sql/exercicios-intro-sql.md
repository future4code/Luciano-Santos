### Exercícios introdução SQL
------------------------------------
**Exercício 1**

```sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
a) CREATE TABLE - criar uma tabela; PRIMARY KEY - define que a coluna contém chaves primárias;
VARCHAR - para passar uma quantida de caracteres; NOT NULL - define que o campo não pode ser nulo; 
DATE - define que a coluna recebe valores do tipo data.

b) SHOW DATABASES - lista todos os bancos de dados;
SHOW TABLES - lista todas as tabelas.

C) DESCRIBE - exibe a estrutura da tabela.

**Exercício 2**

a)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
); 
```

b) Chave primária duplicada.

c) Faltou passar alguns campos como parâmetro.

Query corrigida:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d) Faltou passar o campo 'name'como parâmetro e passar o valor do campo 'name'.

Query corrigida:

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Luciano",
  400000,
  "1949-04-18", 
  "male"
);
```
e) O valor de birth_date não foi passado em aspas.

Query corrigida:

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"006",
    "Jão da Nica",
    100000,
    "1970-11-20",
    "male"
);
```
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"007",
    "Romário",
    100000,
    "1980-11-20",
    "male"
);
```