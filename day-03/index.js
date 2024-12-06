const fs = require('node:fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const intructions = input.match(/mul\(\d+,\d+\)/g)

let sum = 0;

for (let i = 0; i < intructions.length; i++) {
    const instruction = intructions[i];
    const [x, y] = instruction.match(/\d+/g);
    sum += (x * y);
}

console.log(sum);
