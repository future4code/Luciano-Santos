### Exercícios aprofundamento SQL.

***Exercício 1***

a) Altera a tabela 'Actor', deletando a coluna 'salary'.

b) Altera a tabela 'Actor', redeclarando a coluna 'gender'
para 'sex', mantendo o seu tipo.

c) Altera a tabela 'Actor', redeclarando a coluna 'gender', 
mantendo seu nome e tipo, mas aumentando a quantidade de 
caracteres suportados.

d) 
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
***Exercício 2***

a) 
```sql
UPDATE Actor 
SET name = "Fernanda M.",
birth_date = "1930-10-19"
WHERE id = "003";
```
b) 

```sql
UPDATE Actor 
SET name = UPPER(name)
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```
c) 
```sql
UPDATE Actor
SET name = "Will Smith",
salary = 250000000,
birth_date = "1968-09-25",
gender = "male"
WHERE id = "005";
```
d) Coluna desconhecida, entre a lista de campos. 

***Exercício 3***

a)
```sql
DELETE FROM Actor WHERE name = "Fernanda M.";
```
b) 
```sql
DELETE FROM Actor WHERE gender = "male"
AND salary > 1000000;
```
***Exercício 4***

a) 
```sql
SELECT MAX(salary) FROM Actor;
```
b)
```sql
SELECT MIN(salary) FROM Actor 
WHERE gender = "female";
```
c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d)
```sql
SELECT SUM(salary) FROM Actor;
```
***Exercício 5***

a) Agrupou a quantidade pela coluna 'gender', somando
a quantidade de 'male' e 'female'.

b) 
```sql
SELECT id, name FROM Actor
WHERE gender = "male" 
ORDER BY name DESC;
```
c)
```sql
SELECT * FROM Actor 
WHERE gender = "male"
ORDER BY salary ASC;
```
d)
```sql
SELECT * FROM Actor 
WHERE gender = "male"
ORDER BY salary DESC LIMIT 3;
```
e)
```sql
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```
***Exercício 6***

a)
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;
```
c)
```sql
UPDATE Movie 
SET playing_limit_date = "2022-04-16"
WHERE id = "001";

UPDATE Movie 
SET playing_limit_date = "2022-04-14"
WHERE id = "002";
```
d) Não existe uma linha com o parâmetro informado!

### Desafios

***Exercício 7***

a)
```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
b)
```sql
SELECT AVG(rating) FROM Movie;
```
c)
```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date >= CURDATE();
```
d)
```sql
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
e)
```sql
SELECT MAX(rating) FROM Movie;
```
f)
```sql
SELECT MIN(rating) FROM Movie;
```

***Exercício 8***

a)
```sql
SELECT * FROM Movie
ORDER BY title ASC;
```
b)
```sql
SELECT * FROM Movie
ORDER BY title DESC LIMIT 5;
```
c)
```sql
SELECT * FROM Movie
WHERE release_date < CURDATE() 
ORDER BY release_date DESC LIMIT 3;
```
d)
```sql
SELECT * FROM Movie
ORDER BY rating DESC LIMIT 3;
```
