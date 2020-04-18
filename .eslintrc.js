module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest" : true
  },
  "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:jsdoc/recommended",
      "plugin:vue/essential"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "vue",
      "prettier",
      "jsdoc"
  ],
  "rules": {
      "prettier/prettier": [
          "error",
          {
              "semi": true,
              "trailingComma": "none"
          }
      ]
  }
};