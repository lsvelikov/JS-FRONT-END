function totalPrice(order, quantity) {

    const drinkPrice = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks:2.00,
    };
    const price = drinkPrice[order];
    const totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}

totalPrice("water", 5);