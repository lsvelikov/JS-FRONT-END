function evenOrOddSubtraction(arr) {

    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            sumEvenNumbers += arr[i];
        } else {
            sumOddNumbers += arr[i];
        }
    }
    console.log(sumEvenNumbers - sumOddNumbers);
}

evenOrOddSubtraction([1,2,3,4,5,6]);