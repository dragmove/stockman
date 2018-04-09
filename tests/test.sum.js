import test from 'ava';
import { sum } from '../sum';

/*
 test.before(t => {
 console.log('before test sum');
 });
 */

test('if argument is not Array type, throw TypeError.', t => {
  const errorMessage = '[sum] : array parameter type must be Array.';

  let error = t.throws(() => sum(undefined), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum(null), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum(false), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum(true), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum(''), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum({}), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum(function() {}), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum(new RegExp('^stockman')), TypeError);
  t.is(error.message, errorMessage);

  error = t.throws(() => sum(new RegExp(/^stockman/)), TypeError);
  t.is(error.message, errorMessage);
});

test('if argument Array has no element, return 0.', t => {
  t.is(sum([]), 0);
});

test('if argument Array has elements, return sum', t => {
  t.is(sum([1, 2, 3, 4, 5]), 15);
});


/*
 test.after('cleanup', t => {
 console.log('after test sum');
 });
 */