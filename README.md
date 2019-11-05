# Webpack Starter Project

This is my personal Webpack starter setup for using:
- [ES6](https://developer.mozilla.org/fr/docs/Web/JavaScript) compiled through [Babel](https://babeljs.io)
- [Sass](https://sass-lang.com)
- [PostCSS](https://postcss.org)
- [Tailwind CSS](https://tailwindcss.com)

To get started, clone the project and install the dependencies:

```
# Using npm
npm install

# Using Yarn
yarn
```

## Webpack development server
To start up a Webpack Development Server, run the following command:

```
# Using npm
npm run dev

# Using Yarn
yarn dev
```

Webpack Development Server will watch:
- `/src/js/main.js`
- `/src/sass/styles.sass`
- `/tailwind.js`

And rebuild your javascript/stylesheet on every change.

## Production bundle
Specific production configuration is setup in `webpack.prod.js`.

To build a production bundle run:

```
# Using npm
npm run prod

# Using Yarn
yarn prod
```

After that you will have a ready to deploy bundle at `/dist`.

Javascript and CSS files will be minified and stripped from unused elements.

## Additonal info
Make sure to check `postcss.config.js` and `.babelrc` for more information about PostCSS and Babel's configuration.
