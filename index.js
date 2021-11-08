//# Fantasy Scoring

function passingYds() => {
  (valueOf(stats.passing.yards)) / 25
}
function passingTD() => {
  (valueOf(stats.passing.touochdowns)) * 6
}
function interception() => {
  (valueOf(stats.passing.interceptions)) * -3
}
function rushingYds() => {
  (valueOf(stats.rushing.yards)) / 10
}
function rushingTD() => {
  (valueOf(stats.rushing.touchdowns)) * 6
}
function rushingfumble() => {
  (valueOf(stats.rushing.fumbles)) * -3
}
function receivingYds() => {
  (valueOf(stats.receiving.yards)) / 10
}
function receivingTD() => {
  (valueOf(stats.receiving.touchdowns)) * 6
}
function receivingfumble() => {
  (valueOf(stats.receiving.fumbles)) * 6
}
function kickYds() => {
  (valueOf(stats.kickreturn.yards)) / 15
}
function kickTD() => {
  (valueOf(stats.kickreturn.touchdowns)) * 6
}
function kickFumble() => {
  (valueOf(stats.kickreturn.fumbles)) * -3
}
function puntYds() => {
  (valueOf(stats.puntreturn.yards)) / 15
}
function puntTD() => {
  (valueOf(stats.puntreturn.touchdowns)) * 6
}
function puntFumble() => {
  (valueOf(stats.puntreturn.fumbles)) * -3
}

case : player.position =  "QB" {

}
break;

case : player.position =  "RB" {

}
break;

case player.position =  "WR" {

}
case player.position =  "TE" {

}

//  if one  of  these positions add up points e
// return  sum of points
// else return 0
