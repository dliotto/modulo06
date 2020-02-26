module.exports = {
    "env": {
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-esllint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier" : "error",
        "react/jsx-filename-extension" : [
            "warn",
            {
                extensions: [".jsx", ".js"]
            },
        ],
        "import/prefer-default-export" : "off"
    }
};