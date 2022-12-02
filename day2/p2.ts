import input from './input';

const game = input.split('\n');

const defaultScoreBonus = {
    X: 1,
    Y: 2,
    Z: 3
}

const winConditions = {
    'A': 'Y' as 'Z',
    'C': 'X' as 'Y',
    'B': 'Z' as 'Y',
};

const lossConditions = {
    'A': 'Z' as 'Z',
    'B': 'X' as 'Y',
    'C': 'Y' as 'Y',
}

const drawConditions = {
    'A': 'X' as 'Z',
    'B': 'Y' as 'Y',
    'C': 'Z' as 'Y',
}

let score = 0;

game.forEach(round => {
    const [ opponent, outcome ] = round.split(' ') as [ 'A' | 'B' | 'C', 'X' | 'Y' | 'Z' ];

    if (outcome === 'X') {
        // lose
        score += defaultScoreBonus[lossConditions[opponent]];
    } else if (outcome === 'Y') {
        // draw
        score += 3 + defaultScoreBonus[drawConditions[opponent]];
    } else {
        // win
        score += 6 + defaultScoreBonus[winConditions[opponent]]
    }
})

console.log(score);