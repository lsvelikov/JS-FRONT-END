function solve(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let result = pricePerKg * weightInKg;
    console.log(`I need $${result.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);