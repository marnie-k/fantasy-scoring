const player = {
    name: 'Patrick Mahomes',
    position: 'QB',
    team: 'Kansas City',
    stats: {
      passing: {
        attempts: 25,
        completions: 18,
        yards: 363,
        touchdowns: 3,
        interceptions: 0
      },
      rushing: { 
        attempts: 3, 
        yards: 22, 
        touchdowns: 1, 
        fumbles: 0 }
    }
  }


var py = player.stats.passing.yards 
var ptd = player.stats.passing.touchdowns
var int = player.stats.passing.interceptions
var ry = player.stats.rushing.yards
var rtd = player.stats.rushing.touchdowns
var rf = player.stats.rushing.fumbles

scoring 
{
    passYards (py / 25);
    passTd (ptd * 6);
    intercept (int * -3);
    rushYards (ry / 10);
    rushTd (rtd * 6);
    rushFumble (rf * -3);
}
total-score (
    passYards +
    passTd +
    intercept +
    rushYards +
    rushTd +
    rushFumble
)


module.exports = scoring