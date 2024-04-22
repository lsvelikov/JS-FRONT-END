function solve(input) {

    let currentDigit = numberToString[0];
    let areEqual = true;
    let sum = Number(currentDigit);

    for (let i = 1; i < numberToString.length; i++) {
        if (currentDigit !== numberToString[i]) {
            areEqual = false;
        }
        currentDigit = numberToString[i];
        sum += Number(currentDigit);
    }
    console.log(areEqual);
    console.log(sum);
}
solve(123);