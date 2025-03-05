# React + Vite

npm create vite@latest my-app -- --template react
cd my-app
npm install
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
};

@tailwind base;
@tailwind components;
@tailwind utilities;

import './index.css'

react aos
react scroll
npm install react-countup
npm install aos --save
npm i react-scroll
npm install react-intersection-observer
npm i react-typed
npm i framer-motion

npm install react-slick slick-carousel

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
