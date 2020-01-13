import TypePlayerData from 'src/types/TypePlayerData';

function checkGameWon(
  checkingPlayer: TypePlayerData,
  opponentPlayer: TypePlayerData,
  tieBreaker: boolean,
): boolean {
  const hasWonTieBreakerGame =
    checkingPlayer.pointScore >= 7 &&
    checkingPlayer.pointScore - 2 >= opponentPlayer.pointScore;
  const hasWonRegularGame =
    checkingPlayer.pointScore > 3 &&
    checkingPlayer.pointScore - 2 >= opponentPlayer.pointScore;
  const hasWonGame = tieBreaker ? hasWonTieBreakerGame : hasWonRegularGame;

  return hasWonGame;
}

export default checkGameWon;
