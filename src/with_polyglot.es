import React, { forwardRef } from 'react';
import { Consumer } from './context';


export default (Component) => (
  forwardRef((props, ref) => (
    <Consumer>
      {(polyglot) => <Component {...props} t={polyglot.t} locale={polyglot.locale} ref={ref} />}
    </Consumer>
  ))
);
