/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const React = require('react');
const { render } = require('react-dom');
const {
  Provider,
  withPolyglot,
  useT,
  useLocale,
} = require('../index');

const { createElement: e } = React;


const appLocale = {
  dictionary: {
    hello: 'This section uses: %{name}',
  },
};

const LocaleHOC = withPolyglot(({ t, locale }) => {
  const header = e('h2', null, t('hello', { name: 'HOC' }));
  return e('div', null, header, e('code', null, JSON.stringify(locale)));
});

const LocaleHook = () => {
  const t = useT();
  const locale = useLocale();

  const header = e('h2', null, t('hello', { name: 'Hook' }));
  return e('div', null, header, e('code', null, JSON.stringify(locale)));
};

const App = () => (
  e(Provider, { locale: appLocale }, e('h1', null, 'Node polyglot'), e(LocaleHOC), e(LocaleHook))
);

render(e(App), global.document.getElementById('root'));
