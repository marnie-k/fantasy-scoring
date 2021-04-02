const { expect } = require('chai')
//const describe = require('mocha').describe
//const it = require('mocha').it
const mocha = require('mocha')
mocha.setup
// ?what is this on line 7? Do I have to add to package.json?
const calculateScore = require('./scoring')

// This is the test for QB  
// Write corresponding code in a QB funcion

describe('calculateScore', () => {
  it('returns the score for a quarterback', function () {
    const player = {
      name: 'Patrick Mahomes',
      position: 'QB',
      team: 'Kansas City',
      stats: {
        passing: {
          // nothing noted
          attempts: 25,
          // nothing noted
          completions: 18,
          // 1 point per 25 yds passing -- 363 / 25 = 14.52
          yards: 363,
          // 6 points per passing touchdown -- 3 * 6 = 18
          touchdowns: 3,
          // -3 points per interception
          interceptions: 0
        },
        rushing: { 
          // nothing noted
          attempts: 3, 
          //1 point per 10 yards rushing -- 22 / 10 = 2.2
          yards: 22, 
          //6 points per rushing TD -- 6 * 1 = 6
          touchdowns: 1, 
          // -3 points per rushing fubmle
          fumbles: 0 }
      }
    }

    const score = calculateScore(player)

// Add up  QB scores -- 14.52 + 18 + 2.2 + 6 = 40.72
    expect(score).to.equal(40.72)
  })

    // This is the test for RB  
    //Write corresponding code in a RB funcion
  it('returns the score for a running back', function () {
    const player = {
      name: 'LeSean McCoy',
      position: 'RB',
      team: 'Buffalo',
      stats: {
        rushing: { 
          
          attempts: 18, 
          // 1 pont per 10 yds rushing -- 103 / 10  = 10.3
          yards: 103, 
          // 6 pt per rushing TD -- 2 * 6 = 12
          touchdowns: 2, 
          // -3 pts per rushing fumble -- -3 * 0 = 0
          fumbles: 0 },
// subtotal rushing -- 10.3 + 12 + 0 = 22.3

        receiving: { 
          // 1 pt per reception -- 6 * 1 = 6
          receptions: 6, 
          // 1 pt per 10 yds receiving -- 37 / 10 = 3.7
          yards: 37, 
          // 6 pts per receiving TD -- 6 * 0 = 0
          touchdowns: 0, 
          // -3 pts per receiving fumble -- -3 * 0 = 0
          fumbles: 0 },
// subtotal receiving -- 6 + 3.7 + 0 + 0 = 9.7

        return: {
          kickreturn: { 
            // not noted
            returns: 0, 
             //1 pt per 15 yds kick return -- 15 / 0 = 0

            yards: 0, 
            // 6 pts per kick return TD -- 6 * 0 = 0
            touchdowns: 0, 
            // -3 pts per kick return fumble -- -3 * 0 = 0
            fumbles: 0 },
            // subtotal kickreturn -- 0 + 0 + 0 + 0 = 0

          puntreturn: { 
            // -3 pts per kick return fumble -- 0 * 0 = 0
            returns: 0, 
            // 1 pt per 15 punt return yds -- 1 * 0 = 0
            yards: 0, 
            // 6 pts per punt return touchdown -- 6 * 0 = 0
            touchdowns: 0, 
            // -3 pts per punt return fumble -- -3 * 0 = 0
            fumbles: 0 },

          // subtotal punt return -- 0 + 0 + 0 + 0 = 0
        },
      }
    }
// Add up RB subtotals -- 22.3 + 9.7 + 0 + 0 = 32
    const score = calculateScore(player)

    expect(score).to.equal(32)
  })
    // This is the test for RB  
    //Write corresponding code in a RB funcion

  it('returns the score for a receiver', function () {
    const player = {
      name: 'Tyler Lockett',
      position: 'WR',
      team: 'Seattle',
      stats: {
        rushing: { 
          // nothing noted
          attempts: 0, 
          // 1 pt per 10 yds rushing -- 0 / 1 = 0
          yards: 0, 
          // 6 pts per rushing td -- 6 * 0 = 0
          touchdowns: 0, 
          // -3 pts per rushing fumble -- 0 * -3 = 0
          fumbles: 0 },
        // sub total for rushing -- 0 + 0+ 0 = 0
        
          receiving: { 
            // 1 pt per reception -- 1 * 6  = 6
            receptions: 6, 
            // 1 pt per 10 yds receiving -- 91 / 10 = 9.1
            yards: 91, 
            // 6 pts per receiving TD -- 6 * 1 = 6
            touchdowns: 1, 
            // -3 pts per receiving fumble -- 0 * -3 = 0
            fumbles: 0 },
        // sub total receiving -- 6 + 9.1 + 6 + 0 = 21.1

            return: {
          kickreturn: { 
            // nothing noted
            returns: 2, 
            // 1 pt per 15 kick return yds -- 16 / 15 = 1.1
            yards: 16, 
            // 6 pts per kick return TD -- 6 * 0 = 0
            touchdowns: 0, 
            // -3 pts per kick return fumble -- -3 * 1 = -3
            fumbles: 1 },
          // sub total kick return -- 1.1 + 0 - 3 = -1.9
          
            puntreturn: { 
              // nothing noted
              returns: 3, 
              // 1 point for every 15 punt return yds -- 7.1
              yards: 107, 
              //6 pts per punt return TD -- 1 * 6 = 6
              touchdowns: 1, 
              // -3 pts per punt return fumble -- 0 * -3 = 0
              fumbles: 0 
            // subtotal punt return -- 7.1 + 6 + 0 = 13.1
            },
        },
      }
    }

    const score = calculateScore(player)

// add up WR subtotals -- 0 + 21.1 - 1.9 + 13.1 = 32.3

    expect(score).to.equal(32.3)
  })




  it('returns the score for a tightend', function () {
    const player = {
      name: 'Rob Gronkowski',
      position: 'TE',
      team: 'New England',
      stats: {
        receiving: { 
          // 1 pt per reception -- 8 * 1 = 8
          receptions: 8, 
          // 1 pt per 10 yards receiving -- 137 / 10 = 13.7
          yards: 137, 
          // 6 pts per receiving TD -- 2 * 6 = 12
          touchdowns: 2, 
          // -3 pts per receiving fumble -- 0 * -3 = 0
          fumbles: 0 },
      }
    }

        // add up TE pts -- 8 + 13.7 + 12 + 0 = 33.7

    const score = calculateScore(player)

    expect(score).to.equal(33.7)
  })



  it('returns 0 when position is unknown', () => {
    const player = {
      name: 'Robbie Gould',
      position: 'K',
      team: 'San Francisco',
      stats: {
        fieldgoals: {
          
          attempts: 3, 
          
          made: 2 },
        
        
          xp: { 
            
            attempts: 2, 
            
            made: 2 }
      }
    }

    const score = calculateScore(player)


    // unknown position = 0
    
    expect(score).to.equal(0)
  })
})

