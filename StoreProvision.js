function solve(stock, order) {
    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
        print() {
            console.log(`${this.name} -> ${this.quantity}`);
        }
    }
    let newProducts = order.slice();
    for (let i = 0; i < stock.length; i += 2) {
        let name = stock[i];
        let quantity = Number(stock[i + 1]);
        for (let j = 0; j < order.length; j += 2) {
            if (order[j] === name) {
                quantity += Number(order[j + 1]);
                newProducts.splice(j, 2)
            }
        }
        let product = new Product(name, quantity);
        product.print();

    }
    for (let k = 0; k < newProducts.length; k += 2) {
        let name = newProducts[k];
        let quantity = newProducts[k + 1];
        let product = new Product(name, quantity);
        product.print();
    }
}






solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)