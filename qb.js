var player.stats.passing.yards = py
var player.stats.passing.touchdowns = ptd
var player.stats.passing.interceptions = int
var player.stats.rushing.yards = ry
var player.stats.rushing.touchdowns = rtd
var player.stats.rushing.fumbles = rf

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