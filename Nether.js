function solve([input]) {
    let deamons = input.split(/\s,\s*/g);
    let list = {};
    for (const line of deamons) {
        let health = line.match(/[^\.+*\-\/\d]/g);
        let healthPower = 0;
        if (health !== null) {
            health.forEach(el => {
                healthPower += el.charCodeAt(0);
            });
        }
        let damage = line.match(/[+\-]?[.\d]+/g);
        let damagePower = 0;
        if (damage !== null) {
            damagePower = damage.map(Number).reduce((a, b) => a + b);
        }
        let multiplier = line.match(/\*/g) && line.match(/\*/g).length;
        let divider = line.match(/\//g) && line.match(/\//g).length;
        if (multiplier !== null) {
            damagePower = damagePower * Math.pow(2, multiplier);
        }
        if (divider !== null) {
            for (let i = 0; i < divider; i++) {
                damagePower = damagePower / 2;
            }
        }
        list[line] = { healthPower, damagePower };

    }
    let sorted = Object.keys(list).sort((a, b) => a.localeCompare(b));
    for (const el of sorted) {
        let healthPoints = list[el].healthPower;
        let damagePoints = list[el].damagePower;
        console.log(`${el} - ${healthPoints} health, ${damagePoints.toFixed(2)} damage `);
    }


}


solve(['M3ph1st0**, Azazel'])