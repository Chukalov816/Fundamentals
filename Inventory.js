function solve(arr) {
    let heroes = [];
    for (const line of arr) {
        let [heroName, heroLevel, items] = line.split(' / ');
       let itemArr=items.split(', ').sort((a,b)=>a.localeCompare(b)).join(', ');
    
        let hero={
            name:heroName,
            level:heroLevel,
            items:itemArr
        }
        heroes.push(hero);
      

    } 
    heroes.sort((a,b)=>a.level-b.level);
    for (const line of heroes) {
        console.log(`Hero: ${line.name}\nlevel => ${line.level}\nitems => ${line.items}`);
    }
 
}



solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])
