import input from './input';

const [cratesStr, commands] = input.split('\n\n');
const crates = cratesStr.split('\n');
const numPiles = (crates[0].length + 1) / 4;

const piles: string[][] = [];
for (let i = 0; i < numPiles; i++) {
    piles[i] = [];

    for (let j = 0; j < crates.length - 1; j++) {
        if (crates[j].charAt(4 * i + 1) !== ' ') {
            piles[i].unshift(crates[j].charAt(4 * i + 1));
        }
    }
}

commands.split('\n').forEach(command => {
    let a = command.split(' ');
    let numToMove = parseInt(a[1]);
    let from = parseInt(a[3]) - 1;
    let to = parseInt(a[5]) - 1;
    
    for (let i = 0; i < numToMove; i++) {
        const item = piles[from].pop() as string;
        piles[to].push(item);
    }
});

let result = '';
for (let i = 0; i < piles.length; i++) {
    result += piles[i].pop();
}

console.log(result);
