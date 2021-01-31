# esbuild_project

Este projeto é uma tentativa de opção ao famoso `create-react-app`.

Foi criado com a intenção de estudar possibilidades, diminuir quantidade de dependências e buscar mais controle sobre o build de aplicações em `React`.

No momento não possui builds separados de desenvolvimento e produção e **não possui Hot Reloading**.

Os papéis de algumas dependências:

- [esbuild](https://github.com/evanw/esbuild) gera o bundle da aplicação;
- [Polka](https://www.npmjs.com/package/polka) faz o papel do servidor que serve arquivos estáticos;
- [Chokidar](https://www.npmjs.com/package/chokidar) monitora alterações nos arquivos da pasta `src`;

## Executando o projeto

**Clone o repositório**

**Instale as dependências**
  - `yarn install`

**Execute o projeto**
  - `yarn serve`

**Visite o endereço:**
 - `http://localhost:3000`
