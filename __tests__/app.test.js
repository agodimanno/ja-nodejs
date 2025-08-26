const { greet, nicolle } = require('../app');

test('greets the user by name', () => {
  expect(greet('DevOps')).toBe('Ciao, DevOps!');
});

test('cacazione', () => {
  expect(nicolle()).toBe('Cacati addosso!');
});
