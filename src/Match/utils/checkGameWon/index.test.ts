import checkGameWon from '.';

describe('checkGameWon', () => {
  describe('Regular game', () => {
    test('4-2 = true', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 4, gameScore: 0 },
        { name: 'Opponent', pointScore: 2, gameScore: 0 },
        false,
      );
      expect(result).toEqual(true);
    });

    test('6-4 = true', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 6, gameScore: 0 },
        { name: 'Opponent', pointScore: 4, gameScore: 0 },
        false,
      );
      expect(result).toEqual(true);
    });

    test('8-7 = false', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 8, gameScore: 0 },
        { name: 'Opponent', pointScore: 7, gameScore: 0 },
        false,
      );
      expect(result).toEqual(false);
    });
  });

  // tie breaker checks
  describe('Tie breaker game', () => {
    test('8-7 = false', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 8, gameScore: 0 },
        { name: 'Opponent', pointScore: 7, gameScore: 0 },
        true,
      );
      expect(result).toEqual(false);
    });

    test('6-4 = false', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 6, gameScore: 0 },
        { name: 'Opponent', pointScore: 4, gameScore: 0 },
        true,
      );
      expect(result).toEqual(false);
    });

    test('6-4 = false', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 6, gameScore: 0 },
        { name: 'Opponent', pointScore: 4, gameScore: 0 },
        true,
      );
      expect(result).toEqual(false);
    });

    test('7-5 = true', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 7, gameScore: 0 },
        { name: 'Opponent', pointScore: 5, gameScore: 0 },
        true,
      );
      expect(result).toEqual(true);
    });

    test('10-9 = false', () => {
      const result = checkGameWon(
        { name: 'Checking player', pointScore: 10, gameScore: 0 },
        { name: 'Opponent', pointScore: 9, gameScore: 0 },
        true,
      );
      expect(result).toEqual(false);
    });
  });
});
