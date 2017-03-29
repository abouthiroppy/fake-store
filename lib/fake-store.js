'use strict';

const fakeStore = (state, overwrittenFn) => {
  return Object.assign({}, {
    default  : () => {},
    dispatch : () => {},
    getState : () => Object.assign({}, state),
    subscribe: () => {}
  }, overwrittenFn);
};

module.exports = fakeStore;
