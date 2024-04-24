function calculator(numOne, numTwo, operator) {
    const operations = {
        multiply: (numOne, numTwo) => numOne * numTwo,
        divide: (numOne, numTwo) => numOne / numTwo,
        add: (numOne, numTwo) => numOne + numTwo,
        subtract: (numOne, numTwo) => numOne - numTwo,
    }

    const operation = operations[operator];
    const result = operation(numOne, numTwo);
    console.log(result);
}

calculator(5, 5, "multiply");