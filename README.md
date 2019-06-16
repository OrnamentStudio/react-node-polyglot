# React Node Pyloglot [![Build Status](https://travis-ci.org/OrnamentStudio/react-node-polyglot.svg?branch=master)](https://travis-ci.org/OrnamentStudio/react-node-polyglot)

React component to use [node-polyglot](https://www.npmjs.com/package/node-polyglot)


## Install

```
npm install react-node-polyglot
```

You also need to install peer dependencies by yourself
```
npm install node-polyglot // v2.x.x
npm install react // v16.x.x
npm install prop-types // v15.x.x
```

This module targets Node.js 8 or later and the latest version of Chrome, Firefox, and Safari. If you want support for older browsers use [Babel compiler](https://babeljs.io/).

## Usage

```jsx
const { Provider, withPolyglot, useT, useLocale } = require('react-node-polyglot');


const PolyglotHOC = withPolyglot(({ t, locale }) => {
  // locale object that is passed to provider
  return t('phrase');
});

const PolyglotHook = () => {
  // locale object that is passed to provider
  const locale = useLocale();

  const t = useT();
  return t('phrase');
};

const App = () => (
  <Provider locale={{ dictionary }}>
    <PolyglotHOC />
    <PolyglotHook />
  </Provider>
);
```

## License

MIT © Abylay Keldibek
