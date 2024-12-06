const fs = require('node:fs');

const input = fs.readFileSync('./input.txt', 'utf8');

let reports = [];

input.split('\n').map((line) => {
    if (line) {
        reports.push(line.trim().split(/\s+/));
    }
});

let safeReports = 0;

for (let i = 0; i < reports.length; i++) {
    const report = reports[i];

    let isIncreasing;

    for (let j = 0; j < report.length; j++) {
        if (j < report.length - 1) {
            const n1 = parseInt(report[j]);
            const n2 = parseInt(report[j + 1]);
            const diff = n1 - n2;

            if (j === 0) {
                isIncreasing = diff < 0;
            }

            if (isIncreasing && (diff > 0 || diff < -3)) {
                break;
            } else if (!isIncreasing && (diff < 0 || diff > 3)) {
                break;
            } else if (diff === 0) {
                break;
            } else {
                continue;
            }

        } else {
            safeReports++;
        }
    }
}

console.log(safeReports)
