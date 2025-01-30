# AluraDocs: Comunicação em tempo real com Socket.IO e MongoDB



AluraDocs é um aplicativo web organizador de resumos e informações de documentos para temas diversos, que permite adicionar, armazenar, editar e excluir as informações em tempo real.

## 🔨 Funcionalidades do projeto

`Cadastro de usuários`: Permite cadastrar usuários ao banco de dados com senhas criptografadas.

`Login de usuários`: Permite realizar o controle de acesso a partir da autenticação dos usuários cadastrados pelo login. 

`Adição de documentos`: Permite adicionar novos documentos à lista.

`Edição de documentos`: Permite editar o conteúdo dos documentos em tempo real em qualquer dispositivo.

`Listagem de documentos`: Exibe os documentos e seus conteúdos salvos, buscados através de banco de dados.

`Exclusão de documentos`: Permite remover documentos da lista, gerando alerta para quem estiver na sala, e atualizando instantaneamente.


## ✔️ Técnicas e tecnologias utilizadas

* Node.js, Plataforma utilizada para executar o ambiente de desenvolvimento.
* JavaScript: Linguagem de programação utilizada para desenvolver a lógica do aplicativo.
* Implementação do protocolo WebSockets com o Socket.io
* Utilização do Express
* Banco de dados NoSQL MongoDB pelos Atlas
* Ferramenta nodemon
* Ferramenta Dotenv para proteção de dados sensíveis
* Geração de JWT armazenados em cookies
* Middlewares para verificar a autenticidade do cliente
* Namespace utilizado para registrar os middlewares
  
![index](https://github.com/user-attachments/assets/45234b7f-57f2-448f-9039-431e1200f5bd)

![docs](https://github.com/user-attachments/assets/cb0a9bac-4650-43fa-8b82-51e79e3f6812)

![cadastro](https://github.com/user-attachments/assets/a83286ea-df1f-4a42-945f-06331bff8449)

![login](https://github.com/user-attachments/assets/6f79d558-a436-4977-af73-681d5b546619)



Projeto realizado no curso da Alura
