# **esbuild_project**
## **Sobre o projeto**

Este projeto é uma tentativa de opção ao famoso `create-react-app`.

Foi criado com a intenção de estudar possibilidades, diminuir quantidade de dependências e buscar mais controle sobre o build de aplicações em `React`.

No momento não possui builds separados de desenvolvimento e produção e **não possui Hot Reloading**.

![](https://img.shields.io/github/repo-size/felipexperto/esbuild_cra)
![](https://img.shields.io/tokei/lines/github/felipexperto/esbuild_cra)
![](https://img.shields.io/github/languages/count/felipexperto/esbuild_cra)
![](https://img.shields.io/github/languages/top/felipexperto/esbuild_cra)

![](https://img.shields.io/github/license/felipexperto/esbuild_cra)
![](https://img.shields.io/github/package-json/v/felipexperto/esbuild_cra)
![](https://img.shields.io/github/last-commit/felipexperto/esbuild_cra)

## **Tecnologias**

Os papéis de algumas dependências:

- [React](https://pt-br.reactjs.org/) & [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html) são as bibliotecas de componentes;
- [Styled Components](https://styled-components.com/) para escrever CSS-in-JS;
- [PropTypes](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html) para typechecking;
- [esbuild](https://github.com/evanw/esbuild) gera o bundle da aplicação;
- [Polka](https://www.npmjs.com/package/polka) faz o papel do servidor que serve arquivos estáticos;
- [Chokidar](https://www.npmjs.com/package/chokidar) monitora alterações nos arquivos da pasta `src`;
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para efetuar testes unitários em componentes React;
- [Husky versão 4](https://github.com/typicode/husky) + [Lint Staged](https://github.com/okonet/lint-staged) para rodar Prettier, lint e testes unitários nos arquivos em stage ( `git add .` ) ao executar `git commit`, buscando diminuir a quantidade de commits com erros 💩
- [eslint](https://eslint.org/) + [prettier](https://prettier.io/) para manter um padrão e boas práticas na escrita do código;

## **Como utilizar**
### **Executando o projeto**

1. Clone o repositório

2. Instale as dependências:
    - `yarn install`

3. Execute o projeto:
    - `yarn serve`

4. Visite o endereço:
    - `http://localhost:3000`

### **Testes**

- Rodar testes unitários
  - `yarn unit`

- Exibir estatísticas de cobertura de testes unitários
  - `yarn coverage`

### **Linters**

- Rodando Prettier para formatar seu código de maneira consistente seguindo um estilo:
  - `yarn prettier:fix`

- Rodando Prettier para verificar se existem arquivos fora do estilo estabelecido:
  - `yarn prettier:check`

- Rodando a verificação do eslint para todos os arquivos .js procurando más práticas:
  - `yarn lint`

- Rodando o eslint para tentar corrigir pequenos problemas, como warnings:
  - `yarn lint:fix`
