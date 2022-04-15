### Exercícios introdução SQL
------------------------------------
***Exercício 1***

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

***Exercício 2***

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
***Exercício 3***

a) 
```sql
SELECT * FROM Actor WHERE gender = "female";
```
b) 
```sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
c) Retornou uma tabela com valores 'NULL', pois todos os campos
'gender' estão corretamente preenchidos.

d) 
```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500.000;
```
e) Não foi colocado ';' no final da query e foi passado 'nome' invés de 'name'.

***correção:***
```sql
SELECT id, name FROM Actor WHERE id = "002";
```
***Exercício 4***

a) Seleciona tudo da tabela 'Actor', onde 'name' comece com 'A' ou 'J' e 
'salary' seja maior que 300000.

b) 
```sql
SELECT * FROM Actor WHERE gender = "male" 
AND (name NOT LIKE "A%" AND salary > 350000);
```
c) 
```sql
SELECT * FROM Actor WHERE gender = "male"
AND (name LIKE "%G%" OR "%g%");
```
d) 
```sql
SELECT * FROM Actor WHERE gender = "male"
AND (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%")
AND (salary BETWEEN 350000 AND 900000);
```
***Exercício 5***

a)

```sql
CREATE TABLE Movie(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL  
);
```
b) 
```sql
INSERT INTO Movie(id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos
    e enfrentam a rotina do casamento. Um dia eles
    são atingidos por um fenômeno inexplicável
    e trocam de corpos",
    "2006-01-06",
    7
);
```

c) 
```sql
INSERT INTO Movie(id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
    A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
    empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais
    morar com ela",
    "2012-12-27",
    10
);
```
d)
```sql
INSERT INTO Movie(id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
    que só quer saber de farras e jogatina nas boates. A vida de abusos acaba
    por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```
e)
```sql
INSERT INTO Movie(id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "O Auto da Compadecida",
    "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), 
    um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais 
    covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam 
    por vários episódios enganando a todos do pequeno vilarejo de Taperoá,
    no sertão da Paraíba.",
    "2000-09-15",
    9.5
);
```
***Exercício 6***

a)
```sql
SELECT id, title, rating FROM Movie WHERE id = "004";
``` 
b)
```sql
SELECT * FROM Movie WHERE title = "O Auto da Compadecida";
``` 
c)
```sql
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```
***Exercício 7***

a) 
```sql
SELECT * FROM Movie WHERE title LIKE "%vida%";
```
b) 
```sql
SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
```
c)
```sql
SELECT * FROM Movie WHERE release_date < "2022-04-15";
```
d)
```sql
SELECT * FROM Movie WHERE release_date < "2022-04-15"
AND (title LIKE "%ela%" OR synopsis LIKE "%ela%")
AND rating > 7;
```
