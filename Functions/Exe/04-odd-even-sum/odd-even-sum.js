function oddAndEvenSum(number) {

    let numberAsString = number.toString();
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    for(let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);
        if(currentNumber % 2 === 0) {
            sumEvenNumbers += currentNumber;
        } else {
            sumOddNumbers += currentNumber;
        }
    }
    console.log(`Odd sum = ${sumOddNumbers}, Even sum = ${sumEvenNumbers}`);
}

oddAndEvenSum(1000435);