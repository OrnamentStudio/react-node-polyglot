import React, { PureComponent } from 'react';
import Polyglot from 'node-polyglot';
import { Provider } from './context';


class PolyglotProvider extends PureComponent {
  getAPI(locale) {
    const polyglot = new Polyglot();
    polyglot.extend(locale.dictionary);

    return {
      t: (...args) => polyglot.t(...args),
      locale,
    };
  }

  render() {
    const { locale, ...cleanProps } = this.props;
    const api = this.getAPI(locale);

    return <Provider {...cleanProps} value={api} />;
  }
}

export default PolyglotProvider;
