function solve(input) {
    let list = {};
    for (const line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let group = product[0];
        if (!list.hasOwnProperty(group)) {
            list[group] = { [product]: price };
        } else {
            list[group][product] = price;
        }
    }
    let sortedGroups = Object.keys(list).sort((a, b) => a.localeCompare(b));
    for (const group of sortedGroups) {
        let sortedProducts = Object.keys(list[group]).sort((a, b) => a.toLowerCase().localeCompare(b.toLocaleLowerCase()));
        console.log(group);
        for (const el of sortedProducts) {
            console.log(`  ${el}: ${list[group][el]}`);
        }

    }

}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)