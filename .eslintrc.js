module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/recommended",
        "@vue/airbnb",
    ],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "import/prefer-default-export": "off",
        indent: ["error", 4],
        quotes: ["error", "double", { avoidEscape: true }],
        "max-len": ["error", {
            code: 150,
            ignoreTrailingComments: true,
            ignoreStrings: true,
        }],
        "no-param-reassign": [2, { props: false }],
        "vue/html-indent": ["error", 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
