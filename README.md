# React Node Pyloglot
React component to work with [node-polyglot](https://www.npmjs.com/package/node-polyglot)


## Install

```
npm install react-node-polyglot
```

## Example Usage

```jsx
import Provider from 'react-node-polyglot/lib/provider';
import withPolyglot from 'react-node-polyglot/lib/with_polyglot';


const App = () => (
  <Provider locale={{ dictionary }}>
    {withPolyglot(({ t, locale }) => {
      // .. do smth with locale object
      return t('phrase');  
    })}
  </Provider>
);
```

## License

MIT © Abylay Keldibek
