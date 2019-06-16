const React = require('react');
const PropTypes = require('prop-types');
const Polyglot = require('node-polyglot');
const { Provider } = require('./context');

const { createElement: e } = React;


const getAPI = (locale) => {
  const polyglot = new Polyglot();
  polyglot.extend(locale.dictionary);

  return {
    t: (...args) => polyglot.t(...args),
    locale,
  };
};

const PolyglotProvider = (props) => {
  const { locale, ...rest } = props;
  const api = getAPI(locale);

  return e(Provider, { ...rest, value: api });
};

PolyglotProvider.propTypes = {
  locale: PropTypes.shape({
    dictionary: PropTypes.object,
  }).isRequired,
};

module.exports = PolyglotProvider;
