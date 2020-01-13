Feature: Match
  Scenario Outline: Two players play a game
    When a match begins between <Player1> and <Player2>
    And players score some points in the order <ScoringOrder>
    Then score output should be <ScoreOutput>

    Examples:
      | Player1 | Player2 | ScoringOrder                                                     | ScoreOutput         |
      | Eric    | Kyle    |                                                                  | 0-0                 |
      | Eric    | Kyle    | Eric,Kyle,Kyle,Kyle,Kyle                                         | 0-1                 |
      | Eric    | Kyle    | Eric,Kyle,Kyle,Kyle,Kyle,Kyle                                    | 0-1, 0-15           |
      | Eric    | Kyle    | Eric,Kyle                                                        | 0-0, 15-15          |
      | Eric    | Kyle    | Eric,Eric,Kyle,Kyle                                              | 0-0, 30-30          |
      | Eric    | Kyle    | Eric,Eric,Eric,Kyle,Kyle,Kyle                                    | 0-0, Deuce          |
      | Eric    | Kyle    | Eric,Eric,Eric,Kyle,Kyle,Kyle,Kyle                               | 0-0, Advantage Kyle |
      # Kyle wins on the advantage
      | Eric    | Kyle    | Eric,Eric,Eric,Kyle,Kyle,Kyle,Kyle,Kyle                          | 0-1                 |
      # Eric scores while Kyle is on advantage, bringing them back to deuce
      | Eric    | Kyle    | Eric,Eric,Eric,Kyle,Kyle,Kyle,Kyle,Eric                          | 0-0, Deuce          |
      # Eric and Kyle both fight over the advantage
      | Eric    | Kyle    | Eric,Eric,Eric,Kyle,Kyle,Kyle,Kyle,Eric,Eric,Kyle,Kyle,Eric,Eric | 0-0, Advantage Eric |
      # K scores 6 games
      | E       | K       | K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K                  | K is the winner!    |

  Scenario Outline: Two players battle a tie breaker
    When a match begins between <Player1> and <Player2>
    And players have scored 6 games each
    And players score some points in the order <ScoringOrder>
    Then score output should be <ScoreOutput>

    Examples:
      | Player1 | Player2 | ScoringOrder                                                                         | ScoreOutput         |
      | Eric    | Kyle    |                                                                                      | 6-6                 |
      | Eric    | Kyle    | Eric,Kyle                                                                            | 6-6, 1-1            |
      | Eric    | Kyle    | Eric,Kyle,Kyle,Kyle,Kyle,Kyle,Kyle                                                   | 6-6, 1-6            |
      # No winner as he didn't get 2 points ahead
      | Eric    | Kyle    | Eric,Kyle,Eric,Kyle,Eric,Kyle,Eric,Kyle,Eric,Kyle,Eric,Kyle,Eric,Kyle,Eric,Kyle,Kyle | 6-6, 8-9            |
      | Eric    | Kyle    | Eric,Kyle,Kyle,Kyle,Kyle,Kyle,Kyle,Kyle                                              | Kyle is the winner! |


