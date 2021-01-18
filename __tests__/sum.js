import sum from '../sum';
import substract from '../substract';

/*const sum = require('../sum');*/



/*  FIRST BASIC TEST   */
test('it works', () => {
  const result = sum(1, 2)

  /*
  if (result === 3) {
    throw new error('not three')
  }*/
  expect(result).toBe(3);

  /* Negation could hide an error, or be trickt 
  expect(result).not.toBe(3);*/
})

test('sum two numbers', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
})

test('substract two numbers', () => {
  const result = substract(5, 2);
  expect(result).toBe(3);
})


/*  CODE COVERAGE REPORTING  */

