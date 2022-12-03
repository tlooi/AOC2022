import input from './input';

const bags = input.split('\n');

const separatedCompartments = bags.map(val => {
    return [
        val.slice(0, val.length / 2),
        val.slice(val.length / 2, val.length)
    ];
});

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function findPriority(char: string) {
    return priority.indexOf(char) + 1;
}

const result = separatedCompartments.map(compartments => {
    const compartment1Items: { [key: string]: boolean } = {};
    const compartment2Items: { [key: string]: boolean } = {};
    for (const item of compartments[0]) {
        compartment1Items[item] = true;
    }
    for (const item of compartments[1]) {
        compartment2Items[item] = true;
    }


    let bagPriority = 0;
    for (const char of priority) {
        if (compartment1Items[char] && compartment2Items[char]) {
            bagPriority += findPriority(char);
        }
    }
    return bagPriority;
}).reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(result);
