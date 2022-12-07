import input from './input';

let result = 0;
const separate = input.split('');
while (separate.length >= 14) {
    const res = separate.slice(0, 14);
    separate.splice(0, 1);
    const items = new Set();
    res.forEach(item => {
        items.add(item);
    });

    if (items.size === 14) {
        break;
    }

    result++;
}

console.log(result + 14);

