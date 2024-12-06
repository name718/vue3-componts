// eslint.config.mjs
import vue from "eslint-plugin-vue";
import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser"; // 引入解析器

export default [
    {
        files: ["**/*.{js,ts,vue}"], // 匹配文件类型
        languageOptions: {
            ecmaVersion: "latest", // ECMAScript 最新版本
            sourceType: "module", // 模块化语法
            parser: parser, // 使用 TypeScript 解析器
            globals: {
                defineProps: "readonly", // 声明 Vue 的全局定义
            },
        },
        plugins: {
            vue, // Vue 插件
            "@typescript-eslint": typescript, // TypeScript 插件
        },
        rules: {
            "vue/html-self-closing": "off",
            "vue/max-attributes-per-line": "off",
            "vue/singleline-html-element-content-newline": "off",
            "vue/multi-word-component-names": "off",
        },
    },
];
