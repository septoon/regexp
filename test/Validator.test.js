import Validator from '../src/js/Validator';

test('valid', () => {
  const received = new Validator();
  received.validateUsername('Name');
  const expected = { name: 'Name' };

  expect(received).toEqual(expected);
});

test('valid 2', () => {
  const received = new Validator();
  received.validateUsername('Name-user');
  const expected = { name: 'Name-user' };

  expect(received).toEqual(expected);
});

test('no valid', () => {
  const received = new Validator();
  const expected = () => received.validateUsername(' Name');

  expect(expected).toThrow();
});

test('no valid 2', () => {
  const received = new Validator();
  const expected = () => received.validateUsername(' Name_user');

  expect(expected).toThrow();
});
