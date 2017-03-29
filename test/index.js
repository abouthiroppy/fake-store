import test from 'ava';
import storeFake from '../';

test('should return object', (t) => {
  const store = storeFake();

  t.is(store.hasOwnProperty('default') && typeof store.default === 'function', true);
  t.is(store.hasOwnProperty('dispatch') && typeof store.dispatch === 'function', true);
  t.is(store.hasOwnProperty('getState') && typeof store.getState === 'function', true);
  t.is(store.hasOwnProperty('subscribe') && typeof store.subscribe === 'function', true);
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
