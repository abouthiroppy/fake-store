'use strict';

const fakeStore = (state) => ({
  default  : () => {},
  dispatch : () => {},
  getState : () => Object.assign({}, state),
  subscribe: () => {}
});

module.exports = fakeStore;
