var passing_yards = a
var passing_TD = b
var interception = c
var rushing_yards = d
var rushing_TD = e
var rushing_fumble = f

scoring 
{
    passing-yards (a / 25);
    passing-TD (b * 6);
    intercept (c * -3);
    rushing-yards (d / 10);
    rushing-TD (e * 6);
    rushing-fumble (f * -3);
}
total-score (
    passing-yards +
    passing-TD +
    intercept +
    rushing-yards +
    rushing-TD +
    rushing-fumble
)
    console.log.total-score