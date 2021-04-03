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
    console.log.total-score