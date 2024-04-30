function store(stock, delivery) {

    const products = {};

    for (let i = 0; i < stock.length; i += 2) {
        const productName = stock[i];
        const quantity = Number(stock[i + 1]);

        products[productName] = quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        const productName = delivery[i];
        const quantity = Number(delivery[i + 1]);

        if (!products[productName]) {
            products[productName] = 0;
        }

        products[productName] += quantity;
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }

}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);