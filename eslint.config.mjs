import next from "eslint-config-next";
import prettier from "eslint-plugin-prettier";

const eslintConfig = [
  { ignores: ["node_modules/**", ".next/**", "dist/**", "coverage/**"] },
  ...next,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          semi: false,
          tabWidth: 2,
          singleQuote: true,
          printWidth: 80,
          endOfLine: "auto",
          arrowParens: "always",
          plugins: ["prettier-plugin-tailwindcss"],
        },
        { usePrettierrc: false },
      ],
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
    },
  },
];

export default eslintConfig;
