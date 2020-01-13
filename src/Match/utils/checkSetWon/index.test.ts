import checkSetWon from '.';

describe('checkSetWon', () => {
  test('4-6 = Right', () => {
    const result = checkSetWon(
      { name: 'Left', pointScore: 0, gameScore: 4 },
      { name: 'Right', pointScore: 0, gameScore: 6 },
    );
    expect(result).toEqual('Right');
  });

  test('5-7 = Right', () => {
    const result = checkSetWon(
      { name: 'Left', pointScore: 0, gameScore: 5 },
      { name: 'Right', pointScore: 0, gameScore: 7 },
    );
    expect(result).toEqual('Right');
  });

  test('6-7 = Right', () => {
    const result = checkSetWon(
      { name: 'Left', pointScore: 0, gameScore: 6 },
      { name: 'Right', pointScore: 0, gameScore: 7 },
    );
    expect(result).toEqual('Right');
  });

  test('5-6 = null', () => {
    const result = checkSetWon(
      { name: 'Left', pointScore: 0, gameScore: 5 },
      { name: 'Right', pointScore: 0, gameScore: 6 },
    );
    expect(result).toEqual(null);
  });
});
