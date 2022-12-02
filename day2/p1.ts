import input from './input';

const game = input.split('\n');

const defaultScoreBonus = {
    X: 1,
    Y: 2,
    Z: 3
}

const winConditions = {
    'X': 'C',
    'Y': 'A',
    'Z': 'B',
};

const lossConditions = {
    'X': 'B',
    'Y': 'C',
    'Z': 'A',
}

let score = 0;

game.forEach(round => {
    const [ opponent, me ] = round.split(' ') as [ 'A' | 'B' | 'C', 'X' | 'Y' | 'Z' ];

    if (lossConditions[me] === opponent) {
        score += defaultScoreBonus[me];
    } else if (winConditions[me] === opponent) {
        score += defaultScoreBonus[me] + 6;
    } else {
        score += defaultScoreBonus[me] + 3;
    }
})

console.log(score);