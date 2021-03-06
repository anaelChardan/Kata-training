// Kata: Yatzy18
// The game of Yatzy is a simple dice game. Each player rolls five six-sided dice. They can re-roll some or all of the dice up to three times (including the original roll).
// 
// For example, suppose a players rolls (3,4,5,5,2). They hold (-,-,5,5,-) and re-roll (3,4,-,-,2) to get (5,1,5,5,3). They decide to hold (5,-,5,5,-) and re-roll (-,1,-,-,3). They end up with (5,6,5,5,2).
// 
// The player then places the roll in a category, such as ones, twos, fives, pair, two pairs etc (see below). If the roll is compatible with the category, the player gets a score for the roll according to the rules. If the roll is not compatible with the category, the player scores zero for the roll.
// 
// For example, suppose a player scores (5,6,5,5,2) in the fives category they would score 15 (three fives). The score for that go is then added to their total and the category cannot be used again in the remaining goes for that game. A full game consists of one go for each category. Thus, for their last go in a game, a player must choose their only remaining category.
// 
// Your task is to score a given roll in a given category. You do not have to program the random dice rolling. The game is not played by letting the computer choose the highest scoring category for a given roll.
// 
// Categories and Scoring Rules

import { removeListener } from "process";

// Chance: The player scores the sum of all dice, no matter what they read. For example,
// 
// 1,1,3,3,6 placed on “chance” scores 14 (1+1+3+3+6)
// 4,5,5,6,1 placed on “chance” scores 21 (4+5+5+6+1)


// Yatzy: If all dice have the same number, the player scores 50 points. For example,
// 
// 1,1,1,1,1 placed on “yatzy” scores 50
// 1,1,1,2,1 placed on “yatzy” scores 0


// Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively. For example,
// 
// 1,1,2,4,4 placed on “fours” scores 8 (4+4)
// 2,3,2,5,1 placed on “twos” scores 4 (2+2)
// 3,3,3,4,5 placed on “ones” scores 0


// Pair: The player scores the sum of the two highest matching dice. For example, when placed on “pair”
// 
// 3,3,3,4,4 scores 8 (4+4)
// 1,1,6,2,6 scores 12 (6+6)
// 3,3,3,4,1 scores 6 (3+3)
// 3,3,3,3,1 scores 6 (3+3)


// Two pairs: If there are two pairs of dice with the same number, the player scores the sum of these dice. For example, when placed on “two pairs”
// 
// 1,1,2,3,3 scores 8 (1+1+3+3)
// 1,1,2,3,4 scores 0
// 1,1,2,2,2 scores 6 (1+1+2+2)


// Three of a kind: If there are three dice with the same number, the player scores the sum of these dice. For example, when placed on “three of a kind”
// 
// 3,3,3,4,5 scores 9 (3+3+3)
// 3,3,4,5,6 scores 0
// 3,3,3,3,1 scores 9 (3+3+3)


// Four of a kind: If there are four dice with the same number, the player scores the sum of these dice. For example, when placed on “four of a kind”
// 
// 2,2,2,2,5 scores 8 (2+2+2+2)
// 2,2,2,5,5 scores 0
// 2,2,2,2,2 scores 8 (2+2+2+2)


// Small straight: When placed on “small straight”, if the dice read (1,2,3,4,5), the player scores 15 (the sum of all the dice).
// 
// Large straight: When placed on “large straight”, if the dice read (2,3,4,5,6), the player scores 20 (the sum of all the dice).
// 
// Full house: If the dice are two of a kind and three of a kind, the player scores the sum of all the dice. For example, when placed on “full house”
// 
// 1,1,2,2,2 scores 8 (1+1+2+2+2)
// 2,2,3,3,4 scores 0
// 4,4,4,4,4 scores 0

// Refactoring Kata
// Jon Jagger has designed a refactoring version of this kata. I’ve taken the liberty of putting various language versions of it here on github, or you can do the kata directly in the Cyber-Dojo. See the article “Yahtzee Cyber-Dojo Refactoring” for information about that. While you are doing this refactoring kata, note down all the code smells you see and address
// 
// Simplification & Extension
// If you’re short of time for this kata, one simplification is to have it always return the sum of the dice, or zero. So the implementation just has to work out if the dice match a category or not.
// 
// If you’d like to extend the exercise, try adding a requirement to take a given roll, and return a sorted list of all the categories that give a non-zero score for it. Then you’re half-way to an AI that can play the game for you…
// 
// Additional discussion points for the Retrospective
// How much duplication is there in your solution? In your test code?
// Did you write a list of test cases before you started? How did you decide what order to implement them in?
// If you did this as a refactoring kata, discuss the code smells you identified. Do you have them in your production code?
// Ideas for after the Dojo
// Do this kata again from scratch and tackle the test cases in a different order. Does this affect the design you end up with? Can you take the tests in any order at all?
// 
// If you’d like more practice at choosing test case order, try the Minesweeper Kata, or the Tennis Kata, or Greenfield Gilded Rose. Be sure to make a list of test cases before you start, and be mindful of what order you could best implement them in.
// 
// Contexts to use this Kata
// This Kata is quite easy for TDD beginners since the test cases are more or less enumerated in the problem description. The order to implement them in is not prescribed, though, so you can practice that aspect of TDD.

type Dice = 1|2|3|4|5|6

type Roll = {
    one: Dice
    two: Dice
    three: Dice
    four: Dice
    five: Dice
}

const rollCons = (one: Dice, two: Dice, three: Dice, four: Dice, five: Dice): Roll => {
    return {
        one: one,
        two: two,
        three: three,
        four: four,
        five: five
    }
}

type RollResult = number;

const chance = (roll: Roll): RollResult => {
    return [roll.one, roll.two, roll.three, roll.four, roll.five].reduce((acc, current: Dice) => current + acc, 0)
}

const yatzy = (roll: Roll): RollResult => {
    if (
        [roll.one, roll.two, roll.three, roll.four, roll.five].filter(current => current == roll.one).length == 5
    ) {
        return 50
    }

    return 0
}

const oneToSix = (roll: Roll, number: 'one'|'two'|'three'|'four'|'five'|'six'): RollResult => {
    const numberToValue = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6
    }

    return [roll.one, roll.two, roll.three, roll.four, roll.five]
        .filter(dice => dice === numberToValue[number])
        .reduce((acc, current) => acc + current, 0)
}


describe('Yatzy', () => {
    it('computes the chance category score for roll', () => {
        const roll = rollCons(1, 1, 3, 3, 6)

        expect(chance(roll)).toEqual(14);
    })

    it('Yatzy: If all dice have the same number, the player scores 50 points', () => {
        const roll = rollCons(1, 1, 1, 1, 1)

        expect(yatzy(roll)).toEqual(50)
    })

    it('Yatzy: If all dice does not have the same number, the player scores 0 points', () => {
        const roll = rollCons(1, 1, 1, 2, 1)

        expect(yatzy(roll)).toEqual(0)
    })

    it('Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively for fours', () => {
        //'scores the four against the roll 1,1,2,4,4'
        const roll = rollCons(1,1,2,4,4)

        expect(oneToSix(roll, 'four')).toEqual(8)
    })

    it('Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively for twos', () => {
        //'scores the twos against the roll 2,3,2,5,1'
        const roll = rollCons(2,3,2,5,1)

        expect(oneToSix(roll, 'two')).toEqual(4)
    })

    it('Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively for ones', () => {
        //'scores the ones against the roll 3,3,3,4,5'
        const roll = rollCons(3,3,3,4,5)

        expect(oneToSix(roll, 'one')).toEqual(0)
    })
})