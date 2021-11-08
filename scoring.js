const calculateScore = (player) => {
  case 
  (player.position === "QB") {
    return calculateQBScore(player)
  }
  }
  const calculateQBScore = (player) => {
    const score = 
    (player.stats.passing.yards /25) +
    (player.stats.passing.touchdowns * 6) +
    (player.stats.passing.interceptions * -3) +
    (player.stats.rushing.yards / 10 ) +
    (player.stats.rushing.touchdowns * 6) +
    (player.stats.rushing.fumbles * -3) 

  const calculateRBScore = (player) => {
    const score = 
    (player.stats.rushing.yards /10) +
    (player.stats.rushing.touchdowns * 6) +
    (player.stats.rushing.fumbles * -3) +
    (player.stats.receiving.yards / 10 ) +
    (player.stats.receiving.touchdowns * 6) +
    (player.stats.receiving.fumbles * -3) +
    player.stats.receiving.receptions  +
    (player.stats.kickreturn.yards /10) +
    (player.stats.kickreturn.touchdowns * 6) +
    (player.stats.kickreturn.fumbles * -3) +     
  
    const calculateWRScore = (player) => {
      const score = 
      (player.stats.rushing.yards /10) +
      (player.stats.rushing.touchdowns * 6) +
      (player.stats.rushing.fumbles * -3) +
      (player.stats.receiving.yards / 10 ) +
      (player.stats.receiving.touchdowns * 6) +
      (player.stats.receiving.fumbles * -3) +
      player.stats.receiving.receptions  +
      (player.stats.kickreturn.yards /10) +
      (player.stats.kickreturn.touchdowns * 6) +
      (player.stats.kickreturn.fumbles * -3) +     
  
      const calculateTEScore = (player) => {
        const score = 
        (player.stats.receiving.yards / 10 ) +
        (player.stats.receiving.touchdowns * 6) +
        (player.stats.receiving.fumbles * -3) +
        player.stats.receiving.receptions  +
  
  return score
  }
  module.exports = calculateScore
