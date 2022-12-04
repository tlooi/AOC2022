import input from './input';

const assignmentRanges = (input.split('\n') as string[]).map(val => val.split(',').map(val => val.split('-').map(val => parseInt(val))));

let result = 0;

assignmentRanges.forEach((ranges) => {
    if ((ranges[0][0] >= ranges[1][0] && ranges[0][0] <= ranges[1][1]) || (ranges[0][1] >= ranges[1][0] && ranges[0][1] <= ranges[1][1])) {
        result++;
    } else if ((ranges[1][0] >= ranges[0][0] && ranges[1][0] <= ranges[0][1]) || (ranges[1][1] >= ranges[0][0] && ranges[1][1] <= ranges[0][1])) {
        result++;
    }
});

console.log(result);

