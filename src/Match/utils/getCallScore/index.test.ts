import getCallScore from '.';

describe('getCallScore', () => {
  test('2-2 = 30-30', () => {
    const result = getCallScore(
      { name: 'Eric', pointScore: 2, gameScore: 0 },
      { name: 'Kyle', pointScore: 2, gameScore: 0 },
    );
    expect(result).toEqual('30-30');
  });

  test('3-3 = Deuce', () => {
    const result = getCallScore(
      { name: 'Eric', pointScore: 3, gameScore: 0 },
      { name: 'Kyle', pointScore: 3, gameScore: 0 },
    );
    expect(result).toEqual('Deuce');
  });

  test('7-8 = Advantage Kyle', () => {
    const result = getCallScore(
      { name: 'Eric', pointScore: 7, gameScore: 0 },
      { name: 'Kyle', pointScore: 8, gameScore: 0 },
    );
    expect(result).toEqual('Advantage Kyle');
  });

  test('10-10 = Deuce', () => {
    const result = getCallScore(
      { name: 'Eric', pointScore: 10, gameScore: 0 },
      { name: 'Kyle', pointScore: 10, gameScore: 0 },
    );
    expect(result).toEqual('Deuce');
  });
});
