import TypePlayerData from 'src/types/TypePlayerData';

function checkPlayerWon(
  checkingPlayer: TypePlayerData,
  opponentPlayer: TypePlayerData,
): boolean {
  const playerIsPast6And2PointsAhead =
    checkingPlayer.gameScore >= 6 &&
    checkingPlayer.gameScore - 2 >= opponentPlayer.gameScore;
  const playerWonTieBreak =
    checkingPlayer.gameScore === 7 && opponentPlayer.gameScore === 6;
  return playerIsPast6And2PointsAhead || playerWonTieBreak;
}

// returns the call "15/30/40" for each player
function checkSetWon(player1: TypePlayerData, player2: TypePlayerData): string {
  if (checkPlayerWon(player1, player2)) {
    return player1.name;
  }
  if (checkPlayerWon(player2, player1)) {
    return player2.name;
  }
  return null;
}

export default checkSetWon;
