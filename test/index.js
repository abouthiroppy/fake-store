import test from 'ava';
import storeFake from '../';

test('should return object', (t) => {
  const store = storeFake();

  t.truthy(store.hasOwnProperty('default') && typeof store.default === 'function');
  t.truthy(store.hasOwnProperty('dispatch') && typeof store.dispatch === 'function');
  t.truthy(store.hasOwnProperty('getState') && typeof store.getState === 'function', );
  t.truthy(store.hasOwnProperty('subscribe') && typeof store.subscribe === 'function');
  t.deepEqual(store.getState(), {});
});

test('should return state from getState', (t) => {
  const dummy = {
    test1: 1,
    test2: 2
  };
  const store = storeFake(dummy);

  t.deepEqual(store.getState(), dummy);
});

test('should overwrite function', (t) => {
  const dummy = {
    default  : 'default',
    dispatch : 'dispatch',
    getState : 'getState',
    subscribe: () => {}
  };
  const store = storeFake({}, dummy);

  t.deepEqual(store, dummy);
});
