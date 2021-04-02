var rushingYards = a
var rushingTd = b
var rushingFumble = c
var reception = d
var receivingYards = e
var receivingTd = f
var receivingFumble = g
var kickReturnYards = h
var kickReturnTd = i
var kickReturnFumble = j
var puntReturnYards = k
var puntReturnTd = l
var puntReturnFumble = m

scoring 
{
    rush-yards (a / 10);
    rush-TD (b * 6);
    rush-fumble (c * -3);
    recept (d * 1);
    rec-yards (e / 10);
    rec-TD (f * 6);
    rec-fumble (g * -3);
    kr-yards (h / 15);
    kr-TD (i * 6);
    kr-fumble (j * -3);
    pr-yards (k / 15);
    pr-TD (l * 6);
    pr-fumble (m * -3);
}

total-score (
    rush-yards +
    rush-TD +
    rush-fumble +
    recept +
    rec-yards +
    rec-TD +
    rec-fumble +
    kr-yards +
    kr-TD +
    kr-fumble +
    pr-yards +
    pr-TD +
    pr-fumble
)

    console.log.total-score