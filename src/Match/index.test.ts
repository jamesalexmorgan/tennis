import path from 'path';
import { defineFeature, loadFeature } from 'jest-cucumber';

import Match from '.';

const feature = loadFeature(path.join(__dirname, './index.feature'));

const repeat = (times: number, myFunction: () => void): void =>
  Array(times)
    .fill(null)
    .forEach(myFunction);

defineFeature(feature, test => {
  test('Two players play a game', ({ when, then }) => {
    let match: Match;

    when(
      /^a match begins between (.*) and (.*)$/,
      (player1: string, player2: string) => {
        match = new Match(player1, player2);
      },
    );

    when(/^players score some points in the order (.*)$/, scoringOrder => {
      if (scoringOrder) {
        // win a point for each name in the comma separated value 'scoringOrder'
        scoringOrder.split(',').forEach((playerName: string) => {
          match.pointWonBy(playerName);
        });
      }
    });

    then(/^score output should be (.*)$/, scoreOutput => {
      const score = match.score();
      expect(score).toEqual(scoreOutput);
    });
  });

  test('Two players battle a tie breaker', ({ when, then }) => {
    let match: Match;

    when(
      /^a match begins between (.*) and (.*)$/,
      (player1: string, player2: string) => {
        match = new Match(player1, player2);
      },
    );

    when('players have scored 6 games each', () => {
      repeat(6, () => {
        repeat(4, () => match.pointWonBy('Eric'));
        repeat(4, () => match.pointWonBy('Kyle'));
      });
    });

    when(/^players score some points in the order (.*)$/, scoringOrder => {
      if (scoringOrder) {
        // win a point for each name in the comma separated value 'scoringOrder'
        scoringOrder.split(',').forEach((playerName: string) => {
          match.pointWonBy(playerName);
        });
      }
    });

    then(/^score output should be (.*)$/, scoreOutput => {
      const score = match.score();
      expect(score).toEqual(scoreOutput);
    });
  });
});
