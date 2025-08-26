const { greet, nicolle } = require('../app');

test('greets the user by name', () => {
  expect(greet('DevOps')).toBe('Ciao, DevOps!');
});

// Extra messages and error simulation tests
describe("Extra messages and error simulation", () => {
  test("should display extra messages", () => {
    console.log("Messaggio extra 1");
    console.log("Messaggio extra 2");
    expect(true).toBeTruthy();
  });

  test("simulate failure", () => {
    throw new Error("Errore simulato per il test");
  });
});
