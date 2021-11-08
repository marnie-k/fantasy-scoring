function calcPassing(player) {
  const yards = player.stats.passing.yards / 25
  const tds = player.stats.passing.touchdowns * 6
  const intercept = player.stats.passing.interceptions * -3

  return yards + tds + intercept
}
function calcRushing(player) {
  const yards = player.stats.rushing.yards / 10
  const tds = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3

  return yards + tds + fumbles
}
function calcReceiving(player) {
  const yards = player.stats.receiving.yards / 10
  const tds = player.stats.receiving.touchdowns * 6
  const fumbles = player.stats.receiving.fumbles * -3
  const receptions = player.stats.receiving.receptions * 1

  return yards + tds + fumbles + receptions
}
function calcReturns(player) {
  const kickyards = player.stats.return.kickreturn.yards / 10
  const kicktds = player.stats.return.kickreturn.touchdowns * 6
  const kickfumbles = player.stats.return.kickreturn.fumbles * -3
  const puntyards = player.stats.return.puntreturn.yards / 10
  const punttds = player.stats.return.puntreturn.touchdowns * 6
  const puntfumbles = player.stats.return.puntreturn.fumbles * -3

  return kickyards + kickfumbles + kicktds + puntfumbles + punttds + puntyards
}


function calculateScore(player) {
  switch (player.position) {
    case 'QB':
      return calcPassing(player) + calcRushing(player)
    case 'RB':
      return calcRushing(player) + calcReceiving(player) + calcReturns(player)
    case 'WR':
      return calcRushing(player) + calcReceiving(player) + calcReturns(player)
    case 'TE':
      return calcReceiving(player)
    default:
      return 0
  }
}

module.exports = calculateScore
