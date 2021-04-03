const player = {
    name: 'Tyler Lockett',
    position: 'WR',
    team: 'Seattle',
    stats: {
      rushing: { 
        attempts: 0, 
        yards: 0, 
        touchdowns: 0, 
        fumbles: 0 },

      receiving: { 
          receptions: 6, 
          yards: 91, 
          touchdowns: 1, 
          fumbles: 0 },

          return: {
        kickreturn: { 
          returns: 2, 
          yards: 16, 
          touchdowns: 0, 
          fumbles: 1 },
        
          puntreturn: { 
            returns: 3, 
            yards: 107, 
            touchdowns: 1, 
            fumbles: 0 
          },
      },
    }
  }


var rushingYards = ry
var rushingTd = rtd
var rushingFumble = rf
var reception = rc
var receivingYards = recy
var receivingTd = rectd
var receivingFumble = recf
var kickReturnYards = kry
var kickReturnTd = krtd
var kickReturnFumble = krf
var puntReturnYards = pry
var puntReturnTd = prtd
var puntReturnFumble = prf

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