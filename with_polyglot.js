const React = require('react');
const { Consumer } = require('./context');

const { forwardRef, createElement: e } = React;


module.exports = (Component) => {
  const proxyComponent = (props, ref) => {
    const children = (polyglot) => e(Component, { ...props, ...polyglot, ref });
    return e(Consumer, null, children);
  };

  return forwardRef(proxyComponent);
};
