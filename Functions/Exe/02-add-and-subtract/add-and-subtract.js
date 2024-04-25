function addAndSubtract(numOne, numTwo, numThree) {

    let sum = (numOne, numTwo) => {
        return numOne + numTwo;
    }

    let subtract = (sum, lastNumber) => {
        return sum - lastNumber;
    }

    return subtract(sum(numOne, numTwo), numThree);
}

console.log(addAndSubtract(7, 12, 30));