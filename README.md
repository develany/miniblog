# Mini Blog - README 😊📝

![Mini Blog](/public/miniblog.png)

## Descrição do Projeto 📝

Este é um projeto de um Mini Blog construído com as tecnologias React, Firebase, Firestore e React Router Dom. O objetivo deste mini blog é permitir que os usuários façam login, cadastrem-se, criem e editem seus próprios posts. Além disso, eles podem visualizar os seus posts e de outros usuários, também é possível realizar buscas por posts usando as tags dos posts.

## Funcionalidades Principais 🚀

- **Login e Cadastro:** Os usuários podem se autenticar usando um endereço de e-mail e senha existentes ou criar uma nova conta para acessar o mini blog.

- **Criação e Edição de Posts:** Os usuários autenticados podem criar novos posts e editar os posts que criaram anteriormente.

- **Visualização de Posts:** Os usuários podem visualizar todos os posts criados por eles e pelos outros usuários. Os posts são exibidos em ordem cronológica com o mais recente primeiro.

- **Busca por Tags:** Os usuários podem pesquisar por posts usando tags. As tags são palavras-chave associadas ao início de cada post, permitindo que os usuários encontrem rapidamente posts relacionados a um determinado tópico.

## Pré-requisitos 🛠️

Antes de executar o projeto localmente, certifique-se de ter instalado o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) em sua máquina.

## Configuração e Instalação ⚙️

1. Clone o repositório do Mini Blog:

   - git clone https://github.com/develany/miniblog.git
   - cd miniblog

2. Instale as dependências do projeto:
   
   - npm install

4. Configuração do Firebase:

   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Crie um novo aplicativo da web no console do Firebase.
   - Copie as configurações do SDK do Firebase (apiKey, authDomain, projectId, etc.) e substitua as informações em `src/config/firebase.js`.

5. Executando o projeto:

    - npm start

  Isso iniciará o servidor de desenvolvimento e abrirá o mini blog em seu navegador padrão em `http://localhost:3000`.

## Estrutura do Projeto 📁

- `src/components`: Contém os componentes reutilizáveis do React utilizados em diferentes partes do projeto.
- `src/firebase`: Contém as configurações do Firebase.
- `src/hooks`: Contém os hooks customizados criados para este projeto.
- `src/pages`: Cada arquivo nesta pasta representa uma página do mini blog.
- `src/App.js`: Componente raiz que define as rotas do aplicativo.
- `src/index.js`: Ponto de entrada do aplicativo React.

## Bibliotecas e Pacotes Utilizados 📚

- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [React Router Dom](https://reactrouter.com/): Biblioteca de roteamento para navegação entre páginas.
- [Firebase](https://firebase.google.com/): Plataforma de desenvolvimento de aplicativos web da Google que fornece diversos recursos, incluindo autenticação de usuários e banco de dados em tempo real (Firestore).

## Contribuição 🤝

Contribuições são bem-vindas! Se você encontrar problemas, tiver sugestões ou desejar adicionar novos recursos ao mini blog, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença 📄

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

---
