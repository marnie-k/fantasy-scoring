//# Fantasy Scoring

//create array for position

let position = [QB, RB, WR, TE]

// top level is an  if...else  
// if position is in position array go to next level
// if not (else) return 0

if position =  "QB"
  // (passing  yards) / 25
  // (passing touchdown) * 6
  // (interception)  * -3
  // (rushing yards) /10
  // (rushing touchdown) * 6
  // (rushing fumble) * -3
  
  if position = "RB"  or "WR" 
  // (rushing yards) /10
  // (rushing touchdown) * 6
  // (rushing fumble) * -3
  // (reception) *  1
  // (receiving yard) / 10
  // (receiving TD) *  6
  // (receiving fumble) * -3
  // (kick return yards) /15
  // (kick return TD) * 6
  // (kick return fumble) * -3
  // (punt return yards) /15
  // (punt return TD) *  6
  // (punt return fumble) * -3

  if position = "TE"
 // (reception) *  1
  // (receiving yard) / 10
  // (receiving TD) *  6
  // (receiving fumble) * -3

//  if one  of  these positions add up points e
// return  sum of points
// else return 0
