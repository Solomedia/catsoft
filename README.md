# Catsoft

Ecommerce website connected to magento 2.

## Technologies

- PWA.
- Nextjs.
- Reactjs.
- Typescript.
- Apollo client.
- Emotionjs.

## Features

- Automatic transpilation and bundling (with webpack and babel).
- Hot code reloading.
- Server rendering and indexing of `./pages`.
- Code splitting.
- Modules preloading.
- Static file serving. `./static/` is mapped to `/static/`.
- Responsive.
- SEO friendly.
- Storybook for component's documentation.

## Recomendations

- Use vscode as editor for a good tyscript experience.
- Install prettier on your editor, for vscode you can use: [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- Install tslint on your editor, for vscode you can use: [https://marketplace.visualstudio.com/items?itemName=eg2.tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint).

## Base Folder Structure

```
.
├── README.md
├── components
│   ├── head.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── index.js
├── static
│   └── favicon.ico
└── yarn.lock
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the server, so you can put all your
other static resources like images or compiled CSS in there.

## Install dependencies

### `yarn`

## Available Scripts

In the project directory, you can run:

### `npm run dev` || `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build` || `yarn build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start` || `yarn start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

### `npm run storybook` || `yarn storybook`

Runs the app in storybook
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.
