const player = {
    name: 'Rob Gronkowski',
    position: 'TE',
    team: 'New England',
    stats: {
      receiving: { 
        receptions: 8, 
        yards: 137, 
        touchdowns: 2, 
        fumbles: 0 },
    }
  }


var reception = r;
var recYards = ry;
var recTd = rtd;
var recFumble = rf;

scoring 
{
    reception (r * 6);
    recYards (ry / 10);
    recTd (rtd * 6);
    recFumble (rf * -3)
}

total_score (
    reception +
    recYards +
    recTd +
    recFumble 
)

module.exports = scoring