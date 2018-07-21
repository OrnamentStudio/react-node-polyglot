import React from 'react';
import Provider from '../../lib/provider';
import withPolyglot from '../../lib/with_polyglot';


const appLocale = {
  dictionary: {
    hello: 'Halo %{name}',
  },
};

const Child = withPolyglot(({ t, locale }) => (
  <div>
    <h2>{t('hello', { name: 'Achilles' })}</h2>
    {JSON.stringify(locale)}
  </div>
));

const App = () => (
  <article>
    <Provider locale={appLocale}>
      <h1>Node polyglot react</h1>
      <Child />
    </Provider>
  </article>
);

export default App;
