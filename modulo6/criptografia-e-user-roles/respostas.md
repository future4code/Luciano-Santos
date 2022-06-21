# Exercícios Aula criptografia
### Exercício 1

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

R: Round é custo, que vai definir o nível de segurança, quanto maior esse número, mais seguro é.
Porém quanto maior for o round, maior é o tempo de processamento. 

Salt é o que vai gerar uma string aleatória para compor a senha criptografada. 

Utilizarei 12, conforme recomendado e por ser um valor relativamente seguro e de rápido processamento. 

### Exercício 2

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

R: O cadastro, é necessário ter a senha criptografada salva no banco de dados e não em plaintext.

d) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

R: Não, neste caso o usuário já estaria autenticado e teria acesso ao token necessário para pegar o profile.

# Exercícios Aula Autorização e user roles

### Exercício 1