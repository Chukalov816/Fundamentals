function solve(arr) {
    let totalPrice = 0;
    let result = 'Bought furniture:';
    for (const line of arr) {
        if (line === 'Purchase') {
            break;
        }
        let pattern = />>(?<furniture>[a-z]+)<<(?<price>[.\d]+)!(?<quantity>\d+)\b/gi;
        let match = pattern.exec(line);
        if (match != null) {
            result += `\n${match.groups.furniture}`;
            totalPrice += Number(match.groups.price) * Number(match.groups.quantity);
        }

    }result+=`\nTotal money spend: ${totalPrice.toFixed(2)}`;
    return result;



}

console.log(solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]
))