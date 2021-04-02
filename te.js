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

console.log.total_score