import input from './input';

const bags = input.split('\n') as string[];

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function findPriority(char: string) {
    return priority.indexOf(char) + 1;
}

interface IItems {
    [key: string]: boolean
}

let totalPriority = 0;
for (let i = 0; i < bags.length; i += 3) {
    const b1 = bags[i];
    const b2 = bags[i+1];
    const b3 = bags[i+2];
    const b1Items: IItems = {};
    const b2Items: IItems = {};
    const b3Items: IItems = {};

    for (const item of b1) {
        b1Items[item] = true;
    }
    for (const item of b2) {
        b2Items[item] = true;
    }
    for (const item of b3) {
        b3Items[item] = true;
    }

    for (const item of priority) {
        if (b1Items[item] && b2Items[item] && b3Items[item]) {
            totalPriority += findPriority(item);
        }
    }
}

console.log(totalPriority);