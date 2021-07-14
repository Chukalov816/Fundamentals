function solve(input) {
    let n = Number(input.shift());
    let attackedPlanets = [];
    let defeatedPlanets = [];

    for (let i=0;i<n;i++) {
        let line=input[i];
        let decryptKey = line.match(/[star]/gi)&&line.match(/[star]/gi).length;
        let decrypted = '';
        for (let i = 0; i < line.length; i++) {
            let index = line.charCodeAt(i);
            let newChar = String.fromCharCode(index - decryptKey);
            decrypted += newChar;
        }                   
        let patternPlanet = /@(?<planets>[A-Za-z]+)[^@!:>\-]*:(?<population>\d+)[^@!:>\-]*!(?<attack>[AD])![^@!:>\-]*\->(?<count>\d+)/g;
        let match = patternPlanet.exec(decrypted);
        if (match) {
            if (match.groups.attack === 'A') {
                attackedPlanets.push(match.groups.planets);
            } else {
                defeatedPlanets.push(match.groups.planets);
            }
        }

    } 
    attackedPlanets.sort((x, y) => x.localeCompare(y));
    defeatedPlanets.sort((x, y) => x.localeCompare(y));
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(element => {
        console.log(`-> ${element}`);
    });
    console.log(`Destroyed planets: ${defeatedPlanets.length}`);
    defeatedPlanets.forEach(element => {
        console.log(`-> ${element}`);
    });
}

solve([2,
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    ])