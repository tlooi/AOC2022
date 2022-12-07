import input from './input';

let result = 0;
const separate = input.split('');
while (separate.length >= 4) {
    const res = separate.slice(0, 4);
    separate.splice(0, 1);
    const items = new Set();
    res.forEach(item => {
        items.add(item);
    });

    if (items.size === 4) {
        break;
    }

    result++;
}

console.log(result + 4);
