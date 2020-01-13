import TypePlayerData from 'src/types/TypePlayerData';

import getCallScore from './utils/getCallScore';
import checkSetWon from './utils/checkSetWon';
import checkGameWon from './utils/checkGameWon';

const newPlayerData = (playerName: string): TypePlayerData => ({
  name: playerName,
  pointScore: 0,
  gameScore: 0,
});

class Match {
  private player1Data: TypePlayerData;
  private player2Data: TypePlayerData;
  private winner: string;

  public constructor(player1Name: string, player2Name: string) {
    this.player1Data = newPlayerData(player1Name);
    this.player2Data = newPlayerData(player2Name);
  }

  public pointWonBy(playerName: string): void {
    const { player1Data, player2Data, tieBreaker, winner } = this;
    // if we have a winner don't do anything
    if (winner) {
      return;
    }

    // update score
    const scoredPlayerConfig =
      playerName === player1Data.name ? player1Data : player2Data;
    const opponentConfig =
      playerName === player1Data.name ? player2Data : player1Data;
    scoredPlayerConfig.pointScore += 1;

    // --- check if game won ---
    // if score is more than '40' and is minimum 2 ahead of opponent
    const hasWonGame = checkGameWon(
      scoredPlayerConfig,
      opponentConfig,
      tieBreaker,
    );
    if (hasWonGame) {
      // game won, reset
      scoredPlayerConfig.gameScore += 1;
      scoredPlayerConfig.pointScore = 0;
      opponentConfig.pointScore = 0;
    }

    // check if set won
    const newWinner = checkSetWon(player1Data, player2Data);
    if (newWinner) {
      this.winner = newWinner;
    }
  }

  private get tieBreaker(): boolean {
    const { player1Data, player2Data } = this;
    return player1Data.gameScore === 6 && player2Data.gameScore === 6;
  }

  public score(): string {
    const { player1Data, player2Data, tieBreaker, winner } = this;

    if (winner) {
      return `${winner} is the winner!`;
    }

    const gameScore = `${player1Data.gameScore}-${player2Data.gameScore}`;
    // if tie breaker, just use points numbers, otherwise use call
    const pointScore = tieBreaker
      ? `${player1Data.pointScore}-${player2Data.pointScore}`
      : getCallScore(player1Data, player2Data);

    // if points are 0-0 then just return game score
    if (player1Data.pointScore === 0 && player2Data.pointScore === 0) {
      return gameScore;
    }
    // Otherwise return both
    return `${gameScore}, ${pointScore}`;
  }
}

export default Match;
