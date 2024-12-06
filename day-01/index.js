const fs = require('node:fs');

const data = fs.readFileSync('./input.txt', 'utf8');

const left = [];
const right = [];

data.split('\n').map((line) => {
    const [leftValue, rightValue] = line.trim().split(/\s+/);
    if (leftValue && rightValue) {
        left.push(parseInt(leftValue));
        right.push(parseInt(rightValue));
    }
});

left.sort();
right.sort();

let sum = 0;

for (let i = 0; i < left.length; i++) {
    const diff = left[i] - right[i];
    sum += diff >= 0 ? diff : -diff;
}

console.log(sum);
