function calculatePassingScore(){
  const yards = player.stats.passing.yards/25
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * -3
  return yards+touchdowns+interceptions
}
function calculateRushingScore(){
  const yards = player.stats.rushing.yards/10
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3
  return yards+touchdowns+fumbles
}
function calculateReceivingScore(){
  const yards = player.stats.receiving.yards
  const 
}
function calculateReturnScore(){}

function calculateScore(player) {
switch(player.position) {
case 'QB':
return calculatePassingScore()+
calculateRushingScore()

case 'RB':
return calculateRushingScore()+
calculateReceivingScore()+
calculateReturnScore()

case 'WR':
return calculateRushingScore()+
calculateReceivingScore()+
calculateReturnScore()

case 'TE':
return calculateReceivingScore()

default:
return 0}
}
module.exports = calculateScore