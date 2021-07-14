function solve(input) {
    let runners = {};
    input.shift().split(', ').forEach(name => {
        runners[name] = 0;
    });

    for (const line of input) {
        if (line === 'end of race') {
            break;
        }
        let patternAZ = /[A-Za-z]/g;
        let patternD = /\d/g;
        let matchAZ = line.match(patternAZ).join('');
        let matchD = line.match(patternD).map(Number).reduce((x, y) => x + y);
        if (runners.hasOwnProperty(matchAZ)) {
            runners[matchAZ] += matchD;
        }
    }
    let sortable = Object.keys(runners)
        .sort((a, b) => runners[b] - runners[a])
        .splice(0, 3);

    console.log(`1st place: ${sortable[0]}\n2nd place: ${sortable[1]}\n3rd place: ${sortable[2]}
    `);
}


solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]
)