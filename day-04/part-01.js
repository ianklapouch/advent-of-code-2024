const fs = require('node:fs');

const input = fs.readFileSync('./input.txt', 'utf8');

const rows = [];

input.split('\n').forEach((line) => {
    if (line) {
        rows.push(line.trim().split(''));
    }
});

let xmasCount = 0;

for (let i = 0; i < rows.length; i++) {
    const columns = rows[i];
    for (let j = 0; j < columns.length; j++) {
        const char = columns[j];

        if (char !== "X") {
            continue;
        }

        //check backward
        if (j - 3 >= 0) {
            if (columns[j - 1] === "M" && columns[j - 2] === "A" && columns[j - 3] === "S") {
                xmasCount++;
            }
        }

        //check forward
        if (j + 3 <= columns.length - 1) {
            if (columns[j + 1] === "M" && columns[j + 2] === "A" && columns[j + 3] === "S") {
                xmasCount++;
            }
        }

        //check up
        if (i - 3 >= 0) {
            if (rows[i - 1][j] === "M" && rows[i - 2][j] === "A" && rows[i - 3][j] === "S") {
                xmasCount++;
            }
        }

        //check down
        if (i + 3 <= rows.length - 1) {
            if (rows[i + 1][j] === "M" && rows[i + 2][j] === "A" && rows[i + 3][j] === "S") {
                xmasCount++;
            }
        }

        //check diagonal top left
        if (j - 3 >= 0 && i - 3 >= 0) {
            if (rows[i - 1][j - 1] === "M" && rows[i - 2][j - 2] === "A" && rows[i - 3][j - 3] === "S") {
                xmasCount++;
            }
        }

        //check diagonal top right
        if (j + 3 <= columns.length - 1 && i - 3 >= 0) {
            if (rows[i - 1][j + 1] === "M" && rows[i - 2][j + 2] === "A" && rows[i - 3][j + 3] === "S") {
                xmasCount++;
            }
        }

        //check diagonal down left
        if (j - 3 >= 0 && i + 3 <= rows.length - 1) {
            if (rows[i + 1][j - 1] === "M" && rows[i + 2][j - 2] === "A" && rows[i + 3][j - 3] === "S") {
                xmasCount++;
            }
        }

        //check diagonal down right
        if (j + 3 <= columns.length - 1 && i + 3 <= rows.length - 1) {
            if (rows[i + 1][j + 1] === "M" && rows[i + 2][j + 2] === "A" && rows[i + 3][j + 3] === "S") {
                xmasCount++;
            }
        }
    }
}

console.log(xmasCount);

