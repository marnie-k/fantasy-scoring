const calculateScore = (player) => {
  switch (player) {
    case "QB" :
      return calculateQBScore()
    case "RB" :
        return calculateRBScore()
    case "WR" :
        return calculateWRScore()
    case "TE" :
        return calculateTEScore()
    default:
      return 0
  
  function calculateQBScore (player) {
    (player.stats.passing.yards / 25) +
    (player.stats.passing.touchdowns * 6) +
    (player.stats.passing.interceptions * -3) +
    (player.stats.rushing.yards / 10) +
    (player.stats.rushing.touchdowns * 6) +
    (player.stats.rushing.fumbles * -3)
  }
  function calculateRBScore (player) {
      (player.stats.rushing.yards / 10) +
      (player.stats.rushing.touchdowns * 6) +
      (player.stats.rushing.fumbles * -3) +
      (player.stats.receiving.yards / 10) +
      (player.stats.receiving.touchdowns * 6) +
      (player.stats.receiving.fumbles * -3) +
      player.stats.receiving.receptions +
      (player.stats.kickreturn.yards / 10) +
      (player.stats.kickreturn.touchdowns * 6) +
      (player.stats.kickreturn.fumbles * -3) 
  }
  
  function calculateWRScore (player) {
          (player.stats.rushing.yards / 10) +
            (player.stats.rushing.touchdowns * 6) +
            (player.stats.rushing.fumbles * -3) +
            (player.stats.receiving.yards / 10) +
            (player.stats.receiving.touchdowns * 6) +
            (player.stats.receiving.fumbles * -3) +
            player.stats.receiving.receptions +
            (player.stats.kickreturn.yards / 10) +
            (player.stats.kickreturn.touchdowns * 6) +
            (player.stats.kickreturn.fumbles * -3) 
  }
  function calculateTEScore(player) {
      (player.stats.receiving.yards / 10) +
        (player.stats.receiving.touchdowns * 6) +
        (player.stats.receiving.fumbles * -3) +
        player.stats.receiving.receptions
    }
      }
    }
    return calculateScore

    module.exports = calculateScore

  