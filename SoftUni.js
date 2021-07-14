function solve(text) {
    let income = 0;
    for (const line of text) {
        if (line === 'end of shift') {
            break;
        }
        let nameRegex = /(?<=%)([A-Z][a-z]+)(?=%)/g;
        let nameMatch = line.match(nameRegex);
        let productRegex = /(?<=<)(\w+)(?=>)/g;
        let productMatch = line.match(productRegex);
        let countRegex = /(?<=\|)\d+(?=\|)/g;
        let countMatch = line.match(countRegex);
        let priceRegex = /[.\d]+(?=\$)/g;
        let priceMatch = line.match(priceRegex);
        if ((nameMatch !== null) && (productMatch !== null) && (countMatch !== null) && (priceMatch !== null)) {

            let totalprice = Number(countMatch[0]) * Number(priceMatch[0]);
            console.log(`${nameMatch}: ${productMatch} - ${totalprice.toFixed(2)}`);
            income += totalprice;
        }
    }console.log(`Total income: ${income.toFixed(2)}`);
}

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])