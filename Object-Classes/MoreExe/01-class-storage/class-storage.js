class Storage{
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    Product = {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    addProduct(product) {
        if (this.capacity >= product.quantity) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
        } else {
            console.log("Not enough capacity to add the product.");
        }
    }

    getProducts() {
        const productStrings = this.storage.map(product => {
            return JSON.stringify({
                name: product.name,
                price: product.price,
                quantity: product.quantity
            });
        });
        return productStrings.join('\n');
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };

let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };

let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

let storage = new Storage(50);

storage.addProduct(productOne);

storage.addProduct(productTwo);

storage.addProduct(productThree);

console.log(storage.getProducts());

console.log(storage.capacity);

console.log(storage.totalCost);