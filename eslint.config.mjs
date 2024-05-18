import globals from "globals";
import pluginJs from "@eslint/eslint-plugin";

export default [
  { files: ["**/*.js"], parserOptions: { sourceType: "commonjs" }},
  { globals: globals.browser },
  pluginJs.configs.recommended,
];
