var passYards = py
var passTd = ptd
var intercept = int
var rushYards = ry
var rushTd = rtd
var rushFumble = rf

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