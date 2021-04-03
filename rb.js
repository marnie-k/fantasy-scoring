const player = {
    name: 'LeSean McCoy',
    position: 'RB',
    team: 'Buffalo',
    stats: {
      rushing: { 
        attempts: 18, 
        yards: 103, 
        touchdowns: 2, 
        fumbles: 0 },
     
        receiving: { 
        receptions: 6, 
        yards: 37, 
        touchdowns: 0, 
        fumbles: 0 },

      return: {
        kickreturn: { 
          returns: 0, 
          yards: 0, 
          touchdowns: 0, 
          fumbles: 0 },

        puntreturn: { 
          returns: 0, 
          yards: 0, 
          touchdowns: 0, 
          fumbles: 0 },

      },
    }
}

var ry = player.stats.rushing.yards 
var rtd = player.stats.rushing.touchdowns
var rf = player.stats.rushing.fumbles
var rc = player.stats.receiving.receptions
var recy = player.stats.receiving.yards
var rectd = player.stats.receiving.touchdowns
var recf = player.stats.receiving.fumbles
var kry = player.stats.return.kickreturn.yards
var krtd = player.stats.return.kickreturn.touchdowns
var krf = player.stats.return.kickreturn.fumbles
var pry = player.stats.return.puntreturn.yards
var prtd = player.stats.return.puntreturn.touchdowns
var prf = player.stats.return.puntreturn.fumbles

scoring 
{
    rushYards (ry / 10);
    rushTd (rtd * 6);
    rushFumble (rf * -3);
    recept (rc * 1);
    recYards (recy / 10);
    recTd (rectd * 6);
    recFumble (recf * -3);
    krYards (kry / 15);
    krTd (krtd * 6);
    krFumble (krf * -3);
    prYards (pry / 15);
    prTd (prtd * 6);
    prFumble (prf * -3);
}

total-score (
    rushYards +
    rushTd +
    rushFumble +
    recept +
    recYards +
    recTd +
    recFumble +
    krYards +
    krTd +
    krFumble +
    prYards +
    prTd +
    prFumble
)

module.exports = scoring