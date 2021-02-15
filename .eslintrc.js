// ESLint docs -- Configuring ESLint:      https://eslint.org/docs/user-guide/configuring
// ESLint docs -- List of available rules: https://eslint.org/docs/rules/

module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "allowImportEverywhere": true,
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
  ],
  "rules": {
    "prettier/prettier": "error",
    // regras adicionais
    "jsx-a11y/href-no-hash": "off", // permite hrefs com hash
    "jsx-a11y/label-has-for": "off", // permite labels sem attr 'for'
    "jsx-a11y/label-has-associated-control": 0, // permite label sem envelopar um elemento
    "react/require-default-props": 0, // desabilita a necessidade de defaultProps para props sem required
    "react/default-props-match-prop-types": 0, // permite passar valor pra prop em defaultProps mesmo sendo required
    "react/jsx-filename-extension": "off", // permite a criação de arquivos .js
    "react/forbid-prop-types": "off", // permite uso de "any" numa propType ao invés de tipo definido como 'array', 'string', 'func', 'boolean'
    "import/prefer-default-export": "off", // permite utilizar export sem "default" dentro de um módulo mesmo que só haja um componente exportado
    "eqeqeq": 1, // obriga o uso de === e !==
    "no-eval": 1, // bloqueia o uso de eval()
    "no-trailing-spaces": 1, // não permite espaços desnecessários ao final de cada linha
    "no-mixed-spaces-and-tabs": 1, // não permite indentação com espaços e tabs misturados
    "indent": [
      "error", 2 // indentação com 2 espaços
    ],
    "eol-last": 1, // obriga nova linha vazia ao final do arquivo
    "spaced-comment": 1, // obriga um espaço após os símbolos de comentário // e /*
    "arrow-spacing": 1, // obriga uso de espaço antes e depois da seta na arrow function: () => {}
    "max-len": [ // configurações de max-length
      "error",
      {
        "code": 140, // 140 linhas pra código
        "tabWidth": 2, // tabwidth de 2 espaços
        "ignoreComments": true, // ignora a extensão da linha em comentários
        "ignoreUrls": true, // ignora a extensão da linha em urls
        "ignoreStrings": true, // ignora a extensão da linha em strings
        "ignoreRegExpLiterals": true // ignora a extensão da linha em regex
      }
    ]
  }
}
