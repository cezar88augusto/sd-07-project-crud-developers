# Teste Técnico
Desenvolva uma API que será consumida por um front-end.

• Essa API deve fazer a gestão de cadastros de pessoas desenvolvedoras.
No cadastro da pessoa dev, devem ser cadastrados e gravados em uma banco de dados
relacional os seguintes itens abaixo:
• Nome da pessoa dev, com no máximo 120 caracteres
• Telefone Fixo (opcional)
• Telefone Celular
• Endereço através de um CEP Formatado (00000-000)
- Retornar todos os dados de endereço da pessoa cliente que devem ser gravados no
banco.Ao cadastrar o CEP, deve ser feita uma requisição via XHR para a API dos
correios
• Especialidade da pessoa dev (no mínimo duas linguagens)
- Cadastrar as seguintes linguagens no banco: JAVA, PYTHON, JAVASCRIPT, GOLANG,
CSHARP e ELIXIR

# Itens obrigatórios:
• O sistema deve suportar as seguintes operações: Insert, Update, Select e Delete.
• Realizar pesquisas por todos os campos do cadastro da pessoa dev, inclusive endereço.
• Listar todas as pessoas devs que possuem determinada linguagem (informada como
parâmetro) como especialidade.
• Estar no padrão REST.
• Utilizar alguma ferramenta de validação (exemplo, YUP).
• Escrever apenas funções especializadas (Realizam somente uma operação).
• Utilizar o Swagger para documentação.
• Criar os testes unitários.
• Implementar o código de forma limpa (clean code).
• Realizar o deploy em qualquer serviço de cloud (Heroku, AWS, Azure, etc.).
• Utilizar o GIT(commits descritivos).

# Itens não obrigatórios:
• O desenvolvimento do front-end é opcional.
Ferramentas para serem utilizadas no desenvolvimento:

A solução deve ser desenvolvida em Node.js e seguir as orientações abaixo:
• Sequelize ou TypeORM
• Express.js
• Migrations e Seeds
• React ou HTML e CSS

# Diferenciais:
• Docker
• Testes de Integração
• AWS (ECS, RDS)
• Estruturação de Banco de dados MySQL
• Filas (RabbitMQ ou SQS)

# Bônus:
Como você otimizaria a performance dessa API? Raciocine e deixe a sugestão no README do projeto.
**Resposta:**
Melhorando a modelagem do banco de dados: Incluindo uma tabela específica para endereços.
Utilizando o localStorage e cache para que o tempo de resposta de requisições seja mais rápido.

#Input/Output:
• Exemplo de chamada à API:
curl https://localhost:8080/developer
• Exemplo de retorno:
[{
“nome”: “Fulano”,
“telefone”: “9999999999”,
“celular”: “99999999999”,
“endereco”: “dados retornados da api dos Correios”,
“especialidade”: [“PYTHON”, “GOLANG”]
},
{
“nome”: “Ciclano”,
“telefone”: “8888888888”,
“celular”: “88888888888”,
“endereco”: “dados retornados da api dos Correios”,
“especial
idade”: [“ELIXIR”, “JAVA”]
}]

# Tempo estimado de desenvolvimento:
• 16 horas

# Entrega:
• O link do repositório no github deve ser enviado para o email:
luiz.roque@betrybe.com

