import TypePlayerData from 'src/types/TypePlayerData';

interface TypePointsToCallMap {
  [points: number]: string;
}
const pointsToCallMap: TypePointsToCallMap = {
  0: '0',
  1: '15',
  2: '30',
  3: '40',
};

const convertPointsToCall = (points: number): string => {
  const pointsCapped = points > 3 ? 3 : points;
  return pointsToCallMap[pointsCapped];
};

// returns the call "15/30/40" for each player
function getCallScore(
  player1: TypePlayerData,
  player2: TypePlayerData,
): string {
  const bothOver30 = player1.pointScore > 2 && player2.pointScore > 2;

  if (bothOver30) {
    const isDeuce = bothOver30 && player1.pointScore === player2.pointScore;
    if (isDeuce) {
      return 'Deuce';
    }
    const advantagePlayerName =
      player1.pointScore > player2.pointScore ? player1.name : player2.name;
    return `Advantage ${advantagePlayerName}`;
  }

  return `${convertPointsToCall(player1.pointScore)}-${convertPointsToCall(
    player2.pointScore,
  )}`;
}

export default getCallScore;
