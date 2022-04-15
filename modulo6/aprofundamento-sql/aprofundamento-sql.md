***Exercício 1***

a) A query fará a exclusão da coluna 'salary' da tabela 'Actor'.

b) A query muda a coluna 'gender' da tabela 'Actor' para 'sex' do tipo VARCHAR.

c) A query muda/redeclara a coluna 'gender' com o tipo VARCHAR(255).

d)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
***Exercício 2***

a) 
```sql
UPDATE Actor 
SET 
name = "Daiana Oliveira", 
birth_date = "1996-06-04" 
WHERE id = "003";
```
b) 
```sql
UPDATE Actor 
SET name = UPPER(name)
WHERE name= "Juliana Paes";
```
```sql
UPDATE Actor 
SET name = "Juliana Paes"
WHERE name= "JULIANA PAES";
```
c)

```sql
UPDATE Actor
SET 
name = "Angelina Jolie",
salary = "25000000",
birth_date = "1981-01-22",
gender = "female"
WHERE id = "005";
```
d) Coluna desconhecida, entre a lista de campos. 