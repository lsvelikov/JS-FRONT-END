function printCatalogue(input) {

    const products = [];

    for (const line of input) {
        const [productName, productPrice] = line.split(' : ');

        const product = { productName, productPrice };

        products.push(product);
    }

    products
        .sort((a, b) => a.productName.localeCompare(b.productName));

    for (let asciiNumber = 65; asciiNumber <= 90; asciiNumber++) {

        let count = 0;
        for (const product of products) {
            
            if (product.productName.startsWith(String.fromCharCode(asciiNumber)) && count === 0) {
                console.log(String.fromCharCode(asciiNumber));
                count++;
            }

            if (product.productName.startsWith(String.fromCharCode(asciiNumber))) {
                console.log(`  ${product.productName}: ${product.productPrice}`);
            }
        }
    }
}

printCatalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

]);