const fs = require('node:fs');

const input = fs.readFileSync('./input.txt', 'utf8');

const grid = input
    .split('\n')
    .filter(Boolean)
    .map(line => line.trim().split(''));

let count = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 'A') {

            const topLeft = grid?.[i - 1]?.[j - 1];
            const topRight = grid?.[i - 1]?.[j + 1];
            const bottomRight = grid?.[i + 1]?.[j + 1];
            const bottomLeft = grid?.[i + 1]?.[j - 1];

            const diagonal1 = topLeft + bottomRight;
            const diagonal2 = topRight + bottomLeft;

            if ((diagonal1 === 'MS' || diagonal1 === 'SM') && (diagonal2 === 'MS' || diagonal2 === 'SM')) {
                count++;
            }
        }
    }
}

console.log(count);

